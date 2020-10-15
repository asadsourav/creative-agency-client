import React from 'react';
import logo from '../../../images/logos/logo.png'
import cart from '../../../images/icons/shopping-cart-outline 1.png'
import listIcon from '../../../images/icons/listIcon.png'
import reviewIcon from '../../../images/icons/review.png'
import { Link } from 'react-router-dom';
const Sidebar = () => {
    return (
        <div>
            <img class='w-50 my-4' src={logo} alt="" />
            <br/>
            <br/>
            <ul class="list-group list-group-flush">
                <li class="list-group-item active"> <img src={cart} alt=""/>  Order</li>
                <Link style={{color: 'black',textDecoration: 'none'}} to="/orderedServices">
                <li class="list-group-item"> <img src={listIcon} alt=""/> Service Lists</li>
                </Link>
                <Link style={{color: 'black',textDecoration: 'none'}} to="/review">
                <li class="list-group-item"> <img src={reviewIcon} alt=""/> Review</li>

                </Link>
                
            </ul>
        </div>
    );
};

export default Sidebar;