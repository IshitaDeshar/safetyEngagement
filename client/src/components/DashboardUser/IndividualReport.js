// import React from "react";
// import { NavLink, useParams } from "react-router-dom";
// import Wrapper from "../../wrappers/IndividualReport";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import ReportDetails from "./ReportDetails";

// const URL = "http://localhost:5000/api/reports";
// const fetchHandler = async () => {
//   return await axios.get(URL).then((res) => res.data);
// };
// const EXECUTION_URL = "http://localhost:5000/api/execution";

// // const EXECUTION_URL = "http://localhost:5000/api/execution";
// // const fetchExecutionHandler = async () => {
// //   return await axios.get(EXECUTION_URL).then((res) => res.data);
// // };

// const IndividualReport = (props) => {
//   // const reportId = props.match.params.id;
//   const { id } = useParams("");
//   console.log(id);

//   const [report, setReport] = useState();

//   useEffect(() => {
//     fetchHandler().then((data) => {
//       const report = data.reports.find((r) => r._id === id);
//       setReport(report);
//     });
//   }, [id]);

//   // const [executionData, setExecutionData] = useState();
//   // useEffect(() => {
//   //   fetchExecutionHandler().then((data) => {
//   //     const execution = data.executions.find((r) => r._id === id);
//   //     setExecutionData(execution);
//   //   });
//   // }, [id]);

//   return (
//     <Wrapper>
//       <div>
//         <h3>Individual Report</h3>
//         <NavLink to="/private/allReport">
//           <button className="IndividualBackBtn">
//             Back <i class="fa-solid fa-angle-left"></i>
//           </button>
//         </NavLink>
//         {/* <button className="IndividualBackBtn">
//           Back <i class="fa-solid fa-angle-left"></i>
//         </button> */}
//         <hr />
//         {report ? <ReportDetails report={report} /> : <p>Loading report...</p>}
//         {/* <h2>Report #{reportId}</h2> */}
//         {/* <p>{typeofIncident}</p>
//         <p>{actDescription}</p>
//         <p>{reportedBy}</p> */}
//       </div>
//     </Wrapper>
//   );
// };

// export default IndividualReport;

import React from "react";
import { NavLink, useParams } from "react-router-dom";
import Wrapper from "../../wrappers/IndividualReport";
import axios from "axios";
import { useEffect, useState } from "react";
import ReportDetails from "./ReportDetails";
import ExecutionDetails from "./ExecutionDetails";

const REPORT_URL = "http://localhost:5000/api/reports";
const EXECUTION_URL = "http://localhost:5000/api/executions";

const IndividualReport = (props) => {
  const { id } = useParams();
  const [report, setReport] = useState();
  const [execution, setExecution] = useState();

  useEffect(() => {
    // Fetch report data
    axios
      .get(`${REPORT_URL}/${id}`)
      .then((res) => {
        setReport(res.data.report);
        console.log(res.data.execution);
        setExecution(res.data.execution);
      })
      .catch((err) => {
        console.log(err);
      });

    // Fetch execution data
    // axios
    //   .get(`${EXECUTION_URL}/${id}`)
    //   .then((res) => {
    //     setExecution(res.data.execution);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, [id]);

  return (
    <Wrapper>
      <div>
        <h3>Individual Report</h3>
        <NavLink to="/private/allReport">
          <button className="IndividualBackBtn">
            Back <i class="fa-solid fa-angle-left"></i>
          </button>
        </NavLink>
        <hr />
        {report ? <ReportDetails report={report} /> : <p>Loading report...</p>}

        <ExecutionDetails execution={execution} />

        {/* {execution ? (
          <div>
            <h4>Execution details:</h4>
            <p>{execution.executionMessage}</p>
            <p>{execution.incidentCloseDate}</p>
          </div>
        ) : (
          <p>Loading execution details...</p>
        )} */}
      </div>
    </Wrapper>
  );
};

export default IndividualReport;
