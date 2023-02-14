import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Grid, Paper } from "@mui/material";
import TextField from "@mui/material/TextField";
import { toast } from "react-toastify";
const CreatePost = () => {
  const [title, setTitle] = useState();
  const [category, setCategory] = useState();
  const [description, setDescription] = useState();
  const [file, setFile] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (title) {
      formData.append("title", title);
    }
    if (category) {
      formData.append("category", category);
    }
    if (description) {
      formData.append("description", description);
    }
    if (file) {
      formData.append("image", file);
    }
    const config = {
      headers: {
        "Content-type": "multipart/form-data",
      },
    };
    await axios
      .post("http://localhost:4200/posts", formData, config)
      .then((res) => toast.success("Post is Created"))
      .catch((err) => console.log(err));
    navigate("/");
  };
  return (
    <div>
      
      <Grid>
        
        <Paper elevation={10} className="post-create">
          
          <Grid>
            
            <h2>Create Post</h2>
          </Grid>
          <Grid className="post-from">
            
            <form>
              
              <TextField
                required
                label="Post Title"
                size="small"
                fullWidth
                className="textfield"
                onChange={(e) => setTitle(e.target.value)}
              />
              <TextField
                required
                label="category"
                size="small"
                fullWidth
                className="textfield"
                onChange={(e) => setCategory(e.target.value)}
              />
              <TextField
                multiline
                rows={3}
                fullWidth
                onChange={(e) => setDescription(e.target.value)}
              />
              <TextField
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                fullWidth
                size="small"
              />
              <Button variant="contained" fullWidth onClick={handleSubmit}>
                
                Create Post
              </Button>
            </form>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
};
export default CreatePost;
