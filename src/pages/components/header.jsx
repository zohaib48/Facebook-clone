import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Toolbar,
} from "@mui/material";
import React from "react";
import facebook from "../icons/Facebook-logo.png";
import { InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import ProfilePic from "../icons/profilePic.jpg";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import StoreIcon from "@mui/icons-material/Store";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import MenuIcon from "@mui/icons-material/Menu";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Icon = ({ Icon }) => {
  return (
    <IconButton
      sx={{
        backgroundColor: "rgba(184, 187, 191,0.2)", // Change the color to your desired hover color

        "&:hover": {
          backgroundColor: "rgba(184, 187, 191,0.4)", // Change the color to your desired hover color
        },
      }}
    >
      <Icon
        sx={{
          fontSize: "30px",
          color: "#B8BBBF",
          borderRadius: "50%",
        }}
      />
    </IconButton>
  );
};

const ListIcon = ({ Icon }) => {
  return (
    <ListItemButton
      sx={{
        justifyContent: "center",
        "&:hover": {
          backgroundColor: "rgba(184, 187, 191,0.2)", // Change the color to your desired hover color
        },
      }}
    >
      <ListItemIcon sx={{ justifyContent: "center" }}>
        <Icon
          sx={{
            fontSize: "40px",
            color: "#B8BBBF",
          }}
        />
      </ListItemIcon>
    </ListItemButton>
  );
};

const Header = () => {
  return (
    <Box sx={{}}>
      <AppBar>
        <Toolbar
          sx={{
            justifyContent: `space-between`,

            bgcolor: `#242526`,
          }}
        >
          <Box sx={{ display: `flex` }}>
            <Avatar
              sx={{
                height: `50px`,
                width: `50px`,
              }}
              src={facebook}
            ></Avatar>
            <Box
              sx={{
                display: `flex`,
                width: `250px`,
                border: "solid",
                borderRadius: `20px`,
                borderWidth: `1px`,
                borderColor: "black",
                ml: 2,
                backgroundColor: "#3A3B3C",
              }}
            >
              {" "}
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon sx={{ color: "#E4E6EB" }} />
              </IconButton>
              <InputBase
                sx={{ color: "#E4E6EB" }}
                placeholder="Search Facebook "
              />{" "}
            </Box>
          </Box>

          <Box
            sx={{
              display: `flex`,
              width: `700px `,
              justifyContent: `space-between`,
              ml: 10,
              mr: 20,
            }}
          >
            {" "}
            <List sx={{ display: "flex", width: "100%" }}>
              <ListIcon Icon={HomeIcon} />
              <ListIcon Icon={PeopleAltIcon} />
              <ListIcon Icon={OndemandVideoIcon} />
              <ListIcon Icon={StoreIcon} />
              <ListIcon Icon={VideogameAssetIcon} />
            </List>
          </Box>

          <Box
            sx={{
              display: `flex`,
              width: `220px`,
              justifyContent: `space-between`,
              alignItems: `center`,
            }}
          >
            <Icon Icon={MenuIcon} />
            <Icon Icon={MapsUgcIcon} />
            <Icon Icon={NotificationsIcon} />

            <Avatar
              sx={{
                height: `45px`,
                width: `45px`,
              }}
              src={ProfilePic}
            ></Avatar>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
