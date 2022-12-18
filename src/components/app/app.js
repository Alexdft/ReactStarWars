import React, { Component } from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";

import "./app.css";
import { PeoplePage, PlanetPage, StarshipPage } from "../pages";
import SwapiService from "../../services/swapi-service";
import { SwapiServiceProvider } from "../swapi-service-context";
import ErrorBoundry from "../error-boundry";

export default class App extends Component {
  state = {
    showRandomPlanet: true,
    swapiService: new SwapiService(),
  };
  /*onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service =
        swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
      console.log("switched to", Service.name);
      return { swapiService: new Service() };
    });
  };*/

  render() {
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <Header onServiceChange={this.onServiceChanges} />
          <RandomPlanet />
          <PeoplePage />
          <PlanetPage />
          <StarshipPage />
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
