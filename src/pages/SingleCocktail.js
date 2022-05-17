import React, {useEffect, useState} from 'react'
import Loading from '../components/Loading'
import { Link } from 'react-router-dom'

const SingleCocktail = (props) => {
  let id = props.match.params.id;
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  const [loading, setIsLoading] = useState(true);
  const [cocktail, setCocktail] = useState();
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data =>{
        setCocktail(data.drinks[0]);
        setIsLoading(false)
        console.log(data.drinks[0])
      } )
  },[]);
  
  if(loading) {
    return(
      <Loading />
    )
  }
  if(cocktail)
  return (
    <section className='section cocktail-section'>
    <Link to='/' className='btn btn-primary'>
      back home
    </Link>
    <h2 className='section-title'>{cocktail.strDrink}</h2>
    <div className='drink'>
      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink}></img>
      <div className='drink-info'>
        <p>
          <span className='drink-data'>name :</span> {cocktail.strDrink}
        </p>
        <p>
          <span className='drink-data'>category :</span> {cocktail.strCategory}
        </p>
        <p>
          <span className='drink-data'>info :</span> {cocktail.strAlcoholic}
        </p>
      </div>
    </div>
  </section>
  )
}

export default SingleCocktail
