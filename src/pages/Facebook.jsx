import {
  Box,
  List,
  ListItemIcon,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  ListItemButton,
  Stack,
  IconButton,
  Collapse,
  useTheme,
  useMediaQuery,
  InputAdornment,
  TextField,
  Link,
  Button,
} from "@mui/material";
import React from "react";
import PeopleIcon from "@mui/icons-material/People";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FeedIcon from "@mui/icons-material/Feed";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import Groups3Icon from "@mui/icons-material/Groups3";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import Divider from "@mui/material/Divider";
import CakeIcon from "@mui/icons-material/Cake";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import SearchIcon from "@mui/icons-material/Search";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ProfilePic from "./icons/profilePic.jpg";
import RightHeaderContact from "./components/RightHeaderContact";
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import VideocamIcon from "@mui/icons-material/Videocam";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import apple from "./icons/apple.jpeg";
import LeftHeaderList from "./components/LeftHeaderList";
import PostCard from "./components/PostCard";
import clash from "./icons/clash.jpeg";
import pool from "./icons/pool.png";
import chess from "./icons/chess.png";

const Facebook = () => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  const handleClick = () => {
    setOpen(!open);
  };
  const isWideScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box
      sx={{
        backgroundColor: "#18191A",
        mt: 8,
        display: "flex",
        paddingBottom: 200,
      }}
    >
      {/***********
      LEFT HEADER 
      ********** */}
      {isWideScreen && (
        <Box
          sx={{
            display: "flex",
            backgroundColor: "#18191A",
            flexDirection: `column`,
            minWidth: "230px",
            width: "22%",
            height: `calc(100vh - 60px)`,
            position: `fixed`,
            left: 0,
            overflowY: `auto`,
            [theme.breakpoints.down("xl")]: {
              width: "17%",
            },
          }}
        >
          <List sx={{ width: "100%" }}>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  sx={{
                    height: `50px`,
                    width: `50px`,
                    ml: `-3px`,
                  }}
                  src={ProfilePic}
                />
              </ListItemAvatar>
              <Typography sx={{ color: "#E4E6EB" }}>Zohaib Shafique</Typography>
            </ListItemButton>
            <LeftHeaderList Icon={PeopleIcon} name={"Friends"} />
            <LeftHeaderList Icon={BookmarkIcon} name={"Saved"} />
            <LeftHeaderList Icon={FeedIcon} name={"Feeds"} />
            <LeftHeaderList Icon={Groups3Icon} name={"Groups"} />
            <LeftHeaderList Icon={AddBusinessIcon} name={"MarketPlace"} />

            <ListItemButton sx={{ color: "#E4E6EB" }} onClick={handleClick}>
              <ListItemIcon>
                <ExpandCircleDownIcon sx={{ fontSize: 40, color: "#E4E6EB" }} />
              </ListItemIcon>
              <ListItemText primary="See more" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <StarBorder sx={{ color: "#E4E6EB" }} />
                  </ListItemIcon>
                  <ListItemText primary="Starred" sx={{ color: "#E4E6EB" }} />
                </ListItemButton>
              </List>
            </Collapse>

            <Divider
              sx={{
                mt: 2,
                borderWidth: `1px`,
                ml: 3,
                mr: 3,
                backgroundColor: "#E4E6EB",
              }}
            />
          </List>

          <Typography sx={{ paddingLeft: 2, mb: 1, color: "#E4E6EB" }}>
            Your Shortcuts
          </Typography>

          <List>
            <LeftHeaderList imgs={clash} name={"Clash Of Clans"} />
            <LeftHeaderList imgs={chess} name={"Chess"} />
            <LeftHeaderList imgs={pool} name={"8 Ball Pool"} />
          </List>

          <Typography
            sx={{ paddingLeft: 2, mb: 1, mt: "auto", color: "#E4E6EB" }}
          >
            Privacy · Terms · Advertising · Ad choices · Cookies · · Meta © 2023
          </Typography>
        </Box>
      )}
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: `center`,
            justifyContent: `center`,
            backgroundColor: "#18191A",

            flex: 1,
            width: "40%",
            position: "absolute",
            ml: "22%",
            mr: "22%",

            [theme.breakpoints.down("xl")]: {
              ml: 25,
            },
            [theme.breakpoints.down("lg")]: {
              ml: 0,
              pl: 5,
              width: "55%",
            },
            [theme.breakpoints.down("md")]: {
              padding: 1,
              ml: 1,

              width: "94%",
            },

            pt: 4,
            pr: 20,
            pl: 20,
          }}
        >
          <Box
            sx={{
              bgcolor: `#242526`,
              width: `97%`,
              padding: 2,
              borderRadius: 4,
              border: "solid",
              borderWidth: "1px",
              borderColor: "#828385",
            }}
          >
            <Box sx={{ display: `flex` }}>
              <Avatar
                sx={{
                  height: `45px`,
                  width: `45px`,
                }}
                src={ProfilePic}
              ></Avatar>
              <Box
                sx={{
                  display: `flex`,
                  width: `100%`,
                  ml: 1,
                }}
              >
                {" "}
                <TextField
                  variant="outlined"
                  fullWidth
                  size="small"
                  placeholder="What's on your mind, Zohaib?"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        border: "solid",

                        borderColor: "#4E4F50",
                        borderRadius: "30px",
                        borderWidth: "1px",
                        backgroundColor: "#4b4c4d",
                        zIndex: 0,
                      },
                    },
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SearchIcon sx={{ color: "white", zIndex: 100 }} />
                      </InputAdornment>
                    ),
                    inputProps: {
                      style: { color: "white", zIndex: 100 }, // Change 'your_desired_color' to the color you want
                    },
                  }}
                />
              </Box>
            </Box>

            <Divider
              sx={{ mt: 2, borderWidth: 1, backgroundColor: "#B8BBBF" }}
            />

            <Stack direction="row" spacing={0}>
              <List
                sx={{
                  display: `flex`,
                  width: `100%`,
                  justifyContent: `space-between`,
                  marginBottom: -2,
                }}
              >
                <ListItemButton sx={{ borderRadius: 5 }}>
                  <ListItemIcon>
                    <VideocamIcon sx={{ fontSize: 40, color: "#B8BBBF" }} />
                  </ListItemIcon>
                  <Typography sx={{ color: "#B8BBBF" }}>Live video</Typography>
                </ListItemButton>
                <ListItemButton sx={{ borderRadius: 5, color: "#B8BBBF" }}>
                  <ListItemIcon>
                    <InsertPhotoIcon sx={{ fontSize: 40, color: "#B8BBBF" }} />
                  </ListItemIcon>
                  <Typography sx={{ color: "#B8BBBF" }}>Photo/video</Typography>
                </ListItemButton>
                <ListItemButton sx={{ borderRadius: 5 }}>
                  <ListItemIcon>
                    <EmojiEmotionsIcon
                      sx={{ fontSize: 40, color: "#B8BBBF" }}
                    />
                  </ListItemIcon>
                  <Typography sx={{ color: "#B8BBBF" }}>
                    Feeling/activity
                  </Typography>
                </ListItemButton>
              </List>
            </Stack>
          </Box>

          <Box sx={{ width: `100%` }}>
            <PostCard
              title={"Shrimp and Chorizo Paella"}
              subheader={"September 14, 2016"}
              description={
                <p>
                  {" "}
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen peas
                  along with the mussels, if you like.
                </p>
              }
              image={apple}
            />

            <PostCard
              title={"Shrimp and Chorizo Paella"}
              subheader={"September 14, 2016"}
              description={
                <p>
                  {" "}
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen peas
                  along with the mussels, if you like.
                </p>
              }
            />

            <PostCard
              title={"Shrimp and Chorizo Paella"}
              subheader={"September 14, 2016"}
              video={"https://assets.codepen.io/6093409/river.mp4"}
              description={
                <p>
                  {" "}
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen peas
                  along with the mussels, if you like.
                </p>
              }
            />
            <PostCard
              title={"Shrimp and Chorizo Paella"}
              subheader={"September 14, 2016"}
              description={
                <p>
                  {" "}
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen peas
                  along with the mussels, if you like.
                </p>
              }
              image={apple}
            />
            <PostCard
              title={"Shrimp and Chorizo Paella"}
              subheader={"September 14, 2016"}
              video={"https://assets.codepen.io/6093409/river.mp4"}
              description={
                <p>
                  {" "}
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen peas
                  along with the mussels, if you like.
                </p>
              }
            />
            <PostCard
              title={"Shrimp and Chorizo Paella"}
              subheader={"September 14, 2016"}
              description={
                <p>
                  {" "}
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen peas
                  along with the mussels, if you like.
                </p>
              }
            />
          </Box>
        </Box>
        {isMediumScreen && (
          <Box
            sx={{
              display: "flex",
              overflowY: "auto",
              height: `calc(100vh - 50px)`,
              width: "auto",
              overflow: `scroll`,
              backgroundColor: "#18191A",
              color: "#AEAFB2",
              position: "fixed",
              right: 0,
              ml: 20,
              [theme.breakpoints.down("xl")]: {
                ml: 2,
              },
            }}
          >
            <Box sx={{ width: `auto`, mt: 4 }}>
              <Box sx={{ paddingLeft: 2, mb: 2, paddingRight: 1 }}>
                <Stack
                  sx={{}}
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Typography sx={{ fontSize: 20, fontWeight: `bolder` }}>
                    Freinds Request
                  </Typography>
                  <Link> See All</Link>
                </Stack>
                <Box display={"flex"} paddingTop={2}>
                  <Avatar
                    sx={{
                      height: `60px`,
                      width: `60px`,
                    }}
                    src={ProfilePic}
                  />
                  <Box sx={{ ml: 2 }}>
                    <Typography sx={{ color: "white", fontWeight: `bolder` }}>
                      Zohaib Shafique
                    </Typography>
                    <Box sx={{ display: "flex", mt: 1 }}>
                      <Avatar
                        sx={{
                          height: `20px`,
                          width: `20px`,
                          mr: 1,
                        }}
                      />
                      <Typography>1 mutual friend</Typography>
                    </Box>
                    <Box sx={{ mt: 1, display: "flex", flexDirection: "row" }}>
                      <Button sx={{ flex: 1, mr: 2 }} variant="contained">
                        Confirm
                      </Button>
                      <Button sx={{ flex: 1 }} variant="contained">
                        Delete
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Divider sx={{ borderWidth: `1px`, mb: 2, bgcolor: "#AEAFB2" }} />

              <Typography
                sx={{ paddingLeft: 2, fontSize: 20, fontWeight: `bolder` }}
              >
                Birthdays
              </Typography>
              <List>
                <ListItemButton>
                  <ListItemIcon>
                    <CakeIcon sx={{ fontSize: 40, color: "#AEAFB2" }} />
                  </ListItemIcon>
                  <Typography style={{ whiteSpace: "nowrap" }}>
                    <span style={{ fontWeight: "bolder", color: "white" }}>
                      Muhammad Ahmed
                    </span>
                    's birthday is today
                  </Typography>
                </ListItemButton>
              </List>
              <Divider sx={{ borderWidth: `1px`, bgcolor: "#AEAFB2" }} />

              <Box>
                <Stack
                  mt={1}
                  direction="row"
                  alignContent={"center"}
                  justifyContent={"space-between"}
                >
                  <Typography
                    sx={{ paddingLeft: 2, fontSize: 20, fontWeight: "bolder" }}
                  >
                    Contacts
                  </Typography>

                  <Box
                    sx={{
                      display: `flex`,
                      width: 110,
                      justifyContent: `space-between`,
                      alignItems: `center`,
                    }}
                  >
                    <IconButton sx={{ padding: 0 }}>
                      <VideoCallIcon sx={{ fontSize: 30, color: "#AEAFB2" }} />
                    </IconButton>
                    <IconButton sx={{ padding: 0 }}>
                      <SearchIcon sx={{ fontSize: 30, color: "#AEAFB2" }} />
                    </IconButton>
                    <IconButton sx={{ padding: 0 }}>
                      <MoreHorizIcon sx={{ fontSize: 30, color: "#AEAFB2" }} />
                    </IconButton>
                  </Box>
                </Stack>
                <Box>
                  <RightHeaderContact />
                </Box>
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Facebook;
