import { Box, Button, Container, Grid, Typography } from "@mui/material";
import AirplanemodeInactiveIcon from "@mui/icons-material/AirplanemodeInactive";
export default function App() {
  return (
    <Container>
      <Grid container>
        {/* coja 6 columnas de las 12 por defecto*/}
        {/* este parrafo solo cojera 6 columnas de las 12 disponible */}
        <Grid item xs={12} sm={6} md={4}>
          <p>
            Mollit aliqua eu laborum consectetur dolor Lorem ullamco pariatur
            sint anim incididunt. Do commodo incididunt voluptate mollit aute
            est et ad eiusmod reprehenderit. Laboris excepteur irure aliquip
            deserunt sint deserunt amet. Ad magna aliqua officia excepteur
            veniam elit adipisicing minim deserunt culpa nisi. Proident ut non
            duis consequat ea velit cupidatat minim. Occaecat eu est labore
            laboris fugiat ipsum aliquip minim cillum pariatur reprehenderit
            elit tempor nulla. Incididunt ex officia do labore exercitation
            occaecat nulla sit aute laboris.
          </p>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <p>
            Mollit aliqua eu laborum consectetur dolor Lorem ullamco pariatur
            sint anim incididunt. Do commodo incididunt voluptate mollit aute
            est et ad eiusmod reprehenderit. Laboris excepteur irure aliquip
            deserunt sint deserunt amet. Ad magna aliqua officia excepteur
            veniam elit adipisicing minim deserunt culpa nisi. Proident ut non
            duis consequat ea velit cupidatat minim. Occaecat eu est labore
            laboris fugiat ipsum aliquip minim cillum pariatur reprehenderit
            elit tempor nulla. Incididunt ex officia do labore exercitation
            occaecat nulla sit aute laboris.
          </p>
        </Grid>
      </Grid>
    </Container>
  );
}
