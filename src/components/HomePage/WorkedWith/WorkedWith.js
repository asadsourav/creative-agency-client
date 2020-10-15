import React from 'react';
import slack from '../../../images/logos/slack.png'
import google from '../../../images/logos/google.png'
import uber from '../../../images/logos/uber.png'
import netflix from '../../../images/logos/netflix.png'
import airbnb from '../../../images/logos/airbnb.png'
const WorkedWith = () => {
    return (
        <div class="d-flex align-items-center  justify-content-center my-5" >
            <img style={{width:'10%', margin:'30px'}} src={slack} alt=""/>
            <img style={{width:'10%', margin:'30px'}} src={google} alt=""/>
            <img style={{width:'10%', margin:'30px'}} src={uber} alt=""/>
            <img style={{width:'10%', margin:'30px'}} src={netflix} alt=""/>
            <img style={{width:'10%', margin:'30px'}} src={airbnb} alt=""/>

        </div>
    );
};

export default WorkedWith;