

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteItem } from '../store/features/counter/counterSlice'

function CartItems() {
    const items = useSelector(state => state.counter.productItem)
    const itemsInCart = useSelector(state => state.counter.value)
    const itemscount = useSelector(state => state.counter.pecies)

    const dispatch = useDispatch()

    if (itemsInCart == 0) {
        return <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
           <h3> No Items In Cart, Please Add Items.</h3>
        </div>
    } else {
        return (
            items.map((product) => {

                // just to get the quantity
                let itemNumber = 0
                itemscount.map((x)=>x.id === product.id ? itemNumber = x.qty :x)
                return (
                    <div className='col-auto m-2 p-3 text-center border' key={product.id}>
                        <img src={product.image} alt={product.title} height='150' width='150' />
                        <div className="card-body">
                            <h5 className="card-title mb-0">{product.title.substring(0, 12)}</h5>
                            <p className="card-text lead fw-bold">${product.price}</p>
                            <h5 className="card-title mb-2 bg-warning">Quantity</h5>
                            <h5 className="card-title mb-0 bg-info">{itemNumber} Pecies</h5>
                            
                        </div>
                        <button className='btn btn-danger mt-2' 
                        onClick={()=> dispatch(deleteItem(product.id))}>Delete</button>
                    </div>
                )
            })
        )
    }
}

export default CartItems
