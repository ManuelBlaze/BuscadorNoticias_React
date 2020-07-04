import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Titulo = styled.h3`
    font-size: 2rem;
    margin-top: 0;
`;

const Fuente = styled.span`
    background-color: rgba(0, 0, 0, 0.5);
    padding: 4px !important;
`;

const Noticia = ({noticia}) => {

    //destructuring a lo que necesito de la api
    const {urlToImage, url, title, description, source} = noticia;

    const imagen = (urlToImage) ?
        <div className="card-image">
            <img src={urlToImage} alt={title} />
            <Fuente className="card-title">{source.name}</Fuente>
        </div>
    : null;

    return (
        <div className="col s12 m6 l4">
            <div className="card">
                {imagen}

                <div className="card-content">
                    <Titulo>{title}</Titulo>
                    <p>{description}</p>
                </div>

                <div className="card-action">
                    <a 
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="waves-effect waves-light btn"
                    >Ver Noticia Completa</a>
                </div>
            </div>
        </div>
    )
}

Noticia.propTypes = {
    noticia: PropTypes.object.isRequired
}

export default Noticia
