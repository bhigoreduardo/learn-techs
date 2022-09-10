import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Sale } from "../../models/sale";
import { BASE_URL } from "../../utils/request";

import Button from "../Button";

import "./styles.css";

function Table() {
  const minValue = new Date(new Date().setDate(new Date().getDate() - 365));
  const maxValue = new Date();

  const [minDate, setMinDate] = useState(minValue);
  const [maxDate, setMaxDate] = useState(maxValue);

  const [sales, setSales] = useState<Sale[]>([]);

  useEffect(() => {
    const min = minDate.toISOString().slice(0, 10);
    const max = maxDate.toISOString().slice(0, 10);

    axios.get(`${BASE_URL}/sales?minDate=${min}&maxDate=${max}`).then((response) => {
      setSales(response.data.content);
    });
  }, []);

  return (
    <>
      <div className="dsmeta-card">
        <h2 className="dsmeta-sales-title">Vendas</h2>
        <div>
          <div className="dsmeta-form-control-container">
            <DatePicker
              selected={minDate}
              onChange={(date: Date) => setMinDate(date)}
              dateFormat="dd/MM/yyyy"
              className="dsmeta-form-control"
            />
          </div>
          <div className="dsmeta-form-control-container">
            <DatePicker
              selected={maxDate}
              onChange={(date: Date) => setMaxDate(date)}
              dateFormat="dd/MM/yyyy"
              className="dsmeta-form-control"
            />
          </div>
        </div>

        <div>
          <table className="dsmeta-sales-table">
            <thead>
              <tr>
                <th className="show992">ID</th>
                <th className="show576">Data</th>
                <th>Vendedor</th>
                <th className="show992">Visitas</th>
                <th className="show992">Vendas</th>
                <th>Total</th>
                <th>Notificar</th>
              </tr>
            </thead>

            <tbody>
              {sales.map((sale) => {
                return (
                  <tr key={sale.id}>
                    <td className="show992">#{sale.id}</td>
                    <td className="show576">{new Date(sale.date).toLocaleDateString()}</td>
                    <td>{sale.sellerName}</td>
                    <td className="show992">{sale.visited}</td>
                    <td className="show992">{sale.deals}</td>
                    <td>R$ {sale.amount.toFixed(2)}</td>
                    <td>
                      <div className="dsmeta-red-btn-container">
                        <Button />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Table;
