import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";



const Navbar = () =>{

  const count = useSelector(state => state.counter.value)
    return (

      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
          <div className='container'>
            <NavLink className="navbar-brand fw-bold fs-4" to="/">Ecommerce </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">

              <ul className="navbar-nav mx-auto">

                <li className="nav-item active">
                  <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/products">Products</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
                </li>
              </ul>

              <div className='buttons'>
                {/* <NavLink to='/login'
                  className='btn btn-outline-dark me-1'>
                  <i className='fa fa-sign-in me-1' />
                  Login
                </NavLink>
                <NavLink to='/register'
                  className='btn btn-outline-dark me-1'>
                  <i className='fa fa-user-plus me-1' />
                  Sign Up
                </NavLink> */}
                <NavLink to='/cart'
                  className='btn btn-outline-dark me-1'>
                  <i className='fa fa-shopping-cart me-1' />
                  Cart <span className='badge bg-danger'>{count}</span>
                </NavLink>
                
              </div>
            </div> 
          </div>
        </nav>
      </div>
    )
  }
export default Navbar;