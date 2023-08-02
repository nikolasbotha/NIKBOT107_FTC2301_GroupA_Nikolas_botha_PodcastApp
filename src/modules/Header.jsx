import React, { useState, useContext } from 'react';
import { GlobalContext} from '../GlobalContext/GlobalContext'
import { Link } from 'react-router-dom';
import bookLogo from '../assets/book.svg';
import { SlSwitch, SlOption, SlSelect, SlIcon, SlInput, SlButton } from '@shoelace-style/shoelace/dist/react';

import './Header.css';

export default function Header() {
  const [globalData, setGlobalData] = useContext(GlobalContext)

  const SearchBar = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');
  
    const handleInputChange = (event) => {
      setSearchQuery(event.target.value);
    };
  
    
    const handleSearchClick = () => {
        // Update the searchQuery in globalData
        setGlobalData((prevState) => ({
          ...prevState,
          searchQuery: searchQuery,
        }));
      };

     
    

    return (
      <div>
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="Search"
        />
        <button onClick={handleSearchClick}>Search</button>
      </div>
    );
  };

  const handleHomeClick = () => {
    // Update the searchQuery in globalData
    setGlobalData((prevState) => ({
      ...prevState,
      searchQuery: '',
    }));
  };

  return (
    <div className="header-conatiner">
      <nav className="navBar">
        <Link to="/home"> 
          <img onClick={handleHomeClick} src={bookLogo} className="logo" alt="Pod-_-bot" />
        </Link> 
        <h2 className="heading">Pod-_-bot</h2>
        <SlSwitch>Dark Mode</SlSwitch>
      </nav>
      <div className="searchbar">
        <Link to="/home/favorites"> 
          <SlButton variant="default" size="medium" circle>
            <SlIcon name="heart" />
          </SlButton>
        </Link> 
        <SlSelect >
          <SlButton />
          <SlIcon name="filter" slot="prefix"></SlIcon>
          <SlOption value="option-1">
            <SlIcon name="sort-alpha-down" slot="prefix"></SlIcon>A-Z
          </SlOption>
          <SlOption value="option-2">
            <SlIcon name="sort-alpha-down-alt" slot="prefix"></SlIcon>Z-A
          </SlOption>
          <SlOption value="option-3">
            <SlIcon name="filter" slot="prefix"></SlIcon>Option 3
          </SlOption>
        </SlSelect>
        
        <SearchBar />
      </div>
    </div>
  );
}
