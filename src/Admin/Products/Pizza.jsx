import React, {useEffect, useState} from 'react';
import styles from "./Pizza.module.css"
import {BASE_URL} from "../../constant";

const Pizza = () => {
    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState('');
    const [product, setProduct] = useState([]);

    const getName = (event) => {
        setName(event.currentTarget.value)
    }

    const getImage = (event) => {
        setImage(event.currentTarget.value)
    }

    const getDesc = (event) => {
        setDesc(event.currentTarget.value)
    }

    const getPrice = (event) => {
        setPrice(event.currentTarget.value)
    }
    const getPizza = () =>{
        const url = BASE_URL+'products';
        fetch(url)
            .then((response) => response.json())
            .then((data) => setProduct(data))
    }
    const addPizza = () => {
        const url = BASE_URL + 'products';

        const pizza = {
            image: image,
            name: name,
            desc: desc,
            price: price
        }
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(pizza)
        }
        fetch(url, options)
            .then((response) => response.json())
            .then((data) => (data))
            getPizza()
    }
  useEffect(() => {
        getPizza()
    }, [])


    const updatePizza= (id) =>{
        const url = BASE_URL+`products/${id}`;

        const options = {
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(product)
        }

        fetch(url,options)
            .then((response) => console.log(response))

    }
    const deletePizza = (id) =>{
        const url = BASE_URL + `products/${id}`;
        const options = {
            method:'DELETE'
        }
        fetch(url,options)
            .then((response) => getPizza(response))
    }

    return (
        <div className={styles.table}>
            <div className={styles.input}>
                <input onChange={getImage} placeholder="Картинка" type="text"/>
                <input onChange={getName} placeholder="Название" type="text"/>
                <input onChange={getDesc} placeholder="Состав" type="text"/>
                <input onChange={getPrice} placeholder="Цена" type="text"/>
                <button onClick={addPizza} className={styles.btb}>Добавить</button>
            </div>
            <table>

                {
                    product.map((item) => {
                        return <tr>
                            <td>{item.id}</td>
                            <td>{item.image}</td>
                            <td>{item.name}</td>
                            <td>{item.desc}</td>
                            <td>{item.price}</td>
                            <td>
                                <button onClick={updatePizza} className={styles.btb}>Редактировать</button>
                            </td>
                            <td>
                                <button onClick={() => {deletePizza(item.id)}}className={styles.btb}>Удалить</button>
                            </td>
                        </tr>
                    })
                }
            </table>

        </div>
    );
};

export default Pizza;