
import { useState } from 'react';
import AddList from './AddList';
import './App.css';
import Modal from './Modal';


function App() {
  const [showModal,setShowModal]=useState(false)
  console.log(showModal)
const data=[
  {
    id: 1,
    title:"I lvoe javascript.",
    StartDate:"11/28/2022",
  },
  {
   id:2,
   title:"I love Python.",
   StartDate:"10/22/2022"
  },
  {
   id:3,
   title:"I love C++.",
   StartDate:"10/22/2022"
  }
]

  return (
    <div className="App">
     {
      data.map(item=>(
        <div key={item.id} className='card'>
          <h2>{item.title}</h2>
        <p>{item.StartDate}</p>
        </div>
      ))
     }
     <div className='btn_container'>
     <button onClick={(e)=>setShowModal(true)}>Add list</button>
     </div>
     {showModal && 
     <Modal>
     <AddList/>
     <button onClick={e=>setShowModal(false)}>Close modal</button>
     </Modal>
     }
     
    
    </div>
  );
}

export default App;
