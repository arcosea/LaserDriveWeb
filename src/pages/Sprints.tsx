import {Link} from "react-router-dom";
import React, { useEffect, useState, useRef } from 'react';
import "../style/Sprints.css";

export function Sprints(){
    return(
        <div className="sprint-container">
            
            <h2 className="sprint-page-header"> Fall 2022 Sprints</h2>
          
            <div className="sprint" id="sprint1">
                <h3 className="sprint-subheader"> Sprint 1</h3>
                <p className="description">
                    asadasdasdasrasda
                </p>
                
            </div>
            <div className="sprint" id="sprint2">
                <h3 className="sprint-subheader"> Sprint 2</h3>
            </div>
            <div className="sprint" id="sprint3">
                <h3 className="sprint-subheader"> Sprint 3</h3>
            </div>
            
        </div>



    );
}