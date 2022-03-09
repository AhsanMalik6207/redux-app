import React from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Paper, Button } from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";
import FormData from 'form-data';
import { useDispatch } from "react-redux";
import { addStudent } from "../../redux/features/studentSlice";
import { useHistory } from "react-router-dom";
import axios from "axios";
const AddStudent = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  const { handleSubmit, control, reset, register } = useForm();
  const onSubmit = (data) => { 
    console.log(data);
    let response = axios.post("http://127.0.0.1:5001/api/users", data);
    console.log(response)
    dispatch(addStudent(data));
    // reset({
    //   firstName: "",
    //   lastName: "",
    //   email: "",
    //   address: "",
    //   phone: "",
    // });
    history.push("/");
  };
  return (
    <div>
      <Paper>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* <TextField
            inputProps={{ type: "hidden" }}
            margin="normal"
            {...register("id")}
          /> */}

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
                // {...field}
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
          <Button type="submit">Create new Student</Button>
        </form>
      </Paper>
    </div>
  );
};

export default AddStudent;
