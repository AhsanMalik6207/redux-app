import React, {useEffect, useState} from "react";
import { Grid, Fab, makeStyles } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import StudentItem from "./StudentItem";
import { Link } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import axios from "axios";
import { getStudent } from "../../redux/features/studentSlice";
const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    right: "5%",
    bottom: "5%",
  },
}));

const Students = () => {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const students = useSelector((state) => state.student.students);
  const fetchProducts = async () => {
    const response = await axios.get("http://127.0.0.1:5001/api/users").catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(getStudent(response.data));
    setData(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Grid spacing={2} container>
        {data.map((student) => (
          <StudentItem key={student.index} student={student} />
        ))}
      </Grid>
      <Fab
        component={Link}
        to="/students/create"
        color="primary"
        className={classes.fab}
      >
        <AddIcon />
      </Fab>
    </>
  );
};

export default Students;
