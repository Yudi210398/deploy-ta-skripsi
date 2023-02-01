import React, { Fragment } from "react";
import { currency } from "../../../produk/cart/components/AllCart";
import ListDataDikemas from "./ListDataDikemas";

function Dikemasdata({ file, dataAsli }) {
  const data = file || [];

  return (
    <Fragment>
      <div className="row">
        {data?.produks?.map((listData, i) => (
          <ListDataDikemas key={i} produks={listData} />
        ))}
      </div>
      <br />
      <br />
      <br />
      <br />
      {dataAsli?.ordersData.length > 0 && <hr />}

      {dataAsli?.ordersData.length > 0 && (
        <div className="row">
          <div className="col-4">
            <h1>
              Total bayar :
              <span style={{ color: "red" }}>{currency(file.totalHarga)}</span>
            </h1>
          </div>

          <div className="col-4">
            <h1>Pesanan sedang diproses, mohon menunggu</h1>
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default Dikemasdata;
