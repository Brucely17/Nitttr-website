import React from 'react';
import './contact.css';
import { FaMapMarker, FaAddressBook, FaMap } from 'react-icons/fa';

const ContactUs = () => {
    return (
        <>
            <div className="title-container">
                <h2>Contact Us</h2>
            </div>
            <div className="container">
                <div className="column1">
                    <a href="./Contact/contact_new1.php" target="_blank" rel="noopener noreferrer">
                        <div className="flip-container">
                            <div className="flipper">
                                <div className="flip-card-front">
                                    <FaMapMarker className="fa" />
                                    <h2>Address</h2>
                                    <hr />
                                    <p>National Institute of Technical Teachers' Training and Research Taramani, Chennai 600113 Tamilnadu</p>
                                </div>
                                <div className="flip-card-back">
                                    <p>Click here to view the address of NITTTR Chennai and its regional centers</p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div className="column1">
                    <a href="phone.php" target="_blank" rel="noopener noreferrer">
                        <div className="flip-container">
                            <div className="flipper">
                                <div className="flip-card-front">
                                    <FaAddressBook className="fa" />
                                    <h2>Directory</h2>
                                    <hr />
                                    <p>Click here to view the Telephone directory of NITTTR Employees</p>
                                </div>
                                <div className="flip-card-back">
                                    <p>Click here to view the Telephone directory of NITTTR Employees</p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div className="column1">
                    <a href="./Contact/maps.php" target="_blank" rel="noopener noreferrer">
                        <div className="flip-container">
                            <div className="flipper">
                                <div className="flip-card-front">
                                    <FaMap className="fa" />
                                    <h2>Maps & Directions</h2>
                                    <hr />
                                    <p>To Reach NITTTR Chennai through various modes</p>
                                </div>
                                <div className="flip-card-back">
                                    <p>Click here to Reach NITTTR Chennai through various modes</p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
        </>
    );
};

export default ContactUs;
