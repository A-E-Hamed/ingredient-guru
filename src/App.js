import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import { GlobalStyle } from "./globalStyles";
import RecipeDetails from "./components/Recipes/RecipeDetails";
import RecipeSearch from "./components/Recipes/RecipeSearch";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/recipe-make" element={<RecipeSearch />} />
        <Route path="/recipe-details" element={<RecipeDetails />} />
        <Route path="/" element={<Hero />} />
      </Routes>
    </Router>
  );
}

export default App;
