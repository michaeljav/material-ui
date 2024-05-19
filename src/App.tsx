import { Button, Container, Typography } from "@mui/material";

export default function App() {
  return (
    <Container sx={{ border: 2, boxShadow: 3, pb: 3 }}>
      <Typography variant="h2" component={"h2"} textAlign={"center"}>
        typography
      </Typography>
      <Button variant="contained"> Mi primer boton</Button>
    </Container>
  );
}
