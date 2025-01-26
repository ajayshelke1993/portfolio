// import React from "react";
// import { useEffect } from "react";
// import { ReactComponent as Sun } from "./Sun.svg";
// import { ReactComponent as Moon } from "./Moon.svg";
// import "./styles/DarkMode.css";

// const DarkMode = () => {
//     const setDarkMode = () => {
//         document.querySelector("body").setAttribute("data-theme", "dark");
//     };

//     const setLightMode = () => {
//         document.querySelector("body").setAttribute("data-theme", "light");
//     };
    
//     const toggleTheme =(e) => {
//         if (e.target.checked) setDarkMode();
//         else setLightMode();
//     };
//     // useEffect(() => {
//     //     localStorage.setItem('data-theme', "dark");
//     //   }, []);

     
//     return (
//         <div className='dark_mode'>
//             <input
//                 className='dark_mode_input'
//                 type='checkbox'
//                 id='darkmode-toggle'
//                 onChange={toggleTheme}
//             />
//             <label className='dark_mode_label' for='darkmode-toggle'>
//                 <Sun />
//                 <Moon />
//             </label>
//         </div>
//     );
// };

// export default DarkMode;


import React, { useEffect, useState } from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./styles/DarkMode.css";

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newTheme = !prev ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return !prev;
    });
  };

  useEffect(() => {
    document.querySelector("body").setAttribute("data-theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
        checked={isDarkMode}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <Sun />
        <Moon />
      </label>
    </div>
  );
};

export default DarkMode;
