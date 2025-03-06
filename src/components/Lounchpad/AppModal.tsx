import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  Tabs,
  Tab,
  Box,
  Typography,
  IconButton,
  Button
} from "@mui/material";
import {
  Key,
  Info,
  Public,
  Description,
  Event,
  CalendarToday
} from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import EditDetails from "./EditDeetails";
import { LaunchpadData } from "~/types";

interface AppModalProps {
  open: boolean;
  app: LaunchpadData;
  onClose: () => void;
}

const ServerDetails = {
  LicenseCount: 3000,
  AgentVersion: "2.2.1",
  IpAddress: "192.32.43.1",
  FileSize: "1.2 GB"
};

const AgentDetails = {
  FirstUploadDate: "12.01.2023",
  LastAploadDate: "12.01.2023",
  AgentVersiya: "2.2.1",
  FileSize: "1.2 GB"
};

const AppModal: React.FC<AppModalProps> = ({ open, onClose }) => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      {/* Close Button */}
      <Box
        sx={{
          display: "flex",
          gap: "8px",
          alignItems: "center",
          background: "white",
          py: 1,
          pl: 3
        }}
      >
        <IconButton
          onClick={onClose}
          sx={{
            color: "#fff",
            bgcolor: "#00000080",
            width: "12px",
            height: "12px"
          }}
        >
          <CloseIcon sx={{ fontSize: "12px" }} />
        </IconButton>
        <Typography variant="body2" sx={{ color: "#00000080" }}>
          About App
        </Typography>
      </Box>

      <Box sx={{ background: "#f5f7fa", p: 3 }}>
        <Box display="flex" alignItems="center">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <img src="img/icons/Datagaze.png" alt="Datagaze Logo" width={56} />
          </Box>
          <Box ml={1}>
            <Typography color="#303030A3" fontSize={12}>
              Produced by
            </Typography>
            <Typography fontWeight={500} fontSize={36}>
              Datagaze
            </Typography>
          </Box>
        </Box>

        {/* Tabs */}
        {tabIndex !== 2 && (
          <Tabs
            value={tabIndex}
            onChange={(_, newValue) => setTabIndex(newValue)}
            sx={{
              backgroundColor: "#E5ECFC",
              borderRadius: "24px",
              display: "flex",
              mt: 3,
              minHeight: "40px",
              "& .MuiTabs-indicator": { display: "none" }
            }}
          >
            {["Server Details", "Agent Details"].map((label, index) => (
              <Tab
                key={index}
                label={label}
                sx={{
                  flex: 1,
                  fontWeight: tabIndex === index ? "bold" : "normal",
                  backgroundColor: tabIndex === index ? "#fff" : "transparent",
                  borderRadius: "20px",
                  color: tabIndex === index ? "#000" : "#888",
                  transition: "0.3s",
                  minHeight: "36px",
                  textTransform: "none"
                }}
              />
            ))}
          </Tabs>
        )}

        <DialogContent sx={{ p: 0, pt: 3 }}>
          {/* Server Details */}
          {tabIndex === 0 && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                background: "white",
                padding: "16px",
                borderRadius: "12px"
              }}
            >
              <Box sx={{ display: "flex", gap: 2 }}>
                {/* License Count */}
                <Box sx={{ display: "flex", flexDirection: "column", width: "180px" }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Key sx={{ fontSize: 18, color: "#303030A3" }} />
                    <Typography color="#303030A3">License count</Typography>
                  </Box>
                  <Typography sx={{ pt: 1, fontWeight: 600 }}>
                    {ServerDetails.LicenseCount}
                  </Typography>
                </Box>

                {/* Agent Version */}
                <Box sx={{ display: "flex", flexDirection: "column", width: "180px" }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Info sx={{ fontSize: 18, color: "#303030A3" }} />
                    <Typography color="#303030A3">Agent version</Typography>
                  </Box>
                  <Typography sx={{ pt: 1, fontWeight: 600 }}>
                    {ServerDetails.AgentVersion}
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", gap: 2 }}>
                {/* IP Address */}
                <Box sx={{ display: "flex", flexDirection: "column", width: "180px" }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Public sx={{ fontSize: 18, color: "#303030A3" }} />
                    <Typography color="#303030A3">IP address</Typography>
                  </Box>
                  <Typography sx={{ pt: 1, fontWeight: 600 }}>
                    {ServerDetails.IpAddress}
                  </Typography>
                </Box>

                {/* File Size */}
                <Box sx={{ display: "flex", flexDirection: "column", width: "180px" }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Description sx={{ fontSize: 18, color: "#303030A3" }} />
                    <Typography color="#303030A3">File size</Typography>
                  </Box>
                  <Typography sx={{ pt: 1, fontWeight: 600 }}>
                    {ServerDetails.FileSize}
                  </Typography>
                </Box>
              </Box>
            </Box>
          )}

          {/* Agent Details*/}
          {tabIndex === 1 && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                background: "white",
                padding: "16px",
                borderRadius: "12px"
              }}
            >
              <Box sx={{ display: "flex", gap: 2 }}>
                {/* First Upload Date */}
                <Box sx={{ display: "flex", flexDirection: "column", width: "180px" }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Event sx={{ fontSize: 18, color: "#303030A3" }} />
                    <Typography color="#303030A3">First upload date</Typography>
                  </Box>
                  <Typography sx={{ pt: 1, fontWeight: 600 }}>
                    {AgentDetails.FirstUploadDate}
                  </Typography>
                </Box>

                {/* Last Upload Date */}
                <Box sx={{ display: "flex", flexDirection: "column", width: "180px" }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <CalendarToday sx={{ fontSize: 18, color: "#303030A3" }} />
                    <Typography color="#303030A3">Last upload date</Typography>
                  </Box>
                  <Typography sx={{ pt: 1, fontWeight: 600 }}>
                    {AgentDetails.LastAploadDate}
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", gap: 2 }}>
                {/* Agent version */}
                <Box sx={{ display: "flex", flexDirection: "column", width: "180px" }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Info sx={{ fontSize: 18, color: "#303030A3" }} />
                    <Typography color="#303030A3">Agent version</Typography>
                  </Box>
                  <Typography sx={{ pt: 1, fontWeight: 600 }}>
                    {AgentDetails.AgentVersiya}
                  </Typography>
                </Box>

                {/* File Size */}
                <Box sx={{ display: "flex", flexDirection: "column", width: "180px" }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Description sx={{ fontSize: 18, color: "#303030A3" }} />
                    <Typography color="#303030A3">File size</Typography>
                  </Box>
                  <Typography sx={{ pt: 1, fontWeight: 600 }}>
                    {AgentDetails.FileSize}
                  </Typography>
                </Box>
              </Box>
            </Box>
          )}

          {tabIndex === 2 && (
            <EditDetails data={agentData} onBack={() => setTabIndex(0)} />
          )}

          {/* Actions */}
          {tabIndex !== 2 && (
            <Box display="flex" mt={3} justifyContent="space-between" alignItems="center">
              <Button sx={{ color: "red", textTransform: "none" }}>Uninstall</Button>
              <Box display="flex" gap={2}>
                <Button variant="text" sx={{ textTransform: "none" }}>
                  Go to server
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: "#ccc",
                    bgcolor: "white",
                    borderRadius: 2,
                    textTransform: "none"
                  }}
                  onClick={() => setTabIndex(2)}
                >
                  Edit details
                </Button>
              </Box>
            </Box>
          )}
        </DialogContent>
      </Box>
    </Dialog>
  );
};

export default AppModal;
