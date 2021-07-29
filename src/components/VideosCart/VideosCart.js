import React, { useState, useEffect } from 'react';
import VideoCart from './VideoCart/VideoCart';
import VideoSearch from './VideoSearch/VideoSearch';

const VideosCart = () => {
    const [videos, setVideos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [term, setTerm] = useState('');

    useEffect(() => {
        fetch(`https://pixabay.com/api/videos/?key=21997724-a34f6108a96fc7a92392b1c23&q=${term}`)
        .then(res => res.json())
        .then(data => {
            setVideos(data.hits);
            setIsLoading(false);
        })
        .catch(err => console.log(err))
    }, [term]);

    return (
        <div className="container mx-auto">
            <VideoSearch searchText={(text) => setTerm(text)} />

            {isLoading ? 
                <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>
                :
                <div className="grid grid-cols-3 gap-4">
                    {
                        videos.map(video => 
                            <VideoCart 
                                ket={video.id}
                                video={video}
                            />
                        )
                    }
                </div>
            }
        </div>
    );
};

export default VideosCart;