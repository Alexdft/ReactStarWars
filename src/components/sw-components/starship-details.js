import React from "react";

import ItemDetailes, { Record } from "../item-details/item-details";
import { withSwapiService } from "../hoc-helpers";

const StarshipDetails = (props) => {
  return (
    <ItemDetailes {...props}>
      <Record field="model" label="Model" />
      <Record field="length" label="Length" />
      <Record field="passengers" label="Passengers" />
    </ItemDetailes>
  );
};
const mapMethodToProps = (swapiService) => {
  return {
    getData: swapiService.getStarship,
    getImageUrl: swapiService.getStarshipImage,
  };
};

export default withSwapiService(mapMethodToProps)(StarshipDetails);
