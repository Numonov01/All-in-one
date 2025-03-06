import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  Box,
  Typography,
  IconButton,
  InputAdornment
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const userSchema = z.object({
  fullName: z.string().min(3, "Full name is required"),
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters")
});

interface User {
  id: string | number;
  fullName: string;
  email: string;
}

interface UserEditModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  user?: User | null;
  onDelete?: () => void;
}

export default function UserEditModal({
  open,
  setOpen,
  user,
  onDelete
}: UserEditModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: zodResolver(userSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: ""
    }
  });

  const [showPassword, setShowPassword] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const isEditMode = !!user;

  useEffect(() => {
    if (open) {
      reset({
        fullName: user?.fullName || "",
        email: user?.email || "",
        password: ""
      });
    }
  }, [open, user, reset]);

  const onSubmit = (data: { fullName: string; email: string; password: string }) => {
    console.log(isEditMode ? "User updated:" : "New user added:", data);
    setOpen(false);
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: { borderRadius: "12px", bgcolor: "#E4E9F8" }
        }}
      >
        <DialogTitle>User settings</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box display="flex" gap={2}>
              <Box flexGrow={1}>
                <Typography mt={2} align="left">
                  Full name
                </Typography>
                <TextField
                  placeholder="Enter Full name"
                  variant="outlined"
                  margin="dense"
                  size="small"
                  fullWidth
                  {...register("fullName")}
                  error={!!errors.fullName}
                  helperText={errors.fullName?.message as string}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 3,
                      bgcolor: "white"
                    }
                  }}
                />
              </Box>
              <Box flexGrow={1}>
                <Typography mt={2} align="left">
                  Email
                </Typography>
                <TextField
                  placeholder="Enter Email"
                  variant="outlined"
                  margin="dense"
                  size="small"
                  fullWidth
                  {...register("email")}
                  error={!!errors.email}
                  helperText={errors.email?.message as string}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 3,
                      bgcolor: "white"
                    }
                  }}
                />
              </Box>
            </Box>

            <Box>
              <Typography mt={2} align="left">
                Password
              </Typography>
              <TextField
                placeholder="Enter Password"
                fullWidth
                variant="outlined"
                margin="dense"
                size="small"
                type={showPassword ? "text" : "password"}
                {...register("password")}
                error={!!errors.password}
                helperText={errors.password?.message as string}
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
                    borderRadius: 3,
                    bgcolor: "white"
                  }
                }}
              />
            </Box>

            <DialogActions
              sx={{ justifyContent: isEditMode ? "space-between" : "flex-end", mt: 2 }}
            >
              {isEditMode && (
                <Button
                  onClick={() => setConfirmDelete(true)}
                  color="error"
                  variant="text"
                  sx={{ textTransform: "none", borderRadius: 3 }}
                >
                  Delete user
                </Button>
              )}

              <Box>
                <Button
                  onClick={() => setOpen(false)}
                  color="inherit"
                  sx={{
                    width: "137px",
                    bgcolor: "white",
                    borderRadius: 3,
                    textTransform: "none"
                  }}
                >
                  Cancel
                </Button>

                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  sx={{ width: "137px", ml: 2, borderRadius: 3, textTransform: "none" }}
                >
                  Save
                </Button>
              </Box>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Modal */}
      <Dialog
        open={confirmDelete}
        onClose={() => setConfirmDelete(false)}
        maxWidth={false}
        fullWidth
        PaperProps={{
          sx: { width: "350px", borderRadius: 3, textAlign: "center" }
        }}
      >
        <DialogTitle sx={{ fontWeight: "bold", fontSize: "1.2rem" }}>
          Are you sure you want to delete user?
        </DialogTitle>

        <DialogContent sx={{ color: "gray", fontSize: "0.9rem" }}>
          Confirming process cancellation the installation
        </DialogContent>

        <DialogActions sx={{ justifyContent: "center", gap: 2, pb: 2 }}>
          <Button
            onClick={() => setConfirmDelete(false)}
            variant="outlined"
            sx={{
              flex: 1,
              borderColor: "#ccc",
              color: "#007BFF",
              borderRadius: 3,
              textTransform: "none"
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              if (onDelete) onDelete();
              setConfirmDelete(false);
              setOpen(false);
            }}
            variant="outlined"
            sx={{
              flex: 1,
              borderColor: "#ccc",
              color: "red",
              borderRadius: 3,
              textTransform: "none"
            }}
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
