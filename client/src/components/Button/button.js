import react from "react";
import './Button.css'
export default function Button({ name, funOnClick='' }) {
    return (
        <button className="btn" onClick={funOnClick}>{name}</button>
        )
    }
  