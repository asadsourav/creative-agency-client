import React from 'react';

const FeedbackCard = ({feedback}) => {
    return (
        <div >
            <div class="card mr-5 " style={{width:'18rem'}}>
                <div class="card-body">
                      <h5 class="card-title "> <img class="w-25" src={feedback.image} alt=""/> {feedback.name}</h5>
                    <h6 class="card-subtitle text-muted ml-5 pl-3 mb-3"> {feedback.position} </h6>
                    <h6 class="card-subtitle text-muted ml-5 pl-3 mb-3"> {feedback.designation} </h6>

                      <p class="card-text">{feedback.comment}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default FeedbackCard;