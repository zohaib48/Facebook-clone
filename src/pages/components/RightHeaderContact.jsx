import {
  Avatar,
  List,
  ListItemAvatar,
  ListItemButton,
  Typography,
} from "@mui/material";
import React from "react";
import ProfilePic from "../icons/profilePic.jpg";

const names = [
  "Zohaib Shafique",
  "John Doe",
  "Jane Doe",
  "Zohaib shafique",
  "Zohaib Shafique",
  "John Doe",
  "Jane Doe",
  "Zohaib shafique",
  "Zohaib Shafique",
  "John Doe",
  "Jane Doe",
  "Zohaib shafique",
  "Zohaib Shafique",
  "John Doe",
  "Jane Doe",
  "Zohaib shafique",
  "John Doe",
  "Jane Doe",
  "Zohaib shafique",
  // Add more names as needed
];

const RightHeaderContact = () => {
  return (
    <List sx={{ width: "100%" }}>
      {names.map((name, index) => (
        <ListItemButton key={index}>
          <ListItemAvatar>
            <Avatar src={ProfilePic} />
          </ListItemAvatar>
          <Typography>{name}</Typography>
        </ListItemButton>
      ))}
    </List>
  );
};

export default RightHeaderContact;
