import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Table, Label, Button, Card, Modal } from "semantic-ui-react";

const TotalFees = ({enrolledList}) => {
    const [open, setOpen] = useState(false);
    const countFees = 19500*enrolledList.length;
    const payableTotal = countFees+3000+2500+1500;
    const handlePrinSlip = (e) => {
        e.preventDefault();
        const loading = toast.loading('Please wait ...');
        if(enrolledList.length > 0){
            toast.dismiss(loading);
            toast.success("Print Feature coming soon!", {
                position: "top-center"
            });
        }else{
            toast.dismiss(loading);
            toast.error("Enroll at least 1 course!", {
                position: "top-center"
            });
        }
    }

    return (
        <>
            <div className="details__balance">
                <div className="balance__card">
                    <h2>Tuition Fees</h2>
                    <p>{countFees} BDT/-</p>
                    <div className="balance__buttons">
                        <button onClick={(e) => handlePrinSlip(e)}>
                            <Link to="/">Print Slip</Link>
                        </button>

                        {
                            enrolledList.length > 0 ? <Modal
                            centered={true}
                            open={open}
                            onClose={() => setOpen(false)}
                            onOpen={() => setOpen(true)}
                            trigger={<button>
                                <Link to="/">Details</Link>
                            </button>}
                        >
                        <Modal.Content>
                        <Card className="hoveredCard detailsCard">
                            <Card.Content>
                                <Card.Header>North South University</Card.Header>
                                <Card.Meta>Student Registration(Fall 2022)</Card.Meta>
                            </Card.Content>
                            <Card.Content>
                                <Table celled>
                                    <Table.Header>
                                    <Table.Row>
                                        <Table.Cell>
                                            <Label ribbon>Tuition Fees</Label>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.HeaderCell>Course</Table.HeaderCell>
                                        <Table.HeaderCell celled>Faculty</Table.HeaderCell>
                                        <Table.HeaderCell>Room</Table.HeaderCell>
                                        <Table.HeaderCell>Credit</Table.HeaderCell>
                                        <Table.HeaderCell>Tuition</Table.HeaderCell>
                                    </Table.Row>
                                    </Table.Header>

                                    <Table.Body>
                                    {
                                        enrolledList.map((course, index) => (
                                            <Table.Row key={index}>
                                                <Table.Cell>{course.Course}</Table.Cell>
                                                <Table.Cell>{course.Faculty}</Table.Cell>
                                                <Table.Cell>{course.Room}</Table.Cell>
                                                <Table.Cell>{course.Credit}</Table.Cell>
                                                <Table.Cell>19500</Table.Cell>
                                            </Table.Row>
                                        ))
                                    }
                                    </Table.Body>
                                </Table>
                                <Table celled>
                                    <Table.Header>
                                        <Table.Row>
                                            <Table.Cell>
                                                <Label ribbon>Extra Fees</Label>
                                            </Table.Cell>
                                            <Table.Cell></Table.Cell>
                                        </Table.Row>
                                    </Table.Header>
                                    <Table.Body>
                                    <Table.Row>
                                        <Table.Cell>
                                            <Card.Content>
                                                <Card.Description>
                                                <strong>Student Activity Fee:</strong> 3,000 <br /> <strong>Computer Lab Fee:</strong> 2,500 <br /> <strong>Library Fee:</strong> 1,500 BDT
                                                </Card.Description>
                                            </Card.Content>
                                        </Table.Cell>
                                        <Table.Cell>
                                            <Card.Content>
                                                <Card.Description className="payable">
                                                    <strong>Payable Total:</strong> {payableTotal} BDT
                                                </Card.Description>
                                            </Card.Content>
                                        </Table.Cell>
                                    </Table.Row>
                                    </Table.Body>
                                </Table>
                            </Card.Content>
                        </Card>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button color='black' onClick={() => setOpen(false)}>
                                Close
                            </Button>
                        </Modal.Actions>
                        </Modal> : 
                            <button onClick={(e) => handlePrinSlip(e)}>
                                <Link to="/">Details</Link>
                            </button>
                        }
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default TotalFees;