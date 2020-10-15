import React from 'react';
import logo from '../../../images/logos/logo.png'
import plus from '../../../images/icons/plus 1.png'
import listIcon from '../../../images/icons/listIcon.png'
import plusPerson from '../../../images/icons/person-add-outline 1.png'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

const AddService = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        fetch('https://shielded-basin-83435.herokuapp.com/addService', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(result => {
                alert('Service added successfully. please, check out the homepage to see new Services')
                console.log('posted')
            })
        console.log(data)
    };

    return (
        <div className="row">
            <div className="col-md-3">
                <img class='w-50 my-4' src={logo} alt="" />
                <br />
                <br />
                <ul class="list-group list-group-flush">
                    <Link style={{ color: 'black', textDecoration: 'none' }} to='/adminDashboard'>
                        <li class="list-group-item "> <img src={listIcon} alt="" />  Service Lists</li>
                    </Link>
                    <Link style={{ color: 'black', textDecoration: 'none' }} to='/addService'>
                        <li class="list-group-item active"> <img style={{ width: '10%' }} src={plus} alt="" /> Add Service</li>

                    </Link>
                    <Link style={{ color: 'black', textDecoration: 'none' }} to="/makeAdmin">
                        <li class="list-group-item"> <img src={plusPerson} alt="" /> Make Admin</li>
                    </Link>

                </ul>

            </div>
            <div className="col-md-5">
                <br />
                <br />
                <h2>
                    Add Service
                </h2>
                <br />
                <br />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div class="row">
                        <div class="col">
                            <label for="inputTitle">Service Title</label>
                            <input name="title" ref={register({ required: true })} type="text" class="form-control" placeholder="Enter title" />
                        </div>
                        <div class="col">
                            <label for="inputFile">Icon</label>

                            <input type="file" placeholder="" />
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Description</label>
                        <textarea name="description" ref={register({ required: true })} placeholder='Enter description' class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <input class='btn btn-success ml-auto d-block' type="submit" value="Submit"/>
                </form>
            </div>
        </div>
    );
};

export default AddService;