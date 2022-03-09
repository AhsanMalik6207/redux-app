import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const studentSlice = createSlice({
  name: "student",
  initialState: {
    students: [
      {
        id: 1,
        firstName: "Ahsan",
        lastName: "Ali",
        email: "ahsan@hotmail.com",
        phone: "+923027022381",
        address: "Nishatabad",
      },
      {
        id: 2,
        firstName: "Zubair",
        lastName: "Ali",
        email: "Zubair@gmail.com",
        phone: "+923565586581",
        address: "Faisalabad",
      },
      {
        id: 3,
        firstName: "Daevika",
        lastName: "Ganaka",
        email: "Bharat89@gmail.com",
        phone: "+91-917-1416065",
        address: "78079 Patel Park",
      },
      // {
      //   id: 4,
      //   firstName: "Tanya",
      //   lastName: "Trivedi",
      //   email: "Birjesh_Sinha3@hotmail.com",
      //   phone: "+91-644-6939697",
      //   address: "57761 Shreyashi Junctions",
      // },
      // {
      //   id: 5,
      //   firstName: "Vimala",
      //   lastName: "Mehrotra",
      //   email: "Anamika.Ahluwalia1@hotmail.com",
      //   phone: "+91-704-4124157",
      //   address: "860 Gautama Turnpike",
      // },
      // {
      //   id: 6,
      //   firstName: "Chapala",
      //   lastName: "Tagore",
      //   email: "Rohan17@gmail.com",
      //   phone: "+91947-960-7538",
      //   address: "300 Chandrabhaga Knoll",
      // },
      // {
      //   id: 7,
      //   firstName: "Rajendra",
      //   lastName: "Ahuja",
      //   email: "Vasudeva_Tagore25@yahoo.co.in",
      //   phone: "+91-918-7520232",
      //   address: "4560 Dubashi Branch",
      // },
      // {
      //   id: 8,
      //   firstName: "Himadri",
      //   lastName: "Devar",
      //   email: "Amritambu_Talwar@hotmail.com",
      //   phone: "+919330236755",
      //   address: "1003 Girindra Rapids",
      // },
      // {
      //   id: 9,
      //   firstName: "Chandrakala",
      //   lastName: "Gowda",
      //   email: "Rajan51@gmail.com",
      //   phone: "+91-732-9504322",
      //   address: "967 Dhawan Burgs",
      // },
      // {
      //   id: 10,
      //   firstName: "Birjesh",
      //   lastName: "Embranthiri",
      //   email: "Bela.Sinha@yahoo.co.in",
      //   phone: "+91-834-5715321",
      //   address: "77860 Acharya Summit",
      // },
      // {
      //   id: 11,
      //   firstName: "Ghanaanand",
      //   lastName: "Tandon",
      //   email: "Deeksha.Varma12@hotmail.com",
      //   phone: "+91-709-3361753",
      //   address: "542 Ghanashyam Centers",
      // },
      // {
      //   id: 12,
      //   firstName: "Baalagopaal",
      //   lastName: "Verma",
      //   email: "Chandranath.Panicker@hotmail.com",
      //   phone: "+919432924857",
      //   address: "12208 Dwivedi Station",
      // },
    ],
    student: {
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      phone: "",
    },
  },
  reducers: {
  
    getStudent: (state, action) => {
      state.student = state.students.find((el) => el.id == action.payload);
    },
    clearStudent: (state) => {
      state.student = {
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        phone: "",
      };
    },
    addStudent: (state, action) => {
      state.students = [...state.students,action.payload];
    },
    updateStudent: (state, action) => {
      state.students = state.students.map((el) =>
        el.id == action.payload.id ? action.payload : el
      );
    },
    deleteStudent: (state, action) => {
      state.students = state.students.filter((el) => el.id != action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getStudent,
  clearStudent,
  addStudent,
  updateStudent,
  deleteStudent,
} = studentSlice.actions;

export default studentSlice.reducer;
