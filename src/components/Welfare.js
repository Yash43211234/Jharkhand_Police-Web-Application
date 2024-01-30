import React from 'react';


const Welfare = () => {
  return (
    <>
      <style>
        {`
   body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .pt-0 img{
    margin-top: -20px;
    height: 500px;
    width: 100%;
}

  
.container {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  /* Header styles */
  #header {
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px 0;
  }
  
  #navbar ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  #navbar li {
    display: inline-block;
    margin-right: 20px;
  }
  
  #navbar a {
    text-decoration: none;
    color: #333;
    font-weight: 600;
    font-size: 16px;
  }
  
  #navbar a:hover {
    color: #e44d26;
  }
  
  /* Main section styles */
  #MainContent_div_En {
    padding: 40px 0;
  }
  
  .medalview {
    background-color: #f8f9fa;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .medalview h3 {
    color: #e44d26;
  }
  
  .btn-dp {
    background-color: #e44d26;
    color: #fff;
    padding: 8px 16px;
    text-decoration: none;
    border-radius: 4px;
    display: inline-block;
    margin-top: 10px;
  }
  
  .btn-dp:hover {
    background-color: #333;
  }
  
  /* Footer styles */
  #footer {
    background-color: #f8f9fa;
    padding: 40px 0;
    color: #333;
  }
  
  .footer-info h3 {
    color: #e44d26;
  }
  
  .social-links a {
    color: #333;
    margin-right: 10px;
  }
  
  .social-links i {
    font-size: 24px;
  }
  
  /* Back to Top button */
  .back-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #e44d26;
    color: #fff;
    padding: 10px;
    border-radius: 50%;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    display: none;
  }
  
  .back-to-top:hover {
    background-color: #333;
  }
  
  /* Responsive styles */
  @media (max-width: 768px) {
    #navbar {
      text-align: center;
    }
  
    #navbar ul {
      display: block;
      text-align: center;
      padding: 10px;
    }
  
    #navbar li {
      display: block;
      margin: 10px 0;
    }
  }
  

   ` }
      </style>


      <div>
        <section className="pt-0 pb-0">
          <img src="https://thumbs.dreamstime.com/b/welfare-word-abstract-vintage-letterpress-wood-type-welfare-word-abstract-wood-type-120261231.jpg" className="img-fluid" alt="Jharkhand Police Public Schools" />
        </section>
        <main>
          <section id="MainContent_div_En" className="pt-4">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <div className="row medal">
                    <div className="col-md-6 mb-4 d-flex">
                      <div className="medalview medalview1 d-flex align-items-center">
                        <div className="col-sm-12 col-md-2 float-start">
                          <i className="bx bxs-building-house bgred"></i>
                        </div>
                        <div className="col-sm-12 col-md-6 float-start">
                          <h3 className="float-start text-left">jps/traffic/training</h3>
                        </div>
                        <div className="col-sm-12 col-md-4 float-start">
                          <a href="https://www.Jharkhandpolicepublicschool.com/" target="_blank" rel="noopener noreferrer" className="btn btn-dp">View</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4 d-flex">
                      <div className="medalview medalview1 d-flex align-items-center">
                        <div className="col-sm-12 col-md-2 float-start">
                          <i className="bi bi-person-lines-fill bgg"></i>
                        </div>
                        <div className="col-sm-12 col-md-6 float-start">
                          <h3 className="float-start text-left">jps/New Police Lines</h3>
                        </div>
                        <div className="col-sm-12 col-md-4 float-start">
                          <a href="https://www.Jharkhandpolicepublicschool.in/" target="_blank" rel="noopener noreferrer" className="btn btn-dp">View</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4 d-flex">
                      <div className="medalview medalview1 d-flex align-items-center">
                        <div className="col-sm-12 col-md-2 float-start">
                          <i className="bx bxs-building"></i>
                        </div>
                        <div className="col-sm-12 col-md-6 float-start">
                          <h3 className="float-start text-left">jps/details</h3>
                        </div>
                        <div className="col-sm-12 col-md-4 float-start">
                          <a href="https://www.Jppswzb.edu.in/" target="_blank" rel="noopener noreferrer" className="btn btn-dp">View</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

    </>
  );
};

export default Welfare;
