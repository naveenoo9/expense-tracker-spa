import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "../layouts/root/Layout";
import TransactionList, {
  loadTransactions,
} from "../pages/transactions/list/TransactionList";
import TransactionDetail, {
  transactionDetails,
} from "../pages/transactions/details/TransactionDetail";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<RootLayout />}>
      <Route
        path="transactions"
        element={<TransactionList />}
        loader={loadTransactions}></Route>
      <Route
        path="transactions/:transactionId"
        element={<TransactionDetail />}
        loader={transactionDetails}
      />
    </Route>
  )
);

export default router;
