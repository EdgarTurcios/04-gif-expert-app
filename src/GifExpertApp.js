import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {


const [categories, setCategories]= useState ( ['Naruto']);
  //const categories = ['One punch', 'Samurai X', 'Dragon Ball'];
//const handleAdd = () => {
//setCategories (cats => [ ...cats, 'Naruto']);

 //console.log(categories);
//}
  return (
    <>
   <h2> GifExpertApp </h2>
   <AddCategory setCategories= { setCategories} />
    <hr  />



<ol>
{
categories.map(category =>(
 
   <GifGrid 
   key={ category }
   category={ category }
    />
))
}
</ol>

       </>
  )
}
