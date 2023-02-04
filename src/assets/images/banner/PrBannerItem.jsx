import React from 'react';
const PrBannerItem = ({children}) => {
    const {img, id, prev, next } = children;
    console.log(children);
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
                 
            <div className='carousel-img'>            <img src={img} alt="" />
</div>
            <div className="absolute flex justify transform -translate-y-1/2 
             right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn mr-5 btn-circle">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default PrBannerItem;