import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
       
         <div className="row skill">

            <div className="three columns header-col">
               <h1><span>Skills</span></h1>
            </div>

            <div className="nine columns main-col">

               <p>
               {resumeData.skillsDescription}
               </p>

   				<div className="bars" style={{marginTop: "-50px"}}>

   				   <ul className="skills">

                <h1>Languages</h1>
                <p>Python, Java, SQL</p>

                <h1>Web/Frameworks</h1>
                <p>React.js, Redux, Node.js, Express.js, Javascript, Jest, MongoDB, MySQL</p>

                <h1>Other</h1>
                <p>Docker, Git, LaTeX</p>

   					</ul>

   				</div>

   			</div>

         </div>

      </section>
    );
  }
}