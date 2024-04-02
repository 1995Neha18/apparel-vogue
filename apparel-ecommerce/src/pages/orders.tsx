import { ReactElement, useState } from "react";
import TableHOC from "../components/admin/TableHOC";
import { Link } from "react-router-dom";
import { Column } from "react-table";

type DataType = {
  _id: string;
  quantity: number;
  amount: number;
  discount: number;
  status: ReactElement;
  action: ReactElement;
};

const column: Column<DataType>[] = [
  {
    Header: "ID",
    accessor: "_id",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const Orders = () => {
 const [rows] = useState<DataType[]>([
   {
   _id: "absjgkgkgke",
   quantity: 456,
   amount: 22,
   discount: 3667,
   status: <span className="red">
    Processing
   </span>,
   action: <Link to={`/orders/absjgkgkgke`} >View</Link>,
 }
 ])
  const table = TableHOC<DataType>(column, rows, "dashboard-product-box", "Orders", rows.length > 6)();

  return (
    <div className="container">
      <h1>My Orders</h1>
      {table}
    </div>
  );
};

export default Orders;
