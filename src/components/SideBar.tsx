
import Nav from "react-bootstrap/Nav";

import Tab from "react-bootstrap/Tab";

import { FaCircleInfo } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
import { AiOutlineLineChart } from "react-icons/ai";
import { RiMenu5Fill } from "react-icons/ri";
import { TbUserQuestion } from "react-icons/tb";
import "./side-bar.css"
import { useState } from "react";
import logo from "../assets/dwella-logo.png"
import Dashboard from "../pages/resident/Dashboard";

function SideBar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);


  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <div className="d-flex vh-100 overflow-hidden">
          <Nav variant="pills" className="flex-column gap-3 shadow show-sidebar">

            <div className={`show-sidebar-menu ${isMenuOpen ? "text-start":"text-center"} d-block d-md-none`}>
              <RiMenu5Fill onClick={() => setIsMenuOpen(!isMenuOpen)}/>
            </div>

            <a href="#" className={`my-5 fw-bold ${isMenuOpen ? "d-block" : "d-none "} d-md-block fs-2`}>
              <img height={30} src={logo} alt="" />
            </a>

            <Nav.Item className="w-100">
              <Nav.Link eventKey="first" className="d-flex align-items-center justify-content-start gap-2">
                <MdDashboard />
                <span className={`${ isMenuOpen ? "d-block" : "d-none"} d-md-block`}>
                 Dashboard
                </span>
              </Nav.Link>
            </Nav.Item>
            
            <Nav.Item className="w-100">
              <Nav.Link eventKey="second" className="d-flex align-items-center justify-content-start gap-2">
                <AiOutlineLineChart />
                <span className={`${ isMenuOpen ? "d-block" : "d-none"} d-md-block`}>
                 Financial
                </span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="w-100">
              <Nav.Link eventKey="third" className="d-flex align-items-center justify-content-start gap-2">
                <FaCircleInfo />
                <span className={`${ isMenuOpen ? "d-block" : "d-none"} d-md-block`}>
                 Notices
                </span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="w-100">
              <Nav.Link eventKey="fourth" className="d-flex align-items-center justify-content-start gap-2">
                <TbUserQuestion />
                <span className={`${ isMenuOpen ? "d-block" : "d-none"} d-md-block`}>
                 Inquiries
                </span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content className="flex-grow-1">
            <Tab.Pane eventKey="first"><Dashboard/></Tab.Pane>
            <Tab.Pane eventKey="second">Financials</Tab.Pane>
            <Tab.Pane eventKey="third">Notices</Tab.Pane>
            <Tab.Pane eventKey="fourth">Inquiries</Tab.Pane>
          </Tab.Content>
        </div>
    </Tab.Container>
  );
}

export default SideBar;
