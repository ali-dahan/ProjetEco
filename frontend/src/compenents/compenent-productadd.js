import { useState } from "react";
import { addProduct } from "../services/product.services";

export function ProductAddForm(){
    const [name,setName]=useState("");
    const [price,setPrice]=useState(0);

    function handlForm(event){
        event.preventDefault();
        const p={"name":name,"price":price}
        addProduct(p);
    }
    return(
      <form onSubmit={(e)=>handlForm(e)}>
      <label htmlFor='name'>Name: </label>
      <input type="text" id='name' onChange={(e)=>setName(e.target.value)}/>
      <br/>
      <label htmlFor='price'>Prix: </label>
      <input type="text" id='name' onChange={(e)=>setPrice(e.target.value)}/>
      <br/>
      <button type="submit" value={"Enregistrer"}>Ajouter</button>
      <button type="reset" value={"Annuler"}>Annuler</button>
  </form>

  
    )
}