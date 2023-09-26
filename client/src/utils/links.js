import { IoBarChartSharp, ToBarChartSharp } from "react-icons/io5";
import { IoIosAddCircle } from "react-icons/io";
import { RxDashboard } from "react-icons/rx";
import { TbReportSearch } from "react-icons/tb";
import { RiUserSearchLine } from "react-icons/ri";
import { AiFillSetting } from "react-icons/ai";

const links = [
  { id: 1, text: "Dashboard", path: "/private", icon: <RxDashboard /> },
  {
    id: 2,
    text: "Create Report",
    path: "addReport",
    icon: <IoIosAddCircle />,
  },
  { id: 3, text: "All Reports", path: "allReport", icon: <TbReportSearch /> },
  // {
  //   id: 4,
  //   text: "My Engagement",
  //   path: "myEngagement",
  //   icon: <RiUserSearchLine />,
  // },
  { id: 5, text: "Setting", path: "setting", icon: <AiFillSetting /> },
  {
    id: 6,
    text: "",
    path: "/private/individualReport",
  },
];

export default links;
