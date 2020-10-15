import React from 'react';
import logo from '../../../images/logos/logo.png'
import plus from '../../../images/icons/plus 1.png'
import listIcon from '../../../images/icons/listIcon.png'
import plusPerson from '../../../images/icons/person-add-outline 1.png'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {

    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data => {
        fetch('https://shielded-basin-83435.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(result => {
                // history.push('/orderedServices')
                alert('Admin added successfully')
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
                        <li class="list-group-item "> <img style={{ width: '10%' }} src={plus} alt="" /> Add Service</li>

                    </Link>
                    <Link style={{ color: 'black', textDecoration: 'none' }} to="/makeAdmin">
                        <li class="list-group-item active"> <img src={plusPerson} alt="" /> Make Admin</li>
                    </Link>

                </ul>

            </div>
            <div className='col-md-6'>
                <br/>
                <br/>
                <br/>
                <h2>Make Admin</h2>
                <br/>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div class="form-row">
                        <div class="col">
                        <label for="inputEmail">Email</label>

                            <input name="email" ref={register({ required: true })} type="email" class="form-control" placeholder="New admin email"/>
                        </div>
                            <div class="col">
                                <input class="btn btn-success mt-4" type="submit" value="Submit"/>
                            </div>
                        </div>
                </form>
                    </div>
                </div>
    );
};

export default MakeAdmin;