import { Link } from "react-router-dom";
import React, { useEffect, useState, useRef } from 'react';
import "../style/ros.css";

export function ROS() {
    return (
        <div className="ros" id="content">
            <div>
                <p>
                    ROS (Robotic Operating System) acts as a framework to virtually run simulations that can be translated onto
                    any robot. For instance, a radio controlled car following walls by executing algorithms with publishers/subscribers
                    whose function is to–follow some wall. Publishers/Subscribers implement the automatic emergency braking
                    (Lab 2), and the wall following (Lab 3) in simulation. Which is done by publisher and subscriber nodes.
                    After a  topic is subscribed and published to, the (topic) data that will now execute the automatic
                    emergency braking, or wall following algorithms, for example. All of which can be visualized by the graphs,
                    in RVIZ simulation, and eventually the car itself–-as seen below.
                </p>
            </div>
        </div>
    );
}