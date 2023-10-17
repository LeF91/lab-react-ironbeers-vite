import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function AddBeerPage() {
  const [beerData, setBeerData] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: "",
    contributed_by: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBeerData({ ...beerData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://ih-beers-api2.herokuapp.com/beers/new",
        beerData
      );
      console.log("Beer added successfully:", response.data);
      // You may want to redirect the user or handle success in some way
    } catch (error) {
      console.error("Error adding beer:", error);
      // Handle error, show a message, etc.
    }
  };

  return (
    <div>
      <h1>Add Beer</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={beerData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="tagline">Tagline</label>
          <input
            type="text"
            id="tagline"
            name="tagline"
            value={beerData.tagline}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={beerData.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="first_brewed">First Brewed</label>
          <input
            type="text"
            id="first_brewed"
            name="first_brewed"
            value={beerData.first_brewed}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="brewers_tips">Brewer's Tips</label>
          <input
            type="text"
            id="brewers_tips"
            name="brewers_tips"
            value={beerData.brewers_tips}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="attenuation_level">Attenuation Level</label>
          <input
            type="number"
            id="attenuation_level"
            name="attenuation_level"
            value={beerData.attenuation_level}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="contributed_by">Contributed By</label>
          <input
            type="text"
            id="contributed_by"
            name="contributed_by"
            value={beerData.contributed_by}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Add Beer</button>
        </div>
      </form>
    </div>
  );
}

export default AddBeerPage;
