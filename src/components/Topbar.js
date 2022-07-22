import React from 'react';
import arrow from '../images//arrow.png'

import {Link} from 'react-router-dom';
const Topbar = () => {

    return (
        <div className="flex min-h-screen top-0">
            <div className="bg-[#EFEFEF] w-[320px] shadow-[0_0_20px_-5px_rgba(0,0,0,0.25)]  top-0 z-20">

                <ul className="pt-24 pl-6">
                    <Link to="/admin-panel"><li className=" bg-[#5DBB63] w-40 rounded-2xl text-center text-white py-[0.35rem] text-lg hover:cursor-pointer hover:bg-[#409646]">Menu options</li></Link>

                    <Link to="/additem"><li className="flex bg-[#F1F1F1]"><img src={arrow} alt="" className='max-h-[22px] ml-6 mt-3 inline mr-2 '/><span className="pt-[0.9rem] hover:cursor-pointer hover:text-gray-400">Add a new item</span> </li></Link>
                    <Link to="/deleteitem"><li className="flex bg-[#F1F1F1]"><img src={arrow} alt="" className='max-h-[22px] ml-6 mt-3 inline mr-2 '/><span className="pt-[0.9rem] hover:cursor-pointer hover:text-gray-400">Delete item</span> </li></Link>
                    <Link to="/employees"><li className="main-nav bg-[#5DBB63] w-40 rounded-2xl text-center text-white py-[0.35rem]  text-lg hover:cursor-pointer mt-2 hover:bg-[#409646]">Employees</li></Link>
                    <Link to="/addemployee"><li className="flex bg-[#F1F1F1]"><img src={arrow}  alt="" className='max-h-[22px] ml-6 mt-3 inline mr-2 '/><span className="pt-[0.9rem] hover:cursor-pointer hover:text-gray-400">Add a new employee</span> </li></Link>
                </ul>
            </div>
        </div>
    )
}

export default Topbar