import React from 'react'

const Ex44 = () => {
    const card = {
        title: 'Elon Musk',
        description: 'Elon Reeve Musk FRS is a business magnate, industrial, and engineer. He is a founder, CEO, CTO, and chief designer of SpaceX',
        avatar: 'https://www.gstatic.com/tv/thumb/persons/487130/487130_v9_bb.jpg',
        cover: 'https://media.vanityfair.com/photos/574f453fbdf148e4205f29df/16:9/w_1200,h_630,c_limit/hive_contributor_profile-elon-musk.jpg'
    };

    return (
        <div>
            <h1>{card.title}</h1>
            <p>{card.description}</p>
            <img src={card.avatar}></img>
            <img src={card.cover}></img>
        </div>
    )
}

export default Ex44