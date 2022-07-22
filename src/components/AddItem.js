import React from 'react';
import { useState } from "react";
import { db } from '../firebase-config'
import { collection, addDoc } from 'firebase/firestore';
import { storage } from "../firebase-config";
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

function AddUser() {

    const[newName, setNewName] = useState("");
    const[newCategory, setNewCategory] = useState("");
    const[newPrice, setNewPrice] = useState(0);
    const[newImage, setNewImage] = useState("");
    const usersCollectionRef = collection(db, "items");
    const[itemAdded, setItemAdded] = useState(false);

    const createUser = async () => {
        await addDoc(usersCollectionRef, {name: newName, category: newCategory, price: newPrice, image: newImage});
        setItemAdded(true);
    }

    const [progress, setProgress] = useState(0);
    const formHandler = (e) =>{
      e.preventDefault();
      const file = e.target[0].files[0];
      uploadFiles(file);
    }

    const uploadFiles = (file) => {
      if(!file) return;

      const storageRef = ref(storage,  `/files/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on("state_changed", (snapshot) => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes ) * 100);

      setProgress(progress);
      
      }, (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
        .then(url => {
            setNewImage(url)
        });
      })
    }

    return (
  
        <div className="ml-14 mt-24">
            <h1 className="uppercase text-3xl mb-8">Item information</h1>

            <label htmlFor="name">Name</label>
            <input type="text" className="block w-64 rounded-lg border-2 border-gray-300 h-8 mt-2 mb-6 pl-2"
                            onChange={(event) => {
                                setNewName(event.target.value);
                            }}
            />

            <label htmlFor="category" >Category</label>
            <input type="text" className="block w-64 rounded-lg border-2 border-gray-300 h-8 mt-2 mb-6 pl-2"
                            onChange={(event) => {
                                setNewCategory(event.target.value);
                            }}
            />

            <label htmlFor="price">Price</label>
            <input type="text" className="block w-64 rounded-lg border-2 border-gray-300 h-8 mt-2 mb-6 pl-2"
                            onChange={(event) => {
                                setNewPrice(event.target.value);
                            }}
            />

        <label htmlFor="image">Image</label>
        <form onSubmit={formHandler} className="mt-2">
          <input type="file" className='input block' /> 
          <button  className=" bg-[#5DBB63] px-2 py-1 rounded-lg text-white mt-2 mr-2">Upload image</button>
          <span>Uploaded {progress} %</span>
          {!itemAdded ? <button type="submit" onClick={createUser} 
          className="block uppercase bg-[#5DBB63] w-64 text-white h-10 rounded-xl mt-8 text-xl">Add</button> : 
          <button type="button" disabled
          className="block uppercase bg-[#5DBB63] w-64 text-white h-10 rounded-xl mt-8 text-xl">Item added</button>}
        </form>
        </div>
    )
}

export default AddUser;