import logo from './logo.svg';
import React , {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import DetailPage from './Pages/DetailPage';
import { useNavigate } from 'react-router-dom';

function App() {
  const [repoName , setRepoName] = useState('');
  const [searchResult ,setSearchResult] = useState([]);
  let navigate = useNavigate();
useEffect(() => {
  const delayDebounceFn = setTimeout(async() => {
    if (repoName.length > 3) {
      const res =  await axios.get(`https://api.github.com/search/repositories?q=${repoName}`);
      console.log(res.data);
      setSearchResult([...res.data.items])
    }
  }, 2000)

  return () => clearTimeout(delayDebounceFn)
}, [repoName])



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          welcome to my App.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <input onChange={(e) => setRepoName(e.target.value)}/>
        <div>
          {
            searchResult.splice(0,8).map(i => <p key={i.id} onClick={() => navigate(`/${i.full_name}`)}>{i.full_name}</p>)
          }
        </div>
       
      </header>
    </div>
  );
}

export default App;
