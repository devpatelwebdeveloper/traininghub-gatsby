import React, { useRef, useState, useEffect } from "react";
import browser from "../../../utilities/window";
import BaseTitle from "../../atoms/BaseTitle/BaseTitle";

export default function Paypal({ coursename, price }) {
  const [approved, setApproved] = useState(false);
  const paypal = useRef();
  const tax = 13;
  const calculatedTax = price * (1 + tax / 100);
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
                  value: calculatedTax,
                  currency_code: "CAD",
                  details: {
                    subtotal: price,
                    tax: "0.13",
                  },
                },
                // amount: {
                // currency_code: "CAD",
                // value: calculatedTax,
                // tax: "0.13",
                // },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
          setApproved(true);
        },
        onError: (err) => {
          console.log(err);
          setApproved(false);
        },
      })
      .render(paypal.current);
  }, []);

  return approved ? (
    <BaseTitle title="Payment Approved" size="H3" />
  ) : (
    <>
      <BaseTitle title={`Coursename: ${coursename}`} size="H3" />
      <BaseTitle
        title={`Amount to be charged $${calculatedTax} (${price} + ${tax}%)`}
        size="H5"
      />
      <div ref={paypal} />
    </>
  );
}
