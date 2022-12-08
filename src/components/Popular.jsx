import { useEffect, useState } from "react";
import styled from "styled-components";

function Popular() {
  // 3. Hold the data in the component sate
  //      holds state to the component but component will react to it if the state changes from api
  //      ex. if data changes from the api, the UI will react to it and reflect the changes
  const [popular, setPopular] = useState([]);

  // 2. Call the fetch data function
  //      perform side effects in the components
  useEffect(() => {
    getPopular(); // will run as soon as component get's mounted
  }, []); // [] only run getPopular when component gets mounted (runs only on the first render)

  // 1. Define how we fetch the data
  const getPopular = async () => {
    // async so that we can wait for data before rendering out the page
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
    );
    const data = await api.json(); // process api result into json format
    setPopular(data.recipes);
  };

  return (
    <div>
      {/* go through each recipe object and output the title */}
      {popular.map((recipe) => {
        return (
          <Wrapper>
            <h3>Popular Picks</h3>
            {popular.map((recipe) => {
              return (
                <Card>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                </Card>
              );
            })}
          </Wrapper>
        );
      })}
    </div>
  );
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  min-hieght: 25rem;
  border-radius: 2rem;
  overflow: hidden;

  img {
    border-radius: 2rem;
  }
`;

export default Popular;
