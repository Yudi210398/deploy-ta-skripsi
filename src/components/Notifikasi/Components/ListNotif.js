import React, { Fragment } from "react";
import { Tab, Tabs } from "react-bootstrap";

import BelumBayar from "../BelumBayar/ParentElement/BelumBayar";

import { GiPlainCircle } from "react-icons/gi";
import { useUSerhttp } from "../../shared/util/useUSer-http";
import Dikemas from "../dikemas/parentDikemas/Dikemas";
import { useOrderData } from "../../shared/util/useOrderData";

function ListNotif() {
  const { getCartsOrder } = useUSerhttp();
  const { data } = useOrderData();
  return (
    <Fragment>
      <div className="row justify-content-center">
        <div className="col-10">
          <Tabs
            defaultActiveKey="home"
            transition={true}
            id="noanim-tab-example"
            className="mb-3"
            fill
          >
            <Tab
              eventKey="home"
              title={
                <h3>
                  BELUM BAYAR
                  {getCartsOrder.length > 0 && <GiPlainCircle color="red" />}
                </h3>
              }
            >
              <BelumBayar />
            </Tab>
            <Tab
              eventKey="profile"
              title={
                <h3>
                  DIKEMAS
                  {data?.ordersData?.length > 0 && (
                    <GiPlainCircle color="red" />
                  )}
                </h3>
              }
            >
              <Dikemas />
            </Tab>
            <Tab eventKey="contact" title="PENGIRIMAN">
              <h1>PENGIRIMAN</h1>
            </Tab>

            <Tab eventKey="selesai" title="SELESAI">
              <h1>kocak</h1>
            </Tab>
          </Tabs>
        </div>
      </div>
    </Fragment>
  );
}

export default ListNotif;
