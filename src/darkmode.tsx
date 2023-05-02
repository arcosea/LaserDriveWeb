import React, { ChangeEventHandler } from 'react';
import { Theme } from "dark-mode-ts";
import darkIcon from './moon.png';
import lightIcon from './sun.png'
import {Link} from "react-router-dom"
import "./darkmode.css";

/* NEW (START) */
const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  };
  
  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };

  const toggleTheme: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.checked) {
      setDark();
    } else {
      setLight();
    }
  };

export default function DarkMode(){
    return (
        <div className="toggle-theme-wrapper">
            <span> </span>
            <label className="toggle-theme" htmlFor="checkboxark ">
                <input
                    type="checkbox"
                    id="checkbox"
                    onChange={toggleTheme}
                />
                <div className='slider round'> </div>
            </label>
            <span> </span>
        </div>
    );
}