import { Button } from "@mui/material";
import React from "react";

const MostPopular = () => {
    return (
        <div className="footer-popular">
            <div className="title">Most popular</div>
            <div className="footer-popular-item">
              <Button>  <img src="../images/popular1.png" alt="popular1" /> </Button>
                <div className="item-about">
                    <div className="item-about-title">
                       Board Wood Textures Pack 1 
                    </div>
                    <div className="item-about-date">
                        January 08, 2016
                    </div>
                </div>
            </div>
            <div className="footer-popular-item">
               <Button> <img src="../images/popular2.png" alt="popular2" /></Button>
                <div className="item-about">
                    <div className="item-about-title">
                        Biker Widget Free UI PSD 
                    </div>
                    <div className="item-about-date">
                        January 06, 2016
                    </div>
                </div>
            </div>
            
            <div className="footer-popular-item">
                <Button><img src="../images/popular3.png" alt="popular2" /></Button>
                <div className="item-about">
                    <div className="item-about-title">
                        Free Beer Can PSDPack 1  
                    </div>
                    <div className="item-about-date">
                        January 05, 2016
                    </div>
                </div>
            </div>
            <div className="footer-popular-item">
                <Button> <img src="../images/popular4.png" alt="popular2" /></Button>
                <div className="item-about">
                    <div className="item-about-title">
                        Finance Web UI Kit for Apps 
                    </div>
                    <div className="item-about-date">
                        January 04, 2016
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MostPopular