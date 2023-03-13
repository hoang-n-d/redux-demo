import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteUser, updateMessage } from "../src/features/Users";
import { Delete, Email, Smartphone, Work} from "@mui/icons-material";


export default function User() {
    const dispatch = useDispatch();
    const userList = useSelector((state) => state.users.value);
    const [newmessage, setNewMessage] = useState("");
    return (
        <div className="user">
        <Card>
            <CardContent>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={1}>
                        {userList.map((user) => (
                            <Grid container item xs={12}>
                                <div className="icon-user">
                                <img src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" alt=""width={50} height={50}/>
                                </div>
                                <Grid item xs>    
                                                      
                                    <p><h3>{user.name}</h3></p>
                                    <p><Email/>: {user.email}</p>
                                    <p><Smartphone/>: {user.phone}</p>
                                    <p><Work/>: {user.program}</p>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Type new username"
                                        variant="outlined"
                                        style={{ width: "80%" }}
                                        onChange={(e) =>
                                            setNewMessage(e.target.value)
                                        }
                                    />
                                    <p><b>Message : </b>{user.message}</p>
                                  
                                </Grid>
                                
                                <Grid item xs>
                                    <CardActions>
                                        <Button
                                            variant="contained"
                                            onClick={() => {
                                                dispatch(
                                                    updateMessage({
                                                        id: user.id,
                                                        message: newmessage,
                                                    })
                                                );
                                            }}
                                        >
                                            UPDATE
                                        </Button>
                                        <Button
                                            variant="contained"
                                            onClick={() => {
                                                dispatch(
                                                    deleteUser({ id: user.id })
                                                );
                                            }}
                                        ><Delete/>
                                            Delete
                                        </Button>
                                    </CardActions>
                                </Grid>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </CardContent>
        </Card>
        </div>
    );
}
