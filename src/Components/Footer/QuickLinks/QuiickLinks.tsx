import { Button } from "@mui/material";
import React from "react";

const QuickLinks = () => {
    return(
        <div className="footer-links">
            <div className="title">Quick Links</div>
            <ul className="footer-links-list">
                <li><Button variant="text" size="small" className="btn btn-links">About</Button></li>
                <li><Button variant="text" size="small" className="btn btn-links">Shop</Button></li>
                <li><Button variant="text" size="small" className="btn btn-links">PSD Files</Button></li>
                <li><Button variant="text" size="small" className="btn btn-links">Backgrounds</Button></li>
                <li><Button variant="text" size="small" className="btn btn-links">Icons</Button></li>
                <li><Button variant="text" size="small" className="btn btn-links">Website Layots</Button></li>
                <li><Button variant="text" size="small" className="btn btn-links">Graphics</Button></li>
                <li><Button variant="text" size="small" className="btn btn-links">Template</Button></li>
                <li><Button variant="text" size="small" className="btn btn-links">Logo</Button></li>
                <li><Button variant="text" size="small" className="btn btn-links">Free mockup</Button></li>
                <li><Button variant="text" size="small" className="btn btn-links">Web template</Button></li>
            </ul>
        </div>
    )
}

export default QuickLinks