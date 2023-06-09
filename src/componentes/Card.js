import './Card.css';

export default function Card () {
    const producto = {
        imagen: 'images/gatitos.jpg',
        titulo: 'Fotos de gatitos',
        descripcion: 'Descripción de las fotos de Chipannoli',
        precio: 453424,
        envio: true
    }

    return (
        <div className="card">
            <img src={producto.imagen} alt="" />
            <div className="card-info">
                <h2>{producto.titulo}</h2>
                <p className='descripcion'>
                    {producto.descripcion}
                </p>
                <div className="card-info-detalles">
                    <p className='precio'>${producto.precio}</p>
                    {producto.envio &&
                    <p className='envio'>Envio Gratis</p>
                    }
                </div>
            </div>  
        </div>
    )
}