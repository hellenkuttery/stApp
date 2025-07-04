import * as React from "react";
import Box from "@mui/material/Box";

import Modal from "@mui/material/Modal";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { Form } from "formik";
import useStockCall from "../../hook/useStockCall";
import { useEffect } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function FirmModal({ open, handleClose, initialState }) {
  const { createStockData, updateStockData } = useStockCall();

  const [info, setInfo] = useState({
    name: "",
    adress: "",
    phone: "",
    image: "",
  });

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (info._id) {
      updateStockData("firms", info);
    } else {
      createStockData("firms", info);
    }

    handleClose();
  };

  useEffect(() => {
    setInfo(initialState);
  }, [initialState]);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} component="form" onSubmit={handleSubmit}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              label="Firm Name"
              name="name"
              type="text"
              variant="outlined"
              onChange={handleChange}
              value={info.name}
              required
              fullWidth
            />
            <TextField
              label="Firm Address"
              name="address"
              type="text"
              variant="outlined"
              onChange={handleChange}
              value={info.address}
              required
              fullWidth
            />
            <TextField
              label="Firm Phone"
              name="phone"
              type="text"
              variant="outlined"
              onChange={handleChange}
              value={info.phone}
              required
              fullWidth
            />
            <TextField
              label="Firm Image"
              name="image"
              type="text"
              variant="outlined"
              onChange={handleChange}
              value={info.image}
              required
              fullWidth
            />

            <Button type="submit" variant="contained">
             {info._id ? "UPDATE FORM" : "SUBMIT FORM"}
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
