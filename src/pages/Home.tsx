import {Link} from "react-router-dom";
import React, { useEffect, useState, useRef } from 'react';
import "../style/Home.css"

export function Home(){
    return(
        <div>
            <h2 > 
                Hero/Landing Page 
            </h2>
            <h3>
                Introduction to ROS
            </h3>
            <h3>
                Automatic Emergency Braking
            </h3>
            <h3>
                Wall Following
            </h3>
            <h3>
                Interactive Subpages (Documentary)
            </h3>

        </div>



    );
}