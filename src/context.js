import React, { useState, useContext, useEffect } from 'react'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState('');
  const [drinks, setDrinks] = useState([]);
  const [loading, setIsLoading] = useState(true);

  const apiCall = () => {
    fetch(url + query)
      .then(response => response.json())
      .then(data => {
        setDrinks(data.drinks);
        setIsLoading(false);
      })
  }
  useEffect(() => {
    apiCall();
  }, [query]);

  return <AppContext.Provider value={{setQuery, loading, drinks}}>
    {children}
    </AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
