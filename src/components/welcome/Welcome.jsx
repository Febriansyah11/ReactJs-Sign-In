import React from 'react'
import '../../assets/styles/welcome.css';
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(2),
        borderRadius: "5em"
      },
      input: {
        display: "none"
      }
  }));

  
export default function Welcome() {
    const history = useHistory();
    const classes = useStyles();

    return (
        <div className="welcome container text-center" style={{  
            backgroundImage: "url(" + "https://i.postimg.cc/JM8xhgHf/acils.png" + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat', 
            backgroundColor: '#e77f24'      
          }}>
            <div className="row">
                <div className="col left-side  d-flex align-items-center justify-content-center flex-column text-center">
                    <h3 className="title-text">Your title place here</h3>
                    <p className="text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque reprehenderit rerum ut earum sunt tempora sint quasi.</p>
                    <div className="row">
                        <Button variant="contained" color="inherit" className={classes.button} onClick={()=> history.push("/sign-in")}>
                            SIGN IN
                        </Button>
                        <Button variant="contained" color="primary" className={classes.button}>
                            REGISTER
                        </Button>
                    </div>
                </div>
                <div className="col">
                    
                </div>
            </div>
        </div>
    )
}
