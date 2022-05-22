import React from 'react';
import { Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../Image/logo.png';
import avatar from '../../Image/avatar.jpg';
import search from '../../Image/search-icon.svg';
import trash from '../../Image/trash.svg';

const Hero = () => {
        return (
                <>
                    <section className="hero">
                        <div className="wrapper">
                            <div className="filter__items">
                                <div className="filter__logo">
                                    <Link to="/home">
                                        <img src={logo} alt="logo" />
                                    </Link>
                                </div>
                                <div className="filter__lists">
                                    <h2>Filter</h2>
                                    <ul className="filter__ul">
                                        <li><img src={search} alt={search} /></li>
                                        <li>
                                            <input type="text" placeholder="Search"/>
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
                                                <Accordion.Header>Time</Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="course">
                                                        <input type="checkbox" id="time1" name="time1" value="time1"/>
                                                        <label htmlFor="time1" className="ps-2">8:00 - 9:30</label>
                                                    </div>
                                                    <div className="course">
                                                        <input type="checkbox" id="time2" name="time2" value="time2"/>
                                                        <label htmlFor="time2" className="ps-2">9:40 - 11:10</label>
                                                    </div>
                                                    <div className="course">
                                                        <input type="checkbox" id="time3" name="time3" value="time3"/>
                                                        <label htmlFor="time3" className="ps-2">11:20 - 12:50</label>
                                                    </div>
                                                    <div className="course">
                                                        <input type="checkbox" id="time4" name="time4" value="time4"/>
                                                        <label htmlFor="time4" className="ps-2">1:00 - 2:30</label>
                                                    </div>
                                                    <div className="course">
                                                        <input type="checkbox" id="time5" name="time5" value="time5"/>
                                                        <label htmlFor="time5" className="ps-2">2:40 - 4:10</label>
                                                    </div>
                                                    <div className="course">
                                                        <input type="checkbox" id="time6" name="time6" value="time6"/>
                                                        <label htmlFor="time6" className="ps-2">4:20 - 5:50</label>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </div>
                                </div>
                            </div>
                            <div className="inside__items">
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
                                            <p>CGPA: 3.00</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="inside__courses">
                                    <div className="inside__top">
                                        <h2>Courses</h2>
                                        <ul>
                                            <li><p>Sort By</p></li>
                                            <li>
                                                <select name="" id="">
                                                    <option value="">Seats Available</option>
                                                    <option value="">Time</option>
                                                    <option value="">Section</option>
                                                </select>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="inside__cards">
                                        <div className="single__card">
                                            <div className="card__top">
                                                <div className="course__name">
                                                    <h3>FIN254</h3>
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

                                        <div className="single__card">
                                            <div className="card__top">
                                                <div className="course__name">
                                                    <h3>FIN254</h3>
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

                                        <div className="single__card">
                                            <div className="card__top">
                                                <div className="course__name">
                                                    <h3>FIN254</h3>
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

                                        <div className="single__card">
                                            <div className="card__top">
                                                <div className="course__name">
                                                    <h3>FIN254</h3>
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

                                        <div className="single__card">
                                            <div className="card__top">
                                                <div className="course__name">
                                                    <h3>FIN254</h3>
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

                                        <div className="single__card">
                                            <div className="card__top">
                                                <div className="course__name">
                                                    <h3>FIN254</h3>
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

                                        <div className="single__card">
                                            <div className="card__top">
                                                <div className="course__name">
                                                    <h3>FIN254</h3>
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

                                        <div className="single__card">
                                            <div className="card__top">
                                                <div className="course__name">
                                                    <h3>FIN254</h3>
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

                                        <div className="single__card">
                                            <div className="card__top">
                                                <div className="course__name">
                                                    <h3>FIN254</h3>
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

                                        <div className="single__card">
                                            <div className="card__top">
                                                <div className="course__name">
                                                    <h3>FIN254</h3>
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

                                        <div className="single__card">
                                            <div className="card__top">
                                                <div className="course__name">
                                                    <h3>FIN254</h3>
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
                                    </div>
                                </div>
                            </div>
                            <div className="details__item">
                                <div className="details__user">
                                    <img src={avatar} alt="avatar" />
                                    <div className="user__info">
                                        <h3>Iftikhar Rasha</h3>
                                        <p>1620221042</p>
                                    </div>
                                </div>
                                <div className="details__timer">
                                    {/* <h2>Advising Timer</h2> */}
                                    <div className="timer__bg">
                                        <h4>3:05</h4>
                                        <span>minutes left</span>
                                    </div>
                                </div>
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
                        </div>
                    </section>
                </>
        );
};

export default Hero;