import React, { Component } from 'react';
import {Grid, Typography, Button} from "@material-ui/core";

export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1 style={{fontSize: "35px", color: "black"}}>What I've Done</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <React.Fragment>
                  <Grid container>
                    <Grid item xs={6}>
                      <div style={{height: "35vh", width: "35vw"}} className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-01">
                      <img style={{height: "35vh", width: "33vw"}} src={`${item.imgurl}`} className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </a>
                    
                  </div>
                </div>
                    </Grid>

                    <Grid item xs={6}>
                      <Typography style={{marginLeft:"10vw", width: "25vw"}} variant="h4">{item.caption}</Typography>
                      <Button style={{marginLeft:"10vw", marginTop: "5vw", width: "12.5vw", height: "3vw", marginBottom: "3vh"}} variant="contained" color="primary" href={item.github}>
                        <Typography variant="h5" style={{color: "white"}}>
                          View on Github
                        </Typography>
                      </Button>
                      <Button style={{marginLeft:"10vw", width: "12.5vw", height: "3vw"}} variant="contained" color="primary" href={item.demo}>
                        <Typography variant="h5" style={{color: "white"}}>
                          Live Demo
                        </Typography>
                      </Button>
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