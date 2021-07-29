import React from 'react';

const VideoCart = ({video}) => {
    const {videos, user, views, downloads, links} = video;
    const tags = video.tags.split(',');
    console.log(videos.large.url)

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <video controls src={videos.large.url} type="video/mp4" />
            
            <div className="px-6 py-4">
                <div className="font-bold text-purple-500 text-xl mb-2">
                    Video by {user}
                </div>

                <ul>
                <li>
                    <strong>Views: </strong>{views}
                </li>
                <li>
                    <strong>Downloads: </strong>{downloads}
                </li>
                <li>
                    <strong>Likes: </strong>{links}
                </li>
                </ul>
            </div>

            <div className="px-6 py-4">
                {
                    tags.map((index, tag) => (
                        <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                            #{tag}
                        </span>
                    ))
                }
            </div>
        </div>
    );
};

export default VideoCart;