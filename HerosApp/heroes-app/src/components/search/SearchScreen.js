import React,{useMemo}from 'react'
import { heroes } from '../../data/heroes';
import { HeroCard } from '../heroes/HeroCard';
import   {useForm} from '../../hooks/useForm'
import { useState } from 'react';
import { useLocation } from 'react-router';
import queryString from 'query-string';
import { getHeroesByName } from '../../selectors/getHeroesByName';
export const SearchScreen = ({history}) => {
//extraccion de variables de url
const location=useLocation();
//separacion por objetos
//con desestructuracion en especifico q
 const {q=''}=queryString.parse(location.search)

 
 //data de heroes
 const [formValues, handleinputChange] = useForm({
     searchText:q
    });
    const {searchText}=formValues;

    const heroesFiltered=useMemo(() => getHeroesByName(q),[q])
    
    

//agregar el componente al menu
//submit y guardar lo que se va a buscar
let text;

const handleSearch=(e)=>{
e.preventDefault();

    // console.log(searchText);
    history.push(`?q=${searchText}`);

}
    return (
        <div>
            <h1>Search Screen</h1>
            <hr/>
            <div className='row'>
                <div className='col-5'>
                    <h4>
                        Search Form
                    </h4>
            <hr/>
            <form onSubmit={handleSearch}>
                <input
                type='text'
                placeholder='find your hero '
                className='form-control'
                 onChange={handleinputChange}
                 name='searchText'
                 
                 autoComplete='off'

                />
                <button
                type='submit'
                className='btn m-1 btn-block btn-outline-primary'
                
                >
                    Search
                </button>
            </form>
                </div>
                <div className='col-7'>
                    <h4>Results</h4>
                     <hr/>
                     {
                         (q==='')
                    &&
                    <div className='alert alert-info'>
                        Search a hero
                    </div>
                        }


                    {
                         (q !=='' && heroesFiltered.length===0)
                    &&
                    <div className='alert alert-danger'>
                        There is no a hero with {q}
                    </div>
                     }

                     {heroesFiltered.map(hero =>(
                                <HeroCard
                                key={hero.id}
                                {...hero}
                                />
                     ))
                     }
                </div>
            </div>
        </div>
    )
}
