
import Nav from "react-bootstrap/Nav";
import { FaCircleInfo } from "react-icons/fa6";
import { MdDashboard, MdMenuOpen } from "react-icons/md";
import { AiOutlineLineChart } from "react-icons/ai";
import { RiMenu5Fill } from "react-icons/ri";
import { TbUserQuestion } from "react-icons/tb";
import "./side-bar.css"
import { useState } from "react";
import logo from "../../../assets/dwella-logo.png"
import { Link, useLocation } from "@tanstack/react-router";


function SideBar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  

  return (
      
          <Nav variant="pills" className={`flex-sm-column justify-content-center justify-content-sm-start gap-3 shadow show-sidebar`}>
           

            <a href="#" className={`my-5 fw-bold ${isMenuOpen ? "d-block" : "d-none "} d-md-block fs-2`}>
              <img height={30} src={logo} alt="" />
            </a>

            <Link to="/resident/dashboard"  className={`text-decoration-none d-flex align-items-center fw-bold gap-2 rounded ${location.pathname.startsWith('/resident/dashboard') ? 'link-active' : 'link-inactive'}`}>
              <MdDashboard />
              <span className={`${ isMenuOpen ? "d-block" : "d-none"} d-md-block`}>
              Dashboard
              </span>
            </Link>
            
            <Link to="/resident/financial" className={`text-decoration-none d-flex align-items-center fw-bold gap-2 rounded ${location.pathname.startsWith('/resident/financial') ? 'link-active' : 'link-inactive'}`}>
              <AiOutlineLineChart />
              <span className={`${ isMenuOpen ? "d-block" : "d-none"} d-md-block`}>
              Financial
              </span>
            </Link>

            <Link to="/resident/notices" className={`text-decoration-none d-flex align-items-center fw-bold gap-2 rounded ${location.pathname.startsWith('/resident/notices') ? 'link-active' : 'link-inactive'}`}>
              <FaCircleInfo />
              <span className={`${ isMenuOpen ? "d-block" : "d-none"} d-md-block`}>
                Notices
              </span>
            </Link>
            <Link to="/resident/inquiries" className={`text-decoration-none d-flex align-items-center fw-bold gap-2 rounded ${location.pathname.startsWith('/resident/inquiries') ? 'link-active' : 'link-inactive'}`}>
              <TbUserQuestion />
              <span className={`${ isMenuOpen ? "d-block" : "d-none"} d-md-block`}>
                Inquiries
              </span>
            </Link>
          </Nav>
  );
}

export default SideBar;
