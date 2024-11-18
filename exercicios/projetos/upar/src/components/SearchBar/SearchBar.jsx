import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

import './SearchBar.css';


function SearchBar(){

  const [searchValue, setsearchValue] = useState('');
{/* estado do componente searchValue = valor do estado/ setsearchValue = função que vamos usar para atualizar */}
  return(
    
    <form className="search-bar">
    <input type="search" value={searchValue} placeholder="Buscar produtos" className="search__input" onChange={({ target }) => setsearchValue(target.value)} required/>
    {/* pega o texto digitado e armazena */}

    {searchValue}
    <button type="submit" className="search__button">
    <FiSearch />
    </button>
    </form>

   
  );
}

export default SearchBar;
