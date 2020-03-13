import { useState } from "react";

const useRecipeButton = () => {
  const initialState = [false, false];
  const [activesClasses, setActive] = useState(initialState);

  const toggleActiveClass = (id, category) => {
    setActive(initialState.map((bool, index) => (index === id ? !bool : bool)));
    //dispatch retrieveReceipeByCategory
  };
  return { activesClasses, toggleActiveClass };
};

export default useRecipeButton;
