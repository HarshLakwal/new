import { Button, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState, useEffect } from "react";
import { serverURL, token } from "../../serverURL";
import { Dispatch } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useDispatch } from "react-redux";
import { isLogin } from "../redux/authSlice.js";
const useStyles = makeStyles((theme) => ({
  textField: {
    // Add your custom CSS styles here
    "& .MuiInputBase-input": {
      color: "white",
      letterSpace: "5px",
    },
    width: "100%",
    "& label": {
      color: "#ffffff82",
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "#ffffff82",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#ffffff82", // Replace 'orange' with the focused underline color you want
    },
    "& .MuiInput-underline:hover": {
      borderBottomColor: "#ffffff82", // Replace 'orange' with the focused underline color you want
    },
  },
  customButton: {
    // Add your custom CSS styles here
    backgroundColor: "red",
    color: "white",
    "&:hover": {
      backgroundColor: "blue", // Replace 'blue' with the hover color you want
    },
  },
}));

const Login = () => {
  const classes = useStyles();
  const [status, setStatus] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const handleForm = (status) => {
    setStatus(status);
  };
  const Dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (status) {
      if (name && email && password) {
        fetch(`${serverURL}/api/user/register`, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password }),
        })
          .then((res) => {
            return res.json();
          })
          .then((res) => {
            console.log(res);
            if (res.result) {
              return toast.success(res.result);
            }
            return toast.error(res.message);
          });
      }
    } else {
      if (email && password) {
        fetch(`${serverURL}/api/user/login`, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        })
          .then((res) => {
            return res.json();
          })
          .then((res) => {
            if (res.result) {
              window.location.reload();
              localStorage.setItem("userToken", res.token);
              return toast.success(res.result);
            }
            return toast.error(res.message);
          });
      }
    }
  };
  useEffect(() => {
    Dispatch(isLogin(token));
  }, []);
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-lg"
          role="document"
          style={{ marginTop: "4.5rem" }}
        >
          <div className="modal-content dirt_common_modal">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <i className="far fa-times-circle"></i>
              </button>
            </div>
            <div className="modal-body">
              <form
                className="flex-col d-flex justify-content-center align-items-center flex-column "
                style={{ marginTop: "2rem" }}
                onSubmit={handleSubmit}
              >
                {status ? (
                  <div className="form-group d-flex justify-content-center col-8 ">
                    <TextField
                      id="standard-text-input"
                      label="Name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      autoComplete="current-email"
                      variant="standard"
                      className={classes.textField}
                      required
                    />
                  </div>
                ) : null}
                <div className="form-group d-flex justify-content-center col-8 ">
                  <TextField
                    id="standard-email-input"
                    label="Email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    autoComplete="current-email"
                    variant="standard"
                    className={classes.textField}
                    required
                  />
                </div>
                <div
                  className="form-group d-flex justify-content-center col-8 "
                  style={{ marginBottom: "2.5rem" }}
                >
                  <TextField
                    id="standard-password-input"
                    label="Password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    autoComplete="current-password"
                    variant="standard"
                    required
                    className={classes.textField}
                  />
                </div>

                <Button
                  variant="contained"
                  type="submit"
                  style={{
                    borderRadius: 10,
                    backgroundColor: "#deb72a",
                    padding: "4px 15%",
                    fontSize: "15px",
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                    color: "black",
                    outline: "none",
                    textTransform: "capitalize",
                    marginBottom: ".5rem",
                  }}
                >
                  {status ? "SignUp" : "SignIn"}
                </Button>
                <h1 className="account-txt">
                  {status ? "have an account." : "Don't have an account?"}

                  <span
                    onClick={() => handleForm(!status)}
                    style={{
                      color: "blue",
                      cursor: "pointer",
                      marginLeft: "4px",
                      fontSize: "12px",
                    }}
                  >
                    {status ? "Login" : "Register"}
                  </span>
                </h1>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
