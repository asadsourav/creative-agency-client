import React, { useContext, useEffect, useState } from 'react';
import logo from '../../../images/logos/logo.png'
import cart from '../../../images/icons/shopping-cart-outline 1.png'
import listIcon from '../../../images/icons/listIcon.png'
import reviewIcon from '../../../images/icons/review.png'
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import OrderedCard from './OrderedCard';
const OrderedServices = () => {
    const [orderedServices, setOrderedServices] = useState([])

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    useEffect(() => {
        fetch('https://shielded-basin-83435.herokuapp.com/orderedServicesByUser?email=' + loggedInUser.email)
        .then((response) => response.json())
        .then(data =>{
            setOrderedServices(data)
            console.log(data)
        })
    },[])
    return (
        <div className="row">
            <div className="col-md-3">
            <img class='w-50 my-4' src={logo} alt="" />
            <br/>
            <br/>
            <ul class="list-group list-group-flush">
                <Link style={{color: 'black',textDecoration: 'none'}} to='/userDashboard'>
                <li class="list-group-item "> <img src={cart} alt=""/>  Order</li>
                </Link>
                <li class="list-group-item active"> <img src={listIcon} alt=""/> Service Lists</li>
                <Link style={{color: 'black',textDecoration: 'none'}} to="/review">
                <li class="list-group-item"> <img src={reviewIcon} alt=""/> Review</li>
                </Link>
                
            </ul>
           
            </div>
            <div className="col-md-9">
                <h2> Your Placed Orders</h2>
                {
                    orderedServices.map(order => <OrderedCard order={order} ></OrderedCard>)
                }
            </div>
        </div>
    );
};

export default OrderedServices;