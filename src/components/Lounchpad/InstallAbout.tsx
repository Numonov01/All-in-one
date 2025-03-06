import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
  Stepper,
  Step,
  StepLabel
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Visibility, VisibilityOff } from "@mui/icons-material";

interface EditDetailsProps {
  data: {
    ipAddress: string;
    portNumber: string;
    username: string;
    password: string;
    remindIt: string;
  };
  onBack: () => void;
}

const InstallData = {
  Publisher: "Datagaze LLC",
  Version: "2.11.2",
  ReleaseDate: "02.12.2025"
};

const BasicRequirements = {
  CPU: "8-core",
  RAM: "min. 16 GB",
  Storage: "min. 500 GB SSB",
  Network: "1 Gbps Ethernet port"
};

//edit data
export const agentData = {
  ipAddress: "",
  portNumber: "",
  username: "",
  password: "",
  remindIt: ""
};

const steps = ["System requirements", "Server configs", "Completed"];

const InstallAbout: React.FC<EditDetailsProps> = ({ data, onBack }) => {
  const [editData, setEditData] = useState(data);
  const [showPassword, setShowPassword] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Box sx={{ background: "#f5f7fa", p: 3 }}>
      <Box sx={{ display: "grid", gap: 2 }}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box>
            <Typography fontWeight={500} fontSize={36}>
              Datagaze SIEM
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <img src="img/icons/DatagazeSIEM.png" alt="Datagaze Logo" width={56} />
          </Box>
        </Box>

        <Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Typography sx={{ color: "#303030A3" }}>Publisher:</Typography>
            <Typography sx={{ color: "#1A79D8" }}>{InstallData.Publisher}</Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 1, py: 1 }}>
            <Typography sx={{ color: "#303030A3" }}>Version:</Typography>
            <Typography sx={{ color: "#303030A3" }}>{InstallData.Version}</Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Typography sx={{ color: "#303030A3" }}>Release date:</Typography>
            <Typography sx={{ color: "#303030A3" }}>{InstallData.ReleaseDate}</Typography>
          </Box>
        </Box>

        {/* Stepper */}
        <Box display="flex" justifyContent="space-between" width="100%" py={2}>
          <Stepper activeStep={tabIndex} sx={{ width: "100%" }}>
            {steps.map((label, index) => (
              <Step key={index}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>

        {tabIndex === 0 && (
          <Box>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Typography sx={{ color: "#303030A3" }}>CPU:</Typography>
              <Typography>{BasicRequirements.CPU}</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 1, pt: 1 }}>
              <Typography sx={{ color: "#303030A3" }}>RAM:</Typography>
              <Typography>{BasicRequirements.RAM}</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 1, py: 1 }}>
              <Typography sx={{ color: "#303030A3" }}>Storage:</Typography>
              <Typography>{BasicRequirements.Storage}</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Typography sx={{ color: "#303030A3" }}>Network:</Typography>
              <Typography>{BasicRequirements.Network}</Typography>
            </Box>
          </Box>
        )}

        {tabIndex === 1 && (
          <Box>
            <Box display="grid" gridTemplateColumns="auto auto" gap={1.5}>
              <Box>
                <Typography align="left" variant="body2">
                  IP address
                </Typography>
                <TextField
                  placeholder="Enter IP address"
                  variant="outlined"
                  margin="dense"
                  size="small"
                  fullWidth
                  value={editData.ipAddress}
                  onChange={(e) =>
                    setEditData({ ...editData, ipAddress: e.target.value })
                  }
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                      bgcolor: "white",
                      height: 32,
                      fontSize: "0.875rem"
                    }
                  }}
                />
              </Box>
              <Box>
                <Typography align="left" variant="body2">
                  Port number
                </Typography>
                <TextField
                  placeholder="Enter Port number"
                  variant="outlined"
                  margin="dense"
                  size="small"
                  fullWidth
                  value={editData.portNumber}
                  onChange={(e) =>
                    setEditData({ ...editData, portNumber: e.target.value })
                  }
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                      bgcolor: "white",
                      height: 32,
                      fontSize: "0.875rem"
                    }
                  }}
                />
              </Box>
            </Box>

            <Box display="grid" gridTemplateColumns="1fr 1fr" gap={1.5}>
              <Box>
                <Typography align="left" variant="body2">
                  Username
                </Typography>
                <TextField
                  placeholder="Enter Username"
                  variant="outlined"
                  margin="dense"
                  size="small"
                  fullWidth
                  value={editData.username}
                  onChange={(e) => setEditData({ ...editData, username: e.target.value })}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                      bgcolor: "white",
                      height: 32,
                      fontSize: "0.875rem"
                    }
                  }}
                />
              </Box>

              <Box>
                <Typography align="left" variant="body2">
                  Password
                </Typography>
                <TextField
                  placeholder="Enter Password"
                  variant="outlined"
                  margin="dense"
                  size="small"
                  fullWidth
                  type={showPassword ? "text" : "password"}
                  value={editData.password}
                  onChange={(e) => setEditData({ ...editData, password: e.target.value })}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                      bgcolor: "white",
                      height: 32,
                      fontSize: "0.875rem"
                    }
                  }}
                />
              </Box>
            </Box>

            <Box display="grid" gridTemplateColumns="1fr 1fr" gap={1.5}>
              <Box>
                <Typography align="left" variant="body2">
                  Remind it
                </Typography>
                <TextField
                  placeholder="Enter Remind it"
                  variant="outlined"
                  margin="dense"
                  size="small"
                  fullWidth
                  value={editData.remindIt}
                  onChange={(e) => setEditData({ ...editData, remindIt: e.target.value })}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                      bgcolor: "white",
                      height: 32,
                      fontSize: "0.875rem"
                    }
                  }}
                />
              </Box>
            </Box>
          </Box>
        )}

        {tabIndex === 2 && (
          <Box sx={{ height: "200px" }}>
            <Terminal />
          </Box>
        )}
        {/* Actions */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Button>
            <InfoOutlinedIcon sx={{ fontSize: 18, color: "#1A79D8" }} />
          </Button>
          <Box>
            <Button
              variant="text"
              sx={{
                // width: "137px",
                borderRadius: 2,
                textTransform: "none"
              }}
              onClick={onBack}
            >
              Back
            </Button>
            <Button
              variant="outlined"
              sx={{
                width: "137px",
                ml: 2,
                borderColor: "#ccc",
                bgcolor: "white",
                borderRadius: 2,
                textTransform: "none"
              }}
              onClick={() => setTabIndex((prev) => Math.min(prev + 1))}
            >
              Next
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default InstallAbout;
