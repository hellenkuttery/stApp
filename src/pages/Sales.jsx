import { Typography } from '@mui/material'
import { Button } from '@mui/material'
import { Container } from '@mui/material'
import React, { useState } from 'react'
import useStockCall from '../hook/useStockCall'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import SalesTable from '../components/Tables/SalesTable'
import SalesModal from '../components/Modals/SalesModal'


const Sales = () => {
  const {getData}=useStockCall()
  const { loading, error } = useSelector((state) => state.stock);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [initialState,setInitialState]=useState({
      brandId: "",
      productId: "",
      quantity: "",
      price: "", 
      })
    
   
  useEffect(()=>{
    getData("sales")
    getData("brands")
    getData("products")
   
  },[])

  return (
    <Container maxWidth={"xl"}>
    <Typography
      align="center"
      variant="h4"
      component="h1"
      color="secondary.second"
      
    >
      Sales
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
        <Button variant="contained" onClick={handleOpen} sx={{marginBottom:"1rem"}}>
          New Sale
        </Button>

        <SalesTable  handleOpen={handleOpen} setInitialState={setInitialState} />

        {open && (
          <SalesModal
            open={open}
            handleClose={handleClose}
            initialState={initialState}
          />
        )}
      </>
    )}
  </Container>
   
  )
}

export default Sales