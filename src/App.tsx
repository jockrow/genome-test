import React, { useEffect, useState } from 'react';
import './App.css';
import List from './components/List';
import withListLoading from './components/WithListLoading';

function App() {
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });


 useEffect(() => {
    setAppState({ loading: true, repos: null });

     let body = { name: {term: 'Richard Martínez'} };
    const apiUrl = 'https://search.torre.co/people/_search/?currency=USD%24&page=0&periodicity=hourly&lang=es&size=20&aggregate=false&offset=0';

     const requestOptions = {
        method: 'POST',
        headers: { 
			'Authorization': 'Bearer my-token',
			'My-Custom-Header': 'foobar',
			'accept': 'application/json, text/plain, */*',
			'accept-language': 'es-419,es;q=0.9,es-ES;q=0.8,en;q=0.7,en-GB;q=0.6,en-US;q=0.5',
			'content-type': 'application/json;charset=UTF-8',
			'sec-fetch-dest': 'empty',
			'sec-fetch-mode': 'cors',
			'sec-fetch-site': 'same-site',
			'x-torre-subject': '506501'
        },
         body: JSON.stringify(body)
    };
    fetch(apiUrl, requestOptions)
        .then((res) => res.json())
      .then((repos) => {
            console.log(repos.results);
            //console.log(repos.results);
            setAppState({ loading: false, repos: repos.results });
	  });
  }, [setAppState]);


  return (
    <div className='App'>
      <div className='container'>
        <h1>Candidatos</h1>
      </div>
      <div className='repo-container'>
        <ListLoading isLoading={appState.loading} repos={appState.repos} />
      </div>
      <footer>
        <div className='footer'>
          Built{' '}
          <span role='img' aria-label='love'>
            💚
          </span>{' '}
          with by Shedrack Akintayo
        </div>
      </footer>
    </div>
  );
}
export default App;
