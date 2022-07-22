import React from 'react';
import { useState, useEffect } from 'react';
import {db} from '../firebase-config'
import { collection, getDocs} from 'firebase/firestore';
import EmployeeRole from './EmployeeRole';

const Employees = () => {

    const [staff, setstaff] = useState([]);
    const [isClicked, setIsClicked] = useState(false);
    const refreshEmployees = () => setIsClicked(prevState => !prevState);
       
    useEffect(() => {
        const usersCollectionRef = collection(db, "employees");
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setstaff(data.docs.map((doc) => ({...doc.data(), id: doc.id}))) 
         }
        
        getUsers();
    }, [isClicked]);

    return (
        <div className="ml-14 mt-24">
            <h1 className="uppercase text-3xl mb-8">Employees</h1>
                <h3 className='text-lg'>Manager</h3>
                <div className="flex flex-wrap">
                    {staff.map((user) => {
                        return ( user.position==='manager' ?
                                <EmployeeRole key={user.id} 
                                name={user.name} 
                                image={user.image} 
                                role={user.role} 
                                empid={user.id} 
                                refreshEmployees={refreshEmployees}/> : ""
                        )
                    })}
                </div>

                <h3 className='text-lg'>Cooks</h3>
                <div className='flex flex-wrap'>
                    {staff.map((user) => {
                        return ( user.position==='cook' ?
                            <EmployeeRole key={user.id} 
                            name={user.name} 
                            image={user.image} 
                            role={user.role} 
                            empid={user.id} 
                            refreshEmployees={refreshEmployees}/> : ""
                        )
                    })}
                </div>

                <h3 className='text-lg'>Waiters</h3>
                <div className="flex flex-wrap">
                    {staff.map((user) => {
                        return ( user.position==='waiter' ?
                            <EmployeeRole key={user.id} 
                            name={user.name} 
                            image={user.image} 
                            role={user.role}
                            empid={user.id} 
                            refreshEmployees={refreshEmployees}/> : ""
                        )
                    })}
                </div>
        </div>
    )
}

export default Employees;
