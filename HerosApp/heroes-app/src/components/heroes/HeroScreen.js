import React from "react";
import { Fragment  } from "react";
import { Redirect, useParams } from "react-router";
import { getHeroesById } from "../../selectors/getHeroesById";
import './style.css'
export const HeroScreen = ({history}) => {
 
 const {heroeId} = useParams();
const hero= getHeroesById(heroeId)
if(!hero){
   return  <Redirect to='/'/>
}

const handleReturn=()=>{
    if(history.length<=2){
        history.push('/');
    }else{
    history.goBack();
    }

}
console.log(hero)

const {
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,

}=hero;
 return(

    <div className='row mt-5'>


    <div className='col-4'>
        <img src={`../assets/heroes/${heroeId}.jpg`}
        alt={superhero}
        className='img-thumbnail animate__animated animate__fadeInLeft'
        />
           <div className='col-8 animate__animated  animate__fadeInLeft'>
                <h3>{superhero}</h3>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'><b>Alter Ego:</b>{alter_ego}</li>
                    <li className='list-group-item'><b>Publisher:</b>{publisher}</li>
                    <li className='list-group-item'><b>First Appearance:</b>{first_appearance}</li>
                </ul>

                <h5>Characters: {characters}</h5>
                <button
                className='btn btn-outline-info'
                onClick={handleReturn}
                >Regresar</button>
           </div>

    </div>
   
   
   
    </div>

 );
 
};

