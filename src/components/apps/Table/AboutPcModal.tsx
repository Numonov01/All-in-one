import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  Tabs,
  Tab,
  Box,
  Typography,
  LinearProgress,
  Chip,
  IconButton
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface AboutPcModalProps {
  open: boolean;
  onClose: () => void;
}

const osData = {
  OperationSystem: "Windows",
  Platform: "x64",
  BuildNumber: "10.256.333",
  Version: "11.0.123"
};

const processorData = {
  CPUModel: "Intel i7 1280h",
  TotalCores: 24,
  ProcessorModel: "14900H"
};

const memoryUsage = [
  { label: "RAM (8GB)", value: 60 },
  { label: "Disk D (1TB)", value: 70 },
  { label: "Disk C (1TB)", value: 50 }
];

const networkData = [
  {
    NICName: "Realtek Wireless x43",
    IPAddress: "192.168.1.25",
    MACAddress: "AC-00:2E:11:88:0C",
    Status: "Online"
  },
  {
    NICName: "Realtek Ethernet LAN",
    IPAddress: "10.10.110.47",
    MACAddress: "34:AB:2E:11:52:5B",
    Status: "Offline"
  }
];

const AboutPcModal: React.FC<AboutPcModalProps> = ({ open, onClose }) => {
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
          About PC
        </Typography>
      </Box>
      <Box sx={{ background: "#f5f7fa", p: 3 }}>
        <Tabs
          value={tabIndex}
          onChange={(_, newValue) => setTabIndex(newValue)}
          sx={{
            backgroundColor: "#E5ECFC",
            borderRadius: "24px",
            display: "flex",
            minHeight: "40px",
            "& .MuiTabs-indicator": { display: "none" }
          }}
        >
          {["OS", "Processor", "Network"].map((label, index) => (
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

        <DialogContent sx={{ p: 0, pt: 3 }}>
          {/* OS SECTION */}
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
                <Box sx={{ display: "flex", flexDirection: "column", width: "180px" }}>
                  <Typography color="#303030A3">Operation System</Typography>
                  <Typography sx={{ fontWeight: 500 }}>
                    {osData.OperationSystem}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", width: "180px" }}>
                  <Typography color="#303030A3">Platform</Typography>
                  <Typography sx={{ fontWeight: 500 }}>{osData.Platform}</Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", gap: 2 }}>
                <Box sx={{ display: "flex", flexDirection: "column", width: "180px" }}>
                  <Typography color="#303030A3">Build Number</Typography>
                  <Typography sx={{ fontWeight: 500 }}>{osData.BuildNumber}</Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", width: "180px" }}>
                  <Typography color="#303030A3">Version</Typography>
                  <Typography sx={{ fontWeight: 500 }}>{osData.Version}</Typography>
                </Box>
              </Box>
            </Box>
          )}

          {/* PROCESSOR SECTION */}
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
                <Box sx={{ display: "flex", flexDirection: "column", width: "180px" }}>
                  <Typography color="#303030A3">CPU Model</Typography>
                  <Typography sx={{ fontWeight: 500 }}>
                    {processorData.CPUModel}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", width: "180px" }}>
                  <Typography color="#303030A3">Total Cores</Typography>
                  <Typography sx={{ fontWeight: 500 }}>
                    {processorData.TotalCores}
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", gap: 2 }}>
                <Box sx={{ display: "flex", flexDirection: "column", width: "180px" }}>
                  <Typography color="#303030A3">Processor Model</Typography>
                  <Typography sx={{ fontWeight: 500 }}>
                    {processorData.ProcessorModel}
                  </Typography>
                </Box>
              </Box>
            </Box>
          )}

          {/* NETWORK SECTION */}
          {tabIndex === 2 && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 5,
                background: "white",
                padding: "16px",
                borderRadius: "12px"
              }}
            >
              {networkData.map((network, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2
                  }}
                >
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <Box
                      sx={{ display: "flex", flexDirection: "column", width: "180px" }}
                    >
                      <Typography color="#303030A3">NIC Name</Typography>
                      <Typography sx={{ fontWeight: 500 }}>{network.NICName}</Typography>
                    </Box>
                    <Box
                      sx={{ display: "flex", flexDirection: "column", width: "180px" }}
                    >
                      <Typography color="#303030A3">IP Address</Typography>
                      <Typography sx={{ fontWeight: 500 }}>
                        {network.IPAddress}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: "flex", gap: 2 }}>
                    <Box
                      sx={{ display: "flex", flexDirection: "column", width: "180px" }}
                    >
                      <Typography color="#303030A3">MAC Address</Typography>
                      <Typography sx={{ fontWeight: 500 }}>
                        {network.MACAddress}
                      </Typography>
                    </Box>
                    <Box
                      sx={{ display: "flex", flexDirection: "column", width: "180px" }}
                    >
                      <Typography color="#303030A3">Available</Typography>
                      <Chip
                        label={network.Status}
                        color={network.Status === "Online" ? "success" : "error"}
                        sx={{
                          width: 70,
                          height: 25,
                          fontWeight: 500,
                          bgcolor: network.Status === "Online" ? "#E9F7EF" : "#FDEDED",
                          color: network.Status === "Online" ? "#2E7D32" : "#D32F2F",
                          borderRadius: "16px"
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
          )}

          {/* MEMORY USAGE SECTION */}
          <Box sx={{ mt: 3, background: "white", padding: "16px", borderRadius: "12px" }}>
            {memoryUsage.map(({ label, value }, index) => (
              <Box key={index} sx={{ mt: index !== 0 ? 2 : 0 }}>
                <Typography sx={{ color: "gray.700" }}>
                  {label} - {value}%
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={value}
                  sx={{ height: 6, borderRadius: 1 }}
                />
              </Box>
            ))}
          </Box>
        </DialogContent>
      </Box>
    </Dialog>
  );
};

export default AboutPcModal;
