import EditIcon from "@material-ui/icons/Edit";
import React, {useState} from "react";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import VisibilityIcon from "@material-ui/icons/Visibility";
import {Box,Button,Grid,Paper,Typography,IconButton,} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { deleteStudent } from "../../redux/features/studentSlice";
import { useDispatch } from "react-redux";
const StudentItem = ({ student }) => {
  const [blogs, setBlog] = useState([]);
  let history = useHistory();
  const { id, firstName, lastName, email, phone, address } = student;
  // const dispatch = useDispatch();
  const handleDelete = async () => {
    await fetch(`http://127.0.0.1:5001/user/${id}`, {
      method: "DELETE",
    });
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlog(newBlogs);
    history.push("/");
  };
  // const handleDelete = (id) => {
  //   console.log(id)
  //   dispatch(deleteStudent(id));
  // };
  return (
    <Grid sm={3} item>
      <Paper>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="subtitle2" gutterBottom>
            {firstName} {lastName}
          </Typography>
          <IconButton component={Link} to={`/students/${id}`}>
            <VisibilityIcon />
          </IconButton>
        </Box>
        <Typography variant="caption">{phone}</Typography>
        <Typography variant="caption">{email}</Typography>
        <Typography variant="caption">{address}</Typography>
        <Button
          component={Link}
          to={`/students/${id}/edit`}
          variant="outlined"
          startIcon={<EditIcon />}
        >
          edit
        </Button>
        <Button startIcon={<DeleteOutlineIcon />} onClick={handleDelete}>
          delete
        </Button>
      </Paper>
    </Grid>
  );
};

export default StudentItem;
