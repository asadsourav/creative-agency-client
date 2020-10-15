import React from 'react';
import { Link } from 'react-router-dom';
import {useSpring} from 'react-spring'
import {useTransition, animated} from 'react-spring'

const ServiceCard = ({service}) => {
  const props = useSpring({opacity: 1, from: {opacity: 0}})

    return (
      <Link style={{ color: 'black', textDecoration: 'none' }} to= {`/userDashboard/${service.title}`} >
            <div class="card float-left mr-5 mt-4" style={{width: "18rem"}} >
            <img src={service.image} class="card-img-top w-25 mx-auto mt-3" alt="..."/>
                <animated.div style={props} class="card-body">
                    <h5 class="card-title text-center">{service.title}</h5>
                    <p class="card-text text-center">{service.description}</p>
                </animated.div>
        </div>
      </Link>
    )
};

export default ServiceCard;