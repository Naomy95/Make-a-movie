import React from 'react'
import { Card ,Row,Col,Image} from 'react-bootstrap';
import { useState } from 'react';
import './Actor.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons'


const Actor = (props) =>{
  
  const [double, setDouble] = useState(false)
    console.log(props);
    const {name,img,age,movie,Salary} = props.actor;
    const element = <FontAwesomeIcon icon={faFilm} />
    return(
        <div className="all-actors col-lg-4">
          
            
     <div className=" col-lg-4">
<Card className="actor" style={{ width: '20rem'}}>
  <Card.Img className="mx-auto" variant="top" src={img} />
  <Card.Body>
    <Card.Title className="title-color">{name}</Card.Title>
    <Card.Text>
    <p> Age: <small> {age}</small> </p>
    <p>Movies: <small> {movie}</small> </p>
    <p> Salary: <small> {Salary} Us Dollar</small> </p>
     
    </Card.Text>
    <button 
    disabled={double}
          onClick={()=>{props.handleAddtoBudget(props.actor);
          setDouble(true)}}
          
          className="btn-add">{element} Add to list</button>
  </Card.Body>
</Card>
         

   

     </div>

     </div>    

         


            
            
           
    );
};

export default Actor;