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

	const apiUrl = 'https://search.torre.co/people/_search/?currency=USD%24&page=0&periodicity=hourly&lang=es&size=20&aggregate=false&offset=0';

	 const requestOptions = {
		method: 'POST',
		headers: { 
			'Content-Type': 'application/json',
			'Authorization': 'Bearer my-token',
			'My-Custom-Header': 'foobar'
		},
		body: JSON.stringify({ title: 'React POST Request Example' })
	};
	fetch(apiUrl, requestOptions)
		.then((res) => res.json())
	  .then((repos) => {
			console.log(repos.results);
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
