


import { useSelector } from 'react-redux';
import CartItems from './CartItems';


const Cart = () => {

    const items = useSelector(state => state.counter.productItem)
    const itemsInCart = useSelector(state => state.counter.value)
    const itemsPecies = useSelector(state => state.counter.pecies)


    // calculate the total of all pecies
    let total = 0;
    
    const totalFunction = () => {
        items.map((item) => {
            itemsPecies.map((itemP) => {
                if (item.id === itemP.id) {
                    total += item.price * itemP.qty;
                }
            }
            )
        })
        return total.toFixed(2);
    }

    return (
        <div className='container'>
            <div className="row mt-4" >
                <div className='col'>
                    <div className='row'>
                        <CartItems />
                    </div>
                </div>
                <div className='col-md-auto bg-dark border text-white text-center fs-28 m-2 p-5'>
                    <div className='row'>
                        <h3 style={{ backgroundColor: '#757575', color: '#fff' }}>Items Quantity</h3>
                    </div>
                    <h3 style={{ backgroundColor: '#E8EAF6', color: '#000' }}>{itemsInCart}</h3>

                    <div className='row'>
                        <h3 style={{ backgroundColor: '#757575', color: '#fff' }}>Total</h3>
                    </div>
                    <h3 style={{ backgroundColor: '#E8EAF6', color: '#000' }}>$ {totalFunction()}</h3>
                </div>

            </div>
        </div>
    )
}

export default Cart
