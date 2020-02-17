import React from 'react';

//import "./HomePage.scss";
import Directory from "../../components/directory/Directory";
import {HomePageContainer} from "./HomePage.styles";

const HomePage = () => (
//  <div className='homepage'>
    <HomePageContainer>
    <h1>Welcome to my Homepage</h1>
      <Directory />
      </HomePageContainer>
//  </div>
);

export default HomePage;