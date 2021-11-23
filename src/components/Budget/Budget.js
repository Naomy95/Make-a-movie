import React from "react";
import './Budget.css';

const Budget =(props) =>{
    const {budget}=props;
    let total=0;
    for (const actor of budget){
        total=total+actor.Salary;
       
    }
    return(
        <div className="budget">
<h3>Total Actors:{props.budget.length}</h3>
<h3>Total Budget: US$ {total} </h3>


        </div>
    )
}

export default Budget;