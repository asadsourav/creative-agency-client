import React, { useEffect, useState } from 'react';
import customer1 from '../../../images/customer-1.png'
import customer2 from '../../../images/customer-2.png'
import customer3 from '../../../images/customer-3.png'
import FeedbackCard from '../FeedbackCard/FeedbackCard';


const feedbacks = [
    {
        name: 'Nash Patrik',
        position: 'CEO, Manpol',
        image: customer1,
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat '
    },
    {
        name: 'Miriam Barron',
        position: 'CEO, Manpol',
        image: customer2,
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat '
    },
    {
        name: 'Bria Malone',
        position: 'CEO, Manpol',
        image: customer3,
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat '
    },


]
const Feedback = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://shielded-basin-83435.herokuapp.com/getReviews')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setReviews(data)})
    }, [])

    reviews.map(review => feedbacks.push(review))
    return (
        <div className="text-center" style={{ marginTop: '900px' }}>
            <h2>Clients <span style={{ color: '#7AB259' }} > Feedback	</span></h2>

            <div class='d-flex row  justify-content-center' style={{ height: '400px',width:'100%', marginTop: '80px' }} >
                <br />
                {
                    feedbacks.map(feedback => <FeedbackCard feedback={feedback} ></FeedbackCard>)
                }
            </div>
        </div>

    );
};

export default Feedback;