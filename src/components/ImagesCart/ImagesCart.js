import React, { useState, useEffect } from 'react';
import ImageCart from './ImageCart/ImageCart';
import ImageSearch from './ImageSearch/ImageSearch';

const ImagesCart = () => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [term, setTerm] = useState('');

    useEffect(() => {
        fetch(`https://pixabay.com/api/?key=21997724-a34f6108a96fc7a92392b1c23&q=${term}&image_type=photo`)
        .then(res => res.json())
        .then(data => {
            setImages(data.hits);
            setIsLoading(false);
        })
        .catch(err => console.log(err))
    }, [term]);

    return (
        <div className="container mx-auto">
            <ImageSearch searchText={(text) => setTerm(text)} />

            {isLoading ? 
                <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>
                :
                <div className="grid grid-cols-3 gap-4">
                    {
                        images.map(image => 
                            <ImageCart 
                                ket={image.id}
                                image={image}
                            />
                        )
                    }
                </div>
            }
        </div>
    );
};

export default ImagesCart;