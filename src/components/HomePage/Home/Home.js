import React from 'react';
import Feedback from '../Feedback/Feedback';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import OurWorks from '../OurWorks/OurWorks';
import ProjectMessage from '../ProjectMessage/ProjectMessage';
import Services from '../Services/Services';
import WorkedWith from '../WorkedWith/WorkedWith';


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <WorkedWith></WorkedWith>
            <Services></Services>
            <OurWorks></OurWorks>
            <Feedback></Feedback>
            <ProjectMessage></ProjectMessage>
        </div>
    );
};

export default Home;