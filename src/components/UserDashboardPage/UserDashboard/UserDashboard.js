import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";

const UserDashboard = () => {
    let history = useHistory();
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data => {
        fetch('https://shielded-basin-83435.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(result => {
                history.push('/orderedServices')
                console.log('posted')
            })
        console.log(data)
    };

    const { title } = useParams()
    return (
        <main className="row">
            <div className="col-md-3" >
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-7 my-5">
                <h1>Order</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div class="form-group">

                        <input name="name" ref={register({ required: true })} type="text" placeholder="Your Name/Company Name" class="form-control" id="" aria-describedby="emailHelp" />

                    </div>
                    <div class="form-group">

                        <input name="email" ref={register({ required: true })} type="email" placeholder='Your Email address' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                    </div>
                    <div class="form-group">

                        <input name="service" ref={register({ required: true })} type="text" placeholder="Service Name" defaultValue={title} class="form-control" id="" aria-describedby="emailHelp" />

                    </div>
                    <div class="form-group">

                        <textarea name="description" ref={register({ required: true })} placeholder="Project Details" class="form-control" id="" rows="4"></textarea>
                    </div>
                    <div class="form-row">
                        <div class="col">
                            <input name="price" ref={register({ required: true })} type="number" class="form-control" placeholder="Price" />
                        </div>
                        <div class="col">
                            <input type="file" size="60" class="form-control-file" id="" />
                        </div>
                    </div>
                    <br />
                    <input type="submit" value="send" class="btn btn-dark px-5" />
                </form>
            </div>
        </main>
    );
};

export default UserDashboard;