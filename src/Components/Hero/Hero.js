import React, { useEffect, useRef, useState } from 'react';
import { Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../Image/logo.png';
import avatar from '../../Image/avatar.jpg';
import search from '../../Image/search-icon.svg';
import trash from '../../Image/trash.svg';
import fakeData from '../../Data/fakeData.json';
import Courses from './Courses';

const Hero = () => {
    const inputEl = useRef("");
    const [courses, setCourses] = useState(fakeData);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const triggerRef = useRef(null);
    // const searchHandler = () => {
    //     setSearchTerm(inputEl.current.value);

    //     const searchKey = inputEl.current.value;

    //     const newCourseList = courses.filter(course => {
    //         if(searchTerm == ""){
    //             return course;
    //         }else if(course.Course.toLowerCase().includes(searchTerm.toLowerCase())){
    //             return course;
    //         }
    //     })
    // };

    useEffect(() => {
        console.log('hit')
        if (searchTerm !== "") {
            const newCourseList = courses.filter((Course) => {
                return ((Course.Course.toLowerCase().includes(searchTerm.toLowerCase())));
            });
            setSearchResults(newCourseList);
        } else {
          setSearchResults(courses);
        }

        console.log(searchTerm);
    }, [searchTerm, courses])

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
        setWindowWidth(window.innerWidth);
        }
    
        window.addEventListener('resize', handleResize)
    }, [])

    const activeToggle = e => {
        document.getElementById('hero').classList.toggle('nav__open');
        e.preventDefault();
    }

    return (
            <>
                <section className="hero" id="hero">
                    <div className="wrapper">
                        <a className="nav__toggle" href="/" onClick={activeToggle}>
                            <span className="top"></span>
                            <span className="mid"></span>
                            <span className="bot"></span>
                        </a>
                        <aside className="filter__items">

                            {
                                windowWidth < 575.98 ? 
                                <>
                                    <div className="inside__nav">
                                        <nav>
                                            <ul>
                                                <li>
                                                    <Link to="/">Home</Link>
                                                </li>
                                                <li>
                                                    <Link to="/">Advising Window</Link>
                                                </li>
                                            </ul>
                                            <Link to="/">Logout</Link>
                                        </nav>
                                    </div>
                                    <div className="inside__stats">
                                        <ul>
                                            <li><i className="fa fa-search"></i></li>
                                            <li>
                                                <p>69 Credits Completed</p>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><i className="fa fa-search"></i></li>
                                            <li>
                                                <p>CGPA: 3.01</p>
                                            </li>
                                        </ul>
                                    </div>
                                </> : ''
                            }

                            <div className="filter__logo">
                                <Link to="/home">
                                    <img src={logo} alt="logo" />
                                </Link>
                                {
                                    windowWidth < 575.98 ? 
                                    <div className="details__timer">
                                        <div className="timer__bg">
                                            <h4>3:05</h4>
                                            <span>minutes left</span>
                                        </div>
                                    </div> : ''
                                }
                            </div>

                            <div className="filter__lists">
                                <h2>Filter</h2>
                                <ul className="filter__ul">
                                    <li><img src={search} alt={search} /></li>
                                    <li>
                                        <input type="text" placeholder="Search" ref={inputEl} value={searchTerm} onChange={event => setSearchTerm(event.target.value)}/>
                                    </li>
                                </ul>
                                <div className="filter__accordian">
                                    <Accordion defaultActiveKey={['0', '1', '2']} alwaysOpen>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>Pre-Advised Courses</Accordion.Header>
                                            <Accordion.Body>
                                                <div className="course">
                                                    <input type="checkbox" id="FIN254" name="FIN254" value="FIN254"/>
                                                    <label htmlFor="FIN254" className="ps-2">FIN254</label>
                                                </div>
                                                <div className="course">
                                                    <input type="checkbox" id="BUS105" name="BUS105" value="BUS105"/>
                                                    <label htmlFor="BUS105" className="ps-2">BUS105</label>
                                                </div>
                                                <div className="course">
                                                    <input type="checkbox" id="MIS210" name="MIS210" value="MIS210"/>
                                                    <label htmlFor="MIS210" className="ps-2">MIS210</label>
                                                </div>
                                                <div className="course">
                                                    <input type="checkbox" id="HIS101" name="HIS101" value="HIS101"/>
                                                    <label htmlFor="HIS101" className="ps-2">HIS101</label>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>Class Schedule</Accordion.Header>
                                            <Accordion.Body>
                                                <div className="course">
                                                    <input type="checkbox" id="mw" name="mw" value="mw"/>
                                                    <label htmlFor="mw" className="ps-2">Monday-Wednesday (MW)</label>
                                                </div>
                                                <div className="course">
                                                    <input type="checkbox" id="ra" name="ra" value="ra"/>
                                                    <label htmlFor="ra" className="ps-2">Thursday-Saturday (RA)</label>
                                                </div>
                                                <div className="course">
                                                    <input type="checkbox" id="st" name="st" value="st"/>
                                                    <label htmlFor="st" className="ps-2">Sunday-Tuesday (ST)</label>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>Preferred Time</Accordion.Header>
                                            <Accordion.Body>
                                                <div className="course">
                                                    <input type="checkbox" id="time1" name="time1" value="time1"/>
                                                    <label htmlFor="time1" className="ps-2">8:00 AM - 9:30 AM</label>
                                                </div>
                                                <div className="course">
                                                    <input type="checkbox" id="time2" name="time2" value="time2"/>
                                                    <label htmlFor="time2" className="ps-2">9:40 AM - 11:10 AM</label>
                                                </div>
                                                <div className="course">
                                                    <input type="checkbox" id="time3" name="time3" value="time3"/>
                                                    <label htmlFor="time3" className="ps-2">11:20 AM - 12:50 PM</label>
                                                </div>
                                                <div className="course">
                                                    <input type="checkbox" id="time4" name="time4" value="time4"/>
                                                    <label htmlFor="time4" className="ps-2">1:00 PM - 2:30 PM</label>
                                                </div>
                                                <div className="course">
                                                    <input type="checkbox" id="time5" name="time5" value="time5"/>
                                                    <label htmlFor="time5" className="ps-2">2:40 PM - 4:10 PM</label>
                                                </div>
                                                <div className="course">
                                                    <input type="checkbox" id="time6" name="time6" value="time6"/>
                                                    <label htmlFor="time6" className="ps-2">4:20 PM - 5:50 PM</label>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                            </div>
                        </aside>
                        <div className="inside__items">

                            {
                                windowWidth > 992 ? 
                                <>
                                    <div className="inside__nav">
                                        <nav>
                                            <ul>
                                                <li>
                                                    <Link to="/">Home</Link>
                                                </li>
                                                <li>
                                                    <Link to="/">Advising Window</Link>
                                                </li>
                                            </ul>
                                            <Link to="/">Logout</Link>
                                        </nav>
                                    </div>
                                    <div className="inside__stats">
                                        <ul>
                                            <li><i className="fa fa-search"></i></li>
                                            <li>
                                                <p>69 Credits Completed</p>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><i className="fa fa-search"></i></li>
                                            <li>
                                                <p>CGPA: 3.01</p>
                                            </li>
                                        </ul>
                                    </div>
                                </> : ''
                            }
                            
                            {/* {
                                courses.filter(course => {
                                    if(searchTerm == ""){
                                        return course;
                                    }else if(course.Course.toLowerCase().includes(searchTerm.toLowerCase())){
                                        return course;
                                    }
                                })
                            } */}

                            <Courses triggerRef={triggerRef} searchResults={searchTerm.length < 1 ? courses : searchResults}/>

                        </div>
                        <aside className="details__item">
                            <div className="details__nav">
                                {
                                    windowWidth > 992 ? 
                                    <div className="details__user">
                                        <div className="user__info">
                                            <h3>Iftikhar Rasha</h3>
                                            <p>1620221042</p>
                                        </div>
                                        <img src={avatar} alt="avatar" />
                                    </div> : ''
                                }

                                {
                                    windowWidth > 576 ? 
                                    <div className="details__timer">
                                        <div className="timer__bg">
                                            <h4>3:05</h4>
                                            <span>minutes left</span>
                                        </div>
                                    </div> : ''
                                }

                                <div className="details__enrolled">
                                    <h2>Enrolled Courses</h2>
                                    <div className="enrolled__cards">
                                        <div className="single__card">
                                            <div className="card__left">
                                                <div className="course__name">
                                                    <h3>FIN254</h3>
                                                    <p>MW 8:00 - 9:30</p>
                                                </div>
                                            </div>
                                            <div className="card__right">
                                                <h6>Section 04</h6>
                                                <div className="card__icons">
                                                    <img src={trash} alt={trash} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="single__card">
                                            <div className="card__left">
                                                <div className="course__name">
                                                    <h3>FIN254</h3>
                                                    <p>MW 8:00 - 9:30</p>
                                                </div>
                                            </div>
                                            <div className="card__right">
                                                <h6>Section 04</h6>
                                                <div className="card__icons">
                                                    <img src={trash} alt={trash} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="single__card">
                                            <div className="card__left">
                                                <div className="course__name">
                                                    <h3>FIN254</h3>
                                                    <p>MW 8:00 - 9:30</p>
                                                </div>
                                            </div>
                                            <div className="card__right">
                                                <h6>Section 04</h6>
                                                <div className="card__icons">
                                                    <img src={trash} alt={trash} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single__card">
                                            <div className="card__left">
                                                <div className="course__name">
                                                    <h3>FIN254</h3>
                                                    <p>MW 8:00 - 9:30</p>
                                                </div>
                                            </div>
                                            <div className="card__right">
                                                <h6>Section 04</h6>
                                                <div className="card__icons">
                                                    <img src={trash} alt={trash} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="details__balance">
                                    <div className="balance__card">
                                        <h2>Total Fees</h2>
                                        <p>85,500 BDT/-</p>
                                        <div className="balance__buttons">
                                            <button>
                                                <Link to="/">Print Slip</Link>
                                            </button>
                                            <button>
                                                <Link to="/">Details</Link>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </section>
            </>
        );
};

export default Hero;