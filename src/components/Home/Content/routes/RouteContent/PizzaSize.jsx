import React from 'react'

const PizzaSize = ({ sizes }) => {
    console.log(sizes);
    return (
        <ul className='content__card-sizes'>
            {sizes.map((size) => (
                <li key={size} className='content__card-size'>{size}</li>
            ))}
        </ul>
    )
}

export default PizzaSize
