import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onSubmit = ( event ) => {
      event.preventDefault();
      if(inputValue.trim().length <= 1)
        return;
      onNewCategory( inputValue.trim() );
      setInputValue('');
    }
    
    const onInputChange = (event) => { 
      setInputValue( event.target.value );
    }


  return (
    <form onSubmit={ (event) => onSubmit(event)}>

      <input 
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={ (event) => onInputChange(event) }
      />
    </form>
  )
}
