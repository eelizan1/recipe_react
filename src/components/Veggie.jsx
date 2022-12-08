import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function Veggie() {
  // 3. Hold the data in the component sate
  //      holds state to the component but component will react to it if the state changes from api
  //      ex. if data changes from the api, the UI will react to it and reflect the changes
  const [veggie, setVeggie] = useState([]);

  // 2. Call the fetch data function
  //      perform side effects in the components
  useEffect(() => {
    getVeggie(); // will run as soon as component get's mounted
  }, []); // [] only run getPopular when component gets mounted (runs only on the first render)

  // 1. Define how we fetch the data
  const getVeggie = async () => {
    const check = localStorage.getItem("veggie");

    if (check) {
      // get from local storage if available
      setVeggie(JSON.parse(check));
    } else {
      // async so that we can wait for data before rendering out the page
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
      );
      const data = await api.json();

      localStorage.setItem("veggie", JSON.stringify(data.recipes));
      setVeggie(data.recipes);
    }
  };

  return (
    <div>
      {/* go through each recipe object and output the title */}
      <Wrapper>
        <h3>Our Veggie Picks</h3>

        <Splide
          options={{
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "5rem",
          }}
        >
          {veggie.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                  <Gradient />
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  min-height: 20rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Veggie;
