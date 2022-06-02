import React, { useEffect, useRef, useState } from 'react';
import { Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../Image/logo.png';
import avatar from '../../Image/avatar.jpg';
import search from '../../Image/search-icon.svg';
import fakeData from '../../Data/test.json';
import Courses from './Courses';
import EnrolledCourses from './EnrolledCourses';
import TotalFees from './TotalFees';
import toast, { Toaster } from 'react-hot-toast';

const Hero = () => {
    const inputEl = useRef("");
    const [courses, setCourses] = useState(fakeData);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [enrolledList, setEnrolledList] = useState([]);
    // console.log(searchTerm);

    useEffect(() => {
        function handleResize() {
        setWindowWidth(window.innerWidth);
        }
    
        window.addEventListener('resize', handleResize)
    }, [])

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
        if (searchTerm !== "") {
            const newCourseList = courses.filter((Course) => {
                return ((Course.Course.toLowerCase().includes(searchTerm.toLowerCase())) || (Course.Time.toUpperCase().includes(searchTerm.toUpperCase())));
            });
            setSearchResults(newCourseList);
        } else {
          setSearchResults(courses);
        }
    }, [searchTerm, courses])

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const activeToggle = e => {
        document.getElementById('hero').classList.toggle('nav__open');
        e.preventDefault();
    }

    const getChecked = (e) => {
        if(e.target.checked){
            setSearchTerm(e.target.value);
        }else{
            setSearchTerm('');
        }
        // console.log(e.target.value);
    }

    const handleChange = (id, title) => {
        const loading = toast.loading('Please wait ...');
        const isEnrolled = enrolledList.find(item => item.Course === title);
        const copyCourses = [...courses];

        if(isEnrolled){
            toast.dismiss(loading);
            toast.error("Already Enrolled in another section!", {
                position: "top-center"
            });
        }else{
            const modifiedCourses = copyCourses.map(course => {
                if(enrolledList.length < 5){
                    if (id === course.ID) {
                        course.Checked = !course.Checked;
                        course.Enrolled = course.Enrolled + 1;
                        enrolledList.push(course);
    
                        toast.dismiss(loading);
                        toast.success("You've Successfully Enrolled!", {
                            position: "top-center"
                        });
                    }
                }
            
                return course;
            });
    
            setCourses(modifiedCourses);
        }
        

        if(enrolledList.length >= 5){
            toast.dismiss(loading);
            toast.error("Max course enrollment reached!", {
                position: "top-center"
            });
        }
    };

    const handleRemove = (id) => {
        const loading = toast.loading('Please wait ...');
        toast.dismiss(loading);
        const copyCourses = [...courses];
        const modifiedCourses = copyCourses.map(course => {
            if (id === course.ID) {
                course.Checked = !course.Checked;
                course.Enrolled = course.Enrolled - 1;

                toast.dismiss(loading);
                toast.success("You've Removed the course!", {
                    position: "top-center"
                });
            }
        
            return course;
        });
        setCourses(modifiedCourses);

        const modifiedEnrolled = enrolledList.filter(course => course.ID !== id);
        setEnrolledList(modifiedEnrolled);
    }

    // const handleReset = () => {
    //     setEnrolledList([]);
    //     setCourses(fakeData);
    // }

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
                                            <h4>05:05</h4>
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
                                                    <input type="checkbox" id="CSE438" name="CSE438" value="CSE438" 
                                                            onChange={getChecked}/>
                                                    <label htmlFor="CSE438" className="ps-2">CSE438</label>
                                                </div>
                                                <div className="course">
                                                    <input type="checkbox" id="MAT350" name="MAT350" value="MAT350"
                                                            onChange={getChecked}/>
                                                    <label htmlFor="MAT350" className="ps-2">MAT350</label>
                                                </div>
                                                <div className="course">
                                                    <input type="checkbox" id="ENG111" name="ENG111" value="ENG111"
                                                            onChange={getChecked}/>
                                                    <label htmlFor="ENG111" className="ps-2">ENG111</label>
                                                </div>
                                                <div className="course">
                                                    <input type="checkbox" id="POL101" name="POL101" value="POL101"
                                                            onChange={getChecked}/>
                                                    <label htmlFor="POL101" className="ps-2">POL101</label>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>Class Schedule</Accordion.Header>
                                            <Accordion.Body>
                                                <div className="course">
                                                    <input type="checkbox" id="mw" name="mw" value="mw"
                                                            onChange={getChecked}/>
                                                    <label htmlFor="mw" className="ps-2">Monday-Wednesday (MW)</label>
                                                </div>
                                                <div className="course">
                                                    <input type="checkbox" id="ra" name="ra" value="ra"
                                                            onChange={getChecked}/>
                                                    <label htmlFor="ra" className="ps-2">Thursday-Saturday (RA)</label>
                                                </div>
                                                <div className="course">
                                                    <input type="checkbox" id="st" name="st" value="st"
                                                            onChange={getChecked}/>
                                                    <label htmlFor="st" className="ps-2">Sunday-Tuesday (ST)</label>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>Preferred Time</Accordion.Header>
                                            <Accordion.Body>
                                                <div className="course">
                                                    <input type="checkbox" id="time1" name="time1" value="08:00 AM - 09:30 AM"
                                                            onChange={getChecked}/>
                                                    <label htmlFor="time1" className="ps-2">08:00 AM - 09:30 AM</label>
                                                </div>
                                                <div className="course">
                                                    <input type="checkbox" id="time2" name="time2" value="09:40 AM - 11:10 AM"
                                                            onChange={getChecked}/>
                                                    <label htmlFor="time2" className="ps-2">09:40 AM - 11:10 AM</label>
                                                </div>
                                                <div className="course">
                                                    <input type="checkbox" id="time3" name="time3" value="11:20 AM - 12:50 PM"
                                                            onChange={getChecked}/>
                                                    <label htmlFor="time3" className="ps-2">11:20 AM - 12:50 PM</label>
                                                </div>
                                                <div className="course">
                                                    <input type="checkbox" id="time4" name="time4" value="01:00 PM - 02:30 PM"
                                                            onChange={getChecked}/>
                                                    <label htmlFor="time4" className="ps-2">01:00 PM - 02:30 PM</label>
                                                </div>
                                                <div className="course">
                                                    <input type="checkbox" id="time5" name="time5" value="02:40 PM - 04:10 PM"
                                                            onChange={getChecked}/>
                                                    <label htmlFor="time5" className="ps-2">02:40 PM - 04:10 PM</label>
                                                </div>
                                                <div className="course">
                                                    <input type="checkbox" id="time6" name="time6" value="04:20 PM - 05:50 PM"
                                                            onChange={getChecked}/>
                                                    <label htmlFor="time6" className="ps-2">04:20 PM - 05:50 PM</label>
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

                            <Courses triggerRef={triggerRef} searchTerm={searchTerm} searchResults={searchTerm.length < 1 ? courses : searchResults} handleChange={handleChange}/>

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
                                            <h4>05:05</h4>
                                            <span>minutes left</span>
                                        </div>
                                    </div> : ''
                                }

                                <EnrolledCourses handleRemove={handleRemove} enrolledList={enrolledList}/>
                                
                                <TotalFees length={enrolledList.length}/>
                            </div>
                        </aside>
                    </div>
                </section>

                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
            </>
        );
};

export default Hero;