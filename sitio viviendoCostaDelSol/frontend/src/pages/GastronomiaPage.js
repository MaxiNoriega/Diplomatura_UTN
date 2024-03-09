import React from 'react';

const GastronomiaPage = (props) => {
    return (

        <div className="contenedor-gastronomiapage">
            <h2>Disfruta la gastronomia mediterranea</h2>
            <div className="conten-comidas">
                <div className="fotos-comida1">
                    <img src="../img/gastronomia/casalola1.jpg" alt="casalola1"></img>
                    <img src="../img/gastronomia/casalola2.jpg" alt="casalola2"></img>
                    <img src="../img/gastronomia/casalola3.jpg" alt="casalola3"></img>
                    <img src="../img/gastronomia/casalola4.jpg" alt="casalola4"></img>
                </div>
                <div className="info-sitio1">
                    <h2>Tabernas Casa Lola</h2>
                    <p>Con varias ubicaciones en Málaga y ofreciendo gran variedad de platos en carta.
                        Donde la gastronomía y la buena gente se unen para crear momentos únicos.
                        Disfruta de la gastronomía malagueña en una taberna de toda la vida con el mejor ambiente y
                        en pleno centro de Málaga. Ven y prueba nuestras elaboraciones,
                        estamos seguros de que repetirá. <a href="https://grupocasalola.es/casa-lola-malaga" target="_blank">+Info</a></p>
                </div>
            </div>

            <div className="conten-comidas">
                <div className="foto-comida2">
                    <img src="../img/gastronomia/capricho1.jpg" alt="capricho1"></img>
                    <img src="../img/gastronomia/capricho2.jpg" alt="capricho2"></img>
                    <img src="../img/gastronomia/capricho3.jpg" alt="capricho3"></img>
                    <img src="../img/gastronomia/capricho4.jpg" alt="capricho4"></img>
                </div>
                <div className="info-sitio2">
                    <h2>Chiringuito El Capricho</h2>
                    <p>Siente la arena y las olas del mar mientras paseas por la orilla del mar,
                        acércate y disfruta de nuestra cocina mediterránea y marinera, encontrarás
                        una gran variedad de platos donde elegir. Ensaladas frescas, pescados o carnes. ¡
                        No olvides dejar espacio para el postre! ¿Vienes con niños? hemos pensado en ellos también.
                        Y a ti ¿Qué te apetece hoy? Te esperamos en Chiringuito
                        El Capricho, playa de Calahonda. <a href="https://chiringuito-elcapricho.com/" target="_blank">+Info</a></p>
                </div>
                <div className="conten-comidas">
                    <div className="foto-comida3">
                        <img src="img/gastronomia/remedio1.jpg" alt="remedio1"></img>
                        <img src="img/gastronomia/remedio2.jpg" alt="remedio2"></img>
                        <img src="img/gastronomia/remedio3.jpg" alt="remedio3"></img>
                        <img src="img/gastronomia/remedio4.jpg" alt="remedio4"></img>
                    </div>
                    <div className="info-sitio3">
                        <h2>Santo Remedio</h2>
                        <p>Complace tu apetito los días de buen tiempo en nuestro restaurante con terraza.
                            Santo Remedio te anima a que aproveches lo mejor del clima mediterráneo para que
                            vivas la experiencia más sureña y gourmet en el centro histórico de Málaga.
                            Todo sabe mejor si se disfruta del sol en este lugar de ensueño.
                            <a href="https://restaurantesantoremedio.com/" target="_blank">+Info</a></p>
                    </div>
                </div>

                <div className="conten-comidas">
                    <div className="foto-comida4">
                        <img src="img/gastronomia/higueron1.jpg" alt="higueron1"></img>
                        <img src="img/gastronomia/higueron2.jpg" alt="higueron2"></img>
                        <img src="img/gastronomia/higueron3.jpg" alt="higueron3"></img>
                        <img src="img/gastronomia/higueron4.jpg" alt="higueron4"></img>
                    </div>
                    <div className="info-sitio4">
                        <h2>El Higueron</h2>
                        <p>Durante las comidas y cenas,
                            servimos en un espectacular salón que mide la decoración
                            al último detalle para que sientas la auténtica tradición de la
                            gastronomía de calidad, viviendo la experiencia
                            al completo. <a href="https://elhigueron.com/restaurante/" target="_blank">+Info</a></p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default GastronomiaPage;