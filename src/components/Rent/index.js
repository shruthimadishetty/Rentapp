import React, {useState} from "react";
import './index.css';
import data from "../DummyData.json";
import {FaRegHeart} from "react-icons/fa";
import {FaBath} from "react-icons/fa";
import {FaBorderAll} from "react-icons/fa";
import Search from "../Search";


const Rent=()=> {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div className="templateContainer">
        <div className="searchInput_Container">
          <div className="container-heading">
          <h1 className="heading-search">Search Properties to rent</h1>
          <input type="text" value={searchTerm} placeholder="Search with searchBar" onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
          </div>
          <div>
            <Search/>
          </div>
        </div>
        <div className="template_Container">
          {
            data 
              .filter(val => 
                val.title.toLowerCase().includes(searchTerm.toLowerCase()))
              .map((val) => {
                return(
                  <div className="rent-details" key={val.id}>
                      <img src={val.image} alt="" className="img-rent"/>
                      <div className="icon"><FaRegHeart/></div>
                      <p className="rent-month">{val.rentmonth}<span className="Month">/Month</span></p>
                      <h1 className="name-house">{val.title}</h1>
                      <p className="location">{val.location}</p>
                      <div className="info-details">
                        <FaBath/><span className="bath-name">2 Bathrooms</span>
                        <FaBorderAll/><span className="bath-name">6x7.5m^2</span>
                      </div>
                  </div> 
                )
              })
          }
        </div>
      </div>
    </>
  )
}

export default Rent