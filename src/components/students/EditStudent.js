import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Paper, Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import {
  getStudent,
  clearStudent,
  updateStudent,
} from "../../redux/features/studentSlice";

const EditStudent = () => {
  const { handleSubmit, control, reset, register } = useForm(
  //   {
  //   defaultValues: {
  //     firstName: "",
  //     lastName: "",
  //     email: "",
  //     address: "",
  //     phone: "",
  //   },
  // }
  );

  const params = useParams();
  let history = useHistory();
  const dispatch = useDispatch();
  const student = useSelector((state) => state.student.student);
  useEffect(() => {
    dispatch(getStudent(params.id));
    return () => {
      dispatch(clearStudent());
    };
  }, []);

  useEffect(() => {
    reset(student);
  }, [student]);

  const onSubmit = (data) => {

    let response = axios.put(`http://127.0.0.1:5001/user/59`, data);
    console.log(response)
    dispatch(updateStudent(data));
    history.push("/");
  };
  return (
    <div>
      <Paper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="firstName"
            render={({ field }) => (
              <TextField
                id="first-name"
                label="First Name"
                variant="outlined"
                placeholder="Enter Your First Name"
                fullWidth
                margin="normal"
                // {...field}
                {...register("firstName")}
              />
            )}
          />

          <Controller
            control={control}
            name="lastName"
            render={({ field }) => (
              <TextField
                id="last-name"
                label="Last Name"
                variant="outlined"
                placeholder="Enter Your Last Name"
                fullWidth
                margin="normal"
                // {...field}
                {...register("lastName")}
              />
            )}
          />
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <TextField
                id="email"
                label="E-mail"
                variant="outlined"
                placeholder="Enter Your E-mail Address"
                fullWidth
                margin="normal"
                {...register("email")}
              />
            )}
          />
          <Controller
            control={control}
            name="address"
            render={({ field }) => (
              <TextField
                id="address"
                label="Address"
                variant="outlined"
                placeholder="Enter Your Address"
                fullWidth
                margin="normal"
                // {...field}
                {...register("address")}
              />
            )}
          />
          <Controller
            control={control}
            name="phone"
            render={({ field }) => (
              <TextField
                id="phone-number"
                label="Phone Number"
                variant="outlined"
                placeholder="Enter Your Phone Number"
                fullWidth
                margin="normal"
                // {...field}
                {...register("phone")}
              />
            )}
          />
          <Button type="submit">Update Student</Button>
        </form>
      </Paper>
    </div>
  );
};

export default EditStudent;
