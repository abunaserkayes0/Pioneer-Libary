import React from 'react';
import Banner from '../Banner/Banner';
import TopRatedReviews from '../TopRatedReviews/TopRatedReviews';
import './Home.css';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopRatedReviews></TopRatedReviews>
        </div>
    );
};

export default Home;