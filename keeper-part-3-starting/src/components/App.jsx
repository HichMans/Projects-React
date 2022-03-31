import React , {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {

  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes(prevNotes => {
      return [...prevNotes, note];
    });
  }
  function deleteNote(id) {
    setNotes(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>

      { notes.map((noteAdded,index)=> {
            return (<Note key={index}
              id={index}
              title={noteAdded.title}
              content={noteAdded.content} 
              onDelete={deleteNote}
              />) ;
      })}
     
      <Footer />
    </div>
  );
}

export default App;
