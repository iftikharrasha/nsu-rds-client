import React, { useEffect, useState } from 'react';
import { Image, Button, Card, Popup } from "semantic-ui-react";
import checkIcon from '../../Image/check-icon.svg';
import crossIcon from '../../Image/cross-icon.svg';

const CourseCard = (props) => {
    const { ID, Course, Checked, Capacity, Enrolled, Section, Time, Credit, Title, Faculty, Room } = props.item;
    const { handleEnroll } = props;
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        const percentLeft = Math.round(100 * Enrolled/Capacity);
        setPercentage(percentLeft);
    }, [Capacity, Enrolled])

    return (
        <>
            <div className={Checked ? "single__card enrolled" : "single__card"}>
                <div className="card__top">
                    <div className="course__name">
                        <h3>{Course.slice(0, 6)}</h3>
                        <p>{Time}</p>
                    </div>
                    <h6>Section {Section < 10 ? `0${Section}` : Section}</h6>
                </div>
                <div className="card-bottom">
                    <div className="course__progress">
                        <div className="progress__details">
                            <h4>{Enrolled}/{Capacity}</h4>
                            <p>
                                {
                                    Enrolled === Capacity ? 'Section Full' : 'Seats available'
                                }
                            </p>
                        </div>
                        <div className="progress__bar">
                            <div className="progress__inner">
                                <span style={{width : `${percentage > 100 ? `100` : percentage}%`}}></span>
                            </div>
                        </div>
                    </div>
                    <div className="course__button">
                        {
                            Checked ? <button>Enrolled</button>
                                    : <button onClick={() => handleEnroll(ID, Course)} disabled={Enrolled === Capacity} className={Enrolled === Capacity ? "disabled" : null}>Enroll</button>
                        }
                        <Popup 
                            on='click'
                            position="top right"
                            size="tiny"
                            key={ID}
                            trigger={
                                <button>Details</button>
                            }
                        >
                            <Card className="hoveredCard">
                            <Card.Content>
                                <Image
                                floated='right'
                                size='mini'
                                src={Checked ? checkIcon : crossIcon}
                                className="avatar2"
                                />
                                <Card.Header>Course: {Course.slice(0, 6)}</Card.Header>
                                <Card.Meta>{Title}</Card.Meta>
                                <Card.Description>
                                <strong>Section:</strong> {Section} | {Time} <br /> <strong>Credit:</strong> {Credit}.0 | <strong>Tuition:</strong> 19500 BDT
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <div className='ui two buttons'>
                                <Button basic color='grey'>
                                    Faculty <br /> <span>{Faculty}</span>
                                </Button>
                                <Button basic color='grey'>
                                    Room <br /> <span>{Room}</span>
                                </Button>
                                </div>
                            </Card.Content>
                            </Card>
                        </Popup>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CourseCard;