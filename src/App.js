import { useState } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles.css";
import logo from "./assets/logo.png";

function App() {
  // I'd like to try to animate the incoming drink data with a fade-in/out or something.
  AOS.init();
  const [drink, setDrink] = useState([]);
  const [loading, setLoading] = useState(true);
  const drinkImage = drink.strDrinkThumb;
  const drinkName = drink.strDrink;
  const glass = drink.strGlass;
  const instructions = drink.strInstructions;

  // Creates an array of the values from the drink object
  // const measure = Object.entries(drink).map(([key, value]) => {
  //   return value !== null ? drink[key] : "";
  // });

  const handleGetDrink = async () => {
    setLoading(true);
    try {
      await axios
        .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
        .then(response => {
          setLoading(false);
          setDrink(response.data.drinks[0]);
        });
    } catch (err) {
      console.log(err);
    }
  };

  console.log(drink);

  return (
    <div className="h-screen">
      <header className="flex py-8 justify-center align-center md:px-16 lg:justify-start lg:px-32">
        <img data-aos="zoom-in-right" src={logo} alt="Cocktail Roulette" />
      </header>
      <main className="px-4 flex h-full flex-col items-center lg:flex-row lg:px-32 lg:justify-between lg:-mt-32">
        <article
          data-aos="fade-in"
          className="pb-8 lg:max-w-xs lg:mr-24 2xl:mr-48"
        >
          <h2>Let's Mix It Up.</h2>
          <p className="py-4">
            Cocktail Roulette is a game of chance. Roll a random cocktail and
            try something new for a change!
          </p>
          <button onClick={handleGetDrink}>Mix it up</button>
        </article>
        <div className="w-full h-full drink-card-glow lg:h-2/3 2xl:h-4/5">
          <div className="drink-card w-full h-full flex justify-center items-center p-4">
            {loading === false ? (
              <article
                data-aos="fade-in"
                data-aos-delay="300"
                data-aos-duration="1000"
                className="drink-card-inner grid grid-cols-1 col-auto gap-4 items-center lg:max-w-3xl 2xl:gap-12"
              >
                <img
                  className="rounded-2xl max-w-screen-sm w-full drink-image"
                  src={drinkImage}
                  alt=""
                />
                <div className="w-full col-span-2 lg:col-span-1">
                  <h2>{drinkName}</h2>
                  <div className="flex justify-between py-4 w-60">
                    <ul>
                      {drink.strMeasure1 && <li>{drink.strMeasure1}</li>}
                      {drink.strMeasure2 && <li>{drink.strMeasure2}</li>}
                      {drink.strMeasure3 && <li>{drink.strMeasure3}</li>}
                      {drink.strMeasure4 && <li>{drink.strMeasure4}</li>}
                      {drink.strMeasure5 && <li>{drink.strMeasure5}</li>}
                      {drink.strMeasure6 && <li>{drink.strMeasure6}</li>}
                      {drink.strMeasure7 && <li>{drink.strMeasure7}</li>}
                      {drink.strMeasure8 && <li>{drink.strMeasure8}</li>}
                      {drink.strMeasure9 && <li>{drink.strMeasure9}</li>}
                      {drink.strMeasure10 && <li>{drink.strMeasure10}</li>}
                      {drink.strMeasure11 && <li>{drink.strMeasure11}</li>}
                      {drink.strMeasure12 && <li>{drink.strMeasure12}</li>}
                      {drink.strMeasure13 && <li>{drink.strMeasure13}</li>}
                      {drink.strMeasure14 && <li>{drink.strMeasure14}</li>}
                      {drink.strMeasure15 && <li>{drink.strMeasure15}</li>}

                    </ul>
                    
                    <ul>
                      {drink.strIngredient1 && <li>{drink.strIngredient1}</li>}
                      {drink.strIngredient2 && <li>{drink.strIngredient2}</li>}
                      {drink.strIngredient3 && <li>{drink.strIngredient3}</li>}
                      {drink.strIngredient4 && <li>{drink.strIngredient4}</li>}
                      {drink.strIngredient5 && <li>{drink.strIngredient5}</li>}
                      {drink.strIngredient6 && <li>{drink.strIngredient6}</li>}
                      {drink.strIngredient7 && <li>{drink.strIngredient7}</li>}
                      {drink.strIngredient8 && <li>{drink.strIngredient8}</li>}
                      {drink.strIngredient9 && <li>{drink.strIngredient9}</li>}
                      {drink.strIngredient10 && <li>{drink.strIngredient10}</li>}
                      {drink.strIngredient11 && <li>{drink.strIngredient11}</li>}
                      {drink.strIngredient12 && <li>{drink.strIngredient12}</li>}
                      {drink.strIngredient13 && <li>{drink.strIngredient13}</li>}
                      {drink.strIngredient14 && <li>{drink.strIngredient14}</li>}
                      {drink.strIngredient15 && <li>{drink.strIngredient15}</li>}
                    </ul>
                  </div>
                  <p className="text-sm italic">Best served in a {glass}</p>
                </div>
                <div className="lg:col-span-2">
                  <p>{instructions}</p>
                </div>
              </article>
            ) : (
              ""
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
