import React, {useState, useEffect} from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import delivery from "./pages/delivery/Delivery";
import contacts from "./pages/contacts/Contacts";
import basket from "./pages/basket/Basket";
import Pizzas from "./components/Pizzas/Pizzas";
import Sushi from "./pages/Sushi/Sushi";
import Roll from "./pages/Roll/Roll"
import Salads from "./pages/Salads/Salads";
import Desert from "./pages/Salads/Salads";

const App = () => {
    const [sushi, setSushi] = useState([])
    const [card, setCard] = useState([])
    const addToBasket = (item) => {
        if (card.find(i => i.id === item.id)){
            alert('Вы уже добавили')
        } else {
            setCard([...card, item])
        }
    }

    useEffect(() => {
        fetch('http://localhost:3000/sushi')
            .then(response => response.json())
            .then(data => setSushi(data))
    }, [])

    const removeItemInBasket = (id) => {
        setCard(prev => prev.filter(item => item.id !== id))
    }

    return (
        <BrowserRouter>
            <div className="container">
                <Header card={card}/>
                <Routes>
                    <Route path="/"
                           element={<HomePage addToBasket={addToBasket} removeItemInBasket={removeItemInBasket}/>}/>
                    <Route path="/delivery" element={<delivery/>}/>
                    <Route path="/contacts" element={<contacts/>}/>
                    <Route path="/basket" element={<basket card={card} removeItemInBasket={removeItemInBasket}/>}/>
                    <Route
                        path='/pizzas'
                        element={
                            <Pizzas
                                addToBasket={addToBasket}
                                removeItemInBasket={removeItemInBasket}
                            />
                        }
                    />
                    <Route path="/sushi" element={<Sushi sushi={sushi}/>}/>
                    <Route path="/roll" element={<Roll/>}/>
                    <Route path="/salads" element={<Salads/>}/>
                    <Route path="/desert" element={<Desert/>}/>
                </Routes>
                <Footer/>
            </div>

        </BrowserRouter>
    );
}

export default App;
