import React, { useRef, useEffect } from "react";
import browser from "../../../utilities/window";
import BaseTitle from "../../atoms/BaseTitle/BaseTitle";

export default function Paypal({ coursename, price }) {
  const paypal = useRef();

  useEffect(() => {
    browser.window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: coursename,
                amount: {
                  currency_code: "CAD",
                  value: price,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);

  return (
    <>
      <BaseTitle title={coursename} size="H3" />
      <BaseTitle title={`Amount to be charged$${price}`} size="H5" />
      <div ref={paypal} />
    </>
  );
}
