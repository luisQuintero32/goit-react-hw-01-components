import Style from './TransactionHistory.module.css';
import React from "react";
import PropTypes from 'prop-types';

export const TransactionHistory = ({user}) =>{
    return(
        <div className={Style.container}>
        <table className={Style.transactionHistory}>
            <thead>
                <tr>
                    <th>TYPE</th>
                    <th>AMOUNT</th>
                    <th>CURRENCY</th>
                </tr>
            </thead>
            <tbody>
            {user.map((user) => (
                <tr key={user.id}>
                    <td>{user.type}</td>
                    <td>{user.amount}</td>
                    <td>{user.currency}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
};

TransactionHistory.propTypes = {
    id: PropTypes.string.isRequired,
    type:PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
};