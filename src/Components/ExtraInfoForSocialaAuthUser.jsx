import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";

import { FireApi } from "../Utils/fireApi";
const ExtraInfoForSocialaAuthUser = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const info = {
      job: form.get("job"),
      hobby: form.get("hobby"),
    };
    console.log(info, "Information");

    try {
      const response = await FireApi("user", "GET");
      console.log(response, "ajasjdaskdkadaskdkjasd");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Add your Info
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          name="job"
          label="Job Title"
          type="text"
          id="job"
          autoComplete="current-password"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="hobby"
          label="hobby"
          type="text"
          id="hobby"
          autoComplete="current-password"
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Add
        </Button>
      </Box>
    </Box>
  );
};

export default ExtraInfoForSocialaAuthUser;
