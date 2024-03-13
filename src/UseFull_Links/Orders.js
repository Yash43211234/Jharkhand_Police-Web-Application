import React from "react";

const Orders = () => {
  return (
    <>
      <style>
        {`

a {
    display: block;
    
    color: rgb(54, 54, 136);
    text-decoration: none;
    text-align: left;
    
}

.white {
    background-color: #fff;
}

.grey {
    background-color: rgb(228, 228, 228);
}

.text-center.dis.mb-5 {
    text-align: center;
}

.tb {
    width: 1500px;
    text-align:center;
}

td {
    padding: 20px;
}
.td3{
  width:150px;
  h4{
    color:red;
  }
}


`}
      </style>

      <div>
        <div class="col-md-12 text-center">
          <h1 class="text-center dis mb-5"> Law and Orders </h1>

          <div class="row">
            <table class="table table-striped">
              <tbody>
                <tr class="grey">
                  <td valign="top" align="center" className="td3">
                    SL. No.
                  </td>
                  <td valign="top" align="center" className="tb">
                    <h3> Laws/Orders </h3>
                  </td>
                  <td valign="top" align="left" className="td3">
                    <h3> PDF</h3>
                  </td>
                </tr>
                <tr class="white">
                  <td valign="top" align="center">
                    1.
                  </td>
                  <td valign="top" align="center" className="tb">
                    While on duty, Police officers shall be accessible to
                    members of public.
                  </td>
                  <td valign="top" align="left" className="td3">
                    <h4> PDF 1</h4>
                  </td>
                </tr>
                <tr class="grey">
                  <td valign="top" align="center">
                    2.
                  </td>
                  <td valign="top" align="center" className="tb">
                    It is the duty of every Police Officer in charge of an area
                    to keep it peaceful and the public satisfied with the
                    security afforded to persons and property.
                  </td>
                  <td valign="top" align="left" className="td3">
                    <h4> PDF 2</h4>
                  </td>
                </tr>
                <tr class="white">
                  <td valign="top" align="center">
                    3.
                  </td>
                  <td valign="top" align="center" className="tb">
                    The Jurisdiction of every "Police Station is normally
                    divided into areas for service of beats by the Officer in
                    charge by deputing Police Constables /Head Constables.
                  </td>
                  <td valign="top" align="left" className="td3">
                    <h4> PDF 3</h4>
                  </td>
                </tr>
                <tr class="grey">
                  <td valign="top" align="center">
                    4.
                  </td>
                  <td valign="top" align="center" className="tb">
                    It is the duty of every police officer to take all steps
                    necessary, in proper time, to prevent breach of peace or
                    serious riots. In the event, it takes place, all measures
                    shall be taken by him with highest priority to bring the
                    situation back to normal
                  </td>
                  <td valign="top" align="left" className="td3">
                    <h4> PDF 4</h4>
                  </td>
                </tr>
                <tr class="white">
                  <td valign="top" align="center">
                    5.
                  </td>
                  <td valign="top" align="center" className="tb">
                    Every Police Officer shall maintain close liaison with the
                    important citizens of the area through citizens' committee,
                    peace committee and moholla committee for the maintenance of
                    peace in the area.
                  </td>
                  <td valign="top" align="left" className="td3">
                    <h4> PDF 5</h4>
                  </td>
                </tr>
                <tr class="grey">
                  <td valign="top" align="center">
                    6.
                  </td>
                  <td valign="top" align="center" className="tb">
                    It is the duty of every Police Officer to take firm action
                    against antisocial elements, goondas and rowdies in that
                    area.
                  </td>
                  <td valign="top" align="left" className="td3">
                    <h4> PDF 6</h4>
                  </td>
                </tr>
                <tr class="white">
                  <td valign="top" align="center">
                    7.
                  </td>
                  <td valign="top" align="center" className="tb">
                    It is the duty of the Police to maintain public order during
                    fairs and festivals, public functions, processions, strikes,
                    agitations etc.
                  </td>
                  <td valign="top" align="left" className="td3">
                    <h4> PDF 7</h4>
                  </td>
                </tr>
                <tr class="grey">
                  <td valign="top" align="center">
                    8.
                  </td>
                  <td valign="top" align="center" className="tb">
                    No Police Officer shall discriminate on grounds of race,
                    caste, community, language, religion, region, sex or
                    political affiliation.
                  </td>
                  <td valign="top" align="left" className="td3">
                    <h4> PDF 8</h4>
                  </td>
                </tr>
                <tr class="white">
                  <td valign="top" align="center">
                    9.
                  </td>
                  <td valign="top" align="center" className="tb">
                    Police Officers may be deputed for a short duration, to
                    maintain order and peace, at places of entertainment, etc by
                    charging fees according to the scale fixed by the Govt. from
                    time to time
                  </td>
                  <td valign="top" align="left" className="td3">
                    <h4> PDF 9</h4>
                  </td>
                </tr>
                <tr class="grey">
                  <td valign="top" align="center">
                    10.
                  </td>
                  <td valign="top" align="center" className="tb">
                    Citizens may contribute to the general- well being of the
                    society by rendering all assistance, cooperation and by
                    providing information to Police Officers for the maintenance
                    of law and order and prevention of breach of peace.
                  </td>
                  <td valign="top" align="left" className="td3">
                    <h4> PDF 10</h4>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
