import React, { Component } from 'react';
import {Grid, Typography, Button} from "@material-ui/core";

export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio" style={{backgroundColor: "#0e1010"}}>
      <div className="row">
        <div className="twelve columns collapsed">
          <h1 style={{fontSize: "35px", color: "#b5b0a7"}}>What I've Done</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <React.Fragment>
                  <Grid container>
                    <Grid item md={6} xs={12}>
                      <div style={{height: "35vh", width: "33.4vw"}} className="columns portfolio-item">
                  <div className="item-wrap">

                      <img style={{height: "35vh"}} src={`${item.imgurl}`} className="item-img" alt="project"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5 style={{color: "white"}}>{item.name}</h5>
                          <p style={{color: "white"}}>{item.description}</p>
                        </div>
                      </div>

                    
                  </div>
                </div>
                    </Grid>

                    <Grid item md={6} xs={12}>
                      <Typography className="project-caption" style={{marginLeft:"10vw", width: "25vw", color: "#b5b0a7"}} variant="h4">{item.caption}</Typography>
                        <div className="btn-container">
                        <Button className="btn" style={{marginLeft:"10vw", marginTop: "5vw", width: "12.5vw", height: "3vw", marginBottom: "3vh"}} variant="contained" color="primary" href={item.github} target="_blank">
                          <Typography className="button-caption" variant="h5" style={{color: "white"}}>
                            View on Github
                          </Typography>
                        </Button>
                        <Button className="btn" style={{marginLeft:"10vw", width: "12.5vw", height: "3vw"}} variant="contained" color="primary" href={item.demo} target="_blank">
                          <Typography className="button-caption" variant="h5" style={{color: "white"}}>
                            Live Demo
                          </Typography>
                      </Button>
                      </div>
                    </Grid>
                  </Grid>
                </React.Fragment>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}