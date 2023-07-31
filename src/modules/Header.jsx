import React from 'react'
//asst
import bookLogo from '../assets/book.svg'
import { SlSwitch, SlOption, SlSelect, SlIcon, SlInput} from '@shoelace-style/shoelace/dist/react';

import './Header.css'

export default function Header() {
    return(
   <div>  
    <nav className="navBar">
    <img src={bookLogo} className="logo" alt="Pod-_-bot" />
    <h2 className="heading">Pod-_-bot</h2>

    <SlSwitch>Dark Mode</SlSwitch>

</nav>
<div className="searchbar">
    <SlSelect >
    <SlIcon name="filter" slot="prefix"></SlIcon>
      <SlOption value="option-1">
      <SlIcon name="sort-alpha-down" slot="prefix"></SlIcon>A-Z</SlOption>
      <SlOption value="option-2" >
      <SlIcon name="sort-alpha-down-alt" slot="prefix"></SlIcon>Z-A </SlOption>
      <SlOption value="option-3">
      <SlIcon name="filter" slot="prefix"></SlIcon>Option 3</SlOption>
  </SlSelect>
  <SlInput placeholder="Search" size="medium">
    <SlIcon name="search" slot="prefix"></SlIcon>
  </SlInput>
</div>
</div>)
}