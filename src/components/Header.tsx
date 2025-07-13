import { Dropdown } from 'react-bootstrap'
import  logo from "../assets/_ 1.png"
import { useEffect, type ReactNode } from 'react'
import { redirect, useNavigate } from '@tanstack/react-router';
import { useAuth } from '../contexts/auth/AuthContext';


interface HeaderProps {
  children?: ReactNode;
  path: String;
};

function Header({children, path} : HeaderProps) {
  const navigate = useNavigate();

  const {logout} = useAuth();

  const logOutHandler = () => {
    logout();
  }

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
            <Dropdown.Item onClick={() => navigate({to: `/${path}/profile`})}>View Profile</Dropdown.Item>
            <Dropdown.Item onClick={() => navigate({to: `/${path}/account`})}>Account Settings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={logOutHandler} className="text-danger">Logout</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </div>
  )
}

export default Header;