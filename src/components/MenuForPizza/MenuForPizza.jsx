import React from 'react';
import PizzaMenu from '../PizzaMenu/PizzaMenu';

const MenuForPizza = ({addToBasket, removeItemInBasket}) => {
    return (
        <div>
            <PizzaMenu/>
        </div>
    );
};

export default MenuForPizza;