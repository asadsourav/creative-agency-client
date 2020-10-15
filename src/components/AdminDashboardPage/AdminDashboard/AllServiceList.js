import React from 'react';
import logo from '../../../images/logos/logo.png'
import plus from '../../../images/icons/plus 1.png'
import listIcon from '../../../images/icons/listIcon.png'
import plusPerson from '../../../images/icons/person-add-outline 1.png'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
const AllServiceList = () => {

    const [allOrderedServices, setAllOrderedServices] = useState([])

    useEffect(() => {
        fetch('https://shielded-basin-83435.herokuapp.com/getAllOrderedServices')
            .then(response => response.json())
            .then(data => {

                setAllOrderedServices(data)
            })
    }, [])

    return (
        <div className="row">
            <div className="col-md-3">
                <img class='w-50 my-4' src={logo} alt="" />
                <br />
                <br />
                <ul class="list-group list-group-flush">
                    <Link style={{ color: 'black', textDecoration: 'none' }} to='/userDashboard'>
                        <li class="list-group-item active"> <img src={listIcon} alt="" />  Service Lists</li>
                    </Link>
                    <Link style={{ color: 'black', textDecoration: 'none' }} to='/addService'>
                        <li class="list-group-item "> <img style={{ width: '10%' }} src={plus} alt="" /> Add Service</li>

                    </Link>
                    <Link style={{ color: 'black', textDecoration: 'none' }} to="/makeAdmin">
                        <li class="list-group-item"> <img src={plusPerson} alt="" /> Make Admin</li>
                    </Link>

                </ul>

            </div>
            <div className="col-md-9">
                <br />
                <br />
                <h2>Services List</h2>
                <br />
                <br />
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email Id</th>
                            <th scope="col">Service</th>
                            <th scope="col">Project details</th>
                        </tr>
                    </thead>
                    <tbody>

                    {
                            allOrderedServices.map(service => 
                                
                                <tr>
                                    <th scope="row">{service.name}</th>
                                    <td>{service.email}</td>
                                    <td>{service.service}</td>
                                    <td>{service.description}</td>
                                </tr>
                            )
                    }

                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllServiceList;