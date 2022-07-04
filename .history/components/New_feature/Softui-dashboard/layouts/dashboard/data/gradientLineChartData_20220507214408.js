/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

const gradientLineChartData = {
  labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Commandes",
      color: "info",
      data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
    },
    {
      label: "Annulées",
      color: "danger",
      data: [10, 8, 60, 45, 100, 50, 80, 55, 100],
    },
    {
      label: "Acceptées",
      color: "warning",
      data: [30, 25, 200, 100, 300, 290, 340, 230, 400],
    },
    {
      label: "Vendues",
      color: "success",
      data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
    },
  ],
};

export default gradientLineChartData;
