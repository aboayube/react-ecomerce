import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { decreament, increament } from '../store/features/counter/counterSlice';



const Product = () => {

    const { id } = useParams();
    const [product, setproduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const [quantity, setQuantity] = useState(0);
    const dispatch = useDispatch()
    const itemscount = useSelector(state => state.counter.pecies)

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setproduct(await response.json());
            setLoading(false);
        }
        getProduct();

        // get quantity of this product and show it
        itemscount.map((item) => item.id == id ? setQuantity(item.qty) : item)

    }, [])


    const Loading = () => {
        return (
            <>
                <div className='col-md-6'>
                    <Skeleton height={400} />
                </div>
                <div className='col-md-6' style={{ lineHeight: 2 }}>
                    <Skeleton height={50} width={300} />
                    <Skeleton height={75} />
                    <Skeleton height={25} width={150} />
                    <Skeleton height={50} />
                    <Skeleton height={150} />
                    <Skeleton height={50} width={100} inline={true} />
                    <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
                </div>
            </>
        )
    }

    // inc and dec just showing the num in screen, changing value of (qty in pecies and value in store)
    const inc = () => {
        setQuantity(quantity + 1);
    }
    const dec = () => {
        if (quantity <= 0) return;
        setQuantity(quantity - 1);
    }

    const ShowProduct = () => {
        return (
            <>
                <div className='col-md-6' key={product.id}>
                    <img src={product.image} alt={product.title} height='400px' width='400px' />
                </div>
                <div className='col-md-6'>
                    <h4 className='text-uppercase text-black-50'>{product.category}</h4>
                    <h1 className='display-5'>{product.title}</h1>
                    <p className='lead fw-bolder'>Rating {product.rating && product.rating.rate}<i className='fa fa-star'></i></p>
                    <h3 className='display-6 fw-bold'>$ {product.price}</h3>
                    <p className='lead'>{product.description}</p>
                    <p className='text-uppercase text-black me-3'>Quantity</p>
                    <div className='d-flex mb-3 '>
                        <span className="input-group-text">{quantity}</span>
                        <span className="input-group-text ">Total</span>
                        <span className="input-group-text "> $ {quantity * product.price}</span>
                    </div>
                    <button className='btn btn-outline-dark px-4 py-2'
                        onClick={() => { dispatch(increament(product)); inc() }}>+</button>
                    <button className='btn btn-outline-dark px-4 py-2 ms-2'
                        onClick={() => {
                            dispatch(decreament(product.id));
                            dec();
                        }}>-</button>

                </div>

            </>
        )
    }

    return (
        <div>
            <div className='container py-3'>
                <div className='row py-3'>
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
        </div>
    )
}

export default Product
