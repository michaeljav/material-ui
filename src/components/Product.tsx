import { Box, Button, Paper, styled, Typography } from "@mui/material";
import { type ReactElement } from "react";

const Product = (): ReactElement => {
  const Img = styled("img")({
    width: 200,
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
  });
  return (
    <Paper
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        overflow: "hidden",
        mt: 5,
      }}
    >
      <Img src="https://fastly.picsum.photos/id/113/200/200.jpg?hmac=lMncqLZmsXtr3D92sy1GU_2v-kwHOS-UW2iS5p98WMU" />
      <Box sx={{ flexGrow: 1, display: "grid", gap: 2 }}>
        <Typography variant="h4">Product Name</Typography>
        <Typography variant="body1">Product Description</Typography>
        <Button variant="contained">Add Card</Button>
      </Box>
      <Box sx={{ mr: 2 }} component={"p"}>
        $19.99
      </Box>
    </Paper>
  );
};

export default Product;
