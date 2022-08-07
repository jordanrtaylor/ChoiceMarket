import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Dropdown, Menu } from "semantic-ui-react";
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
          }}
          name={"home"}
        >
          <img
            style={{ height: "100%", width: "150px" }}
            alt="logo"
            src="/ChoiceMarket.png"
          />
        </Menu.Item>

        <Dropdown text="MENU" pointing className="link item">
          <Dropdown.Menu>
            <Dropdown.Header>Categories</Dropdown.Header>
            <Dropdown.Item>
              <Dropdown text="Sandwiches">
                <Dropdown.Menu>
                  <Dropdown.Item>Porchetta di Ariccia</Dropdown.Item>
                  <Dropdown.Item>Panino al Prosciutto</Dropdown.Item>
                  <Dropdown.Item>Mozzarella di Bufala e Pomodoro</Dropdown.Item>
                  <Dropdown.Item>Puccia</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Dropdown.Item>
            <Dropdown.Item>
              <Dropdown text="Pizzas">
                <Dropdown.Menu>
                  <Dropdown.Item>Pizza ai funghi</Dropdown.Item>
                  <Dropdown.Item>Pizzette</Dropdown.Item>
                  <Dropdown.Item>Pizza bianca</Dropdown.Item>
                  <Dropdown.Item>Pizza capricciosa</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Dropdown.Item>
            <Dropdown.Item>
              <Dropdown text="Cakes">
                <Dropdown.Menu>
                  <Dropdown.Item>Ciambella</Dropdown.Item>
                  <Dropdown.Item>Italian Cream</Dropdown.Item>
                  <Dropdown.Item>Lemon Ricotta</Dropdown.Item>
                  <Dropdown.Item>Cassata Ricotta</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        

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
          }}
        >
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
