import React from "react";
import "https://js.stripe.com/v3/pricing-table.js";

const Subscriptions: React.FC = () => {
  return (
    <stripe-pricing-table
      pricing-table-id="prctbl_1QnznnFHh4kCj3vgmerzVFfr"
      publishable-key="pk_test_51Qet5bFHh4kCj3vgJZYtljgQlR3fbQRo3i4Nbr89ZBqdRV45jtlc2YK0U6zuUn1NrHN0xg5UB9lRi0slYXLGu4Q500la5JCpWc"
    ></stripe-pricing-table>
  );
};

export default Subscriptions;