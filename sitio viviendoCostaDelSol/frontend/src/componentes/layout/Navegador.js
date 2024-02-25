import { link } from "react-router-dom";

const Navegador = (props) => {
    return (
        <nav>
            <div>

                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/nosotros">NosotrosPage</Link></li>
                    <li><Link to="/gastronomia">Gastronomia</Link></li>
                    <li><Link to="/lugares">Lugares</Link></li>
                    <li><Link to="/excursiones">Excursiones</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                </ul>

            </div>
        </nav>
    );
}

export default Navegador;
