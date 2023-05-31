import Style from './TransactionHistory.module.css';
import data from '../../data/transactions.json';

export const TransactionHistory = () =>{
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
            {data.map((transaction) => (
                <tr key={transaction.id}>
                    <td>{transaction.type}</td>
                    <td>{transaction.amount}</td>
                    <td>{transaction.currency}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
};