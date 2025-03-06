import axios from "axios";
import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  IconButton,
  InputAdornment
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { wallpapers, user } from "~/configs";
import type { LoginActions } from "~/types";

const VITE_API_URL = import.meta.env.VITE_API_URL;

export default function Login(props: LoginActions) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [sign, setSign] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const dark = useStore((state) => state.dark);

  const keyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") loginHandle();
  };

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      props.setLogin(true);
    }
  }, []);

  const loginHandle = async () => {
    try {
      const response = await axios.post(`${VITE_API_URL}/api/auth/login`, {
        username,
        password
      });
      // console.log("Login muvaffaqiyatli:", response.data);
      props.setLogin(true);
    } catch (error) {
      setSign("Incorrect password");
      // console.error("Login xatosi:", error);
    }
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      sx={{
        backgroundImage: `url(${dark ? wallpapers.night : wallpapers.day})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <Box
        sx={{
          borderRadius: 2,
          textAlign: "center",
          width: 400
        }}
      >
        {/* Logo */}
        <img
          src={user.avatar}
          alt="User Avatar"
          style={{ width: 37, height: 64, margin: "0 auto" }}
        />
        <Typography variant="h6" color="white" mt={2}>
          Secure. Robust. Scalable.
        </Typography>
        <Typography color="#FFFFFFA3" mt={1}>
          Effortless Data Management for Seamless Operations.
        </Typography>

        {/* Username Field */}
        <Typography color="white" mt={2} align="left">
          Username *
        </Typography>
        <TextField
          placeholder="Enter username"
          variant="outlined"
          fullWidth
          margin="dense"
          size="small"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={keyPress}
          error={!!sign}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 3,
              bgcolor: "white"
            }
          }}
        />

        {/* Password Field */}
        <Typography color="white" mt={2} align="left">
          Password *
        </Typography>
        <TextField
          type={showPassword ? "text" : "password"}
          placeholder="Enter password"
          variant="outlined"
          fullWidth
          margin="dense"
          size="small"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={keyPress}
          error={!!sign}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 3,
              bgcolor: "white"
            }
          }}
        />

        {/* Login Button */}
        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 2, bgcolor: "#007AFF", color: "white", borderRadius: 3 }}
          onClick={loginHandle}
        >
          Sign in
        </Button>

        {/* Sign Status */}
        {sign && (
          <Typography variant="body2" color="error" mt={2}>
            {sign}
          </Typography>
        )}
      </Box>
    </Box>
  );
}
