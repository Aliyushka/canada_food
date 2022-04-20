import React from 'react';
import Header from "../../components/Header/Header";
import Content from "../../components/Content/Content";
import MenuNewProducts from "../../components/MenuNewProducts/MenuNewProducts";
import MenuForPizza from "../../components/MenuForPizza/MenuForPizza";
import AboutUs from "../../components/AboutUs/AboutUs";
import Review from "../../components/Review/Review";
import Footer from "../../components/Footer/Footer";



const HomePage = ({addToBasket, removeItemInBasket}) => {
    return (
        <>
            <div className="container">
                <Header/>
                <Content/>
                <MenuNewProducts/>
                <MenuForPizza addToBasket={addToBasket} removeItemInBasket={removeItemInBasket}/>
                <AboutUs/>
                <Review/>
            </div>
            <Footer/>

        </>
    );
};

export default HomePage;