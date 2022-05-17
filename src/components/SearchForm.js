import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setQuery } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
  <section className='section search'>
  <form className='search-form' onSubmit={handleSubmit}>
    <div className='form-control'>
      <label htmlFor='name'>search your favorite cocktail</label>
      <input
        type='text'
        name='name'
        id='name'
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  </form>
  </section>
  )
}

export default SearchForm
