import React from 'react'

export const Menucard = ({ menuData }) => {
    return (
        <>
            <section className='main-card--cointainer'>
                {menuData.map((ele) => {
                    const{id,name,image,description} = ele;
                    return (
                        <div className='card-container' key={id}>
                            <div className='card'>
                                <div className='card-body'>
                                    <span className='card-number card-circle subtle'>{id}</span>
                                    <span className='card-author subtle'>{name}</span>
                                    <h2 className='card-title'>{name}</h2>
                                    <span className='card-description subtle'>
                                        {description}
                                    </span>
                                    <div className='card-read'></div>
                                </div>
                                <img src={image} alt='image' className='card-media' />
                                <span className='card-tag subtle'>Order Now</span>
                            </div>
                        </div>
                    )

                })}
            </section>
        </>
    )
}
