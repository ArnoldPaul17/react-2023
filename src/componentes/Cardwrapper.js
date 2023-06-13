import Card from "./Card";
import './Cardwrapper.css';

export default function Cardwrapper () {
    const data = {
        imagen: 'images/gatitos.jpg',
        titulo: 'Fotos de gatitos!!!',
        descripcion: 'Descripción de las fotos de Chipannoli',
        precio: 453424,
        envio: true
    }
    return (
        <div className="wrapper">
            <h2>Variedad de gatitos</h2>

            <div className="grilla">
                <Card producto={data} />
            </div>
        </div>
    )
}