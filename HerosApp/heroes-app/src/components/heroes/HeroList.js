import React from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { getHeroesById } from '../../selectors/getHeroesById'
import { HeroCard } from './HeroCard';
import "./style.css"
export const HeroList=({publisher}) => {

    const heroes =getHeroesByPublisher(publisher);




    return (
        <div className='card-group' >
           
                
                     {

                         heroes.map(hero=>(
                            <HeroCard key={hero.id}
                                {...hero}
                           />
                         ))
                     }
               
        </div>
    )
}
