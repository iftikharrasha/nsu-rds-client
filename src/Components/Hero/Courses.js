import React from 'react';
import clsx from "clsx";
import useLazyLoad from '../../Utilities/Hooks/useLazyLoad';
import Card from './Card';
import LazyCard from './LazyCard';

const Courses = (props) => {
    const { triggerRef, searchResults } = props;
    const SHOW_PER_PAGE = 16;
    const TOTAL_PAGES = searchResults.length/16;   //152

    const onGrabData = (currentPage) => {
        // This would be where you'll call your API
        return new Promise((resolve) => {
        setTimeout(() => {
            const slicedData = searchResults.slice(
                ((currentPage - 1)%TOTAL_PAGES) * SHOW_PER_PAGE,
                SHOW_PER_PAGE * (currentPage%TOTAL_PAGES)
                );
                resolve(slicedData);
        }, 1000);
        });
    };

    const { data, loading } = useLazyLoad({ triggerRef, onGrabData });
    console.log('data', data);
    return (
        <>
            <div className="inside__courses">
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
                        data.map((item, index) => (
                            <Card key={index} item={item}/>
                        ))
                    }
                    
                </div>

                <div ref={triggerRef} className={clsx("inside__cards", { visible: loading })}>
                    <LazyCard/>
                </div>
            </div>
        </>
    );
};

export default Courses;