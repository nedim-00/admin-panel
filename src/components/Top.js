import React from 'react';
import logo from '../images//logo.png';
import smallArrow from '../images/smallArrow.png';
import person from '../images/person.png';

function Top() {

    return(
        <div className="h-16 bg-[#191D32] relative flex justify-between min-w-max">
            <div className="h-16 w-[370px] bg-[#efefef]  top-0 z-30 triangle font-normal text-xl pl-6 pt-4 ">
                <img src={logo} alt="" className='inline pr-1'/>
                <p className="inline">snart - admin panel</p>
            </div>

            <div className="text-white pr-6 pt-5 ">
                <div className="inline hover">
                <div className="inline">
                    <img src={smallArrow} alt="" className="w-6 mr-1 inline"/>
                    <h3 className="inline">Will <span className="font-bold">Smith</span></h3>
                </div>
                </div>
                <img src={person} alt="" className="w-8 ml-4 inline"/>
            </div> 
        </div>
    )
}

export default Top;