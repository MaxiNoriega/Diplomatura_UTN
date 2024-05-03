import React from 'react';
import '../../src/styles/components/pages/ContactoPage.css'

import { useState } from 'react';
import axios from 'axios';



const ContactoPage = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value //forma dinamica
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await
            axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }

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
                    <form action="/contacto" method="post" onSubmit={handleSubmit} className="formulario">
                        <p>
                            <label for="nombre">Nombre</label>
                            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
                        </p>

                        <p>
                            <label for="apellido">Apellido</label>
                            <input type="text" name="Apellido" />
                        </p>

                        <p>
                            <label for="email">Email</label>
                            <input type="text" name="email" value={formData.email} onChange={handleChange} />
                        </p>

                        <p>
                            <label for="telefono">Teléfono</label>
                            <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
                        </p>

                        <p>
                            <label for="mensaje">Mensaje</label>
                            <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                        </p>

                        <p>
                            <input type="submit" value="Enviar" />
                        </p>
                    </form>

                    {sending ? <p>Enviando...</p> : null}
                    {msg ? <p>{msg}</p> : null}

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