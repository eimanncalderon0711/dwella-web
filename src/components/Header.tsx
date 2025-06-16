import { Dropdown } from 'react-bootstrap'
import { FaPhone } from 'react-icons/fa6'
import { MdOutlineAccountBalanceWallet } from 'react-icons/md'
import  logo from "../assets/_ 1.png"
import type { ReactNode } from 'react'


interface HeaderProps {
  children?: ReactNode;
};

function Header({children} : HeaderProps) {
  return (
    <div className="d-flex justify-content-center justify-content-sm-between align-items-center gap-3 flex-wrap-reverse">
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
                <span className="fw-semibold">Eimann Joshua Calderon</span>
                <span className="text-muted" style={{ fontSize: "0.85rem" }}>Project Manager</span>
            </div>
            </Dropdown.Toggle>

            <Dropdown.Menu>
            <Dropdown.Item href="#/settings">Settings</Dropdown.Item>
            <Dropdown.Item href="#/account">Account</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/logout" className="text-danger">Logout</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </div>
  )
}

export default Header;