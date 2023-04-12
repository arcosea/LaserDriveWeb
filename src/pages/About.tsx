import { Link } from "react-router-dom";
import React, { useEffect, useState, useRef } from 'react';
import "../style/About.css";

export function About() {
    return (
        <div className="about" id="content">

            <div>
                <h3> LaserDrive 2022-2023 Capstone </h3>
                <p>
                    LaserDrive consists of Erick Arcos (BS Physics, BA Computer Science), Ben Poplin (BS Physics, BA Computer Science), and Christian Galang (BS Computer Science). Not only did an autonomous vehicle peak interest, but gain new  experience with engineering, ROS, SLAM, and web design (TypeScript, CSS HTML). Ultimately, this capstone project allowed each student's unique skills in tackling an assembly of  a RC Car.
                    The main goal of the car was to follow the previous capstone project (2021-2022) of Cody Uehara and Kieran Murphy. Yet, still beginning from the start, and building off of their specific implementation. Such as, connecting (both cars) to the PLU WiFi, an alarm system, or the implementation of the pursuit algorithm. Hence, embedded systems, autonomy, and web development were main facets in order to meet some of the project goals.
                    Thank you to John (LiDAR Mount), Matthew Hacker (WiFi Connectivity), Dr. Caley for advising this project, his help, and constant encouragement.
                </p>
                <img src="https://blog.technavio.org/wp-content/uploads/2018/11/Self-driving-Car-Companies-256x256.jpg" title="add a picture of our team here (right align)">

                </img>
            </div>
        </div>

    );
}