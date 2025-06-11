
import Nav from "react-bootstrap/Nav";

import Tab from "react-bootstrap/Tab";
import img from "../assets/_ 1.png"

import { FaCircleInfo } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
import { Container, Image } from "react-bootstrap";
import "./side-bar.css"

function SideBar() {
  return (
    <aside className="vh-100 d-flex overflow-hidden">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <div className="shadow" id="side-bar">
        <Nav variant="pills" className="flex-column">
            <h3 className="text-center mt-5 mb-5">Logo Here</h3>
            <Nav.Item>
              <Nav.Link eventKey="first" className='d-flex align-items-center gap-3'>
                <MdDashboard />
                <span className="navs-links">Dashboard</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second" className='d-flex align-items-center gap-3'>
                <FaCircleInfo /> 
                <span className="navs-links">Notices</span>
            </Nav.Link>
            </Nav.Item>
        </Nav>
      </div>
      <div className="w-100">
          <Tab.Content>
            <Tab.Pane eventKey="first">
                <Container className="d-flex justify-content-between align-items-center mt-5 flex-column flex-sm-row">
                    <section className="d-flex gap-3 ms-sm-5 order-1 order-sm-0 my-2">
                        <a href="" className="text-decoration-none bg-secondary text-light p-3 rounded">Contact</a>
                        <a href="" className="text-decoration-none bg-primary text-light p-3 rounded">Pay now</a>
                    </section>
                    <section className="d-flex gap-2 me-5 my-2">
                        <Image src={img} alt="" style={{borderRadius: "100%", height: "50px"}}/>
                        <div className="d-flex flex-column">
                            <a className="fw-bold">Trexy</a>
                            <a>President</a>
                        </div>
                    </section>
                </Container>
            </Tab.Pane>
            <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
          </Tab.Content>
      </div>
      </Tab.Container>
    </aside>
  );
}

export default SideBar;
