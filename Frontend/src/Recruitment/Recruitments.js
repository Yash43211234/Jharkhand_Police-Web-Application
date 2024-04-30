import React from "react";
import RecruitmentContent from './RecruitmentContent';

import { Link } from "react-router-dom";


const Recruitments = () => {
    return (
        <>

        <style>
        <style>
        {`
          .History p{
            margin: 50px;
            font-size: 18px;
        }
        .History h2{
            margin-top: 50px;
            font-size: 18px;
        }
        .History img{
            height: auto;
            margin-top: -20px;
        }
        .Recruitment-img-first img{
            margin-top: -20px;
            height: auto;
        }
        `}

</style>
        </style>


          <div className="Recruitment-img-first">
          
            <h1>Recruitments</h1>

               <p> This section is Under process    </p>
            <RecruitmentContent/>
          </div>
            
        </>
    );
};

export default Recruitments;
