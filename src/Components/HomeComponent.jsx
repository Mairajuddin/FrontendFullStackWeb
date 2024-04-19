import { useContext } from "react";
import UserContext from "../context/UserContext";
import { Box, Button } from "@mui/material";
import UpdateModal from "./UpdateModal";
const HomeComponent = () => {
  //   const { user } = useContext(UserContext);
  //   console.log(user, "user");

  return (
    <Box>
      <Box>
        <UpdateModal />
      </Box>
    </Box>
  );
};

export default HomeComponent;
