import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';

function App() {

  //definir la categoria y noticias
  const [categoria, setCategoria] = useState('');
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const apiKey = 'e0222e07fdaa4aa4b4dc6e2e4c8ca028';
      const url = `https://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=${apiKey}`;
      
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      setNoticias(noticias.articles);
    }
    consultarAPI();
  }, [categoria])

  return (
    <Fragment>
      <Header 
        titulo={'Buscador de Noticias'}
      />

      <div className="container white">
        <Formulario 
          setCategoria={setCategoria}
        />
      </div>
    </Fragment>
  );
}

export default App;
