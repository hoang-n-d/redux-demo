
import React, { useState } from 'react';
import {
    Switch, Button, TextField,
    MenuItem, FormControlLabel,
    FormControl, Select, InputLabel, Card, Typography
} from '@mui/material';
import { useFormik } from 'formik';
import { Container } from '@mui/system';
import * as Yup from 'yup';
import { addUser } from "../features/Users";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Flip } from 'react-toastify';
import { useDispatch } from 'react-redux';

export default function Contact() {

    const notify = () => {
        toast.success("Success Notification !!!", {
        });
    };

    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [useremail, setEmail] = useState("");
    const [userphone, setPhone] = useState("");
    const [userprogram, setProgram] = useState("");
    const [usermessage, setMessage] = useState("");
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            program: "",
            message: "",
            agree: false

        },

        validationSchema: Yup.object({
            name: Yup.string().required("Required.").min(2, "Must be 2 characters or more"),
            email: Yup.string().required("Required.").email("Invalid email"),
            phone: Yup.number().integer().typeError("Please enter a valid number"),
            program: Yup.string().required("Please select a program."),
            message: Yup.string().required("Required.").min(10, "Must be 10 characters or more"),
            agree: Yup.boolean().oneOf([true], "The terms and conditions must be accepted.")
        }),

        onSubmit: (values) => {
            values(notify)
        },

    });


    return (
        <div className='container-contact'>

            <Container>

                <Card>
                    <h1>Contact Us !!</h1>
                    <form className='form-mui' onSubmit={formik.handleSubmit}>

                        <TextField
                            label="Name"
                            name="name"
                            value={formik.values.name}
                            onChange={formik.handleChange }
                            sx={{ m: 1, minWidth: 900 }}
                            // value={name}
                            // onChange={(event) => {
                            //     setName(event.target.value);
                            // }}
                        />
                        <div value={formik.values.name}
                            onChange={formik.handleChange}
                        >
                            {formik.errors.name && (<Typography variant="caption"
                                color="red">{formik.errors.name}</Typography>)}

                        </div>

                        <TextField
                            label="Email"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            // value={useremail}
                            // onChange={(event) => {
                            //     setEmail(event.target.value);
                            // }}
                            sx={{ m: 1, minWidth: 900 }}
                        />
                        <div>
                            {formik.errors.email && (<Typography variant="caption"
                                color="red">{formik.errors.email}</Typography>)}
                        </div>

                        <TextField
                            label="Phone"
                            name="phone"
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            // value={userphone}
                            // onChange={(event) => {
                            //     setPhone(event.target.value);
                            // }}
                            sx={{ m: 1, minWidth: 900 }}
                        />
                        <div>
                            {formik.errors.phone && (<Typography variant="caption"
                                color="red">{formik.errors.phone}</Typography>)}
                        </div>

                        <FormControl sx={{ m: 1, minWidth: 850 }}>
                            <InputLabel id="demo-simple-select-autowidth-label">Program of Study</InputLabel>
                            <Select

                                labelId="demo-simple-select-autowidth-label"
                                id="demo-simple-select-autowidth"
                                label="Program of Stydy"
                                name="program"
                                value={formik.values.program}
                                onChange={formik.handleChange}
                                // value={userprogram}
                                // onChange={(event) => {
                                //     setProgram(event.target.value);
                                //}}
                            >
                                {/* <MenuItem value={0}>
                                    <em>Please select</em>
                                </MenuItem> */}
                                <MenuItem value={"Software Engineering"}>Software Engineering</MenuItem>
                                <MenuItem value={"Information System"}>Information System</MenuItem>
                                <MenuItem value={"Information Assurance"}>Information Assurance</MenuItem>
                                <MenuItem value={"Internet of Things"}>Internet of Things</MenuItem>
                                <MenuItem value={"Artificial Intelligence"}>Artificial Intelligence</MenuItem>
                                <MenuItem value={"Digital Art & Design"}>Digital Art & Design</MenuItem>
                            </Select>

                        </FormControl>
                        <div>
                            {formik.errors.program && (<Typography variant="caption"
                                color="red">{formik.errors.program}</Typography>)}
                        </div>
                        <TextField
                            id="outlined-multiline-static"
                            label="Message"
                            multiline
                            name='message'
                            rows={4}
                            value={formik.values.message}
                            onChange={formik.handleChange}
                            // value={usermessage}
                            // onChange={(event) => {
                            //     setMessage(event.target.value);
                            //}}
                            sx={{ m: 1, minWidth: 900 }}
                        /><div>
                            {formik.errors.message && (<Typography variant="caption"
                                color="red">{formik.errors.message}</Typography>)}

                        </div>
                        <div>
                            <FormControlLabel control={<Switch />}
                                label="Agree to terms and conditions." name='agree'
                                value={formik.values.agree}
                                onClick={formik.handleChange}

                            />
                            <div>
                                {formik.errors.agree && (<Typography variant="caption"
                                    color="red">{formik.errors.agree}</Typography>)}
                            </div>
                        </div>
                        <div>
                            <Button
                                sx={{ m: 1, minWidth: 900 }}
                                onClick={() => {
                                    
                                    dispatch(
                                        addUser({
                                            id: 0,
                                            name: formik.values.name,
                                            email: formik.values.email,
                                            phone: formik.values.phone,
                                            program: formik.values.program,
                                            message: formik.values.message,
                                        }),
                                        setName(''),
                                        setEmail(''),
                                        setPhone(''),
                                        setProgram(''),
                                        setMessage('')
                                        
                                    );
                                    notify(notify)  
                                }}
                                type='submit'>
                                Send
                            </Button>
                            <ToastContainer limit={5} transition={Flip} />
                        </div>

                    </form>

                </Card>
            </Container>
        </div>

    )

}