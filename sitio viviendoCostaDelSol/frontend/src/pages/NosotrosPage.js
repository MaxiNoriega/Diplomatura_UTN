import React from 'react';

const NosotrosPage = (props) => {
    return (
        <div className="nosotros">
            <div className="historia">
                <h2>Nuestra historia</h2>
                <p>Somos un grupo de amigos que disfrutan la buena gastronomia mediterránea, visitar los lugares mas
                    emblemáticos
                    , como asi tambien aquellos donde se puede descanzar o pasar un buen dia en familia disfrutando de
                    la naturaleza.
                </p>
                <p>Nos encanta la aventura, y por sobre todo, deleitarnos con los eventos que esta region nos ofrece. Es
                    por eso que decidimos crear
                    este sitio donde todos los interesados se puedan enterar o compartir sus recomendaciones.
                </p>
            </div>

            <div className="Contenedor-equipo">
                <h2>Nuestro equipo</h2>
                <div className="Contenedor-personas">
                    <div className="persona">
                        <img src="img/nosotros/persona1.jpg" alt="persona1"></img>
                        <h4>Andres Gentile</h4>
                        <h5>Gerente turismo</h5>
                        <p>
                            Recibido con el grado de Turismo en la universdad de Barcelona es el socio fundador
                            de Viviendo Costa del Sol, es el responsable del desarrollo y futuro de este gran proyecto.
                        </p>
                    </div>

                    <div className="persona">
                        <img src="img/nosotros/persona2.jpg" alt="persona2"></img>
                        <h4>Sofia Alvarez</h4>
                        <h5>Gerente de Adminisración</h5>
                        <p>
                            Con su doctorado en administración de empresas en la Universidad de Andalucia,
                            socia fundadora. Responsable de gestionar y planificar nuestro proyecto.
                        </p>
                    </div>

                    <div className="persona">
                        <img src="img/nosotros/persona3.jpg" alt="persona3"></img>
                        <h4>Esteban Girón</h4>
                        <h5>Marketing digital</h5>
                        <p>
                            Con mas de 6 años de experiencia en community mannager, es el responsable del marketing digital de nuestra empresa.
                        </p>
                    </div>

                    <div className="persona">
                        <img src="img/nosotros/persona4.jpg" alt="persona4"></img>
                        <h4>Diana Torres</h4>
                        <h5>RRHH</h5>
                        <p>
                            Con una amplia experiencia en gestion de Personal,
                            es la encargada de gestionar unos recursos humenos en la compania
                            promoviendo, el trabajo en equipo y el desarrollo personal y profesional.
                        </p>
                    </div>

                    <div className="persona">
                        <img src="img/nosotros/persona5.jpg" alt="persona5"></img>
                        <h4>Carla Visconti</h4>
                        <h5>Guía de turismo</h5>
                        <p>
                            Responsable de desarrollar e incorporar nuevos sitios de interes,
                            como asi tambien toda la oferta gastronomica.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NosotrosPage;