import React from 'react';
import HeaderW from '../components/HeaderW.js'
import MenuList from '../components/MenuList.js'
import OrderBox from '../components/OrderBox'



function Waiter () {
        
    return (
        <>
        <HeaderW/>
        <MenuList />
        <OrderBox />
        <button className='sendToKitchen'>Enviar a cocina</button>
        </>
  
    )
    
}
     
    // const [orderProducts, setOrderProducts] = useState([])

    // const creatingOrder = (name, price, id) => {
    //     const array = [...orderProducts, {name, price, id}]
    //     setOrderProducts(array)
    //     console.log(array)
    // }

    // return (
    //     <>
    //     <HeaderW/>
    //     <MenuList/>
    //     <OrderBox />
    //     <button className='sendToKitchen'>Enviar a cocina</button>
    //     </>

    // )

export default Waiter