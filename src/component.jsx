import { Autocomplete, TextField } from "@mui/material";

function Component() {
  const top100Films = ["The Godfather", "Pulp Fiction", "Pulp sss"];

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
  );
}

export default Component;
