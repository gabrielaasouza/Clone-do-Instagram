import './Sugestao.css'

export default function LadoDireito(props) {
    return (
        <>
        <div className='SugestaoPerfil'>
            <div className='FotoSugestao'>
                <img alt='Foto de perfil sugerido' src={props.fotoPerfilSugerido}/>
            </div>
            <div className='InfoSugerido'>
                <span className='NickSugerido'>{props.nickSugerido}</span>
                <p className='NomeSugerido'>{props.nomeSugerido}</p>
            </div>
            <p className='Seguir'>Seguir</p>
        </div></>
    )
}

