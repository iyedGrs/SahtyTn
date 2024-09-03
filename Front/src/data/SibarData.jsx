import DashboardIcon from "@mui/icons-material/Dashboard";
import EventIcon from "@mui/icons-material/Event";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import ReceiptIcon from "@mui/icons-material/Receipt";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import PaymentsIcon from "@mui/icons-material/Payments";
import MessageIcon from "@mui/icons-material/Message";
import SettingsIcon from "@mui/icons-material/Settings";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import PersonIcon from "@mui/icons-material/Person";
import PeopleIcon from "@mui/icons-material/People";
import AssessmentIcon from "@mui/icons-material/Assessment";

export const sidebarItems = {
  client: [
    {
      title: "Dashboard",
      path: "/client/dashboard",
      icon: <DashboardIcon />,
    },
    {
      title: "Appointments",
      path: "/client/appointments",
      icon: <EventIcon />,
    },
    {
      title: "Consultations",
      path: "/client/consultations",
      icon: <LocalHospitalIcon />,
    },
    {
      title: "Prescriptions",
      path: "/client/prescriptions",
      icon: <ReceiptIcon />,
    },
    {
      title: "Medical Records",
      path: "/client/medical-records",
      icon: <FolderSharedIcon />,
    },
    {
      title: "Payments",
      path: "/client/payments",
      icon: <PaymentsIcon />,
    },
    {
      title: "Messages",
      path: "/client/messages",
      icon: <MessageIcon />,
    },
    {
      title: "Settings",
      path: "/client/settings",
      icon: <SettingsIcon />,
    },
    {
      title: "Support",
      path: "/client/support",
      icon: <SupportAgentIcon />,
    },
  ],
  doctor: [
    {
      title: "Dashboard",
      path: "/doctor/dashboard",
      icon: <DashboardIcon />,
    },
    {
      title: "My Profile",
      path: "/doctor/profile",
      icon: <PersonIcon />,
    },
    {
      title: "Appointments",
      path: "/doctor/appointments",
      icon: <EventIcon />,
    },
    {
      title: "Patient Management",
      path: "/doctor/patient-management",
      icon: <PeopleIcon />,
    },
    {
      title: "Consultations",
      path: "/doctor/consultations",
      icon: <LocalHospitalIcon />,
    },
    {
      title: "Medical Records",
      path: "/doctor/medical-records",
      icon: <FolderSharedIcon />,
    },
    {
      title: "Prescriptions",
      path: "/doctor/prescriptions",
      icon: <ReceiptIcon />,
    },
    {
      title: "Messages",
      path: "/doctor/messages",
      icon: <MessageIcon />,
    },
    {
      title: "Billing",
      path: "/doctor/billing",
      icon: <PaymentsIcon />,
    },
    {
      title: "Reports",
      path: "/doctor/reports",
      icon: <AssessmentIcon />,
    },
    {
      title: "Support",
      path: "/doctor/support",
      icon: <SupportAgentIcon />,
    },
  ],
};

export default sidebarItems;
