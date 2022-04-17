import React from 'react';

import PizzaMenu from "../../components/PizzaMenu/PizzaMenu";


const Sushi = ({sushi}) => {
    return (
        <div>
            <PizzaMenu/>
            <p>Суши</p>
            {
                sushi.map(item => {
                    return (
                        <div key={item.id} className={s.sushiPage}>
                            <div className={s.allSushi}>
                                <img src={item.image} alt=""/>
                                <h1>{item.name}</h1>
                                <p>{item.title}</p>
                                <h3>{item.price}</h3>
                                <button>+</button>
                                <button>-</button>
                            </div>
                            <button>Заказать</button>

                        </div>
                    )
                })
            }


        </div>
    );
};

export default Sushi;