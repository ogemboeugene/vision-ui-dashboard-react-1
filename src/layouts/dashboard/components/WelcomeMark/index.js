// WelcomeMark.js
import React from 'react';
import { Box } from '@mui/material';
import VuiTypography from "components/VuiTypography"; // Assuming you have a custom Typography component

const WelcomeMark = () => {
  return (
    <Box
      sx={{
        padding: "20px",
        borderRadius: "10px",
        backgroundColor: "#e2f0d9", // Light green background
        color: "#333", // Dark text color
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <VuiTypography variant="h4" fontWeight="bold" mb={2}>
        Welcome to Our Financial Dashboard!
      </VuiTypography>
      <VuiTypography variant="h6" fontWeight="bold" mb={1}>
        Key Metrics at a Glance
      </VuiTypography>
      <VuiTypography variant="body1" mb={1}>
        <strong>Monthly Growth Rate: </strong> 5%
      </VuiTypography>
      <VuiTypography variant="body1" mb={1}>
        <strong>Total Revenue Generated: </strong> Ksh 3,000,000
      </VuiTypography>
      <VuiTypography variant="body1" mb={1}>
        <strong>Successful Loan Repayments: </strong> 1,200
      </VuiTypography>
      <VuiTypography variant="body1" mb={1}>
        <strong>Client Retention Rate: </strong> 85%
      </VuiTypography>
      <VuiTypography variant="body1" mb={1}>
        <strong>Total Loans Approved: </strong> 1,500
      </VuiTypography>
      <VuiTypography variant="body2" mt={2}>
        Join us in making a significant impact in the community!
      </VuiTypography>
    </Box>
  );
};

export default WelcomeMark;
