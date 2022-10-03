import React from 'react';


const Card =({name, email, id})=>{
    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
        <h1>Robo-Friends</h1>
            <img src={`https://robohash.org/${id}?250x250`}  alt='robots' />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}


export default Card;