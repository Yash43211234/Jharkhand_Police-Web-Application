



function Footer(){
    return(
        <>
        
           <div className="foot">
              <p>
              Visitors Since 27th Nov 2021 : website hit counter
              </p>
              <p>© Copyright Jharkand Police 2021 All Right Reserved. Disclaimer | Privacy Policy Designed & Developed by G8</p>
               
            </div>
           <style>
            {
                `
                
        .foot{
          
            bottom: 0;
            width: 100%;
            text-align: center;
            background: #00123c;
            color: aliceblue;
            padding: 10px;
          
          }
                `
            }
           </style>
        </>
    );
}
export default Footer;