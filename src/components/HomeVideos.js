import React from 'react'

function HomeVideos() {
    return (
        <div>
            <div class="video-container">
                <div>
                <video controls>
                    <source src="video.mp4" type="video/mp4"></source>
                 
                </video>
                </div>
               
                
            </div>
            <div class="video-container">
                <div>
                <video controls>
                    <source src="video.mp4" type="video/mp4"></source>
                 
                </video>
                </div>
               
                
            </div>
            <style>

                {
                    `
                          
                .video-container {
                max-width: 800px;
                margin: 0 auto;
                height:400px;
                }

                video {
                width: 100%;
                height: auto;
                display: block;
                }

              
                video::-webkit-media-controls {
                background-color: rgba(0, 0, 0, 0.5);
                }

                video::-webkit-media-controls-play-button {
                color: white;
                }

                video::-webkit-media-controls-time-remaining-display {
                color: white;
                }

            `
                }
            </style>

        </div>
    )
}

export default HomeVideos;
