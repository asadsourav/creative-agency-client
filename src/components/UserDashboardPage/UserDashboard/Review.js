import React from 'react';
import logo from '../../../images/logos/logo.png'
import cart from '../../../images/icons/shopping-cart-outline 1.png'
import listIcon from '../../../images/icons/listIcon.png'
import reviewIcon from '../../../images/icons/review.png'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

const Review = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        fetch('https://shielded-basin-83435.herokuapp.com/addReview', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(result => {
                
                console.log('posted')
            })
        console.log(data)
    };
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
                <Link style={{color: 'black',textDecoration: 'none'}} to='/orderedServices'>
                <li class="list-group-item "> <img src={listIcon} alt=""/> Service Lists</li>

                </Link>
                <li class="list-group-item active"> <img src={reviewIcon} alt=""/> Review</li>
                
            </ul>
           
            </div>
            <div className="col-md-6">
                <h2 class='my-3'> Your Review</h2>
                <br/>
                <br/>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div class="form-group">

                        <input name="name" ref={register({ required: true })} type="text" placeholder="Your Name" class="form-control" id=""  />

                    </div>
                    <div class="form-group">

                        <input name="designation" ref={register({ required: true })} type="text" placeholder='Designation,Company Name' class="form-control" id=""  />

                    </div>
                    
                    <div class="form-group">

                        <textarea name="comment" ref={register({ required: true })} placeholder="Description" class="form-control" id="" rows="4"></textarea>
                    </div>
                   
                            <br/>
                            <input type="submit" value="send" class="btn btn-dark px-5" />
                
                </form>
            </div>
        </div>
    );
};

export default Review;