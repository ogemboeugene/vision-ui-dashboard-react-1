/* eslint-disable react/prop-types */
// Mamapesa Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiAvatar from "components/VuiAvatar";
import VuiBadge from "components/VuiBadge";

// Images
import avatar1 from "assets/images/avatar1.png";
import avatar2 from "assets/images/avatar2.png";
import avatar3 from "assets/images/avatar3.png";
import avatar4 from "assets/images/avatar4.png";
import avatar5 from "assets/images/avatar5.png";
import avatar6 from "assets/images/avatar6.png";

// Function to generate a unique ID
const generateUniqueId = () => {
  return 'CUST' + Math.random().toString(36).substr(2, 5).toUpperCase();
};

function Author({ image, name }) {
  return (
    <VuiBox display="flex" alignItems="center" px={1} py={0.5}>
      <VuiBox mr={2}>
        <VuiAvatar src={image} alt={name} size="sm" variant="rounded" />
      </VuiBox>
      <VuiTypography variant="button" color="white" fontWeight="medium">
        {name}
      </VuiTypography>
    </VuiBox>
  );
}

export default {
  columns: [
    { name: "customerId", align: "left" },
    { name: "author", align: "left" },
    { name: "totalLoans", align: "center" },
    { name: "totalSavings", align: "center" },
    { name: "lastActive", align: "center" },
    { name: "customerType", align: "center" },
    { name: "status", align: "center" },
  ],

  rows: [
    {
      customerId: generateUniqueId(),
      author: <Author image={avatar4} name="Wangari Nyambura" />,
      totalLoans: "5",
      totalSavings: "KES 1000",
      lastActive: "2024-09-25",
      customerType: "Individual",
      status: (
        <VuiBadge
          variant="standard"
          badgeContent="Active"
          color="success"
          size="xs"
        />
      ),
    },
    {
      customerId: generateUniqueId(),
      author: <Author image={avatar2} name="Amani Kamau" />,
      totalLoans: "3",
      totalSavings: "KES 500",
      lastActive: "2024-09-24",
      customerType: "Individual",
      status: (
        <VuiBadge
          variant="standard"
          badgeContent="Inactive"
          size="xs"
        />
      ),
    },
    {
      customerId: generateUniqueId(),
      author: <Author image={avatar3} name="Juma Muriithi" />,
      totalLoans: "10",
      totalSavings: "KES 2500",
      lastActive: "2024-09-23",
      customerType: "Business",
      status: (
        <VuiBadge
          variant="standard"
          badgeContent="Active"
          color="success"
          size="xs"
        />
      ),
    },
    {
      customerId: generateUniqueId(),
      author: <Author image={avatar1} name="Njeri Mwangi" />,
      totalLoans: "2",
      totalSavings: "KES 1500",
      lastActive: "2024-09-22",
      customerType: "Individual",
      status: (
        <VuiBadge
          variant="standard"
          badgeContent="Active"
          color="success"
          size="xs"
        />
      ),
    },
    {
      customerId: generateUniqueId(),
      author: <Author image={avatar5} name="Kiptoo Kibet" />,
      totalLoans: "0",
      totalSavings: "KES 300",
      lastActive: "2024-09-21",
      customerType: "Individual",
      status: (
        <VuiBadge
          variant="standard"
          badgeContent="Inactive"
          size="xs"
        />
      ),
    },
    {
      customerId: generateUniqueId(),
      author: <Author image={avatar6} name="Muthoni Waweru" />,
      totalLoans: "8",
      totalSavings: "KES 6000",
      lastActive: "2024-09-20",
      customerType: "Business",
      status: (
        <VuiBadge
          variant="standard"
          badgeContent="Active"
          color="success"
          size="xs"
        />
      ),
    },
    {
      customerId: generateUniqueId(),
      author: <Author image={avatar2} name="Shiro Gichuki" />,
      totalLoans: "4",
      totalSavings: "KES 2000",
      lastActive: "2024-09-19",
      customerType: "Individual",
      status: (
        <VuiBadge
          variant="standard"
          badgeContent="Inactive"
          size="xs"
        />
      ),
    },
    {
      customerId: generateUniqueId(),
      author: <Author image={avatar3} name="Brian Akwabi" />,
      totalLoans: "6",
      totalSavings: "KES 4000",
      lastActive: "2024-09-18",
      customerType: "Business",
      status: (
        <VuiBadge
          variant="standard"
          badgeContent="Active"
          color="success"
          size="xs"
        />
      ),
    },
    // More records can be added here if needed...
  ],
};
