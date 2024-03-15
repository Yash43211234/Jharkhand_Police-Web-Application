import React from 'react'
import AuthModal from './AuthModal'
import LoginModal from './SettingIcon'
function Header() {
  return (
    <div>
        
        <div className="App">
        <div id="divLang"className="">
          <div className="emergency-call-top left-img ">
            <img src="img/logo.png" />
          </div>
          <div className="emergency-call-top ">
            <p>Emergency Response Support System [112]</p>
          </div>
          <div className="emergency-call-top ">
            <p>Email : example@gmail.com</p>
          </div>


          <div className="dropdown ">
            <a
              onclick="btn1Click();"
              id="btnlanguage"
              href='javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions("ctl00$btnlanguage", "", true, "", "", false, true))'
            >
              हिन्दी
            </a>
          </div>

          <div className="dropdown top">
           

          </div>
          <div className="dropdown top">
          

          </div>

          <div className="dropdown top">
            <button className="App-button auth"> <LoginModal /></button>

          </div>



        </div>
    </div>
    
    <style>

{
  `
.App {
  text-align: center;
  
}


#divLang{
  margin-top:10px;
  margin-bottom:-10px;
  display: flex;
  justify-content: space-between;
  padding-left:40px;
  padding-right:40px;
  align-items: center;
  margin-bottom:-12px;
}

.emergency-call-top img{
  width:40px;
  height:40px;
  border-radius:50%;
  margin-bottom: -8px;
}
.emergency-call-top p {
  font-size: 16px;
  
}
.top button:hover{
    cursor:pointer;
}






`
}
</style>
    </div>
  )
}

export default Header

