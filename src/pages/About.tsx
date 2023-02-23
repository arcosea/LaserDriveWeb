
import {Link} from "react-router-dom";
import React, { useEffect, useState, useRef } from 'react';
import "../style/About.css";

export function About(){
    return(
        <div className="about" id="header">

            <div>
                <h3> Our Team </h3>
                <p>
                    text here
                </p>
                <img src="https://blog.technavio.org/wp-content/uploads/2018/11/Self-driving-Car-Companies-256x256.jpg" title="add a picture of our team here (right align)">

                </img>
            </div>
        </div>

    );
}