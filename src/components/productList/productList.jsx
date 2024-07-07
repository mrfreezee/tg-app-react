import React, { useState } from 'react'
import './productList.css'
import ProductItem from '../productItem/productItem';
import { useTelegram } from '../../hooks/useTelegram';

const products = [
    {id:1, title: 'Майка', price: '50p', description: 'Белая'},
    {id:2, title: 'Шорты', price: '63p', description: 'Черные'},
    {id:3, title: 'Джинсы', price: '70p', description: 'Темно-синие'},
    {id:4, title: 'Кепка', price: '20p', description: 'Белая'},
    {id:5, title: 'Майка', price: '40p', description: 'Желтая'},
    {id:6, title: 'Майка', price: '45p', description: 'Синяя'}
]
    

    const getTotalPrice = (items = []) =>{
        return items.reduce((acc, item) =>{
            return acc += item.price
        }, 0)
    }


const ProductList = () => {
    
    const [addedItems, setAddedItems] = useState([])

    const {tg} = useTelegram()

    const onAdd = (product) =>{
        const alreadyAdded = addedItems.find(item => item.id === product.id)
        let newItems = []

        if(alreadyAdded){
            newItems = addedItems.filter(item => item.id !== product.id)
        } else{
            newItems = [...addedItems, product]
        }
        setAddedItems(newItems)

        if(newItems.length === 0){
            tg.MainButton.hide()
        } else{
            tg.MainButton.show()
            tg.MainButton.setParams({
                text: `Купить ${getTotalPrice(newItems)}`
            })
        }
    }

    return (
        <div className='list'>
            {products.map(item =>(
                <ProductItem
                    product={item}
                    onAdd={onAdd}
                    className='item'
                />
            ))}
        </div>
    );
};

export default ProductList;