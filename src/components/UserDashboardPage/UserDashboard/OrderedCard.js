import React from 'react';

const OrderedCard = ({order}) => {
    return (
        <div>
            <div class="card float-left mr-5 " style={{width: '18rem'}}>
                <div class="card-body">
                    <h5 class="card-title">{order.service}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Status:</h6>
                    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a> */}
                </div>
            </div>
        </div>
    );
};

export default OrderedCard;