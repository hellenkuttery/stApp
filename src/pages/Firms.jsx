import React from "react";
import useStockCall from "../hook/useStockCall";
import { useEffect } from "react";
import { Typography } from "@mui/material";
import { Button, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import FirmsCard from "./../components/Cards/FirmsCard";
import FirmModal from "./../components/Modals/FirmModal";
import { useState } from "react";

const Firms = () => {
  const { getData } = useStockCall();
  const { firms } = useSelector((state) => state.stock);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [initialState, setInitialState] = useState({
    name: "",
    phone: "",
    address: "",
    image: "",
  });

  useEffect(() => {
    getData("firms");
  }, []);

  return (
    <div>
      <Typography variant="h4" component="h1" color="secondary.second">
        Firms
      </Typography>
      <Button variant="contained" sx={{ mt: 3 }} onClick={handleOpen}>
        NEW FIRM
      </Button>

      {/* /* -------------------------------------------------------------------------- */}

      <Grid container>
        {firms.map((firm, index) => (
          <Grid item xs={12} md={6} lg={4} xl={3} key={firm._id}>
            <FirmsCard
              {...firm}
              handleOpen={handleOpen}
              setInitialState={setInitialState}
            />
          </Grid>
        ))}
      </Grid>

      {open && (
        <FirmModal
          open={open}
          handleClose={handleClose}
          initialState={initialState}
        />
      )}
    </div>
  );
};

export default Firms;
