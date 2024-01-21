import { ListItemButton, ListItemIcon, Typography } from "@mui/material";
import React from "react";

const LeftHeaderList = (props) => {
  const { Icon, imgs, name } = props;

  return (
    <ListItemButton>
      <ListItemIcon>
        <div
          style={{
            background: "linear-gradient(80deg, #2196F3 20%, #21CBF3 90%)",
            display: "inline-block",
            padding: "2px", // Adjust as needed
            borderRadius: "50%", // Adjust as needed
          }}
        >
          {Icon && (
            <Icon
              sx={{
                fontSize: 40,
                fill: "#333840",
              }}
            />
          )}
          {imgs && (
            <img
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
              }}
              src={imgs}
              alt=""
            />
          )}
        </div>
      </ListItemIcon>
      <Typography sx={{ color: "#E4E6EB" }}>{name}</Typography>
    </ListItemButton>
  );
};

export default LeftHeaderList;
