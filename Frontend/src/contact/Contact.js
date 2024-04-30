import React from "react";

const Contact = () => {
  return (
    <>
      <style>
        {`
  .contacts-container {
    margin: 50px auto;
    width: 80%;
  }
  .contacts-table {
    width: 100%;
    border-collapse: collapse;
  }
  .contacts-table th, .contacts-table td {
    border: 1px solid #ddd;
    padding: 8px;
    
  }
  .contacts-table th {
    background-color: #f2f2f2;
    text-align: left;
  }
  .contacts-table tr:nth-child(even) {
    background-color: #f2f2f2;
    text-align: left;
  }
  .contacts-table tr:nth-child(odd) {
    text-align: left;
  }
  .district {
    text-align: center;
    font-weight: bold;
    color: white;
    background-color: #4da6ff;
  }

  `}
      </style>

      <div className="contacts-container">
        <h1>IMPORTANT CONTACTS FOR STATE POLICE SYSTEM</h1><br/>
        <table className="contacts-table">
          <thead>
            <tr>
              <th><h2>Police Station</h2></th>

              <th><h2>Contact Number</h2></th>
            </tr>
          </thead>
          <tbody>
            <tr className="district">
              <td colspan="3"> GIRIDIH </td>
            </tr>
            <tr>
              <td>Ahilyapur PS</td>

              <td>9431706336</td>
            </tr>
            <tr>
              <td>Bagodar PS</td>

              <td>9431706336</td>
            </tr>

            <tr>
              <td>Bengabad PS</td>
              <td>9431706337</td>
            </tr>

            <tr>
              <td>Bhelvaghaty</td>
              <td>6207420150</td>
            </tr>

            <tr>
              <td>Birni</td>
              <td> 9431322199</td>
            </tr>

            <tr>
              <td>Cyber PS</td>
              <td>6207325421</td>
            </tr>

            <tr>
              <td>Deori PS</td>
              <td> 9431706349</td>
            </tr>

            <tr>
              <td>Dhanwar</td>
              <td>9431706340</td>
            </tr>

            <tr>
              <td>Dumri</td>
              <td>9431706344</td>
            </tr>

            <tr>
              <td>Gandey PS</td>
              <td> 9431706335</td>
            </tr>

            <tr>
              <td>Gawan PS</td>
              <td> 9431706348</td>
            </tr>

            <tr>
              <td>Ghodthamba OP</td>
              <td> 8210238418</td>
            </tr>

            <tr>
              <td>Harladih OP</td>
              <td> 9798071911</td>
            </tr>

            <tr>
              <td>Hirodih</td>
              <td>9431706339</td>
            </tr>

            <tr>
              <td>Jamua PS</td>
              <td>7766888353</td>
            </tr>

            <tr>
              <td>Khukha</td>
              <td>7766888353</td>
            </tr>

            <tr>
              <td>Lokai Nayanpur</td>
              <td>9006281062</td>
            </tr>

            <tr className="district">
              <td colspan="3"> GUMLA </td>
            </tr>

            <tr>
              <td>A.H.T.U. PS</td>
              <td>9431707013</td>
            </tr>

            <tr>
              <td>Albert Ekka Jari PS</td>
              <td>9431705224</td>
            </tr>

            <tr>
              <td>Basia PS</td>
              <td> 9431706211</td>
            </tr>

            <tr>
              <td>Bharno PS</td>
              <td> 9431706213</td>
            </tr>

            <tr>
              <td>Bishunpur PS</td>
              <td>9431706208</td>
            </tr>

            <tr>
              <td>Chainpur PS</td>
              <td> 9431705216</td>
            </tr>

            <tr>
              <td>Dumri PS</td>
              <td> 9431706209</td>
            </tr>

            <tr>
              <td>Ghaghra PS</td>
              <td> 9431706207</td>
            </tr>

            <tr>
              <td>Gumla Nagar PS</td>
              <td>9431706206</td>
            </tr>

            <tr>
              <td>Gurdari PS</td>
              <td>9431705226</td>
            </tr>

            <tr>
              <td>Kamdara PS</td>
              <td>9431705218</td>
            </tr>

            <tr>
              <td>Karanj PS</td>
              <td>9431705232</td>
            </tr>

            <tr>
              <td>Kurkura PS</td>
              <td>9431707014</td>
            </tr>

            <tr>
              <td>Kurumgarh PS</td>
              <td>9431705228</td>
            </tr>

            <tr>
              <td>Mahila PS</td>
              <td> 9431707011</td>
            </tr>

            <tr>
              <td>Palkot PS</td>
              <td> 9431706215</td>
            </tr>

            <tr>
              <td>PUSO PS</td>
              <td> 9431707015</td>
            </tr>

            <tr>
              <td>ST/SC PS</td>
              <td>9431707012</td>
            </tr>

            <tr>
              <td>Sursang PS</td>
              <td>9431705227</td>
            </tr>

            <tr className="district">
              <td colspan="3"> DUMKA </td>
            </tr>

            <tr>
              <td>Ahtu PS</td>
              <td>9430745545</td>
            </tr>

            <tr>
              <td>Gopikandar PS</td>
              <td>9470591020</td>
            </tr>

            <tr>
              <td>Hansdiha PS</td>
              <td>9470591017</td>
            </tr>

            <tr>
              <td>Jama PS</td>
              <td>9470591014</td>
            </tr>

            <tr>
              <td>Jarmundih PS</td>
              <td>9470591013</td>
            </tr>

            <tr>
              <td>Kathikund PS</td>
              <td>9470591019</td>
            </tr>

            <tr>
              <td>Mahila/STSC PS</td>
              <td>9471359115</td>
            </tr>
            <tr>
              <td>Masalia PS</td>
              <td>9470591011</td>
            </tr>
            <tr>
              <td>Massanjore OP</td>
              <td>9470591022</td>
            </tr>

            <tr>
              <td>Muffassil PS</td>
              <td>9470591021</td>
            </tr>

            <tr>
              <td>Ramgarh PS</td>
              <td>9470591018</td>
            </tr>

            <tr>
              <td>Raneshwar PS</td>
              <td>9470591010</td>
            </tr>

            <tr>
              <td>Saraiya Hat PS</td>
              <td>9470591016</td>
            </tr>

            <tr>
              <td>Shikaripara PS</td>
              <td>9470591009</td>
            </tr>

            <tr>
              <td>Taljhari PS</td>
              <td>9470591015</td>
            </tr>

            <tr>
              <td>Tongra PS</td>
              <td>9470591012</td>
            </tr>

            <tr>
              <td>Town PS</td>
              <td>9470591008</td>
            </tr>

            <tr className="district">
              <td colspan="3"> SIMDEGA </td>
            </tr>

            <tr>
              <td>AHTU PS</td>
              <td>9608015596</td>
            </tr>

            <tr>
              <td>Bano PS </td>
              <td>9431706236</td>
            </tr>

            <tr>
              <td>Bansjhor OP</td>
              <td>9608015593</td>
            </tr>

            <tr>
              <td>Bolwa PS</td>
              <td>9431706234</td>
            </tr>

            <tr>
              <td>CCR Simdega(Control Room)</td>
              <td>9608015586</td>
            </tr>

            <tr>
              <td>Cyber Cel</td>
              <td>9608015597</td>
            </tr>

            <tr>
              <td>Girda OP </td>
              <td>9608015593</td>
            </tr>

            <tr>
              <td>Jaldega PS</td>
              <td>9431706237</td>
            </tr>

            <tr>
              <td>Kersai PS </td>
              <td>9608015589</td>
            </tr>

            <tr>
              <td>Kolebira PS</td>
              <td>9431706235</td>
            </tr>

            <tr>
              <td>Kurdeg PS</td>
              <td>9431706233</td>
            </tr>

            <tr>
              <td>Mahabuang PS</td>
              <td>9608015587</td>
            </tr>

            <tr>
              <td>Mahila PS</td>
              <td>9608015594</td>
            </tr>

            <tr>
              <td>Muffasil PS</td>
              <td>9608015587</td>
            </tr>

            <tr>
              <td>Orga OP</td>
              <td>9608015592</td>
            </tr>

            <tr>
              <td>Pakartanr PS</td>
              <td>9608015588</td>
            </tr>

            <tr>
              <td>Rengarih PS</td>
              <td>9934572095</td>
            </tr>

            <tr>
              <td>S.C/S.T. PS</td>
              <td>9608015595</td>
            </tr>

            <tr>
              <td>Simdega PS</td>
              <td>9431706231</td>
            </tr>

            <tr>
              <td>Thetaitangar PS</td>
              <td>9431706232</td>
            </tr>

            <tr>
              <td>K.T.H</td>
              <td>8986672884</td>
            </tr>

            <tr className="district">
              <td colspan="3"> RANCHI </td>
            </tr>

            <tr>
              <td>Bariyatu PS</td>
              <td>9431706161</td>
            </tr>

            <tr>
              <td>Bero PS </td>
              <td>9431706179</td>
            </tr>

            <tr>
              <td>BIT Mesra OP</td>
              <td>9431706571</td>
            </tr>

            <tr>
              <td>Bundu PS</td>
              <td>9431706191</td>
            </tr>

            <tr>
              <td>Burmu PS</td>
              <td>9431706190</td>
            </tr>

            <tr>
              <td>Chanho PS</td>
              <td>9431706189</td>
            </tr>

            <tr>
              <td>Chutia PS</td>
              <td>9431706165</td>
            </tr>

            <tr>
              <td>Daily Market PS</td>
              <td>9431706163</td>
            </tr>

            <tr>
              <td>Dhurwa PS</td>
              <td>9431706166</td>
            </tr>

            <tr>
              <td>Doranda PS</td>
              <td>9431706168</td>
            </tr>

            <tr>
              <td>Gonda PS</td>
              <td>9431706162</td>
            </tr>

            <tr>
              <td>Hindipiri PS</td>
              <td>9431706164</td>
            </tr>

            <tr>
              <td>Itki PS</td>
              <td>9431706177</td>
            </tr>

            <tr>
              <td>Jagnnathpur PS</td>
              <td>9431706169</td>
            </tr>

            <tr>
              <td>Kanke PS</td>
              <td>9431706185</td>
            </tr>

            <tr>
              <td>Khelari PS</td>
              <td>9431706188</td>
            </tr>

            <tr>
              <td>Khelgaon</td>
              <td>8987790607</td>
            </tr>

            <tr className="district">
              <td colspan="3"> DHANBAD </td>
            </tr>

            <tr>
              <td>Angar Pathira OP </td>
              <td>9430309815</td>
            </tr>

            <tr>
              <td>Baghmara PS</td>
              <td>9431706404</td>
            </tr>

            <tr>
              <td>Barora PS</td>
              <td>9431706410</td>
            </tr>

            <tr>
              <td>Bhagabandh OP </td>
              <td>8987463921</td>
            </tr>

            <tr>
              <td>Chirkunda PS</td>
              <td>9431706403</td>
            </tr>

            <tr>
              <td>Cyber PS </td>
              <td>9905936731</td>
            </tr>

            <tr>
              <td>Dhanuadih OP</td>
              <td>9939362018</td>
            </tr>

            <tr>
              <td>Dharmabandh OP </td>
              <td>7488535935</td>
            </tr>

            <tr>
              <td>East Basuriya OP </td>
              <td>8578879315</td>
            </tr>

            <tr>
              <td>Galfarbari OP</td>
              <td>7479972190</td>
            </tr>

            <tr>
              <td>Gosala OP</td>
              <td>9835724512</td>
            </tr>

            <tr>
              <td>Hariharpur PS</td>
              <td>9431706406</td>
            </tr>

            <tr>
              <td>IC Bhatdih</td>
              <td>9263854007</td>
            </tr>

            <tr>
              <td>IC Borragarh</td>
              <td>9263854013</td>
            </tr>

            <tr>
              <td>IC East Basuria</td>
              <td>9263854008</td>
            </tr>

            <tr>
              <td>IC Gaushala</td>
              <td>9263854017</td>
            </tr>

            <tr>
              <td>IC Gondudih</td>
              <td> 9263854016</td>
            </tr>

            <tr>
              <td>Loyabod PS</td>
              <td>9431706397</td>
            </tr>

            <tr>
              <td>Maithan OP</td>
              <td>9905936736</td>
            </tr>

            <tr>
              <td>Putki PS </td>
              <td>9431706395</td>
            </tr>

            <tr>
              <td>Tundi PS </td>
              <td>9431706400</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

// CSS styles

export default Contact;