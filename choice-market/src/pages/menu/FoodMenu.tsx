import * as React from "react";
import { Divider, Header, Segment } from "semantic-ui-react";
import caprese from "./Caprese-Sandwich.jpg";
import portobello from "./Portobello-Burger.jpg";

function FoodMenu() {
  return (
    <Segment>
      <Header className="header" as="h1">SANDWICHES</Header>

      <div className="SandwichContainer">
        <div className="sandwichItem">
          <img
            style={{ height: "100%", width: "150px" }}
            alt="caprese"
            src={caprese}
          />
        </div>
        <div className="sandwichItem">
          <img
            style={{ height: "100%", width: "150px" }}
            alt="portobello"
            src={portobello}
          />
        </div>
      </div>

      <Divider section />

      <Header as="h1">CAKES</Header>
    </Segment>
  );
}

export default FoodMenu;
