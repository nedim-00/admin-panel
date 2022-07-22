import React from "react";
import { useState, useEffect } from 'react';
import {db} from '../firebase-config'
import { collection, getDocs, deleteDoc, doc} from 'firebase/firestore';
import ListItems from "./ListItems";

function DeleteItem() {

    const [staff, setstaff] = useState([]);
    const [isClicked, setIsClicked] = useState(false);
    
    const deleteUser = async (id) => {
        const userDoc = doc(db, "items", id);
        await deleteDoc(userDoc);
        setIsClicked(prevState => !prevState)
    }

    useEffect(() => {
        const usersCollectionRef = collection(db, "items");
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setstaff(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
         }

        getUsers();
    }, [isClicked]);

    return (
        <div>
            <div className="ml-14 mt-24">
                <h1 className="uppercase text-3xl mb-8">Delete item</h1>

                <label htmlFor="name">Choose which item to delete</label>

                <div className="overflow-y-scroll border-[1px] border-gray-300 w-[21rem] h-[30em] mt-4 rounded-2xl block">
                    
                    {staff.map((user) => {
                        return (
                            <div key={user.id}>
                                <ListItems key={user.id} 
                                name={user.name} 
                                image={user.image} 
                                price={user.price} />
                                <button onClick={() => {deleteUser(user.id)}} 
                                className="rounded-b-xl ml-4 w-[18em] bg-red-600 h-10 inline uppercase text-white tracking-widest">Delete</button>
                            </div>
                        )
                    })}
                </div>    
            </div>
        </div>
    )
}

export default DeleteItem;