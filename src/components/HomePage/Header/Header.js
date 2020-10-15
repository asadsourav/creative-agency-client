import React from 'react';
import bg from '../../../images/headerbg.png'
import frame from '../../../images/logos/Frame.png'
import './Header.css'
const Header = () => {
    return (
        <div class='row header-container'>
            <div className="col-md-5 offset-md-1 d-flex align-items-center justify-content-center">
               <div>
               <h1><strong>Let's Grow Your</strong> </h1>
                    <h1><strong>Brand To The</strong></h1>  
                    <h1><strong> Next Level</strong></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est consequatur quod maiores commodi aspernatur dignissimos id sed voluptatibus debitis distinctio.</p>
                    <button class='btn btn-dark px-5 py-2'>Hire us</button>
               </div>
            </div>
            <div className="col-md-6">
                <img class="w-100 frame" src={frame} alt=""/>
            </div>
        </div>
    );
};

export default Header;