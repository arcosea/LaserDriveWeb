import {Link} from "react-router-dom";
import React, { useEffect, useState, useRef } from 'react';
import "../style/Sprints.css";

export function Sprints(){
    return(
        <div className="sprint-container">
            
            <h2 className="sprint-page-header"> Fall 2022 Sprints</h2>
          
            <div className="sprint" id="sprint1">
                <h3 className="sprint-subheader"> 
                    <a href="http://localhost:3000/sprints/sprint1">
                        <button>
                            Sprint 1
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
            <div className="sprint" id="sprint2">
                <h3 className="sprint-subheader"> 
                    <a href="http://localhost:3000/sprints/sprint2">
                        <button>
                            Sprint 2
                        </button>
                    </a>
                </h3>
                <p className="description">
                    <dl>
                        <dt> ROS </dt>
                        <dd> Nodes, Services, Design </dd>
                    </dl>
                </p>
            </div>
            <div className="sprint" id="sprint3">
                <h3 className="sprint-subheader"> 
                    <a href="http://localhost:3000/sprints/sprint2">
                        <button>
                            Sprint 3
                        </button>
                    </a>
                </h3>
                <p className="description">
                    <dl>
                        <dt> Began Lab 2 </dt>
                        <dd> AEB </dd>
                    </dl>
                </p>
            </div>
            <div className="sprint" id="sprint3">
                <h3 className="sprint-subheader"> Sprint 4</h3>
                <p className="description">
                    <dl>
                        <dt> AEB Lab  </dt>
                        <dd> Complete </dd>
                    </dl>
                </p>
            </div>
            <div className="sprint" id="sprint3">
                <h3 className="sprint-subheader"> Sprint 5</h3>
                <p className="description">
                    <dl>
                        <dt> Lab 3  </dt>
                        <dd> Wall Following </dd>
                    </dl>
                </p>
            </div>
            
        </div>



    );
}