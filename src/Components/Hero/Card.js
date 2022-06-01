import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
    const { ID, Course, Checked, Capacity, Enrolled } = props.item;
    const { handleChange } = props;
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        const percentLeft = Math.round(100 * Enrolled/Capacity);
        // const percentageFilled = 100 - percentLeft;
        setPercentage(percentLeft);
        // console.log("Course:", Course, percentageFilled);
    }, [Capacity, Enrolled])

    return (
        <>
            <div className={Checked ? "single__card enrolled" : "single__card"}>
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
                            <h4>{Enrolled}/{Capacity}</h4>
                            <p>Seats available</p>
                        </div>
                        <div className="progress__bar">
                            <div className="progress__inner">
                                <span style={{width : `${percentage > 100 ? `100` : percentage}%`}}></span>
                            </div>
                        </div>
                    </div>
                    <div className="course__button">
                        {
                            Checked ? <button>Enrolled</button>
                                    : <button onClick={() => handleChange(ID)}>Enroll</button>
                        }
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