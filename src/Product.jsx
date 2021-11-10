import React from 'react'

function Product({name, price, left, image}) {
    
    return (
        <tr>
            <td>{name}</td>
            <td>{price}</td>
            <td><img src={image}/></td>
            <td>{left}</td>
            <td><button className="Btn">купить</button></td>
          
        </tr>
    )
}

export default Product
