import React from 'react';
import '../../src/styles/components/pages/LugaresPage.css'

const LugaresPage = (props) => {
    return (

        <div className="holder">
            <h2>Estos son algunos sitios de interes que no debes dejar de visitar</h2>
            <div className="lugares">
                <div className="sitio">
                    <img src="../img/lugares/sitio1.jpg" alt="sitio1"></img>
                </div>

                <div className="info">
                    <h2>Ronda</h2>
                    <p>Ronda es un municipio y ciudad española perteneciente a Andalucía, situada en el noroeste de la provincia de Málaga.
                    La ciudad se asienta sobre una meseta cortada por un profundo tajo excavado por el río Guadalevín, al que asoman 
                    los edificios de su centro histórico, lo que confiere a la ciudad una panorámica pintoresca que, unida a la variedad
                    de monumentos que posee, a su entorno natural y a su cercanía a los grandes centros del turismo de masas de la Costa del Sol,
                    ha convertido a Ronda en un centro turístico notable.
                       <a href="https://es.wikipedia.org/wiki/Ronda" target="_blank">+Info</a></p>
                </div>
            </div>

            <div className="lugares">
                <div className="sitio">
                    <img src="../img/lugares/sitio2.jpg" alt="sitio2"></img>
                </div>
                <div className="info">
                    <h2>Caminito del Rey</h2>
                    <p>El Caminito del Rey es un senda aérea construida en las paredes del Desfiladero de los Gaitanes.
                    Es un camino adosado al citado desfiladero con una longitud de 3 kilómetros que cuenta con largos
                    tramos y con una anchura de apenas 1 metro. Se inicia en el término municipal de Ardales, 
                    atraviesa el de Antequera, y concluye en El Chorro (Álora).
                    Este camino está colgado en las paredes verticales del desfiladero y a una distancia 
                    media de 100 metros sobre el río. Las obras se iniciaron en 1901 y concluyeron en 1905.</p>
                    <p>Hasta hace escasas fechas, el camino se encontraba "herido de muerte".
                    La acción de la naturaleza y la mano del hombre han llevado a esta infraestructura de comunicación
                    a un estado de deterioro deplorable. A partir de febrero 2014,
                    la Diputación de Málaga inició el proceso de adjudicación de las obras de restauración
                    completa del mismo. A finales de marzo de 2015 el Caminito se abrió al 
                    público. <a href="https://www.caminitodelrey.info/es/" target="_blank">+Info</a></p>
                </div>
            </div>
            <div className="lugares">
                <div className="sitio">
                    <img src="../img/lugares/sitio3.jpg" alt="sitio3"></img>
                </div>
                <div className="info">
                    <h2>Bioparc Fuengirola</h2>
                    <p>Con tu entrada a BIOPARC Fuengirola, no solo disfrutarás del parque, 
                    sino que también puedes participar en nuestro programa de actividades.
                    Estas tienen lugar durante todo el día. Ofrecemos una experiencia única 
                    donde contemplar momentos de gran interés. Una oportunidad para descubrir 
                    hábitats y animales de la mano de los cuidadores y biólogos, a través de 
                    charlas y rutas guiadas. Una forma de aprender mientras te diviertes.</p>
                    <p>Queremos compartir con vosotros nuestro “día a día”, transmitir nuestro amor
                    y respeto por la naturaleza para que, entre todos, seamos capaces de cambiar
                    nuestra actitud hacia la conservación del Medio Ambiente. Por eso
                    BIOPARC es “ocio con causa”, porque queremos que descubras la belleza
                    de la vida salvaje mediante un viaje por algunos de los 
                    paisajes más bellos y amenazados.
                        <a href="https://www.bioparcfuengirola.es/" target="_blank">+Info</a></p>
                </div>
            </div>

            <div className="lugares">
                <div className="sitio">
                    <img src="../img/lugares/sitio4.jpg" alt="sitio4"></img>
                </div>
                <div className="info">
                    <h2>Selwo Marina</h2>
                    <p>Selwo Marina es un novedoso concepto de parque, con propuestas dirigidas
                    a acercarnos y aprender a respetar la fauna con tres objetivos clave: descubrir,
                    aprender y divertir. Todas las especies de Selwo Marina reciben los más altos estándares
                    de atención para conseguir su máximo bienestar, siempre bajo el estricto cuidado de personal 
                    cualificado formado por veterinarios, biólogos y cuidadores. Las especies de Selwo Marina 
                    viven en entornos controlados, estratégicamente diseñados 
                    para garantizar su máximo bienestar</p>
                    <p>Un día en Selwo Marina es un día cargado de aprendizajes y momentos inolvidables. 
                    En esta sección encontrarás lo que ofrecemos para colegios, campamentos y el programa 
                    Dreamnight at the zoo, una experiencia única y muy especial.
                    <a href="https://www.selwomarina.es/" target="_blank">+Info</a></p>
                </div>
            </div>

        </div>

    );
}

export default LugaresPage;