import './Story.css'

export default function Story(props) {
    return (
    <div className='Story'>
        <div className='imgStory'>
            <img alt="Foto do User" src={props.imgPerfil} />
        </div>
        <div className='nomeStory'>
            <span>{props.nomeDaConta}</span>
        </div>
    </div>
    )
}