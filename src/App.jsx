import { FlashOffOutlined } from "@mui/icons-material";
import { Box, Button, Container, Grid } from "@mui/material";
import { styled, createTheme, ThemeProvider } from "@mui/system";
import Component from "./component";
import ThemeSwitch from "./themeSwitch";

const MyComponent = styled("div")({
  color: "darkslategray",
  backgroundColor: "aliceblue",
  padding: 8,
  borderRadius: 4,
});

const customTheme = createTheme({
  palette: {
    primary: {
      main: "red",
      contrastText: "#fff",
    },
    danger: {
      main: "blue",
      contrastText: "#000",
    },
  },
});

const MyThemeComponent = styled("div")(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
}));

const MyThemeComponent1 = styled("div", {
  // Configure which props should be forwarded on DOM
  shouldForwardProp: (prop) =>
    prop !== "color" && prop !== "variant" && prop !== "sx",
  name: "MyThemeComponent",
  slot: "Root",
  // We are specifying here how the styleOverrides are being applied based on props
  overridesResolver: (props, styles) => [
    styles.root,
    props.color === "primary" && styles.primary,
    props.color === "secondary" && styles.secondary,
  ],
})(({ theme }) => ({
  backgroundColor: "aliceblue",
  padding: theme.spacing(1),
}));
function App() {
  return (
    <div className="App">
      <ThemeSwitch />
      <Component />
      {/* <ThemeProvider theme={customTheme1}> */}
      <MyThemeComponent1 sx={{ m: 1 }} color="primary" variant="dashed">
        Primary
      </MyThemeComponent1>
      <MyThemeComponent1 sx={{ m: 1 }} color="secondary">
        Secondary
      </MyThemeComponent1>
      {/* </ThemeProvider> */}
      {/* <ThemeProvider theme={customTheme}> */}
      <MyThemeComponent>sssssssssssssssssssssssss</MyThemeComponent>
      {/* </ThemeProvider> */}
      <MyComponent>asaas</MyComponent>
      <Box sx={{ display: "flex" }}>
        <Button
          sx={{ display: "block", color: "error.main", width: 200 }}
          variant="outlined"
          color="primary"
        >
          ASA
        </Button>
        <Button
          sx={{ display: "block", color: "warning.main", width: 1 }}
          variant="outlined"
          color="primary"
        >
          ASA
        </Button>
        <Button
          sx={{ m: 1, display: "block", boxShadow: 3, width: 2 / 4 }}
          variant="outlined"
          color="primary"
        >
          ASA
        </Button>
      </Box>
      <Container maxWidth={FlashOffOutlined}>
        <p>sss</p>
      </Container>
      <Grid container spacing={1}>
        <Grid xs={3}>
          <div xs={3}>1</div>
        </Grid>
        <Grid xs={3}>
          <div xs={3}>1</div>
        </Grid>
        <Grid xs={3}>
          <div xs={3}>1</div>
        </Grid>
        <Grid xs={3}>
          <div xs={3}>1</div>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
