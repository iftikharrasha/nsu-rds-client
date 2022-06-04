import React, { useEffect, useState } from 'react';
import Card from './CourseCard';
import LazyCard from './LazyCard';
import search from '../../Image/search-icon.svg';
import useTimer from '../../Utilities/Hooks/useTimer';

const Courses = (props) => {
    const {mints, seconds} = useTimer()
    const [ loader, setLoader ] = useState(true);
    const { searchResults, handleEnroll, handleSearch } = props;

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
                    loader ||  (mints === 0 && seconds === 0)  ? <div className="inside__cards">
                                <LazyCard/>
                            </div>  : <>
                                        <div className="inside__top">
                                            <h2>Courses</h2>
                                            <ul className="filter__ul">
                                                <li><img src={search} alt={search} /></li>
                                                <li>
                                                    <input type="text" placeholder="Search" onChange={(e) => handleSearch(e)}/>
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