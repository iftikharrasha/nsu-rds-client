import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../Image/logo.png';
import avatar from '../../Image/avatar.jpg';
import preAdvised from '../../Data/preadvised.json';
import filter from '../../Data/filter.json';
import Courses from './Courses';
import TotalFees from './TotalFees';
import EnrolledCourses from './EnrolledCourses';
import useTimer from '../../Utilities/Hooks/useTimer';
import { Breadcrumb } from 'semantic-ui-react';
import useWindowSize from '../../Utilities/Hooks/useWindowSize';

const AdvisingWindow = () => {
    const {mints, seconds} = useTimer();
    const {windowWidth} = useWindowSize();
    const [courses, setCourses] = useState(preAdvised);
    const [filterList, setFilterList] = useState(filter);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [enrolledList, setEnrolledList] = useState([]);
    console.log(enrolledList);

    const navigations = [
        { key: 'Home', content: 'Home', link: true },
        { key: 'Advising Window', content: 'Advising Window', link: true },
        { key: 'Phase 1', content: 'Phase 1', link: true },
        { key: 'Slot 2', content: 'Slot 2', active: true }
    ]

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

    const activeToggle = e => {
        document.getElementById('advisingWindow').classList.toggle('nav__open');
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
            if(enrolledList.length < 4){
                const modifiedCourses = copyCourses.map(course => {
                    if (id === course.ID) {
                        course.Checked = !course.Checked;
                        course.Enrolled = course.Enrolled + 1;
                        enrolledList.push(course);
    
                        toast.dismiss(loading);
                        toast.success(`Successfully Enrolled to ${course.Course}.${course.Section}`, {
                            position: "top-center"
                        });
                    }
                
                    return course;
                });

                setCourses(modifiedCourses);
            }else{
                toast.dismiss(loading);
                toast.error("Max course enrollment reached!", {
                    icon: '⏳',
                    position: "top-center"
                });
            }
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
                toast.success(`You've Removed ${course.Course}.${course.Section}`, {
                    position: "top-center"
                });
            }
        
            return course;
        });
        setCourses(modifiedCourses);

        const modifiedEnrolled = enrolledList.filter(course => course.ID !== id);
        setEnrolledList(modifiedEnrolled);
    }

    const handleSearch = (e) => {
        setSearchTerm(e.target.value)
    }

    return (
            <>
                <section className="advisingWindow" id="advisingWindow">
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
                                            <Breadcrumb icon='right angle' sections={navigations} />
                                            <Link to="/">Logout</Link>
                                        </nav>
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
                                        <div className={mints === 0 && seconds === 0 ? "timer__bg" : "timer__bg pulse"}>
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
                                {
                                    windowWidth < 991.98 && windowWidth > 576 ? 
                                    <div className="smNav">
                                        <div className="inside__nav">
                                            <nav>
                                                <Breadcrumb icon='right angle' sections={navigations} />
                                                <Link to="/">Logout</Link>
                                            </nav>
                                        </div>
                                        <div className="inside__stats">
                                            <ul>
                                                <li><i className="bookmark icon"></i></li>
                                                <li>
                                                    <p>112 Credits Completed</p>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li><i className="trophy icon"></i></li>
                                                <li>
                                                    <p>CGPA: 3.01</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div> : ''
                                }
                            </div>

                            <div className="filter__lists">
                                <h2>Filter</h2>
                                <div className="filter__accordian">
                                    <Accordion defaultActiveKey={windowWidth < 991.98 ? [] : ['0', '1', '2']} alwaysOpen>
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
                                            <Breadcrumb icon='right angle' sections={navigations} />
                                            <Link to="/">Logout</Link>
                                        </nav>
                                    </div>
                                    <div className="inside__stats">
                                        <ul>
                                            <li><i className="bookmark icon"></i></li>
                                            <li>
                                                <p>112 Credits Completed</p>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><i className="trophy icon"></i></li>
                                            <li>
                                                <p>CGPA: 3.01</p>
                                            </li>
                                        </ul>
                                    </div>
                                </> : ''
                            }

                            <Courses searchTerm={searchTerm} searchResults={searchTerm.length < 1 ? courses : searchResults} handleEnroll={handleEnroll} handleSearch={handleSearch}/>

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
                                        <div className={mints === 0 && seconds === 0 ? "timer__bg" : "timer__bg pulse"}>
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
                                
                                <TotalFees enrolledList={enrolledList}/>
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

export default AdvisingWindow;