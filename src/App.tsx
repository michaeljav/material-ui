import { Box, Button, Container, Typography } from "@mui/material";

export default function App() {
  return (
    <Container sx={{ border: 2, boxShadow: 3, pb: 3 }}>
      <Button variant="contained"> Mi primer boton</Button>
      <Box sx={{ p: 5 }}>BOX</Box>
      <Box
        sx={{
          p: 5,
          border: 2,
          borderColor: "peru",
          bgcolor: "#111",
          color: "white",
        }}
        component={"span"}
      >
        BOX compoent span renderizado
      </Box>
    </Container>
  );
}
