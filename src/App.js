import { useState, useEffect } from 'react';
import './App.css';
import { db } from './firebase-config'
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore'

// Minuto 30

function App() {
  const [newName, setNewName] = useState("")
  const [newAge, setNewAge] = useState(0)

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const createUser = async () => {
    await addDoc(usersCollectionRef, {name: newName, age: Number(newAge)});
  }

  const updateUser = async (id, age) => {
    const userDoc = doc(db, "users", id)
    const newFields = {age: age + 1}
    await updateDoc(userDoc,newFields)
  }

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id)
    await deleteDoc(userDoc)
  }

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    getUsers()
  }, [])

  return (
    <div className="App">
      <input placeholder="Nombre..." onChange={(event) => {setNewName(event.target.value)}} />
      <input type="number" placeholder="Edad..." onChange={(event) => {setNewAge(event.target.value)}} />
      <button onClick={createUser}>Crear Usuario</button>
      {users.map((user) => { 
        return (
          <div>
            <h1>Nombre:{user.name}</h1> 
            <h1>Edad:{user.age}</h1>
            <button onClick={() => {updateUser(user.id, user.age)}}>Incrementar Edad</button>
            <button onClick={() => {deleteUser(user.id, )}}>Eliminar Usuario</button>
          </div>
        );
      ;})}
    </div>
  );
}

export default App;
