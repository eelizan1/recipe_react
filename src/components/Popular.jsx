import { useEffect } from "react";

function Popular() {

    // perform side effects in the components 
    useEffect(() => {
        getPopular(); // will run as soon as component get's mounted 
    }, []); // [] only run getPopular when component gets mounted (runs only on the first render)

    const getPopular = async () => { // async so that we can wait for data before rendering out the page 
        const api = await fetch(
            `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
        );
        const data = await api.json(); // process api result into json format 
        console.log(data);
    }

    return (
        <div>Popular</div>
    )
}

export default Popular