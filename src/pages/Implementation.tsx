import {Link} from "react-router-dom";
import React, { useEffect, useState, useRef } from 'react';
import "../style/Implementation.css";

export function Implementation(){
    return(
        <div className="implementation-container">
          
            <div className="implementation" id="lab1">
                <h3 className="implementation-subheader"> 
                    <a href="http://localhost:3000/implementation/lab1">
                            LAB 1
                    </a>
                </h3>
                <p className="description">
                    <dl>
                        <dt> Introduction to ROS </dt>
                        <dd> Nodes </dd>
                        <dd> Publishers/Subscribers </dd>
                    </dl>
                </p>
            </div>
            <div className="implementation" id="lab2">
                <h3 className="implementation-subheader"> 
                    <a href="http://localhost:3000/implementation/lab2">
                            LAB 2
                    </a>
                </h3>
                <p className="description">
                    <dl>
                        <dt> Automatic Emergency Braking (AEB) </dt>
                        <dd> Algorithms </dd>
                    </dl>
                </p>
            </div>
            <div className="implementation" id="lab3">
                <h3 className="implementation-subheader">
                    <a href="https://localhost:3000/implementation/lab3">
                            LAB 3
                    </a>
                </h3>
                <p className="description">
                    <dl>
                        <dt> Wall Following  </dt>
                        <dd> details </dd>
                    </dl>
                </p>
            </div>
        </div>



    );
}