import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"
export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,

}) => {
    return (
        
       <div className='animate__animated animate__fadeIn'>
        <div className="card" >
          <img src={`./assets/heroes/${id}.jpg`} className="card-img imgcard" alt={superhero} />
          <div className="card-body">
            <h5 className="card-title">{superhero}</h5>
            <p className="card-text">{alter_ego}</p>
            {
            (alter_ego!==characters)
            && <p className="card-text">{characters}</p>

            }
          </div>
          <div className="card-footer">
            <small className="text-muted">{first_appearance}</small>
            
          </div>
          <Link to={`./hero/${id}`}>
                ...Mas
              
                </Link>
          </div>
          </div>
         
    )
}
