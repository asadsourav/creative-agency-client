import React from 'react';

const ProjectMessage = () => {
    return (
        <section style={{height:'600px'}} className=" my-5 py-5 bg-warning">
           <div className="container row">
               <div className=" col-md-5 text-center text-dark mb-5">
                    
                    <h1><strong>Let us handle your <br/> project,professionally</strong></h1>
               </div>
               <div className="col-md-6 mx-auto pl-5">
                   <form action="">
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Your E-mail Address"/>
                       </div>
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder=" Your Name/Company's Name"/>
                       </div>
                       <div className="form-group">
                           <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Your Message *"></textarea>
                       </div>
                       <div className="form-group">
                           <button type="button" className="btn btn-dark px-5"> Send </button>
                       </div>
                   </form>
               </div>
           </div>
       </section>
    );
};

export default ProjectMessage;