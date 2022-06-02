import React from 'react';
import { Link } from 'react-router-dom';

const TotalFees = ({length}) => {
    const countFees = 16500*length;

    return (
        <>
            <div className="details__balance">
                <div className="balance__card">
                    <h2>Total Fees</h2>
                    <p>{countFees} BDT/-</p>
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
        </>
    );
};

export default TotalFees;