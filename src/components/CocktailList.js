import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const { drinks, loading } = useGlobalContext();
  if(loading) {
    return(
    <Loading />
    )
  }
  if(!drinks)  {
    return (
      <h2 className='section-title'>
        no cocktails matched your search criteria
      </h2>
    )
  }
    return(
      <section className='section'>
      <h2 className='section-title'>cocktails</h2>
      <div className='cocktails-center'>
        {drinks.map((item) => {
          return <Cocktail key={item.idDrink} item={item}/>
        })}
      </div>
    </section>
    )

}

export default CocktailList
