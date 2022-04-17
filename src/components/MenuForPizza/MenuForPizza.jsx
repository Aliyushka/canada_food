import React from 'react';
import PizzaMenu from '../PizzaMenu/PizzaMenu';
import Pizzas from "../Pizzas/Pizzas";

const MenuForPizza = ({addToBasket, removeItemInBasket}) => {
    return (
        <div>
            <PizzaMenu/>
            <Pizzas
                addToBasket={addToBasket}
                removeItemInBasket={removeItemInBasket}
            />
        </div>
    );
};

export default MenuForPizza;