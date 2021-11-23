import React,{useEffect, useState} from "react";
import Actor from "../Actor/Actor";
import './Movie.css';
import Budget from "../Budget/Budget";

const Movie =()=>{
     const [actors, setActors] = useState([]);
     const[budget,setBudget]=useState([])

     useEffect( () => {
             fetch('./tools.JSON')
             .then(res =>res.json())
             .then(data =>setActors(data));
     }, [])

     const handleAddtoBudget = (actor) =>{
             const newActor=[...budget,actor];
             setBudget(newActor);
     }
     return(
        <div className='movie-container' >
     <div className="actor-container row">
             <h1 className="text-color">Actors: {actors.length}</h1>
             
             {
                 actors.map(actor=><Actor actor={actor}
                 handleAddtoBudget={handleAddtoBudget}></Actor>)
             }
     </div>

<div className='budget-container'>
<Budget budget={budget}></Budget>

        </div>
        
        </div>
        );
}

export default Movie;