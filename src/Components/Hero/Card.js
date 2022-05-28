import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
    const { Course } = props.item;
    return (
        <>
            <div className="single__card">
                <div className="card__top">
                    <div className="course__name">
                        <h3>{Course.slice(0, 6)}</h3>
                        <p>MW 8:00 - 9:30</p>
                    </div>
                    <h6>Section 04</h6>
                </div>
                <div className="card-bottom">
                    <div className="course__progress">
                        <div className="progress__details">
                            <h4>29/40</h4>
                            <p>Seats available</p>
                        </div>
                        <div className="progress__bar">
                            <div className="progress__inner">
                                <hr />
                            </div>
                        </div>
                    </div>
                    <div className="course__button">
                        <Link to="/">
                            <button>Enroll</button>
                        </Link>
                        <Link to="/">
                            <button>Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;