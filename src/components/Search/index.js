import React from 'react'
import './index.css'
import data from "../Searchdummydata.json";
import {FaAngleDown} from "react-icons/fa";

const Search = () => {
  return (
    <div className='search_Container'>
      {
        data.map(val=>{
            return(
            <div className="rent-details" key={val.id}>
                      <h1 className="rent-title">{val.title}</h1>
                      <p className="details">{val.details} <FaAngleDown/></p>
            </div> 
            )
        })
      }
      <button className='Button'>Search</button>
    </div>
  )
}

export default Search
