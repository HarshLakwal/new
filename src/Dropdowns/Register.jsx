import React from "react";
import { Button, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  textField: {
    // Add your custom CSS styles here
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
const Register = () => {
  const classes = useStyles();

  return (
    <>
      <div
        className="modal fade"
        id="registerModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="registerModalLabel"
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
                className="flex-col d-flex justify-content-center align-items-center flex-column"
                style={{ marginTop: "4rem" }}
              >
                <div class="form-group d-flex justify-content-center col-8 ">
                  <TextField
                    id="standard-email-input"
                    label="Email"
                    name="email"
                    type="text"
                    autoComplete="current-email"
                    variant="standard"
                    className={classes.textField}
                  />
                </div>
                <div
                  class="form-group d-flex justify-content-center col-8 "
                  style={{ marginBottom: "2.5rem" }}
                >
                  <TextField
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="standard"
                    className={classes.textField}
                  />
                </div>

                <Button
                  variant="contained"
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
                  }}
                >
                  SignIn
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
