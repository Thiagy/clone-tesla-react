import React, { useRef, useLayoutEffect, useState } from "react";

export default function BuyBox() {
  const contentHomepageRef = useRef(null);
  const btnExistingInventoryRef = useRef(null);
  const downArrowRef = useRef(null);

  // Use useState hook to create a state variable for titleMain
  const [titleMain, setTitleMain] = useState("Model 3");
  const [subTitleMain, setTsubTitleMain] = useState("View Inventory");
  const [btnCustomOrder, setTbtnCustomOrder] = useState("Order Now");
  const [btnExistingInventory, setTbtnExistingInventory] = useState("Demo Drive");

  useLayoutEffect(() => {//Essa função faz sumir/aparecer a div cuja id é content-homeoage durante a rolagem d página
    function changeContainer() {
      let top = document.documentElement.scrollTop;
      const screenHeight = contentHomepageRef.current?.clientHeight;

      if (top >= 0) {
        contentHomepageRef.current?.setAttribute("id", "content-homepage");
        downArrowRef.current?.setAttribute("id", "downArrow");
        setTitleMain("Model 3")
        
      }
      if (top > 0.2342 * screenHeight) {
        contentHomepageRef.current?.setAttribute("id", "content-homepageOcult");
        downArrowRef.current?.setAttribute("id", "downArrowOcult");
        setTitleMain("Model Y");
      }
      if (top > 0.72 * screenHeight) {
        contentHomepageRef.current?.setAttribute("id", "content-homepage");
      }
      if (top > 1.2342 * screenHeight) {
        contentHomepageRef.current?.setAttribute("id", "content-homepageOcult");
        setTitleMain("Model S");
      }
      if (top > 1.72 * screenHeight) {
        contentHomepageRef.current?.setAttribute("id", "content-homepage");
      }
      if (top > 2.2342 * screenHeight) {
        contentHomepageRef.current?.setAttribute("id", "content-homepageOcult");
        setTitleMain("Model X");
        setTsubTitleMain("View Inventory")
        setTbtnExistingInventory("Demo Drive")
      }
      if (top > 2.72 * screenHeight) {
        contentHomepageRef.current?.setAttribute("id", "content-homepage");
      }
      if (top > 3.2342 * screenHeight) {
        contentHomepageRef.current?.setAttribute("id", "content-homepageOcult");
        setTitleMain("Solar Panel");
        setTsubTitleMain("Lowest Cost Solar Panels in America")
        setTbtnCustomOrder("Order Now")
        setTbtnExistingInventory("Learn More") 
      }
      if (top > 3.72 * screenHeight) {
        contentHomepageRef.current?.setAttribute("id", "content-homepage");
        btnExistingInventoryRef.current?.setAttribute("id", "btn-existing-inventory");
      }
      if (top > 4.2342 * screenHeight) {
        contentHomepageRef.current?.setAttribute("id", "content-homepageOcult");
        setTitleMain("Accessories");
        setTsubTitleMain("")
        setTbtnCustomOrder("Shop")
        btnExistingInventoryRef.current?.setAttribute("id", "btnExistingInventoryRefOcult");
      }
      if (top > 4.72 * screenHeight) {
        contentHomepageRef.current?.setAttribute("id", "content-homepage");
      }
    }
    window.addEventListener("scroll", function () {
      changeContainer();
    });
  });

    return(
        <section id="box-buy">
          <div id="content-homepage" ref={contentHomepageRef}>
              <div className="title">
                  <h1 id="title-h1">{titleMain}</h1>
                  <a id="title-a" href="">{subTitleMain}</a>  
              </div>
              <div id="div-button-homepage">
                  <button id="btn-custom-order" className="btn-content-main">{btnCustomOrder}</button>
                  <button id="btn-existing-inventory" className="btn-content-main" ref={btnExistingInventoryRef}>{btnExistingInventory}</button>
              </div>
          </div>
          <a href="#section-2" id="downArrow" ref={downArrowRef}></a>
      </section>
    )
}


