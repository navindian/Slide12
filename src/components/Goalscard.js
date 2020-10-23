import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
// import "./Goals.css"
import PlayCircleFilledRoundedIcon from '@material-ui/icons/PlayCircleFilledRounded';
import AddIcon from '@material-ui/icons/Add';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default function MediaCard() {
    const classes = useStyles();

    return (
        <div style={{ marginLeft: "200px" }}>
            <h1 style={{ marginTop: "-30px", marginBottom: "10px", marginLeft: "10px" }}><b>Your Goals</b></h1>

            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <Card className={classes.root} style={{ width: "300px", height: "330px", border: "1px dashed black" }}>
                            <CardContent>
                                <img src="./card1.jfif" alt="image not found" height="100px" width="100%" />
                                <Typography variant="h5" component="h2">
                                    <b>Pay off student loan</b>
                                </Typography><br />
                                <div className="row">
                                    <div className="col-md-9">
                                        <Typography variant="body2" component="p">
                                            <h6> <span className="text-primary">$5k </span>/ $50k</h6>
                                            <h6>amount saved of goal</h6>
                                            <h6>$300</h6>
      monthly
                              </Typography>

                                    </div>
                                    <div className="col-md-3" style={{ marginTop: "35px", marginLeft: "-30px" }}>
                                        {/* <sapn className="circle2">
                                    <span className="circle2"></span> */}
                                        {/* </sapn> */}
                                    </div>

                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="col-md-4">
                        <Card className={classes.root} style={{ width: "300px", height: "330px", border: "1px dashed black" }}>
                            <CardContent>
                                <img src="./card2.jfif" alt="image not found" height="100px" width="100%" />
                                <Typography variant="h5" component="h2">
                                    <b>Save for retirement</b>
                                </Typography><br />
                                <div className="row">
                                    <div className="col-md-9">
                                        <Typography variant="body2" component="p">
                                            <h6> <span className="text-primary">$132 </span>/ $200k</h6>
                                            <h6>amount saved of goal</h6>
                                            <h6>$3.2k</h6>
                                        monthly

                              </Typography>

                                    </div>
                                    <div className="col-md-3" style={{ marginTop: "35px", marginLeft: "-30px" }}>
                                        {/* <sapn className="circle2">
                                    <span className="circle2"></span> */}
                                        {/* </sapn> */}
                                    </div>

                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="col-md-4">
                        <Card className={classes.root} style={{ width: "300px", height: "330px", border: "2px dashed black" }}>
                            <CardContent>
                                <center>
                                    <AddIcon style={{ width: "100px", height: "150px" }} />
                                </center>
                                <center><h4>Add new Personal Goals</h4></center>

                            </CardContent>
                        </Card>
                    </div>
                </div>
                <div className="row">


                    <div className="col-md-4">

                        <Typography >
                            &nbsp; <h4>We recommend:</h4><br />
                        </Typography>
                        <Typography>
                            <h5 style={{ color: 'darkblue' }}><PlayCircleFilledRoundedIcon style={{ color: 'darkblue', marginRight: "2px" }} />
                    Continue Saving when you can</h5>
                            <h6>This is a wider card with supporting text below.</h6>
                            <br />
                        </Typography>
                        <Typography>
                            <h5 style={{ color: 'darkred' }}> <PlayCircleFilledRoundedIcon style={{ color: 'darkred', marginRight: "2px" }} />Derease contributions to your IRA for now</h5>
                            <h6>This is a wider card with supporting text below.</h6>
                        </Typography>

                    </div>
                    <div className="col-md-4">

                        <Typography >
                            &nbsp; <h4>We recommend:</h4><br />
                        </Typography>
                        <Typography>
                            <h5 style={{ color: 'darkgreen' }}><PlayCircleFilledRoundedIcon style={{ color: 'darkgreen', marginRight: "2px" }} />
                    Increase monthly contributions to your 401(K)</h5>
                            <h6>This is a wider card with supporting text below.</h6>
                            <br />
                        </Typography>

                    </div>

                </div>

            </div>

        </div>

    );
}
