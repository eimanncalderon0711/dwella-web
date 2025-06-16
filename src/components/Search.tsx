import {type ReactNode } from 'react'
import { Form, InputGroup } from 'react-bootstrap'
import { IoIosSearch } from 'react-icons/io'
import { IoOptionsOutline } from 'react-icons/io5'

interface SearchProps{
    children?: ReactNode;
}

function Search({children}:SearchProps) {
  return (
    <div className="d-flex justify-content-between align-items-center flex-column gap-5 flex-md-row pt-5 mt-5 mb-3">
        <div className="d-flex align-items-center gap-2">
            <InputGroup>
                <InputGroup.Text id="basic-addon1" className="border-0" style={{backgroundColor:"#F2F2F7"}}><IoIosSearch /></InputGroup.Text>
                <Form.Control
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon1"
                className="border-0"
                style={{backgroundColor:"#F2F2F7"}}
                />
            </InputGroup>
            <IoOptionsOutline size={25} style={{cursor:"pointer"}} />
        </div>
        {children}
    </div>
  )
}

export default Search