import {Link} from "react-router-dom";
import React, { useEffect, useState, useRef } from 'react';
import "../style/Implementation.css";

export function Implementation(){
    return(
        <div className="implementation-container">
          
            <div className="implementation" id="prerequisites">
                <h3 className="implementation-subheader"> 
                    <a href="http://localhost:3000/implementation/prerequisites">
                        <button>
                            PREREQUISITES
                        </button>
                    </a>
                </h3>
                <p className="description">
                    <dl>
                        <dt> Installations </dt>
                        <dd> Ubuntu VM, ROS </dd>
                        <dt> Work Flow </dt>
                        <dd> GitHub, asana </dd>
                    </dl>
                </p>
            </div>
            <div className="implementation" id="lab1">
                <h3 className="implementation-subheader"> 
                    <a href="http://localhost:3000/implementation/lab1">
                        <button>
                            LAB 1
                        </button>
                    </a>
                </h3>
                <p className="description">
                    <dl>
                        <dt> Introduction to ROS </dt>
                        <dd>
                            Nodes
                        </dd>
                        <dd>
                            Services
                        </dd>
                        <dd>
                            Design
                        </dd>
                    </dl>
                </p>
            </div>
            <div className="implementation" id="lab2">
                <h3 className="implementation-subheader"> 
                    <a href="http://localhost:3000/implementation/lab2">
                        <button>
                            LAB 2
                        </button>
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
                        <button>
                            LAB 3
                        </button>
                    </a>
                </h3>
                <p className="description">
                    <dl>
                        <dt> Wall Following  </dt>
                        <dd> details </dd>
                    </dl>
                </p>
            </div>
            <div className="implementation" id="lab4">
                <h3 className="implementation-subheader">
                    <a href="https://localhost:3000/implementation/lab4">
                        <button>
                            LAB 4
                        </button>
                    </a>
                </h3>
                <p className="description">
                    <dl>
                        <dt> Follow the Gap  </dt>
                        <dd> details </dd>
                    </dl>
                </p>
            </div>
        </div>



    );
}