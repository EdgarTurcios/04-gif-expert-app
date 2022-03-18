import React, { useState } from "react";
import  PropTypes from 'prop-types';
export const AddCategory = ({setCategories}) => {
const [InputValue, setInputValue] = useState ('');

const handleinputChange = (e) => {
setInputValue(e.target.value );

}
const  handleSubmit = (e) => {
//console.log ('submit hecho')
e.preventDefault();

if  ( InputValue.trim().length>2 ) {
    setCategories (cats => [ InputValue, ...cats ] );
 setInputValue('');
}
}

    return (
<form onSubmit={ handleSubmit}>
<input
type="text"
value={ InputValue }
onChange= { handleinputChange  }
/>
</form>

    )
}

AddCategory.prototype ={
setCategories: PropTypes.func.isrequired

}