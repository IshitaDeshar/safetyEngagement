const nodemailer = require("nodemailer");

const Email = (options) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER,
      pass: process.env.PASSWORD,
    },
  });
  transporter.sendMail(options, (err, info) => {
    if (err) {
      console.log(err);
      return;
    }
  });
};

//send email
const EmailSender = ({
  typeofIncident,
  actDescription,
  reportedDateTime,
  location,
  reportedBy,
  severityCondition,
  status,
  photo,
}) => {
  const options = {
    from: `Safety Engagement <${process.env.USER}>`,
    to: process.env.SENT_TO,
    subject: "Message from Safety Engagement",
    html: `
            <div style="padding:10px;border-style:ridge">
    <p>You have a new contact request.<p>
    <h3>Contact Details</h3>
    <ul>
    <li>Type of Incident: ${req.body.typeofIncident}<li>
    <li>actDescription: ${req.body.actDescription}<li>
    <li>reportedDateTime: ${req.body.reportedDateTime}<li>
    <li>location: ${req.body.location}<li>
    <li>reportedBy: ${req.body.reportedBy}<li>
    <li>severityCondition: ${req.body.severityCondition}<li>
    <li>status: ${req.body.status}<li>
    <li>photo: ${req.body.photo}<li>
    <ul>
</div>
            `,
  };
  Email(options);
};
// export default EmailSender;
module.exports = EmailSender;
