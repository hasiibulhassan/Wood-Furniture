import React from 'react';
import HeroSection from '../Hero/Hero';
import DealOfTheWeek from '../Deal/DealOfTheWeek';
import TrendingCollection from '../Trending Collection/TrendingCollection';
import AdPage from '../AdPage/Adpage';
import CategoryByProducts from '../Products Catagory/CategoryByProducts';
import NewArrivals from '../NewArrival/NewArrival';
import WhatCustomersSay from '../Testimonials/WhatCustomersSay';
import BlogSection from '../Blogs/BlogSection';
import AdBanner from '../AdPage/AdBanner';

const Home = () => {
    return (
        <div>

            <HeroSection></HeroSection>
            <DealOfTheWeek></DealOfTheWeek>
            <TrendingCollection></TrendingCollection>
            <AdPage></AdPage>
            <CategoryByProducts></CategoryByProducts>
            <NewArrivals></NewArrivals>
            <AdBanner></AdBanner>
            <WhatCustomersSay></WhatCustomersSay>
            <BlogSection></BlogSection>

            
        </div>
    );
};

export default Home;