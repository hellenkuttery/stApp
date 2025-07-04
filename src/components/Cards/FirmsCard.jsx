import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import { CardMedia, Container } from "@mui/material/";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import {btnStyle} from "../../styles/globalStyles"
import useStockCall from "../../hook/useStockCall";

export default function FirmsCard({ _id, name, phone, image, address ,handleOpen,setInitialState}) {
  
  const {deleteStockData}=useStockCall()
  
  return (
    <Container>
      <Card
        sx={{
          maxWidth: 345,
          height: 400,
          flexDirection: "column",
          padding: "0.5rem",
          mt: "1.5rem",
        }}
      >
        <CardHeader title={name} F subheader={address} />

        <CardMedia
          component="img"
          height="194"
          image={image}
          alt="firm"
          sx={{ height: 140, objectFit: "contain" }}
        />

        <CardContent sx={{ width: "340", textAlign: "center" }}>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {phone}
          </Typography>
        </CardContent>

        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <DeleteOutlineIcon  sx={btnStyle} onClick={()=>deleteStockData("firms", _id)} />
          </IconButton>
          <IconButton aria-label="share">
            <EditIcon sx={btnStyle} onClick={()=>{setInitialState({_id,name,address,phone,image}); handleOpen()}} />
          </IconButton>
        </CardActions>
      </Card>
    </Container>
  );
}
