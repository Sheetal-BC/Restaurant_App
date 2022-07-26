import React, {useContext} from 'react';
import Modal from '../UI/Modal';
import cartContext from '../../store/cart-context'

import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) =>{
  let total=0;
  const cartcntx=useContext(cartContext)

 const hasItems = cartcntx.items.length >0;
 
 const addItemHandler=(item)=>{

 cartcntx.addItem({ ...item,quantity:1})
 }
 const removeItemHandler=(item)=>{
     if(item.quantity>0){
     cartcntx.addItem({...item,quantity:-1})
     }
     else
     cartcntx.removeItem(item)
 }

  const cartItems =(<ul className={classes['cart-items']}>
      {cartcntx.items.map((item)=> (
        
   <CartItem key={item.id}
   name={item.name}
   quantity={item.quantity}
   price={item.price}
   onAdd={addItemHandler.bind(null,item)}
   onRemove={removeItemHandler.bind(null,item)}
   /> 
 ))}
   </ul>
  )
  
   cartcntx.items.forEach((item) => {
      total=total+(Number(item.quantity)*Number(item.price));
      });

      total= `$${total.toFixed(2)}`;
     
return(
<Modal onClose={props.onClose}>
   {cartItems}
   <div className={classes.total}>
       <span>Total amount</span>
       <span>{total}</span>
        </div>
   <div className={classes.actions}>
       <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
      {hasItems && <button className={classes.button}>Order</button>}     
      </div>
</Modal>
  )
};

export default Cart;