// Import necessary modules and dependencies
const Report = require("../models/Reports");
const Execution = require("../models/Execution");
const { StatusCodes } = require("http-status-codes");
const moment = require("moment");
const multer = require("multer");
const sgMail = require("@sendgrid/mail");

// Set the SendGrid API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "image");
//   },
//   filename: function (req, file, cb) {
//     cb(null, uuidv4() + "-" + Date.now() + Path2D.extname(file.originalname));
//   },
// });

// const fileFilter = (req, file, cb) => {
//   const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
//   if (allowedFileTypes.includes(file.minetype)) {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };

// let upload = multer({ storage, fileFilter });

// function for creating a new report

// Create a Multer storage engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

// Create a Multer instance with the storage engine and limits
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5, // 5 MB
  },
});
exports.createReport = async (req, res, props) => {
  // console.log(req, 21);
  // const { _id } = req.params;
  console.log("hiii");

  const {
    typeofIncident,
    actDescription,
    reportedDateTime,
    location,
    reportedBy,
    severityCondition,
    status,
    photo,
  } = req.body;

  // Get the file path of the uploaded photo

  if (
    !typeofIncident ||
    !actDescription ||
    !reportedDateTime ||
    !location ||
    !reportedBy ||
    !severityCondition ||
    !status ||
    !photo
  ) {
    // throw new BadRequestError("Please provide all values");
  }
  // req.body.createdBy = req.user.userId;
  const report = await Report.create(req.body);
  res.status(StatusCodes.CREATED).json({ report });

  const reportMail = {
    to: "deshar11.ishita@gmail.com",
    from: "ishita.deshar@gmail.com",
    subject: "New Incident Reported",
    html: `
    <div style="width:100%; height: 100%; background-color:white; padding:6rem 0">
    <div style="max-width:850px; height:90rem; background-color:#EBF4EF; margin:0 auto">
        <div style="width:100%;height:10rem; background-color:#114729; padding:27px 0">
           
            <p style="font-size: 1rem; color: white;text-align: center;">${typeofIncident} reported by ${reportedBy} on ${reportedDateTime}</p>
            <div style="text-align:center;">
            <img src="https://imgur.com/a/YXo9OLa" alt="" style="width: 100px; height: auto; margin-top: 10px;">
            <a href="http://localhost:3000/private/viewReportEmail/${report._id}">
            <button style="width: 12rem;margin: 1rem; height: 2.5rem; border-radius: 2rem; background-color: transparent;border: 1px solid white; color: white; font-size: 0.8rem;letter-spacing: 0.2rem;" >View Full Report</button>

                </a>
            </div>
        </div>
        <div style="max-width:600px; background-color:white; margin:3rem auto; letter-spacing:0.1rem">
            <div style="width:100%; gap:10px; padding:30px 0; display:grid">
                <p style="font-weight:600; font-size:2rem;padding:0rem 0rem; text-align: center;">${typeofIncident}</p>
                <div style="font-size:1rem; margin:1rem 6rem;padding-bottom: 1rem;line-height: 1.5;"">
                
                <div style="margin-bottom: 2.3rem;">
                <label  style=" font-weight: 600;font-size:1.1rem">
                 Type of Incident
                </label>
                <p style="margin-top: 0.8rem;">${typeofIncident}</p>
              </div>
            <div style="margin-bottom: 2.3rem;">
                <label  style=" font-weight: 600;font-size:1.1rem">
                    Act Description
                </label>
                <p  style="margin-top: 0.8rem;"> ${actDescription}</p>
              </div>
            <div style="margin-bottom: 2.3rem;">
                <label  style=" font-weight: 600;font-size:1.1rem">
                    Reported Date and Time
                </label>
                <p  style="margin-top: 0.8rem;"> ${reportedDateTime}</p>
                </div>
            <div style="margin-bottom: 2.3rem;">
                <label  style=" font-weight: 600;font-size:1.1rem">
                    Location
                </label>
                <p  style="margin-top: 0.8rem;"> ${location}</p>
              </div>
            <div style="margin-bottom: 2.3rem;">
                <label  style=" font-weight: 600;font-size:1.1rem">
                    Reported By
                </label>
                <p  style="margin-top: 0.8rem;"> ${reportedBy}</p>
              </div>
            <div style="margin-bottom: 2.3rem;">
                <label  style=" font-weight: 600;font-size:1.1rem">
                    Severity Condition
                </label>
                <p  style="margin-top: 0.8rem;">${severityCondition}</p>
              </div>
            <div style="margin-bottom: 2.3rem;">
                <label  style=" font-weight: 600;font-size:1.1rem">
                    Status
                </label>
                <p  style="margin-top: 0.8rem;">${status}</p>
                </div>
            <div style="margin-bottom: 2.3rem;">
                <label  style=" font-weight: 600;font-size:1.1rem">
                    Photo
                </label>
                <p  style="margin-top: 0.8rem;"></p>
              </div>
                </div>
            </div>
            <div style="text-align:center;">
            <a href="http://localhost:3000/private/viewReportEmail/${report._id}">

            <button style="width: 13.5rem;height: 3rem;margin: 1rem; border-radius: 2rem; background-color: #114729;border: 1px solid white; color: white; font-size: 0.8rem;letter-spacing: 0.2rem;" >View Full Report <i class="fa-solid fa-arrow-right"></i></button>
            </a>
  
        </div>
        
        </div>

    </div>
</div>
    `,
  };

  sgMail
    .send(reportMail)
    .then((response) => console.log("email sent"))
    .catch((error) => console.log(error.message));
};

exports.getById = async (req, res, next) => {
  const id = req.params.id;
  let report;
  let execution;
  try {
    report = await Report.findById(id);
    execution = await Execution.findOne({ ReportId: id });
    // report.execution = execution;
  } catch (err) {
    console.log(err);
  }
  if (!report) {
    return res.status(404).json({ message: "No reports found" });
  }
  return res.status(200).json({ report, execution });
};

exports.getAllReports = async (req, res) => {
  let reports;
  try {
    reports = await Report.find({});
  } catch (err) {
    console.log(err);
  }

  if (!reports) {
    return res.status(404).json({ message: "no reports fornd" });
  }
  return res.status(200).json({ reports });
};

exports.updateReport = async (req, res, next) => {
  const id = req.params.id;
  const {
    typeofIncident,
    actDescription,
    reportedDateTime,
    location,
    reportedBy,
    severityCondition,
    status,
    image,
  } = req.body;

  let report;
  try {
    report = await Report.findByIdAndUpdate(id, {
      typeofIncident,
      actDescription,
      reportedDateTime,
      location,
      reportedBy,
      severityCondition,
      status,
      image,
    });
    report = await report.save();
  } catch (err) {
    console.log(err);
  }
  if (!report) {
    return res.status(404).json({ message: "Unable to update by this id" });
  }
  return res.status(200).json({ report });
};

exports.deleteReport = async (req, res, next) => {
  const id = req.params.id;
  let report;
  try {
    report = await Report.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
  if (!report) {
    return res.status(404).json({ message: "Unable to delet by this id" });
  }
  return res.status(200).json({ message: "Reports Sucessfully deleated" });
};

exports.individualReport = async (req, res, next) => {
  try {
    console.log(req.params);
    const { id } = req.params;
    const reportIndividual = await Report.findById({ _id: id });
    console.log(reportIndividual);
    res.status(201).json(reportIndividual);
  } catch (error) {
    res.status(404).json(error);
  }
};

exports.showStats = async (req, res) => {
  try {
    let stats = await Report.aggregate([
      { $group: { _id: "$typeofIncident", count: { $sum: 1 } } },
    ]);
    stats = stats.reduce((acc, curr) => {
      const { _id: title, count } = curr;
      acc[title] = count;
      return acc;
    }, {});

    const defaultStats = {
      UnsafeCondition: stats.UnsafeCondition || 0,
      UnsafeAct: stats.UnsafeAct || 0,
      Environmental: stats.Environmental || 0,
    };

    let monthlyApplications = await Report.aggregate([
      {
        $group: {
          _id: {
            year: { $year: "$createdAt" },
            month: { $month: "$createdAt" },
          },
          count: { $sum: 1 },
        },
      },
      { $sort: { "_id.year": -1, "_id.month": -1 } },
      { $limit: 6 },
    ]);
    monthlyApplications = monthlyApplications
      .map((item) => {
        const {
          _id: { year, month },
          count,
        } = item;
        const date = moment()
          .month(month - 1)
          .year(year)
          .format("MMM Y");
        return { date, count };
      })
      .reverse();
    res.status(StatusCodes.OK).json({ defaultStats, monthlyApplications });
  } catch (error) {
    console.error(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" });
  }
};

// exports.assignResponsibility = async (req, res) => {
//   const { email, message } = req.body;
//   const report = await Report.create(req.body);
//   res.status(StatusCodes.CREATED).json({ report });
//   const msg = {
//     to: email,
//     from: "ishita.deshar@gmail.com", // replace with your own email address
//     subject: "Task Assigned",
//     html: `<p>You have been assigned a task with ID ${report._id}:</p><p>${message}</p>`,
//   };

//   try {
//     await sgMail.send(msg);
//     res.status(200).json({ message: "Email sent successfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Failed to send email" });
//   }
// };

exports.getAllReportsSearch = async (req, res) => {
  const { typeofIncident, search, sort } = req.query;
  const queryObject = { createdBy: req.user.id };

  //add stuff based on condition
  if (typeofIncident !== "all") {
    queryObject.typeofIncident = typeofIncident;
  }

  //No await
  let result = Report.find(queryObject);

  //chain sort conditions
  if (sort === "latest") {
    result = result.sort("-createdAt");
  }
  if (sort === "oldest") {
    result = result.sort("createdAt");
  }

  let reports;
  try {
    reports = await result;
  } catch (err) {
    console.log(err);
  }

  const totalReports = await Report.countDocuments(queryObject);
  const numOfPages = Math.ceil(totalReports / limit);

  if (!reports) {
    return res.status(404).json({ message: "no reports fornd" });
  }
  return res.status(200).json({ reports, totalReports, numOfPages });
};

// exports.getAllReportsSearch = async (req, res) => {
//   const { typeofIncident } = req.query;
//   const queryObject = { typeofIncident };

//   const reports = await Report.find(queryObject);

//   if (!reports) {
//     return res.status(404).json({ message: "no reports fornd" });
//   }
//   return res.status(200).json({ reports, totalReports, numOfPages });
// };
