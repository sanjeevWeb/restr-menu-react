import { useState } from "react";
import Menu from "./Menu";
import Navgrp from "./Navgrp";
import "./RestrStyle.css";

const uniqueNavList = [...new Set(Menu.map((currElem) => {
  return currElem.session;
})), "All"];

const RestrMenu = () => {

  const [menu, setMenu] = useState(Menu);
  const [navItem, setNavItem] = useState(uniqueNavList);

  const menuHandler = (type) => {
    // console.log(e.currentTarget.innerText);
    // let clicked = e.currentTarget;
    if (type === "All") {
      setMenu(Menu);
      return;
    }
    let returnedVal = Menu.filter((currElem) => {
      return currElem.session === type;
    })
    // console.log(returnedVal);
    setMenu(returnedVal);
  }


  return (
    <>
      <Navgrp menuHandler={menuHandler} navItem={navItem}></Navgrp>
      <div className="card-container">
        {

          menu.map((currElem) => {
            return (
              <>
                <div className="card">
                  <div className="card-body" key={currElem.id}>
                    <div className="name">{currElem.item}</div>
                    <img src={currElem.img} alt="img" />
                    <div className="price">{currElem.price}</div>
                    <div className="detail">{currElem.description}</div>
                    <hr />
                    <button className="order">Order Now</button>
                  </div>

                </div>
              </>
            )
          })

        }
      </div>
    </>
  )
}

export default RestrMenu;