import { redirect, useLoaderData, useNavigate } from "react-router-dom";
import "./styles.css";

const TransactionList = () => {
  const transactions = useLoaderData();
  const navigate = useNavigate();
  const handleRowClick = (transactionId) => {
    // console.log(transactionId);
    navigate(`/transactions/${transactionId}`);
  };
  return (
    <div className="transaction-list-container">
      <table>
        <thead>
          <tr>
            <td>Time</td>
            <td>Type</td>
            <td>Amount</td>
            <td>Category</td>
            <td>Account</td>
            <td>Notes</td>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr
              key={transaction.id}
              onClick={() => handleRowClick(transaction.id)}>
              <td>{transaction.time}</td>
              <td>{transaction.type}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.category}</td>
              <td>{transaction.account}</td>
              <td>{transaction.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const loadTransactions = async () => {
  const reponse = await fetch("http://localhost:5001/transactions");
  return reponse.json();
};
export default TransactionList;
