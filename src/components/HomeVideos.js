import React from 'react'

function HomeVideos() {
    return (
        <div>
            <div class="video-container">
            <div class="video-container">
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
                max-width: 600px;
                display:flex;
                display:inline-block;
                height:400px;
                margin:10px;
                
                }

                video {
                width: 600px;
            
                display: block;
                border-radius:10px;
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
