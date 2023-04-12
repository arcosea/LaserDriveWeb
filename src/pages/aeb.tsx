import { Link } from "react-router-dom";
import React, { useEffect, useState, useRef } from 'react';
import "../style/aeb.css"; 

export function AEB() {
    return (
        <div className="aeb" id="content">
            <div>
                <p>
                    Automatically braking to any hazards is a vital step towards autonomous vehicle safety. As all algorithms, first, it is implemented in lab simulation. Then, the code is SSH onto the car. Moreover, the vehicle is able to AEB by calculating the time-to-collision (TTC). The physical (Hokuyo) LiDAR sensor only scans 270°, but in simulation ROS scans 360°, returning ⅓ of a degree. Specifically, in simulation there are 1080 data points, but with the LiDAR hardware there are only 810 data points because it scans only 270°. This difference is handled by altering the AEB algorithm which takes this into consideration. Now, the /scan topic will be subscribed to and the vehicle will take in the data from the LiDAR sensor. Some issues are that the vehicle brakes too early when there is still enough distance between the vehicle and wall.
                    After receiving the LiDAR data, the VESC can be recorded by obtaining the vehicle's velocity. This is then published to the /odom topic. If the velocity is below threshold, publish the Ackermann message to /nav, the vehicle will now automatically brake upon emergency. From the above described implementation, all of it is a part of a ROS node–namely–‘safety_node.’
                </p>
            </div>
        </div>
    );
}