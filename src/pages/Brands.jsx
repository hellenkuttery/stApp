import React from "react";
import useStockCall from "../hook/useStockCall";
import { useEffect } from "react";
import { Typography } from "@mui/material";
import { Button, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import BrandsCard from "./../components/Cards/BrandsCard";
import FirmModal from "./../components/Modals/FirmModal";
import { useState } from "react";
import BrandModal from "../components/Modals/BrandModal";

const Brands = () => {
  const { getData } = useStockCall();
  const { brands } = useSelector((state) => state.stock);

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
    getData("brands");
  }, []);

  return (
    <div>
      <Typography variant="h4" component="h1" color="secondary.second">
        Brands
      </Typography>
      <Button variant="contained" sx={{ mt: 3 }} onClick={handleOpen}>
        NEW BRAND
      </Button>

      {/* /* -------------------------------------------------------------------------- */}

      <Grid container>
        {brands.map((firm, index) => (
          <Grid item xs={12} md={6} lg={4} xl={3} key={firm._id}>
            <BrandsCard
              {...firm}
              handleOpen={handleOpen}
              setInitialState={setInitialState}
            />
          </Grid>
        ))}
      </Grid>

      {open && (
        <BrandModal
          open={open}
          handleClose={handleClose}
          initialState={initialState}
        />
      )}
    </div>
  );
};

export default Brands;
