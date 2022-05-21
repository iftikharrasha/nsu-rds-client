import React from 'react';
import { Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../Image/logo.png';
import avatar from '../../Image/avatar.png';
import search from '../../Image/search-icon.svg';

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
                                    <ul>
                                        <li><img src={search} alt={search} /></li>
                                        <li>
                                            <input type="text" placeholder="Search"/>
                                        </li>
                                    </ul>
                                </div>
                                <div className="filter__lists">
                                    <h2>Filter</h2>
                                    <div className="filter__accordian">
                                        <Accordion defaultActiveKey={['0', '1', '2']} alwaysOpen>
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>Pre-Advised Courses</Accordion.Header>
                                                <Accordion.Body>
                                                    Lorem ipsum dolor
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="1">
                                                <Accordion.Header>Class Schedule</Accordion.Header>
                                                <Accordion.Body>
                                                    Lorem ipsum
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="2">
                                                <Accordion.Header>Time</Accordion.Header>
                                                <Accordion.Body>
                                                    Lorem ipsum
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
                                            <li><Link to="/">Home</Link></li>
                                            <li><Link to="/">About</Link></li>
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
                                    <h2>Courses</h2>
                                    <ul>
                                        <li><p>Sort By</p></li>
                                        <li>
                                            <select name="" id="">
                                                <option value="">Select</option>
                                                <option value="">Name</option>
                                                <option value="">Code</option>
                                                <option value="">Credit</option>
                                            </select>
                                        </li>
                                    </ul>
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
                                                        <div className="progress__inner"></div>
                                                    </div>
                                                </div>
                                                <div className="course__button">
                                                    <button>
                                                        <Link to="/">Enroll</Link>
                                                    </button>
                                                    <button>
                                                        <Link to="/">Details</Link>
                                                    </button>
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
                                                        <div className="progress__inner"></div>
                                                    </div>
                                                </div>
                                                <div className="course__button">
                                                    <button>
                                                        <Link to="/">Enroll</Link>
                                                    </button>
                                                    <button>
                                                        <Link to="/">Details</Link>
                                                    </button>
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
                                        <h3>John Doe</h3>
                                        <p>1620221042</p>
                                    </div>
                                </div>
                                <div className="details__timer">
                                    <h2>Advising Timer</h2>
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
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="details__balance">
                                    <div className="balance__card">
                                        <h2>Balance</h2>
                                        <p>85,500 BDT/-</p>
                                        <div className="balance__button">
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