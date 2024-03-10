import React from 'react';


const History = () => {
  return (
    <div className='history-container'>
      <img
        className='history-image'
        src="img/depart.jpg"
        alt="History of Jharkhand Police"
      />
      <h2 className='history-heading'>
        HISTORY OF JHARKHAND POLICE
      </h2>
    

      <div className='history-text-container'>
        <p >
          <h2> Paragraph 1</h2>
          <br/>
          <p className='history-text'>Jharkhand Police is the law enforcement agency for the state of Jharkhand, India. Jharkhand Police was formed in 2000. Jharkhand Police is headed by Director General of Police and headquartered in Ranchi, Jharkhand. Jharkhand police have 4 levels of Joining. The Top positions are filled by Indian Police Service Officers recruited by the Union Public Service Commission. The Next Level of Recruitment is at Class II Level via D.S.P Rank recruited by the Jharkhand Public Service Commission. Non-Gazetted officers are recruited at the sub inspector level by the Jharkhand Subordinate Service Commission. </p>
          <h2> paragraph 2</h2>
          <br/>
          <p className='history-text'>Other posts are filled by conducting recruitment rallies or direct recruitment examinations. The Jharkhand Police has nearly a Strength of about 149 IPS Officers. Against this sanctioned strength the State has only 100 IPS Officers allotted to it as on 2015 by the Ministry of Home Affairs(MHA). Jharkhand is among the top Indian states for total recruitment. The current DGP of Jharkhand Police is Niraj Sinha.</p>
        </p>
      </div>
      <style>
        {
          `
.history-container {
  text-align: center;
  font-family: Arial, sans-serif;
  
}

.history-image {
  width: 100%;
  height: auto;
  margin-top: -20px;
}


.history-heading {
  margin-top: 50px;
  margin-left:30px;
  
  
  width:500px;
  align-text:left;
  margin-left:400px;
  padding:5px;
  border-radius:4px;
  

  
}


.history-text-container {
  text-align: left;
  
  padding:10px;
  margin: 30px;
  overflow:hidden;
  border-radius:30px 0px;
  
  
  
 
}
.history-text{
  font-size: 18px;
  
  
}
`

        }
      </style>
    </div>
  );
};

export default History;