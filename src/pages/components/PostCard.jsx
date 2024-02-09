import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  IconButton,
  InputAdornment,
  List,
  ListItemButton,
  ListItemIcon,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ClearIcon from "@mui/icons-material/Clear";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import ProfilePic from "../icons/profilePic.jpg";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import CollectionsIcon from "@mui/icons-material/Collections";

import React from "react";
//hello
const PostCard = ({ title, description, subheader, image, video }) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        width: `100%`,
        border: `solid`,
        borderWidth: `1px`,
        borderColor: "#828385",
        bgcolor: `#242526`,
        borderRadius: 4,
        mt: 5,
      }}
    >
      <CardHeader
        sx={{ paddingBottom: 0, color: "#B8BBBF", fontWeight: "bold" }}
        color="#B8BBBF"
        avatar={
          <Avatar sx={{ bgcolor: `blue` }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <Box>
            <IconButton aria-label="settings">
              <MoreHorizIcon sx={{ color: "#B8BBBF" }} />
            </IconButton>
            <IconButton aria-label="settings">
              <ClearIcon sx={{ color: "#B8BBBF" }} />
            </IconButton>
          </Box>
        }
        title={title}
        subheader={subheader}
        titleTypographyProps={{ fontWeight: "bold", fontSize: 15 }}
        subheaderTypographyProps={{ color: "#B8BBBF" }}
      />
      <CardContent sx={{ paddingTop: 0 }}>
        <Typography variant="body2" color=" #B8BBBF">
          {description}
        </Typography>
      </CardContent>
      {image && (
        <CardMedia
          component="img"
          height="500"
          image={image}
          alt="Paella dish"
        />
      )}
      {video && (
        <CardMedia>
          <video width={"100%"} controls muted autoPlay>
            <source src={video} type="video/mp4" />
          </video>
        </CardMedia>
      )}

      <CardContent sx={{ display: `flex`, justifyContent: `space-between` }}>
        <Box sx={{ display: `flex` }}>
          <ThumbUpIcon sx={{ color: `blue`, zIndex: 100 }} />
          <InsertEmoticonIcon
            sx={{ color: `yellow`, marginLeft: -1, zIndex: 0 }}
          />
          <Typography
            sx={{ ml: 1, textDecoration: `Underline`, color: "white" }}
          >
            2
          </Typography>
        </Box>

        <Typography variant="body2" color="white">
          124 Comments
        </Typography>
      </CardContent>
      <Divider sx={{ borderWidth: 1, backgroundColor: "#B8BBBF" }} />
      <CardActions disableSpacing sx={{ paddingTop: 0, paddingBottom: 0 }}>
        <List
          sx={{
            display: `flex`,
            width: `100%`,
            justifyContent: `space-between`,
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: "3px",
            paddingBottom: "3px",
            color: "#B8BBBF",
            [theme.breakpoints.down("md")]: {
              paddingLeft: 0,
              paddingRight: 0,
            },
          }}
        >
          <ListItemButton sx={{ display: "flex", justifyContent: "center" }}>
            <ListItemIcon>
              <ThumbUpIcon sx={{ fontSize: 25, color: "#B8BBBF" }} />
            </ListItemIcon>
            <Typography>Like</Typography>
          </ListItemButton>

          <ListItemButton sx={{ display: "flex", justifyContent: "center" }}>
            <ListItemIcon>
              <CommentIcon sx={{ fontSize: 25, color: "#B8BBBF" }} />
            </ListItemIcon>
            <Typography>Comment</Typography>
          </ListItemButton>
          <ListItemButton sx={{ display: "flex", justifyContent: "center" }}>
            <ListItemIcon>
              <ShareIcon sx={{ fontSize: 25, color: "#B8BBBF" }} />
            </ListItemIcon>
            <Typography>Share</Typography>
          </ListItemButton>
        </List>
      </CardActions>
      <Divider sx={{ borderWidth: 1, mb: 2, backgroundColor: "#B8BBBF" }} />

      <CardContent
        sx={{ display: "flex", alignItems: "center", paddingTop: 0 }}
      >
        <Avatar
          sx={{
            height: `40px`,
            width: `40px`,
          }}
          src={ProfilePic}
        ></Avatar>{" "}
        <TextField
          size="small"
          variant="outlined"
          fullWidth
          placeholder="Wrtie a Public Comment..."
          sx={{
            ml: 1,
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                border: "solid",
                borderColor: "#4b4c4d",

                borderRadius: "30px",
                borderWidth: "1px",
                backgroundColor: "#4b4c4d",
                zIndex: 0,
              },
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" sx={{ zIndex: 110 }}>
                <CollectionsIcon
                  sx={{ fontSize: "20px", color: "white", cursor: "pointer" }}
                />
                <EmojiEmotionsIcon
                  sx={{ fontSize: "20px", color: "white", cursor: "pointer" }}
                />
                <CameraAltIcon
                  sx={{ fontSize: "20px", color: "white", cursor: "pointer" }}
                />
              </InputAdornment>
            ),
            inputProps: {
              style: { color: "white", zIndex: 100 }, // Change 'your_desired_color' to the color you want
            },
          }}
        />
      </CardContent>
    </Card>
  );
};

export default PostCard;
