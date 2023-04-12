import {Link} from "react-router-dom";
import React, { useEffect, useState, useRef } from 'react';
import "../style/Implementation.css";
import rosVer from './melodic.png';

export function Implementation(){
    return(
        <div className="implementation-container">
            <div className="implementation" id="cols" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>
                <div className="implementation" id="ROS">
                    <a href="http://localhost:3000/implementation/ros">
                        Introduction to ROS
                        <img src={rosVer} alt="ROS Melodic"></img>

                    </a>
                </div>
                <div className="implementation" id="aeb">
                    <a href="http://localhost:3000/implementation/aeb">
                        Automatic Emergency Braking
                    </a>
                </div>
                <div className="implementation" id="ROS">
                    <a href="http://localhost:3000/implementation/wallfollowing">
                        Wall Following
                    </a>
                </div>
            </div>
        </div>



    );
}