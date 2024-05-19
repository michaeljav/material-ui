import { Box, Button, Container, Typography } from "@mui/material";
import AirplanemodeInactiveIcon from "@mui/icons-material/AirplanemodeInactive";
export default function App() {
  return (
    <Container sx={{ border: 2, boxShadow: 3, pb: 3 }}>
      <Typography color="primary">HOAL</Typography>
      <Button variant="contained" color="error">
        {" "}
        error
      </Button>
      <Button
        variant="contained"
        color="success"
        startIcon={<AirplanemodeInactiveIcon />}
      >
        {" "}
        success
      </Button>
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
