import { Checkbox } from "@mui/material";
import React from "react";
import ShareIcon from "@mui/icons-material/Share";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { data } from "../data/postData";
const Post = () => {
  return (
    <>
      {data.map((post) => (
        <Card key={post.id} sx={{ margin: "20px 0 "}}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
               {post.userName.charAt(0)}
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={post.userName}
            subheader="May 17, 2022"
          />
          <CardMedia
            component="img"
            height="350px"
            image={post.posterUrl}
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
          {post.plot}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite sx={{ color: "red" }} />}
              />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </>
  );
};

export default Post;
