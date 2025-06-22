import { useState, useRef, useEffect } from "react";
import { Form, Table } from "react-bootstrap";
import { IoMdEye } from "react-icons/io";

interface Account {
  id: number;
  name: string;
  unit: string;
  amount: string;
  months: string;
  lastPayment: string;
}

const mockData: Account[] = [
  { id: 1, name: "John Cruz", unit: "3A", amount: "₱2,500", months: "1 Month", lastPayment: "March 30, 2025" },
  { id: 2, name: "Ana Reyes", unit: "5B", amount: "₱7,500", months: "3 Months", lastPayment: "January 15, 2025" },
  { id: 3, name: "Marco Dela Peña", unit: "4C", amount: "₱5,000", months: "2 Months", lastPayment: "February 25, 2025" },
  { id: 4, name: "Bianca Santos", unit: "2D", amount: "₱2,500", months: "1 Month", lastPayment: "March 28, 2025" },
  { id: 5, name: "Leo Fernandez", unit: "6A", amount: "₱10,000", months: "4 Months", lastPayment: "December 10, 2024" }
];

function UnpaidAccountTable() {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const headerCheckboxRef = useRef<HTMLInputElement>(null);

  const isAllSelected = selectedRows.length === mockData.length;
  const isIndeterminate = selectedRows.length > 0 && !isAllSelected;

  useEffect(() => {
    if (headerCheckboxRef.current) {
      headerCheckboxRef.current.indeterminate = isIndeterminate;
    }
  }, [isIndeterminate]);

  const toggleAll = (checked: boolean) => {
    if (checked) {
      setSelectedRows(mockData.map((row) => row.id));
    } else {
      setSelectedRows([]);
    }
  };

  const toggleRow = (id: number) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  return (
    <div className="w-100 d-flex flex-column gap-3 pt-2">
      <div className="overflow-auto">
        <Table responsive="sm" className="table-bordered">
          <thead>
            <tr className="text-nowrap">
              <th style={{ backgroundColor: "#F2F2F7" }}>
                <Form.Check
                  checked={isAllSelected}
                  ref={headerCheckboxRef}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    toggleAll(e.target.checked)
                  }
                />
              </th>
              <th style={{ backgroundColor: "#F2F2F7" }}>Resident Name</th>
              <th style={{ backgroundColor: "#F2F2F7" }}>Unit Number</th>
              <th style={{ backgroundColor: "#F2F2F7" }}>Amount Due</th>
              <th style={{ backgroundColor: "#F2F2F7" }}>Month Overdue</th>
              <th style={{ backgroundColor: "#F2F2F7" }}>Last Payment Date</th>
              <th style={{ backgroundColor: "#F2F2F7" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockData.map((row) => (
              <tr key={row.id} className="text-nowrap">
                <td>
                  <Form.Check
                    checked={selectedRows.includes(row.id)}
                    onChange={() => toggleRow(row.id)}
                  />
                </td>
                <td>{row.name}</td>
                <td>{row.unit}</td>
                <td>{row.amount}</td>
                <td>{row.months}</td>
                <td>{row.lastPayment}</td>
                <td className="d-flex align-items-center justify-content-center gap-2">
                  <div className="text-primary fw-bold fs-5">
                    <IoMdEye />
                  </div>
                  <a className="text-decoration-none pt-1" href="#">View</a>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default UnpaidAccountTable;
