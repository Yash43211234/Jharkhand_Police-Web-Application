import React, { useState } from 'react';
import './Service.css'; // Import CSS file for styling

function Service() {
    const [activeService, setActiveService] = useState('citizen');

    const toggleService = (service) => {
        setActiveService(service);
    };

    return (
        <div className="service-container">
            <div className="service-buttons">
                <button className={activeService === 'citizen' ? 'active' : ''} onClick={() => toggleService('citizen')}>
                    <i className="fas fa-user"></i> Citizen Service
                </button>
                <button className={activeService === 'police' ? 'active' : ''} onClick={() => toggleService('police')}>
                    <i className="fas fa-shield-alt"></i> Police Service
                </button>
            </div>

            <div className="service-content">
                {activeService === 'citizen' && (
                    
                    <div class="service-icons">
                    <div class="service-icon">
                        <img src="https://tse4.mm.bing.net/th?id=OIP.8fbVqjWUNx71YpWdrRoKRQHaFj&pid=Api&P=0&h=180.jpg" alt="Service 1"></img>
                            <p>Service 1</p>
                    </div>
                    <div class="service-icon">
                        <img src="https://tse4.mm.bing.net/th?id=OIP.8fbVqjWUNx71YpWdrRoKRQHaFj&pid=Api&P=0&h=180.png" alt="Service 2"></img>
                            <p>Service 2</p>
                    </div>
                    <div class="service-icon">
                        <img src="https://tse4.mm.bing.net/th?id=OIP.8fbVqjWUNx71YpWdrRoKRQHaFj&pid=Api&P=0&h=180.png" alt="Service 1"></img>
                            <p>Service 1</p>
                    </div>
                    <div class="service-icon">
                        <img src="https://tse4.mm.bing.net/th?id=OIP.8fbVqjWUNx71YpWdrRoKRQHaFj&pid=Api&P=0&h=180.png" alt="Service 2"></img>
                            <p>Service 2</p>
                    </div>
                    <div class="service-icon">
                        <img src="https://tse4.mm.bing.net/th?id=OIP.8fbVqjWUNx71YpWdrRoKRQHaFj&pid=Api&P=0&h=180.png" alt="Service 1"></img>
                            <p>Service 1</p>
                    </div>
                    <div class="service-icon">
                        <img src="https://tse4.mm.bing.net/th?id=OIP.8fbVqjWUNx71YpWdrRoKRQHaFj&pid=Api&P=0&h=180.png" alt="Service 2"></img>
                            <p>Service 2</p>
                    </div>
                    <div class="service-icon">
                        <img src="https://tse4.mm.bing.net/th?id=OIP.8fbVqjWUNx71YpWdrRoKRQHaFj&pid=Api&P=0&h=180.png" alt="Service 1"></img>
                            <p>Service 1</p>
                    </div>
                    <div class="service-icon">
                        <img src="https://tse4.mm.bing.net/th?id=OIP.8fbVqjWUNx71YpWdrRoKRQHaFj&pid=Api&P=0&h=180.png" alt="Service 2"></img>
                            <p>Service 2</p>
                    </div>
                    <div class="service-icon">
                        <img src="https://tse4.mm.bing.net/th?id=OIP.8fbVqjWUNx71YpWdrRoKRQHaFj&pid=Api&P=0&h=180.png" alt="Service 1"></img>
                            <p>Service 1</p>
                    </div>
                    <div class="service-icon">
                        <img src="https://tse4.mm.bing.net/th?id=OIP.8fbVqjWUNx71YpWdrRoKRQHaFj&pid=Api&P=0&h=180.png" alt="Service 2"></img>
                            <p>Service 2</p>
                    </div>
                    <div class="service-icon">
                        <img src="https://tse4.mm.bing.net/th?id=OIP.8fbVqjWUNx71YpWdrRoKRQHaFj&pid=Api&P=0&h=180.png" alt="Service 1"></img>
                            <p>Service 1</p>
                    </div>
                    <div class="service-icon">
                        <img src="https://tse4.mm.bing.net/th?id=OIP.8fbVqjWUNx71YpWdrRoKRQHaFj&pid=Api&P=0&h=180.png" alt="Service 2"></img>
                            <p>Service 2</p>
                    </div>
                    <div class="service-icon">
                        <img src="https://tse4.mm.bing.net/th?id=OIP.8fbVqjWUNx71YpWdrRoKRQHaFj&pid=Api&P=0&h=180.png" alt="Service 1"></img>
                            <p>Service 1</p>
                    </div>
                    <div class="service-icon">
                        <img src="https://tse4.mm.bing.net/th?id=OIP.8fbVqjWUNx71YpWdrRoKRQHaFj&pid=Api&P=0&h=180.png" alt="Service 2"></img>
                            <p>Service 2</p>
                    </div>
                    
                

            </div>
                )}

                {activeService === 'police' && (
                   

                        <div class="service-icons">
                            <div class="service-icon">
                                <img src="https://tse2.mm.bing.net/th?id=OIP.5MatjdwUNLhQ3_ZXeE1CLgHaEx&pid=Api&P=0&h=180.png" alt="Service 1"></img>
                                    <p>Service 1</p>
                            </div>
                            <div class="service-icon">
                                <img src="https://tse2.mm.bing.net/th?id=OIP.5MatjdwUNLhQ3_ZXeE1CLgHaEx&pid=Api&P=0&h=180.png" alt="Service 2"></img>
                                    <p>Service 2</p>
                            </div>
                            <div class="service-icon">
                                <img src="https://tse2.mm.bing.net/th?id=OIP.5MatjdwUNLhQ3_ZXeE1CLgHaEx&pid=Api&P=0&h=180.png" alt="Service 1"></img>
                                    <p>Service 1</p>
                            </div>
                            <div class="service-icon">
                                <img src="https://tse2.mm.bing.net/th?id=OIP.5MatjdwUNLhQ3_ZXeE1CLgHaEx&pid=Api&P=0&h=180.png" alt="Service 2"></img>
                                    <p>Service 2</p>
                            </div>
                            <div class="service-icon">
                                <img src="https://tse2.mm.bing.net/th?id=OIP.5MatjdwUNLhQ3_ZXeE1CLgHaEx&pid=Api&P=0&h=180.png" alt="Service 1"></img>
                                    <p>Service 1</p>
                            </div>
                            <div class="service-icon">
                                <img src="https://tse2.mm.bing.net/th?id=OIP.5MatjdwUNLhQ3_ZXeE1CLgHaEx&pid=Api&P=0&h=180.png" alt="Service 2"></img>
                                    <p>Service 2</p>
                            </div>
                            <div class="service-icon">
                                <img src="https://tse2.mm.bing.net/th?id=OIP.5MatjdwUNLhQ3_ZXeE1CLgHaEx&pid=Api&P=0&h=180.png" alt="Service 1"></img>
                                    <p>Service 1</p>
                            </div>
                            <div class="service-icon">
                                <img src="https://tse2.mm.bing.net/th?id=OIP.5MatjdwUNLhQ3_ZXeE1CLgHaEx&pid=Api&P=0&h=180.png" alt="Service 2"></img>
                                    <p>Service 2</p>
                            </div>
                            <div class="service-icon">
                                <img src="https://tse2.mm.bing.net/th?id=OIP.5MatjdwUNLhQ3_ZXeE1CLgHaEx&pid=Api&P=0&h=180.png" alt="Service 1"></img>
                                    <p>Service 1</p>
                            </div>
                            <div class="service-icon">
                                <img src="https://tse2.mm.bing.net/th?id=OIP.5MatjdwUNLhQ3_ZXeE1CLgHaEx&pid=Api&P=0&h=180.png" alt="Service 2"></img>
                                    <p>Service 2</p>
                            </div>
                            <div class="service-icon">
                                <img src="https://tse2.mm.bing.net/th?id=OIP.5MatjdwUNLhQ3_ZXeE1CLgHaEx&pid=Api&P=0&h=180.png" alt="Service 1"></img>
                                    <p>Service 1</p>
                            </div>
                            <div class="service-icon">
                                <img src="https://tse2.mm.bing.net/th?id=OIP.5MatjdwUNLhQ3_ZXeE1CLgHaEx&pid=Api&P=0&h=180.png" alt="Service 2"></img>
                                    <p>Service 2</p>
                            </div>
                            <div class="service-icon">
                                <img src="https://tse2.mm.bing.net/th?id=OIP.5MatjdwUNLhQ3_ZXeE1CLgHaEx&pid=Api&P=0&h=180.png" alt="Service 1"></img>
                                    <p>Service 1</p>
                            </div>
                            <div class="service-icon">
                                <img src="https://tse2.mm.bing.net/th?id=OIP.5MatjdwUNLhQ3_ZXeE1CLgHaEx&pid=Api&P=0&h=180.png" alt="Service 2"></img>
                                    <p>Service 2</p>
                            </div>
                            
                        

                    </div>
                )}
            </div>
        </div>
    );
}

export default Service;
