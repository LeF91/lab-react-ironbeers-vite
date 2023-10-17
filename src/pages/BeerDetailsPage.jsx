import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function BeerDetailsPage() {
  const { beerId } = useParams();
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    const fetchBeerDetails = async () => {
      try {
        const response = await axios.get(
          "https://ih-beers-api2.herokuapp.com/beers/:id"
        );
        setBeer(response.data);
      } catch (error) {
        console.log("Error fetching beer details", error);
      }
    };

    fetchBeerDetails();
  }, [beerId]);

  if (!beer) return <p>Loading...</p>;

  return (
    <div>
      <h1>{beer.name}</h1>
      <img src={beer.image_url} alt={beer.name} style={{ maxWidth: "100px" }} />
      <p>{beer.tagline}</p>
      <p>First Brewed: {beer.first_brewed}</p>
      <p>Attenuation Level: {beer.attenuation_level}</p>
      <p>Description: {beer.description}</p>
      <p>Contributed by: {beer.contributed_by}</p>
    </div>
  );
}

export default BeerDetailsPage;
