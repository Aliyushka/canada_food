import React from 'react';
import Content from "../../components/Content/Content";
import MenuNewProducts from "../../components/MenuNewProducts/MenuNewProducts";
import MenuForPizza from "../../components/MenuForPizza/MenuForPizza";
import AboutUs from "../../components/AboutUs/AboutUs";
import Review from "../../components/Review/Review";

const HomePage = ({addToBasket, removeItemInBasket}) => {
    return (
        <>
            <div>
                <Content/>
                <MenuNewProducts/>
                <MenuForPizza addToBasket={addToBasket} removeItemInBasket={removeItemInBasket}/>
                <AboutUs/>
                <Review/>
            </div>
        </>
    );
};

export default HomePage;