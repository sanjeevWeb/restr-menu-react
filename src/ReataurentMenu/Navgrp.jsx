import React from "react";

const Navgrp = ({ menuHandler, navItem }) => {


  return (
    <>
      <div className="topnav">
        {
          navItem.map((currElem, index) => {
            return(
              <>
                <button key={index} className="btn-grp" onClick={() => { menuHandler( currElem ) }}>{currElem}</button>
              </>
            )
          })}
        {/* <button onClick={() => {props.menuHandler("Breakfast")}}>Breakfast</button>
            <button onClick={() => {props.menuHandler("Lunch")}}>Lunch</button>
            <button onClick={() => {props.menuHandler("Snacks")}}>Snacks</button>
            <button onClick={() => {props.menuHandler("Evening")}}>Evening</button>
            <button>All</button> */}
      </div>
    </>
  )
}

export default Navgrp;