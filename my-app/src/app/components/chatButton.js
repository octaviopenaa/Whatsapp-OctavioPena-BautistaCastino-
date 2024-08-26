export default function Chatbutton({contacto,ultimoMensaje,srcImg}) {
    return(
        <div>
            <img src={srcImg}></img>
            <h2>{contacto}</h2>
            <p>{ultimoMensaje}</p>
        </div>
    )
}