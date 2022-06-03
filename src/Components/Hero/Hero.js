import React, { useEffect, useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../Image/logo.png';
import avatar from '../../Image/avatar.jpg';
import search from '../../Image/search-icon.svg';
import fakeData from '../../Data/allcourses.json';
import filter from '../../Data/filter.json';
import Courses from './Courses';
import EnrolledCourses from './EnrolledCourses';
import TotalFees from './TotalFees';
import useTimer from '../../Utilities/Hooks/useTimer';

const Hero = () => {
    const {mints, seconds} = useTimer();
    const inputEl = useRef("");
    const [courses, setCourses] = useState(fakeData);
    const [filterList, setFilterList] = useState(filter);
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

    const getChecked = (e, id) => {
        const modifiedFilter = filter.map(item => {
            if (id === item.id) {
                item.checked = !item.checked;
            }else{
                if(item.checked){
                    item.checked = false;
                }
                setSearchTerm('');
            }
        
            if(e.target.checked){
                setSearchTerm(e.target.value);
            }else{
                setSearchTerm('');
            }

            return item;
        });
        
        setFilterList(modifiedFilter);
    }

    const handleEnroll = (id, title) => {
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
                                            <h4>
                                                {
                                                    mints < 10 && mints > 0 ? `0${mints}:` 
                                                    : mints === 0 ? `00:`
                                                    : `${mints}:` 
                                                }
                                                {
                                                    seconds < 10 && seconds > 0 ? `0${seconds}` 
                                                    : seconds < 0 || seconds === 0? '00'
                                                    : seconds
                                                }
                                            </h4>
                                            {
                                                mints === 0 && seconds > 0 ? <span>seconds left</span> 
                                                : mints === 1 && seconds === 0 ? <span>minute left</span>
                                                : mints === 0 && seconds === 0 ? <span>Time Over!</span> 
                                                : <span>minutes left</span>
                                            }
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
                                                {
                                                    filterList.filter(item => item.type === "course").map(course => (
                                                        <div className="course" key={course.id}>
                                                            <input 
                                                                type="checkbox"
                                                                id={course.id}
                                                                name={course.title}
                                                                value={course.value} 
                                                                checked={course.checked}
                                                                onChange={(e) => getChecked(e, course.id)}
                                                            />
                                                            <label htmlFor={course.id} className="ps-2">{course.title}</label>
                                                        </div>
                                                    )) 
                                                }
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>Class Schedule</Accordion.Header>
                                            <Accordion.Body>
                                                {
                                                    filterList.filter(item => item.type === "day").map(course => (
                                                        <div className="course" key={course.id}>
                                                            <input 
                                                                type="checkbox"
                                                                id={course.id}
                                                                name={course.title}
                                                                value={course.value} 
                                                                checked={course.checked}
                                                                onChange={(e) => getChecked(e, course.id)}
                                                            />
                                                            <label htmlFor={course.id} className="ps-2">{course.title}</label>
                                                        </div>
                                                    )) 
                                                }
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>Preferred Time</Accordion.Header>
                                            <Accordion.Body>
                                                {
                                                    filterList.filter(item => item.type === "time").map(course => (
                                                        <div className="course" key={course.id}>
                                                            <input 
                                                                type="checkbox"
                                                                id={course.id}
                                                                name={course.title}
                                                                value={course.value} 
                                                                checked={course.checked}
                                                                onChange={(e) => getChecked(e, course.id)}
                                                            />
                                                            <label htmlFor={course.id} className="ps-2">{course.title}</label>
                                                        </div>
                                                    )) 
                                                }
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

                            <Courses triggerRef={triggerRef} searchTerm={searchTerm} searchResults={searchTerm.length < 1 ? courses : searchResults} handleEnroll={handleEnroll}/>

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
                                            <h4>
                                                {
                                                    mints < 10 && mints > 0 ? `0${mints}:` 
                                                    : mints === 0 ? `00:`
                                                    : `${mints}:` 
                                                }
                                                {
                                                    seconds < 10 && seconds > 0 ? `0${seconds}` 
                                                    : seconds < 0 || seconds === 0? '00'
                                                    : seconds
                                                }
                                            </h4>
                                            {
                                                mints === 0 && seconds > 0 ? <span>seconds left</span> 
                                                : mints === 1 && seconds === 0 ? <span>minute left</span>
                                                : mints === 0 && seconds === 0 ? <span>Time Over!</span> 
                                                : <span>minutes left</span>
                                            }
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