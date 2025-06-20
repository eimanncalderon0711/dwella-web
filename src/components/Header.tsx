import { Dropdown } from 'react-bootstrap'
import  logo from "../assets/_ 1.png"
import type { ReactNode } from 'react'
import { useNavigate } from '@tanstack/react-router';


interface HeaderProps {
  children?: ReactNode;
};

function Header({children} : HeaderProps) {
  const navigate = useNavigate();

  return (
    <div className="d-flex justify-content-start flex-column-reverse flex-sm-row justify-content-sm-between align-items-center gap-5 gap-md-3 flex-wrap-reverse">
        {children}
        
        {/* Profile avatar */}
        <Dropdown align="end">
            <Dropdown.Toggle
            variant="light"
            id="dropdown-profile"
            className="d-flex align-items-center gap-2 border-0 bg-transparent"
            >
            <img src={logo} alt="Profile" width={50} height={50} style={{ borderRadius: "50%" }} />
            <div className="d-flex flex-column text-start">
                <span className="fw-semibold">Julia Barrets</span>
                <span className="text-muted" style={{ fontSize: "0.85rem" }}>Project Manager</span>
            </div>
            </Dropdown.Toggle>

            <Dropdown.Menu>
            <Dropdown.Item href="#/settings" onClick={() => navigate({to: '/resident/profile'})}>View Profile</Dropdown.Item>
            <Dropdown.Item href="#/account" onClick={() => navigate({to: '/resident/contact'})}>Account Settings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/logout" className="text-danger">Logout</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </div>
  )
}

export default Header;