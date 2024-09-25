/*!

=========================================================
* MAMAPESA React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-react/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

export const progressData = {
  2021: [
    { month: 'Jan', revenue: 10000, loansDisbursed: 3000, repayments: 2500 },
    { month: 'Feb', revenue: 12000, loansDisbursed: 4000, repayments: 3500 },
    { month: 'Mar', revenue: 14000, loansDisbursed: 5000, repayments: 4500 },
    { month: 'Apr', revenue: 16000, loansDisbursed: 6000, repayments: 5500 },
    { month: 'May', revenue: 18000, loansDisbursed: 8000, repayments: 6500 },
    { month: 'Jun', revenue: 20000, loansDisbursed: 10000, repayments: 7500 },
    { month: 'Jul', revenue: 22000, loansDisbursed: 12000, repayments: 8500 },
    { month: 'Aug', revenue: 24000, loansDisbursed: 14000, repayments: 9500 },
    { month: 'Sep', revenue: 26000, loansDisbursed: 16000, repayments: 10500 },
    { month: 'Oct', revenue: 28000, loansDisbursed: 18000, repayments: 11500 },
    { month: 'Nov', revenue: 30000, loansDisbursed: 20000, repayments: 12500 },
    { month: 'Dec', revenue: 32000, loansDisbursed: 22000, repayments: 13500 },
  ],
  2022: [
    { month: 'Jan', revenue: 11000, loansDisbursed: 3100, repayments: 2600 },
    { month: 'Feb', revenue: 13000, loansDisbursed: 4200, repayments: 3600 },
    { month: 'Mar', revenue: 15000, loansDisbursed: 4800, repayments: 4000 },
    { month: 'Apr', revenue: 17000, loansDisbursed: 6200, repayments: 5400 },
    { month: 'May', revenue: 19000, loansDisbursed: 8100, repayments: 6600 },
    { month: 'Jun', revenue: 21000, loansDisbursed: 10200, repayments: 7600 },
    { month: 'Jul', revenue: 23000, loansDisbursed: 12200, repayments: 8600 },
    { month: 'Aug', revenue: 25000, loansDisbursed: 14200, repayments: 9600 },
    { month: 'Sep', revenue: 27000, loansDisbursed: 16200, repayments: 10600 },
    { month: 'Oct', revenue: 29000, loansDisbursed: 18200, repayments: 11600 },
    { month: 'Nov', revenue: 31000, loansDisbursed: 20200, repayments: 12600 },
    { month: 'Dec', revenue: 33000, loansDisbursed: 22200, repayments: 13600 },
  ],
  2023: [
    { month: 'Jan', revenue: 12000, loansDisbursed: 3200, repayments: 2700 },
    { month: 'Feb', revenue: 14000, loansDisbursed: 4400, repayments: 3700 },
    { month: 'Mar', revenue: 16000, loansDisbursed: 4900, repayments: 4100 },
    { month: 'Apr', revenue: 18000, loansDisbursed: 6400, repayments: 5500 },
    { month: 'May', revenue: 20000, loansDisbursed: 8200, repayments: 6700 },
    { month: 'Jun', revenue: 22000, loansDisbursed: 10400, repayments: 7700 },
    { month: 'Jul', revenue: 24000, loansDisbursed: 12400, repayments: 8700 },
    { month: 'Aug', revenue: 26000, loansDisbursed: 14400, repayments: 9700 },
    { month: 'Sep', revenue: 28000, loansDisbursed: 16400, repayments: 10700 },
    { month: 'Oct', revenue: 30000, loansDisbursed: 18400, repayments: 11700 },
    { month: 'Nov', revenue: 32000, loansDisbursed: 20400, repayments: 12700 },
    { month: 'Dec', revenue: 34000, loansDisbursed: 22400, repayments: 13700 },
  ],
  2024: [
    { month: 'Jan', revenue: 13000, loansDisbursed: 3300, repayments: 2800 },
    { month: 'Feb', revenue: 15000, loansDisbursed: 4600, repayments: 3800 },
    { month: 'Mar', revenue: 17000, loansDisbursed: 5000, repayments: 4200 },
    { month: 'Apr', revenue: 19000, loansDisbursed: 6600, repayments: 5600 },
    { month: 'May', revenue: 21000, loansDisbursed: 8400, repayments: 6800 },
    { month: 'Jun', revenue: 23000, loansDisbursed: 10600, repayments: 7800 },
    { month: 'Jul', revenue: 25000, loansDisbursed: 12600, repayments: 8800 },
    { month: 'Aug', revenue: 27000, loansDisbursed: 14600, repayments: 9800 },
    { month: 'Sep', revenue: 29000, loansDisbursed: 16600, repayments: 10800 },
    { month: 'Oct', revenue: 31000, loansDisbursed: 18600, repayments: 11800 },
    { month: 'Nov', revenue: 33000, loansDisbursed: 20600, repayments: 12800 },
    { month: 'Dec', revenue: 35000, loansDisbursed: 22600, repayments: 13800 },
  ],
};

/*!

=========================================================
* MAMAPESA React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-react/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

export const lineChartDataDashboard = [
  {
    name: "Revenue",
    data: progressData[2021].map(item => item.revenue),
  },
  {
    name: "Loans Disbursed",
    data: progressData[2021].map(item => item.loansDisbursed),
  },
  {
    name: "Repayments",
    data: progressData[2021].map(item => item.repayments),
  },
];
