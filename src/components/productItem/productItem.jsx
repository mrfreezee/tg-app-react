import React from 'react'
import './productItem.css'
import Button from '../button/button';
    
const ProductItem = ({product, className, onAdd}) => {

    const onAddHandler = () =>{
        onAdd(product)
    }
    return (
        <div className={'product' + ' ' + className}>
            <div className='img'>
                <img/>
            </div>
            <div className='title'>
                {product.title}
            </div>
            <div className='description'>
                {product.discritpion}
            </div>
            <div className='price'>
                <span>
                    Стоимость: <b>{product.price}p</b>
                </span>
            </div>
            <Button className='add-btn' onClick={onAddHandler}>
                Добавить в корзину
            </Button>
            
        </div>
    );
};

export default ProductItem;