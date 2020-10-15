import React from 'react';
import './OurWorks.css' 
import item1 from '../../../images/carousel-1.png'
import item2 from '../../../images/carousel-2.png'
import item3 from '../../../images/carousel-3.png'
import item4 from '../../../images/carousel-4.png'
import item5 from '../../../images/carousel-5.png'
import {Carousel} from 'react-bootstrap'



const OurWorks = () => {
    return (
          
        <div style={{ height: '40px',width: '100%', marginTop: '60px',marginBottom:'0px !important' }} >
            <h2 class="text-center">Here are some of our <span style={{color: '#7AB259'}} >Works</span> </h2>

        <div class="d-flex align-items-center " style={{ height: '800px', backgroundColor: '#111430' }}>
            
           
            <Carousel>
                
                <Carousel.Item>
                    <img
                        // style={{height: "100%",objectFit:'contain'}}

                        className="d-block w-50 mx-auto"
                        src={item1}
                        alt="First slide"
                    />
                  
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        // style={{height: "100%",objectFit:'contain'}}

                        className="d-block w-50 mx-auto"
                        src={item2}
                        alt="Second slide"
                    />

                   
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        // style={{height: "100%",width: "200%",objectFit:'contain'}}
                        className="d-block w-50 mx-auto"
                        src={item5}
                        alt="Third slide"
                    />

                   
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        // style={{height: "100%",objectFit:'contain'}}
                        className="d-block w-50 mx-auto"
                        src={item3}
                        alt="Third slide"
                    />

                   
                </Carousel.Item>
            </Carousel>
        </div>
        </div>
    );
};

export default OurWorks;