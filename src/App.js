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

  const handleGetDrink = async () => {
    await axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then(response => {
        setDrink(response.data.drinks[0]);
      });
  };

  return (
    <div>
      <header className="py-8 flex justify-center align-center md:px-16 lg:justify-start lg:px-32">
        <img src={logo} alt="Cocktail Roulette" />
      </header>
      <main className="px-4 flex h-full flex-col items-center lg:flex-row lg:px-32 lg:justify-between">
        <article className="pb-8">
          <h2>Let's Mix It Up.</h2>
          <p className="py-4">
            Cocktail Roulette is a game of chance. Roll a random cocktail and
            try something new for a change! I hope you have a bunch of liquor on
            hand!
          </p>
          <button onClick={handleGetDrink}>Mix it up</button>
        </article>

        <div className="drink-card-glow">
          <div className="drink-card max-w-screen-lg max-h-861px w-full h-full"></div>
          <article className="p-4 flex flex-col items-center md:flex-row">
            <img
              className="rounded-2xl object-contain max-w-md w-full md:mr-4"
              src={drinkImage}
              alt=""
            />
            <div>
              <h2>{drinkName}</h2>
              <p>Best served in a {glass}</p>

              <p>{instructions}</p>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}

export default App;
