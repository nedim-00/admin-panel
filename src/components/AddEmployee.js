import React from 'react';
import { useState} from 'react';
import { db } from '../firebase-config'
import { collection, addDoc } from 'firebase/firestore';
import { storage } from "../firebase-config";
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

const AddEmployee = () => {

    const[newName, setNewName] = useState("");
    const[newPosition, setNewPosition] = useState("");
    const[newRole, setNewRole] = useState("");
    const[newImage, setNewImage] = useState("");
    const[employeeAdded, setEmployeeAdded] = useState(false);

    const usersCollectionRef = collection(db, "employees");

    const createUser = async () => {
        await addDoc(usersCollectionRef, {name: newName, position: newPosition, role: newRole, image: newImage});
        setEmployeeAdded(prevState => !prevState);
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

    return(
        <div className="ml-14 mt-24">
        <h1 className="uppercase text-3xl mb-8">Employee information</h1>

        <label htmlFor="name">Name</label>
        <input type="text" value={newName} className="block w-64 rounded-lg border-2 border-gray-300 h-8 mt-2 mb-6 pl-2"
                        onChange={(event) => {
                            setNewName(event.target.value);
                        }}
        />

        <label htmlFor="position" >Position</label>
        <select 
                id="role"
                value={newPosition}
                onChange={(event) => {
                  setNewPosition(event.target.value);
              }}
                name="role"
                className="block w-64 rounded-lg border-2 border-gray-300 h-8 mt-2 mb-6 pl-2"
            >
                <option value="">-- Choose --</option>
                <option value="manager">Manager</option>
                <option value="waiter">Waiter</option>
                <option value="cook">Cook</option>
            </select>

        <label htmlFor="role">Role</label>
        <input type="text" value={newRole} className="block w-64 rounded-lg border-2 border-gray-300 h-8 mt-2 mb-6 pl-2"
                        onChange={(event) => {
                            setNewRole(event.target.value);
                        }}
        />

        <label htmlFor="image">Image</label>
        <form onSubmit={formHandler} className="mt-2">
          <input type="file" className='input block' /> 
          <button  className=" bg-[#5DBB63] px-2 py-1 rounded-lg text-white mt-2 mr-2">Upload image</button>
          <span>Uploaded {progress} %</span>
          {!employeeAdded ? <button type="submit" onClick={createUser} className="block uppercase bg-[#5DBB63] w-64 text-white h-10 rounded-xl mt-8 text-xl">Add</button>:
          <button type="button" disabled className="block uppercase bg-[#5DBB63] w-64 text-white h-10 rounded-xl mt-8 text-xl">Employee added</button>}  
        </form>
    </div>
    )
}

export default AddEmployee;
