import { IoIosAddCircle } from "react-icons/io";
import { RxDashboard } from "react-icons/rx";
import { AiOutlineUser } from "react-icons/ai";

const AdminLinks = [
  {
    id: 2,
    text: "Create Report",
    path: "createUser",
    icon: <IoIosAddCircle />,
  },
  {
    id: 3,
    text: "Profile",
    path: "/admin/AdminProfile",
    icon: <AiOutlineUser />,
  },
];

export default AdminLinks;
