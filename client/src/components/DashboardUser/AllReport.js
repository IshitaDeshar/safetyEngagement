import React, { useEffect, useState } from "react";
import axios from "axios";
import Reports from "./Reports";

const URL = "http://localhost:5000/api/reports";
const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const AllReport = () => {
  const [reports, setReports] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setReports(data.reports));
  }, []);
  console.log(reports);
  return (
    <div className="allReport">
      <ul className="allReportul">
        {reports &&
          reports.map((report, i) => (
            <li clsaaName="allReportli" key={i}>
              <Reports report={report} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default AllReport;
