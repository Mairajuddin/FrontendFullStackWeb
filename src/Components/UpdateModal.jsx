import { useEffect, useLayoutEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import { FireApi } from "../Utils/fireApi";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function UpdateModal() {
  const [open, setOpen] = useState(false);
  const [userData, setUserData] = useState();
  const { user } = useContext(UserContext);
  console.log(user, "update modal");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);

    const info = {
      job: form.get("job"),
      hobby: form.get("hobby"),
    };
    console.log(info, "Information");
    // try {
    //   const response = await FireApi("user", "PUT", info);
    //   console.log(response, "ajasjdaskdkadaskdkjasd");
    //   setUserData(response);
    // } catch (error) {
    //   console.error("Error:", error);
    // }
  };

  useLayoutEffect(() => {
    setUserData(user);
  }, []);
  console.log(userData, "data");

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Open modal
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <TextField
              required
              id="name"
              name="name"
              disabled
              // value={userData.name}
              defaultValue={user?.name || ""}
            />
            <TextField
              required
              id="email"
              name="email"
              disabled
              defaultValue={user?.email || ""}
            />
            <TextField
              required
              id="job"
              name="job"
              defaultValue={user?.job || ""}
            />
            <TextField
              required
              id="hobby"
              name="hobby"
              defaultValue={user?.hobby || ""}
            />
            <Button variant="contained" type="submit">
              Update
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
