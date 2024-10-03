import { useLoaderData } from "react-router-dom";
import "./styles.css";

const TransactionDetail = () => {
  const transaction = useLoaderData();
  // console.log(transaction);
  return <div>{transaction.time}</div>;
};

export const transactionDetails = async ({ params }) => {
  // console.log(params);
  const response = await fetch(
    "http://localhost:5001/transactions/" + params.transactionId
  );
  // console.log(response);
  return response.json();
};

export default TransactionDetail;
