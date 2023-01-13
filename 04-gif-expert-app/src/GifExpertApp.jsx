import { useState } from "react";
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Demon Slayer']);
  
  const onAddCategory = ( newCategory ) => {
    setCategories( [ newCategory, ...categories] );
    //setCategories( (cat) => [...cat, 'cat'] );
  }

  return (
    <>
        {/**Titulo */}
        <h1>GifExpertApp</h1>

        {/**Input */}
        <AddCategory 
          // onAddCategory = { setCategories }
          onNewCategory = { value => onAddCategory(value) }
        />

        {/**Listado de Gifs */}

        <ol>
          { categories.map( (item, index) =>{
            return <li key={ index }>{item}</li>
          }) }
        </ol>
    </>
  )
}
