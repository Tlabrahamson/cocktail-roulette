import { useState } from "react";
import axios from "axios";
import "./styles.css";
import logo from "./assets/logo.png";

function App() {
  const [drink, setDrink] = useState([]);
  const drinkImage = drink.strDrinkThumb;
  const drinkName = drink.strDrink;
  const glass = drink.strGlass;
  const instructions = drink.strInstructions;

  // Creates an array of the values from the drink object
  const measure = Object.entries(drink).map(([key, value]) => {
    return value !== null ? drink[key] : "";
  });

  const handleGetDrink = async () => {
    try {
      await axios
        .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
        .then(response => {
          setDrink(response.data.drinks[0]);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="h-screen">
      <header className="flex py-8 justify-center align-center md:px-16 lg:justify-start lg:px-32">
        <img src={logo} alt="Cocktail Roulette" />
      </header>
      <main className="px-4 flex h-full flex-col items-center lg:flex-row lg:px-32 lg:justify-between lg:-mt-32">
        <article className="pb-8 max-w-xs lg:mr-24 2xl:mr-48">
          <h2>Let's Mix It Up.</h2>
          <p className="py-4">
            Cocktail Roulette is a game of chance. Roll a random cocktail and
            try something new for a change! I hope you have a bunch of liquor on
            hand!
          </p>
          <button onClick={handleGetDrink}>Mix it up</button>
        </article>

        <div className="w-full h-4/5 drink-card-glow">
          <div className="drink-card w-full h-full flex">
            <article className="p-4 flex flex-col items-center md:flex-row lg:max-w-3xl">
              <img
                className="rounded-2xl object-contain max-w-xs w-full md:mr-4"
                src={drinkImage}
                alt=""
              />
              <div>
                <h2>{drinkName}</h2>
                <div className="flex justify-between py-4">
                  <ul>
                    {/* 
                      This maps over the measure array from above and grabs the data from the index range 36-52. If there is no data, it returns nothing.
                    */}
                    {measure.map((measure, index) =>
                      index >= 36 && index <= 52 && index !== "" ? (
                        <div key={index}>
                          <li>{measure}</li>
                        </div>
                      ) : (
                        ""
                      )
                    )}
                  </ul>
                  {/* 
                      Same thing as above but grabs the ingredients instead of the measurements.
                  */}
                  <ul>
                    {measure.map((measure, index) =>
                      index >= 21 && index <= 35 && index !== "" ? (
                        <div key={index}>
                          <li>{measure}</li>
                        </div>
                      ) : (
                        ""
                      )
                    )}
                  </ul>
                </div>
                <p>{glass}</p>
                <p>{instructions}</p>
              </div>
            </article>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
