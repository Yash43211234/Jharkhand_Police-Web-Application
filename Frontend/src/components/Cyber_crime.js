
import React from 'react'
import Button from '@mui/material/Button';

function cyber_crime() {
  return (
    <div className='about_cyber'>
        <h3>About Cyber Crime Police Station</h3><br/>
        <p>The Cyber Crime Police Station of Jharkhand Police was inaugurated on 21 st March 2016 by the honourable DGP, Jharkhand , Sri. D.K.Pandey, IPS. It deals with serious and complicated Cyber crimes, which otherwise could not be properly investigated by the local police for want of technical expertise. Cyber Crime Police Station also provides technical assistance to all the cases received by it or any of the Police Stations of Jharkhand. The SHO of Cyber Crime PS is Dy.SP Neha Bala, JPS and it is being supervised by S.P. Cyber Crime. Under the overall control of I.G. (C.I.D.) and A.D.G.(C.I.D.). The Station House Officer, Cyber Police Station is empowered to register FIRs, conduct further investigation and to lay final reports before the Court. The offences currently being investigated in the Cyber Crime Police Station are as follows:</p>
<br/>
<ul>
    <li>Unauthorized access & Hacking</li>
    <li>Trojan Attack</li>
    <li>Virus and Worm attack</li>
    <li>Denial of Service attacks</li>
    <li>Forgery</li>
    <li>IPR Violations</li>
    <li>Cyber Terrorism</li>
    


<li>Banking/Credit card Related crimes</li>
<li>E-commerce/ Investment Frauds</li>
<li>Cyber Stacking</li>
<li>Identity Theft</li>
<li>Data diddling</li>
<li>Source code theft</li>
<li>Tampering with Computer Source documents</li>
<li>Social media abuse which may result in serious consequences</li> 
<li>Complicated Cyber offences done through Smart phones</li>
<li>Pornography</li>
<li>Breach of Privacy and Confidentiality and other computer related crimes</li>
<li>E-mail related crimes: (a. Email spoofing, b. Email Spamming, c. Email bombing, d. Sending threatening emails, e. Defamatory emails, f. Email frauds)</li>
</ul>
<h3>Address:</h3>
<p>Cyber Crime Police Station
Kutchery Chowk, Ranchi , Jharkhand
Mobile : 9771432133
e-mail: cyberps@jhpolice.gov.in
</p>
<p>
Additionally, there are six cyber police stations established in Jharkhand State for the prevention and control of cybercrime.</p>
<table class="responsive-table" border={1}>
  <thead>
    <tr>
      <th>Sl.No.</th>
      <th>Name of district</th>
      <th>Mobile No.</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
        <td>1</td><td>Dhanbad</td><td>9905936731</td>
    </tr>
    <tr>
        <td>2</td><td>Jamshedpur</td><td>9430774631</td>
    </tr>
    <tr>
        <td>3</td><td>Deoghar</td><td>9798302205</td>
    </tr>
    <tr>
        <td>4</td><td>Jamtara</td><td>9471194942</td>
    </tr>
    <tr>
        <td>5</td><td>Giridih</td><td>9471194985</td>
    </tr>
    <tr>
        <td>6</td><td>Palamu</td><td>9264196948</td>
    </tr>
  </tbody>
</table>
<br/>

<Button href="https://jhpolice.gov.in/sites/default/files/documents-reports/jhpolice_document_hindi_cyber_awareness_24112020.pdf"> साइबर सुरक्षा संबंधी जागरूकता पुस्तिका</Button>
<br/>

<Button href="https://jhpolice.gov.in/sites/default/files/documents-reports/jhpolice_document_english_cyber_awareness_24112020.pdf"> Cyber Security Awareness Handbook</Button>
<br/>


<Button href="https://jhpolice.gov.in/sites/default/files/documents-reports/jhpolice_cyber_security_shared_responsibility.pdf"> Cyber Safety is our Shared Responsibility</Button>

<Button href="https://jhpolice.gov.in/sites/default/files/documents-reports/jhpolice_cyber_crime_investigation_ppt.pdf">  Cyber crime investigation</Button>

<style>
    {
        `
        .about_cyber{
            margin: 10px 200px;
            
        }
        .about_cyber li, p, h3{
                text-align:left;
                font-size:15px;
        }

        table{
          border-collapse:collapse;
          width:1000px;
          
        }
        th{
            padding:4px 10px;
        }
        .responsive-table {
            overflow-x: auto;
            white-space: nowrap;
            width: 100%;
            border-collapse: collapse;
          }
        
          .responsive-table th,
          .responsive-table td {
            padding: 8px;
            border: 1px solid #dddddd;
            text-align: left;
          }
        
          @media (max-width: 768px) {
            .responsive-table {
              overflow-x: auto;
              margin-left:0;
            }
        
            .responsive-table th,
            .responsive-table td {
              white-space: nowrap;
            }
        `
    }
</style>

    </div>
  )
}

export default cyber_crime
