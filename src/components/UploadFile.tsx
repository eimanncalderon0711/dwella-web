import React, { useRef, useState, type ChangeEvent, type DragEvent } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { IoMdCloudUpload } from 'react-icons/io';
import Files from './Files';

function UploadFile({title}:{title:string}) {

  const [files, setFiles] = useState<File[] | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);;  // Reference for the hidden file input

  // Handle the file selection
   const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    if (selectedFiles) {
      setFiles(Array.from(selectedFiles));
    }
  };

 // Trigger the file input click when the anchor tag is clicked
  const handleAnchorClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();  // Prevent default anchor behavior
    fileInputRef.current?.click();  // Safe call with optional chaining
  };

   // Handle file drop
  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);

    const droppedFile = event.dataTransfer.files;
    if (droppedFile) {
      setFiles(Array.from(droppedFile));
    }
  };

  // Highlight drag area
  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault(); // Allow drop
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };


  return (
    <Form.Group className="mb-3" controlId="formUploadFile">
        <Form.Label>{title}</Form.Label>
        <Container 
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave} 
            fluid 
            style={{
                overflow:"auto",
                border: `1px ${isDragging ? "blue" : "#B3B3B3"}  dashed`, 
                padding: "1rem",
                maxHeight:"15rem",
                transition: 'background-color 0.2s ease-in-out',
                backgroundColor:`${isDragging ? "rgba(52, 76,183, 0.3)":"white"}`}}
            >
            <Row>
                <Col xs='12' className='text-center'><IoMdCloudUpload color='#344CB7' size={40}/></Col>
                
                <input id='formUploadFile' ref={fileInputRef} type="file" multiple onChange={handleFileChange} className='d-none'/>
                
                <Col xs='12' className='text-center'>
                    <p>Drag and drop files or {" "} 
                        <span className='text-decoration-underline fw-bold' style={{color:"#344CB7", cursor:"pointer"}} onClick={handleAnchorClick}>Browse</span>
                    </p>
                    <p className='custom-font-size text-muted'>Supported formates: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT</p>
                </Col>
            </Row>
            
            {/* Display selected files */}
            {files && files.length > 0 && (
                <Files files={files} />
            )}
        </Container>
    </Form.Group>
  )
}

export default UploadFile