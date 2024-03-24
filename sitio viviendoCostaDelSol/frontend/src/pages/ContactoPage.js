import React from 'react';
import '../../src/styles/components/pages/ContactoPage.css'

const ContactoPage = (props) => {
    return (
        <div className="holder">

            <h2>Contacta con nosotros y ayudanos a mejorar</h2>

            <p>En viviendo Costa del Sol, nos interesa brindar el mejor servicio y asesoramiento, ayudamos
                a seguir creciendo, puedes comucarte con nsotros para solicitar información de nuestras excursiones,
                como asi también darnos recomendaciones de lugares o restaurantes que conozcas y creas que
                son ideales para miles de personas tambien puedan conocerlos.
            </p>

            <div className="contactos">
                <div className="contacto">
                    <h2>Contacto</h2>
                    <form action="" method="" className="formulario">
                        <p>
                            <label for="nombre">Nombre</label>
                            <input type="text" name="nombre" />
                        </p>

                        <p>
                            <label for="apellido">Apellido</label>
                            <input type="text" name="Apellido" />
                        </p>

                        <p>
                            <label for="email">Email</label>
                            <input type="text" name="email" />
                        </p>

                        <p>
                            <label for="telefono">Teléfono</label>
                            <input type="text" name="telefono" />
                        </p>

                        <ul>
                            <li>
                                <input type="radio" name="info" value="hombre"/>
                                    <label>Información</label>
                            </li>
                            <li>
                                <input type="radio" name="recomendacion" value="mujer"/>
                                    <label>Recomendación</label>
                            </li>
                            <li>
                                <input type="radio" name="resto" value="mujer"/>
                                    <label>Restaurantes</label>
                            </li>
                            <li>
                                <input type="radio" name="lugar" value="mujer"/>
                                    <label>Lugares</label>
                            </li>

                        </ul>

                        <p>
                            <label for="mensaje">Mensaje</label>
                            <textarea name="mensaje"></textarea>
                        </p>

                        <p>
                            <input type="submit" value="Enviar"/>
                        </p>
                    </form>
                </div>

                <div className="datos">
                    <h2>Otras alternativas</h2>
                    <ul>
                        <li>Email: contacto@viviendocostadelsol.com.es</li>
                        <li>Teléfono: +34 675 11 78 08</li>
                        <li>Facebook:</li>
                        <li>Instagram:</li>
                        <li>Skype:</li>
                    </ul>
                </div>
            </div>
        </div>

    );
}

export default ContactoPage;