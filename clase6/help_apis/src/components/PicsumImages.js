import React from 'react';

const PicsumImages = () => {

    const imagesSizes = [];
    for (let i = 0; i < 9; i++) {
        imagesSizes.push({
            width: (Math.floor(Math.random() * 4) * 100) + 100,
            height: (Math.floor(Math.random() * 4) * 100) +100,
        });
    }

    return (
        <div className='grid grid-cols-3 gap-4 w-2/3'>
            {imagesSizes.map((size, index) => (
                <div key={index}>
                    <img 
                        src={"https://picsum.photos/" + size.width + "/" + size.height}
                    />
                    <span>{size.width} x {size.height}</span>
                </div>
            ))}
        </div>
    );
};

export default PicsumImages;