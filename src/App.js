import { useState } from 'react'
import './App.css';
import './views/MenuView'
import { MenuView } from './views/MenuView';

function App() {
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);
  const [cfile, setCfile] = useState(null);

  const handleFileUpload = e => {
    const file = e.target.files[0]
      setFile(file);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData()
    formData.append('title', title);
    formData.append('file', file);

    fetch(
      '/upload',
      {
        method: 'POST',
        body: formData
      }
    )
      .then(res => res.json())
      .then(res => setCfile(res))
      .then(res => console.log(cfile))
      .catch(err => console.error('error', err));
  }

  return (
    <div className="App">
      <MenuView></MenuView>
      {/* <form>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e)}
        />
        <input
          type="file"
          accept="application/pdf"
          onChange={e => handleFileUpload(e)}
        />
        <button onClick={e => handleSubmit(e)}>upload</button>
      </form> */}
    </div>
  );
}

export default App;