import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { useState } from "react";
import { addUser } from "../features/Users";
import { useDispatch } from "react-redux";

export default function AddUser() {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    return (
        <div className="user">
        <Card>
            <CardContent>
                <TextField
                    sx={{ m: 1, minWidth: 330 }}
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    value={name}
                    onChange={(event) => {
                        setName(event.target.value);
                    }}
                />
                <TextField
                    id="outlined-basic"
                    label="UserName"
                    variant="outlined"
                    sx={{ m: 1, minWidth: 330 }}
                    value={username}
                    onChange={(event) => {
                        setUsername(event.target.value);
                    }}
                />
                <CardActions>

                    <Button
                        sx={{ m: 1, minWidth: 310 }}
                        variant="contained"
                        onClick={() => {
                            dispatch(
                                addUser({
                                    id: 0,
                                    name: name,
                                    username: username,
                                }),
                                setName(''),
                                setUsername('')
                            );
                        }}
                    >
                        Add User
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
        </div>
    );
}
