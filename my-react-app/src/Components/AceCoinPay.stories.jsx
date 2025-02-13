import React from "react";
import AceCoinPay from "./AceCoinPay";

export default {
  title: "Payment/AceCoinPay",
  component: AceCoinPay,
};

const Template = (args) => <AceCoinPay {...args} />;

export const Default = Template.bind({});
Default.args = {};
