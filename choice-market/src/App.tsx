import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Menu } from "semantic-ui-react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import FoodMenu from "./pages/menu/FoodMenu";
import WineSelection from "./pages/WineSelection/WineSelection";
import Tour from "./pages/Tour/Tour";

function App() {
  const [activeItem, setActiveItem] = useState("editorials");
  let navigate = useNavigate();
  return (
    <div className="App">
        <Menu>
          <Menu.Item
            className="logo"
            onClick={(e, menuItem) => {
              setActiveItem(menuItem.name ?? "");
              navigate("");
            }}            name={"home"}
          >
            <img
              style={{ height: "100%", width: "150px" }}
              alt="logo"
              src="/ChoiceMarket.png"
            />
          </Menu.Item>

          <Menu.Item
            name="menu"
            active={activeItem === "menu"}
            onClick={(e, menuItem) => {
              setActiveItem(menuItem.name ?? "");
              navigate("FoodMenu");
            }}
          >
            MENU
          </Menu.Item>

          <Menu.Item
            name="wine"
            active={activeItem === "wine"}
            onClick={(e, menuItem) => {
              setActiveItem(menuItem.name ?? "");
              navigate("WineSelection");
            }}
          >
            WINE
          </Menu.Item>

          <Menu.Item
            name="virtualTour"
            active={activeItem === "virtualTour"}
            onClick={(e, menuItem) => {
              setActiveItem(menuItem.name ?? "");
              navigate("Tour");
            }}          >
            VIRTUAL TOUR
          </Menu.Item>
        </Menu>
        <Routes>
          <Route path="/" element={<></>}></Route>
          <Route path="/FoodMenu" element={<FoodMenu />}></Route>
          <Route path="/WineSelection" element={<WineSelection />}></Route>
          <Route path="/Tour" element={<Tour />}></Route>
        </Routes>
    </div>
  );
}

export default App;
