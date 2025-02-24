import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { useUploadStore } from "./uploadStore";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography
} from "@mui/material";
import { CloudUpload } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";

interface UploadModalProps {
  open: boolean;
  onClose: () => void;
}

const UploadModal: React.FC<UploadModalProps> = ({ open, onClose }) => {
  const { files, setFiles, clearFiles } = useUploadStore();
  const [error, setError] = useState<string>("");

  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/*,.pdf,.doc,.docx,": [] },
    maxFiles: 10,
    maxSize: 100 * 1024 * 1024,
    onDrop: (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 10) {
        setError("Maximum 10 files allowed");
        return;
      }
      setFiles(acceptedFiles);
      setError("");
    }
  });

  const handleClose = () => {
    clearFiles();
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      PaperProps={{
        sx: { borderRadius: "12px" }
      }}
    >
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
          onClick={handleClose}
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
          Licenses
        </Typography>
      </Box>

      <DialogContent sx={{ background: "#D5E0FA", p: 3 }}>
        <div
          {...getRootProps()}
          className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer bg-gray-50 hover:bg-gray-100 transition"
        >
          <input {...getInputProps()} />
          <CloudUpload fontSize="large" color="action" />
          <Typography variant="body1" className="mt-2">
            Drop your files here, or{" "}
            <span className="text-blue-500 cursor-pointer">click to browse</span>
          </Typography>
          <Typography variant="caption" color="textSecondary">
            Up to 10 files, 100MB total limit
          </Typography>
        </div>

        {error && <Typography color="error">{error}</Typography>}

        {files.length > 0 && (
          <Box className="mt-4">
            <Typography variant="subtitle1">Selected Files:</Typography>
            {files.map((file, index) => (
              <Typography key={index} variant="body2">
                {file.name}
              </Typography>
            ))}
          </Box>
        )}
      </DialogContent>

      <DialogActions sx={{ background: "#D5E0FA" }}>
        <Button
          onClick={handleClose}
          variant="outlined"
          color="info"
          sx={{ borderRadius: "12px" }}
        >
          Cancel
        </Button>
        <Button
          onClick={() => {
            console.log("Uploading files:", files);
            handleClose();
          }}
          variant="contained"
          color="primary"
          disabled={files.length === 0}
          sx={{ borderRadius: "12px" }}
        >
          Upload
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UploadModal;
