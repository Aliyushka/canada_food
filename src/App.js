import React, {useState, useEffect} from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import delivery from "./pages/delivery/Delivery";
import contacts from "./pages/contacts/Contacts";
import basket from "./pages/basket/Basket";
import AppContext from "./contex";

const App = () => {
    const [card, setCard] = useState([])
    const [count, setCount] = useState(0)
    const addToBasket = (item) => {
        if (card.find(i => i.id === item.id)) {
            alert('Вы уже добавили')
        } else {
            setCard([...card, item])
        }
    }

    function increment() {
        setCount(count + 1)
    }
    function decrement() {
        setCount(count - 1)
    }
    const deleteFromBasket = (id) => {
        setCard(prev => prev.filter(item => item.id !== id))
    }

    return (
        <AppContext.Provider value={{
            deleteFromBasket,
            addToBasket,
            card,
            increment,
            decrement,
            count
        }}>
            <BrowserRouter>
                <div className="container">
                    <Header/>
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/delivery" element={<delivery/>}/>
                        <Route path="/contacts" element={<contacts/>}/>
                        <Route path="/basket" element={<basket/>}/>
                    </Routes>
                    <Footer/>
                </div>
            </BrowserRouter>
        </AppContext.Provider>
    );
}
export default App;
