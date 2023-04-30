export default function ItemPerfil(props) {
    return (
        <span className="ItemPerfil">
            <img alt='Imagem do Meu Perfil' src={props.fotoPerfil}/>
            <span className='texto'>{props.texto}</span>
        </span>
    )
}