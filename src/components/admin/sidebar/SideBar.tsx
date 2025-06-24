
import Nav from "react-bootstrap/Nav";
import { FaPeopleRoof, FaUserTie } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
import { AiOutlineLineChart } from "react-icons/ai";
import { TbUserExclamation, } from "react-icons/tb";
import "./side-bar.css"
import { useState } from "react";
import logo from "../../../assets/dwella-logo.png"
import { Link, useLocation } from "@tanstack/react-router";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseSharp, IoNotifications } from "react-icons/io5";


function SideBar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  return (
          <Nav variant="pills" className={`flex-sm-column justify-content-center justify-content-sm-start gap-3 shadow show-sidebar`}>

            <div className={`${isMenuOpen ? "mx-0" : "mx-auto"} d-none d-sm-block d-md-none`}>
              {isMenuOpen ? <IoCloseSharp size={20} onClick={() => setIsMenuOpen(!isMenuOpen)} /> : <CiMenuFries  size={20} onClick={() => setIsMenuOpen(!isMenuOpen)}/>}
            </div>
           
            <a href="#" className={`my-5 fw-bold ${isMenuOpen ? "d-block" : "d-none "} d-md-block fs-2`}>
              <img height={30} src={logo} alt="" />
            </a>

            <Link to="/admin"  className={`text-decoration-none d-flex align-items-center fw-bold gap-2 rounded ${location.pathname.endsWith('/admin') ? 'link-active' : 'link-inactive'}`}>
              <MdDashboard />
              <span className={`${ isMenuOpen ? "d-block" : "d-none"} d-md-block`}>
              Dashboard
              </span>
            </Link>

            <Link to="/admin/resident"  className={`text-decoration-none d-flex align-items-center fw-bold gap-2 rounded ${location.pathname.startsWith('/admin/residents') ? 'link-active' : 'link-inactive'}`}>
              <FaPeopleRoof />
              <span className={`${ isMenuOpen ? "d-block" : "d-none"} d-md-block`}>
              Residents
              </span>
            </Link>

            <Link to="/admin/employees"  className={`text-decoration-none d-flex align-items-center fw-bold gap-2 rounded ${location.pathname.startsWith('/admin/employees') ? 'link-active' : 'link-inactive'}`}>
              <FaUserTie />
              <span className={`${ isMenuOpen ? "d-block" : "d-none"} d-md-block`}>
              Employees
              </span>
            </Link>
            
            <Link to="/admin/financial/records" className={`text-decoration-none d-flex align-items-center fw-bold gap-2 rounded ${location.pathname.startsWith('/admin/financial') ? 'link-active' : 'link-inactive'}`}>
              <AiOutlineLineChart />
              <span className={`${ isMenuOpen ? "d-block" : "d-none"} d-md-block`}>
              Financial
              </span>
            </Link>

            <Link to="/admin/notifications" className={`text-decoration-none d-flex align-items-center fw-bold gap-2 rounded ${location.pathname.startsWith('/admin/notifications') ? 'link-active' : 'link-inactive'}`}>
              <IoNotifications />
              <span className={`${ isMenuOpen ? "d-block" : "d-none"} d-md-block`}>
              Notifications
              </span>
            </Link>

            <Link to="/admin/unpaid-accounts" className={`text-decoration-none d-flex align-items-center fw-bold gap-2 rounded ${location.pathname.startsWith('/admin/unpaid-accounts') ? 'link-active' : 'link-inactive'}`}>
              <TbUserExclamation />
              <span className={`${ isMenuOpen ? "d-block" : "d-none"} d-md-block text-nowrap`}>
              Unpaid Accounts
              </span>
            </Link>

          </Nav>
  );
}

export default SideBar;
