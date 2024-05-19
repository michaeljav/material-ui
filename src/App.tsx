import { Button, Container } from "@mui/material";

export default function App() {
  return (
    // <Container sx={{ border: "2px", borderStyle: "solid" }}>
    <Container sx={{ border: 2, boxShadow: 3, pb: 3 }}>
      <Button variant="contained"> Mi primer boton</Button>
    </Container>
  );
}
