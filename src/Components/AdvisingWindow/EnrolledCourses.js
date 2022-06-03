import React from 'react';
import trash from '../../Image/trash.svg';

const EnrolledCourses = ({enrolledList, handleRemove}) => {
    return (
        <>
            <div className="details__enrolled">
                <h2>Enrolled Courses</h2>
                <div className="enrolled__cards">

                    {
                        enrolledList.length > 0 ?
                        enrolledList.map(item => (
                            <div className="single__card" key={item.ID}>
                                <div className="card__left">
                                    <div className="course__name">
                                        <h3>{item.Course}</h3>
                                        <p>{item.Time}</p>
                                    </div>
                                </div>
                                <div className="card__right">
                                    <h6>Section {item.Section}</h6>
                                    <div className="card__icons">
                                        <img src={trash} alt={trash} onClick={(e) => handleRemove(item.ID)}/>
                                    </div>
                                </div>
                            </div>
                        )) : <div className="single__card">
                                <p>No enrollment yet!</p>
                            </div>
                    }
                </div>
            </div>
        </>
    );
};

export default EnrolledCourses;