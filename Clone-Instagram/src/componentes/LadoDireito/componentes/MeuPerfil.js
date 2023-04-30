import './MeuPerfil.css'

export default function MeuPerfil(props) {
    return (
        <div className='MeuPerfil'>
            <div className='FotoMeuPerfil'>
                <img alt='Imagem do Meu Perfil' src={props.fotoMeuPerfil}/>
            </div>
            <div className='MinhaInfo'>
                <span className='MeuNick'>{props.meuNick}</span>
                <p className='MeuNome'>{props.meuNome}</p>
            </div>
            <p className='Mudar'>Mudar</p>
        </div>
    )
}