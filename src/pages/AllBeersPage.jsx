import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function AllBeersPage() {
  const [allBeers, setAllBeers] = useState(null);

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const response = await axios.get(
          "https://ih-beers-api2.herokuapp.com/beers"
        );
        setAllBeers(response.data);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };

    fetchBeers();
  }, []);
  if (!allBeers) return <p>Loading ...</p>;

  return (
    <div>
      <h1>All Beers</h1>
      <ul>
        {allBeers.map((beer) => (
          <li key={beer.id}>
            <Link to={`/beers/${beer.id}`}>
              <img
                src={beer.image_url}
                alt={beer.name}
                style={{ maxWidth: "100px" }}
              />
              <p>{beer.name}</p>
              <p>{beer.tagline}</p>
              <p>Contributed by:{beer.contributed_by}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllBeersPage;
