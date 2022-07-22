import React from 'react';
import trash from '../images//trash.png';
import {db} from '../firebase-config';
import {deleteDoc, doc} from 'firebase/firestore';

const EmployeeRole = (props) => {

    const deleteEmployee = async (id) => {
        const userDoc = doc(db, "employees", id);
        await deleteDoc(userDoc);
        props.refreshEmployees();
    }

    return(

        <div className='bg-[#E7E7E7] h-40 w-[26em] rounded-xl flex mt-6 mb-6 mr-8'>
            <img src={props.image} alt="" className='w-40 rounded-xl mt-auto mb-auto ml-4 ' />

            <div className=" text-center w-full justify-self-center self-center">
                <h2 className='text-2xl font-medium tracking-wide'>{props.name}</h2>

                <div className='line ml-12 mt-2'></div>

                <h2 className='text-lg mt-2'>{props.role}</h2>
                
                <img  src={trash} onClick={() => {deleteEmployee(props.empid)}} 
                alt="" 
                className="mt-1 absolute ml-[12.8rem] h-[1.4rem] hover:cursor-pointer"/>

            </div>
        </div>
    )
}

export default EmployeeRole;