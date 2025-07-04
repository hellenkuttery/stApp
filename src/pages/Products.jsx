// import React, { useEffect } from "react";
// import useStockCall from "../hook/useStockCall";
// import { Button, Typography } from "@mui/material";
// import ProductsTable from "./../components/Tables/ProductsTable";
// import ProductModal from "../components/Modals/ProductModal";
// import { useState } from "react";

// const Products = () => {
//   const { getData } = useStockCall();
  
//   const [open, setOpen] = useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   const [initialState, setInitialState] = useState({
//     categoryId: "",
//     brandId: "",
//     name: "",
//   });

//   useEffect(() => {
//     getData("products");
//     getData("brands");
//     getData("categories");
//   }, []);
//   return (
//     <div>
//       <Typography variant="h4" component="h1" color="secondary.second">
//         Products
//       </Typography>
//       <Button variant="contained" sx={{ mt: 3 }}>
//         NEW PRODUCT
//       </Button>

//       <ProductsTable />


//       {open && (
//             <ProductModal
//               open={open}
//               handleClose={handleClose}
//               initialState={initialState}
//             />
//           )}
//     </div>
//   );
// };

// export default Products;


import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Container } from "@mui/material";
import React, { useState } from "react";

import useStockCall from "../hook/useStockCall";
import { useEffect } from "react";

import { useSelector } from "react-redux";
import ProductsTable from "../components/Tables/ProductsTable";
import ProductModal from "../components/Modals/ProductModal";

const Products = () => {
  const { getData ,getProCatBrand} = useStockCall();
  const { loading, error } = useSelector((state) => state.stock);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [initialState, setInitialState] = useState({
    categoryId: "",
    brandId: "",
    name: "",
  });

  useEffect(() => {
    // getData("products");
    // getData("brands");
    // getData("categories");
    console.log("Use effect içindeyim")
     getProCatBrand()


  }, []);

  return (
    <Container maxWidth={"xl"}>
      <Typography
        align="center"
        variant="h4"
        component="h1"
        color="secondary.second"
      >
        Products
      </Typography>
      {loading ? (
        <Typography
          align="center"
          variant="h5"
          component="h3"
          color="secondary.second"
        >
          Loading....
        </Typography>
      ) : error ? (
        <Typography align="center" variant="h5" component="h3" color="error">
          Something went wrong...
        </Typography>
      ) : (
        <>
          <Button
            variant="contained"
            onClick={handleOpen}
            sx={{ marginBottom: "1rem" }}
          >
            New Product
          </Button>

          <ProductsTable/>

          {open && (
            <ProductModal
              open={open}
              handleClose={handleClose}
              initialState={initialState}
            />
          )}
        </>
      )}
    </Container>
  );
};

export default Products;
