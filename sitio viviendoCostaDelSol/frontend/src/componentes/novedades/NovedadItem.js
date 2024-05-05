import React from 'react';
import '../../styles/components/pages/NovedadesPage.css'

const NovedadItem = (props) => {
    const {title, subtitle, imagen, body} = props;

    return (
        <div className="novedades">
            <div className='img-container'>
                <img src={imagen} height={200} width={200} />
            </div>
            <div className='novedad'>
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
                <p className='cuerpo'>
                    {body}
                </p>
            </div>
            <hr />
        </div>
    );
}

export default NovedadItem;