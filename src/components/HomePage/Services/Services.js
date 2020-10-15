import React, { useEffect, useState } from 'react';
import webDesign from '../../../images/icons/service1.png'
import graphics from '../../../images/icons/service2.png'
import webDev from '../../../images/icons/service3.png'
import ServiceCard from '../ServiceCard/ServiceCard';

const serviceInfo = [
    {
        title: 'Web and mobile Design ',
        image:webDesign,
        description: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.'

    },
    {
        title: 'Graphics Design ',
        image:graphics,
        description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.'

    },
    {
        title: 'Web Development ',
        image:webDev,
        description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.'

    },

]


const Services = () => {

    const [newServices,setNewServices] = useState([])

    useEffect(() => {
        fetch('https://shielded-basin-83435.herokuapp.com/getNewServices')
        .then(response => response.json())
        .then(data => {
            setNewServices(data)
        
        })
    },[])


    newServices.map(newService => serviceInfo.push(newService)) 



    return (
        <div>
            <h2 class='text-center mb-5'>Provide Awesome <span style={{color: '#7AB259'}} >Services</span></h2>
          <div class='d-flex row justify-content-center'>
          {
                serviceInfo.map(service => <ServiceCard service={service} ></ServiceCard>)
            }
          </div>
        </div>
    );
};

export default Services;