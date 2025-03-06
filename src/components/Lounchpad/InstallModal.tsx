import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  IconButton,
  Button
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Memory, NetworkCheck, SdStorage, Storage } from "@mui/icons-material";
import EditDetails from "./EditDeetails";
import { LaunchpadData } from "~/types";

interface AboutPcModalProps {
  open: boolean;
  app: LaunchpadData;
  onClose: () => void;
}

const BasicRequirements = {
  CPU: "8-core",
  RAM: "16 GB",
  Storage: "500 GB SSB",
  Network: "1 Gbps Ethernet port"
};

const InstallModal: React.FC<AboutPcModalProps> = ({ open, onClose }) => {
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
          About Install
        </Typography>
      </Box>

      {tabIndex !== 1 && (
        <Box sx={{ background: "#f5f7fa", p: 3 }}>
          <Box display="flex" alignItems="center">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <img src="img/icons/DatagazeSIEM.png" alt="Datagaze Logo" width={56} />
            </Box>
            <Box ml={1}>
              <Typography fontWeight={500} fontSize={36}>
                Datagaze SIEM
              </Typography>
            </Box>
          </Box>

          <DialogContent sx={{ p: 0, pt: 3 }}>
            {/* OS SECTION */}
            <Typography color="#303030A3" fontSize={12} pb={1}>
              Basic requirements
            </Typography>
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
                {/* CPU */}
                <Box sx={{ display: "flex", flexDirection: "column", width: "180px" }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Memory sx={{ fontSize: 18, color: "#303030A3" }} />
                    <Typography color="#303030A3">CPU</Typography>
                  </Box>
                  <Typography sx={{ pt: 1, fontWeight: 500 }}>
                    {BasicRequirements.CPU}
                  </Typography>
                </Box>

                {/* RAM */}
                <Box sx={{ display: "flex", flexDirection: "column", width: "180px" }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <SdStorage sx={{ fontSize: 18, color: "#303030A3" }} />
                    <Typography color="#303030A3">RAM</Typography>
                  </Box>
                  <Typography sx={{ pt: 1, fontWeight: 500 }}>
                    {BasicRequirements.RAM}
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", gap: 2 }}>
                {/* Storage */}
                <Box sx={{ display: "flex", flexDirection: "column", width: "180px" }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Storage sx={{ fontSize: 18, color: "#303030A3" }} />
                    <Typography color="#303030A3">Storage</Typography>
                  </Box>
                  <Typography sx={{ pt: 1, fontWeight: 500 }}>
                    {BasicRequirements.Storage}
                  </Typography>
                </Box>

                {/* Network */}
                <Box sx={{ display: "flex", flexDirection: "column", width: "180px" }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <NetworkCheck sx={{ fontSize: 18, color: "#303030A3" }} />
                    <Typography color="#303030A3">Network</Typography>
                  </Box>
                  <Typography sx={{ pt: 1, fontWeight: 500 }}>
                    {BasicRequirements.Network}
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Action */}
            <Box display="flex" mt={3} justifyContent="flex-end" alignItems="center">
              <Box display="flex" gap={2}>
                <Button variant="text" sx={{ textTransform: "none" }} onClick={onClose}>
                  Cancel
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: "#ccc",
                    bgcolor: "white",
                    borderRadius: 2,
                    textTransform: "none"
                  }}
                  onClick={() => setTabIndex(1)}
                >
                  Install
                </Button>
              </Box>
            </Box>
          </DialogContent>
        </Box>
      )}

      {tabIndex === 1 && <InstallAbout data={agentData} onBack={() => setTabIndex(0)} />}
    </Dialog>
  );
};

export default InstallModal;
