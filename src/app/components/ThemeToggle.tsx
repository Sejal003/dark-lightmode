"use client"
import { useState, useEffect } from "react";
import { FaMoon } from "react-icons/fa6";
import { BsSunFill } from "react-icons/bs";

const ThemeToggle = () => {

    const [darkMode , setDarkMode] = useState(true) ;
    useEffect(()=>{
        const theme = localStorage.getItem("theme");
        if(theme === "dark") setDarkMode(true)
    }, [])

    useEffect(()=>{
        if(darkMode){
            document.documentElement.classList.add('dark');
            localStorage.setItem("theme" , "dark")
        }
        else{
            document.documentElement.classList.remove('dark');
            localStorage.setItem("theme" , "light")
        }
    }, [darkMode])
  return (
    <div className="relative w-16 h-8 flex items-center cursor-pointer rounded-full p-1 dark:bg-gray-900 bg-teal-500" onClick={()=>setDarkMode(!darkMode)}>
      <FaMoon className="text-white size-{18}"></FaMoon>
      <div className="absolute bg-white dark:bg-blue-500 w-6 h-6 rounded-full shadow-md transform transition-transform duration-300" style={darkMode ? {left: "2px"} : {right: "2px"}}>
      </div>
      <BsSunFill className="ml-auto text-yellow-400" size={18}></BsSunFill>
    </div>
  )
}

export default ThemeToggle

