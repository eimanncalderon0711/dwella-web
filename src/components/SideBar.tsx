
import Nav from "react-bootstrap/Nav";

import Tab from "react-bootstrap/Tab";

import { FaCircleInfo } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
import { AiOutlineLineChart } from "react-icons/ai";
import { CiMenuFries } from "react-icons/ci";
import { TbUserQuestion } from "react-icons/tb";
import "./side-bar.css"
import { useState } from "react";

function SideBar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);


  return (
    <aside className="vh-100 vw-100 d-flex overflow-hidden">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <div className={`shadow side-bar ${isMenuOpen ? "side-active" : ""}`}>
        <Nav variant="pills" className="flex-column">
            <div className="d-flex justify-content-evenly w-100 d-block d-sm-none align-items-center">
              <CiMenuFries  size={25} onClick={() => setIsMenuOpen(!isMenuOpen)}/>
              <h3 className={`text-center mt-2 ${isMenuOpen ? "d-block": " d-none"}`}>Dwella</h3>
            </div>
            <h3 className="text-center d-none d-sm-block mt-5 mb-5">Dwella</h3>
            <Nav.Item className={`${isMenuOpen ? "nav-item-active" : ""}`}>
              <Nav.Link eventKey="first" className='d-flex align-items-center gap-3'>
                <MdDashboard size={25}/>
                <span className={`navs-links fw-bold ${isMenuOpen ? "span-active" : ""}`}>Dashboard</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className={`${isMenuOpen ? "nav-item-active" : ""}`}>
              <Nav.Link eventKey="second" className='d-flex align-items-center gap-3'>
                <AiOutlineLineChart size={25}/>
                <span className={`navs-links fw-bold ${isMenuOpen ? "span-active" : ""}`}>Financials</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className={`${isMenuOpen ? "nav-item-active" : ""}`}>
              <Nav.Link eventKey="third" className='d-flex align-items-center gap-3'>
                <FaCircleInfo size={25}/> 
                <span className={`navs-links fw-bold ${isMenuOpen ? "span-active" : ""}`}>Notices</span>
            </Nav.Link>
            </Nav.Item>
            <Nav.Item className={`${isMenuOpen ? "nav-item-active" : ""}`}>
              <Nav.Link eventKey="fourth" className='d-flex align-items-center gap-3'>
               <TbUserQuestion size={25}/>
                <span className={`navs-links fw-bold ${isMenuOpen ? "span-active" : ""}`}>Inquiries</span>
              </Nav.Link>
            </Nav.Item>
        </Nav>
      </div>
      <div className="w-100 main">
          <Tab.Content>
            <Tab.Pane eventKey="first">
                <h1>Dashboard</h1>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quos eum quasi! Tenetur corrupti molestias quibusdam id non eaque minima voluptates quas dolorem deserunt, architecto ullam itaque, aperiam hic alias quis quo ea totam quaerat! Hic porro, nam tempore placeat, doloribus, excepturi atque reprehenderit quis temporibus neque perferendis amet possimus recusandae voluptatum! Voluptatibus odit omnis voluptatum distinctio, nihil eaque. Nostrum dolor laudantium enim dolore doloremque tempora, ad facilis possimus animi maxime pariatur obcaecati tempore iure quod nemo quasi blanditiis vitae repellendus distinctio. Earum molestiae cumque voluptatem magnam, laboriosam explicabo harum fuga quisquam alias nostrum tempora iure. Magni sed consequuntur maiores?</div>
            </Tab.Pane>
            <Tab.Pane eventKey="second"><h1>Financials</h1></Tab.Pane>
            <Tab.Pane eventKey="third"><h1>Notices</h1></Tab.Pane>
            <Tab.Pane eventKey="fourth"><h1>Inquiries</h1></Tab.Pane>
          </Tab.Content>
      </div>
      </Tab.Container>
    </aside>
  );
}

export default SideBar;
