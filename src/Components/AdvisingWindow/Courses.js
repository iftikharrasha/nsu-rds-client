import React, { useEffect, useState } from 'react';
import Card from './CourseCard';
import LazyCard from './LazyCard';

const Courses = (props) => {
    const [ loader, setLoader ] = useState(true);
    const { searchResults, handleEnroll } = props;

    useEffect(() => {
        if (loader) {
            setTimeout(() => {
                setLoader(false);
            }, 2000);
        }
    }, [loader]);

    return (
        <>
            <div className="inside__courses">
                {
                    loader ? <div className="inside__cards">
                                <LazyCard/>
                            </div>  : <>
                                        <div className="inside__top">
                                            <h2>Courses</h2>
                                            <ul>
                                                <li><p>Sort By</p></li>
                                                <li>
                                                    <select name="" id="">
                                                        <option value="">Seats Available</option>
                                                        <option value="">Time Schedule</option>
                                                        <option value="">Section Name</option>
                                                    </select>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="inside__cards">

                                            {
                                                searchResults.length > 0 ?
                                                searchResults.map((item, index) => (
                                                    <Card key={index} item={item} handleEnroll={handleEnroll}/>
                                                )) : <div className="err"><h2>Only Pre-advised courses are available.</h2></div>
                                            }
                                            
                                        </div>
                    </>
                }
            </div>
        </>
    );
};

export default Courses;