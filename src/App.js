import { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";
// Images
import logo from "./assets/logo.png";

function App() {
  const [drink, setDrink] = useState([]);
  const drinkImage = drink.strDrinkThumb;
  const drinkName = drink.strDrink;
  const glass = drink.strGlass;
  const instructions = drink.strInstructions;
  // const firstIngredient = drink.strMeasure1 + drink.strIngredient1;

  /* 
    Need to loop over the drink object to pull all of the strMeasue
    and strIngredient values.
  */
  const measure = Object.entries(drink).map(([key, value]) => {
    return value !== null ? drink[key] : "";
  });

  console.log(measure);

  useEffect(() => {
    // handleGetDrink();
  }, []);

  const handleGetDrink = () => {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then(response => {
        setDrink(response.data.drinks[0]);
      });
  };

  return (
    <>
      <header>
        <img src={logo} alt="Cocktail Roulette" />
      </header>
      <main>
        <article>
          <h2>Let's Mix It Up.</h2>
          <p>
            Cocktail Roulette is a game of chance. Roll a random cocktail and
            try something new for a change! I hope you have a bunch of liquor on
            hand!
          </p>
          <button onClick={handleGetDrink}>Mix it up</button>
        </article>

        <div className="drink-card">
          <article>
            <img className="rounded-2xl" src={drinkImage} alt="" />
            <div>
              <h2>{drinkName}</h2>
              <p>Best served in a {glass}</p>

              <p>{instructions}</p>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}

export default App;
