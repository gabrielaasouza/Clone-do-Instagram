import './Stories.css'

import Story from './componentes/Story';

import fennekoPerfil from './imagens/fennekoPerfil.png';
import gabsPerfil from './imagens/gabsPerfil.png';
import maiselPerfil from './imagens/maiselPerfil.png';
import rosaPerfil from './imagens/rosaPerfil.png';
import saulPerfil from './imagens/saulPerfil.png';
import terryPerfil from './imagens/terryPerfil.png';

function Stories () {
    return (
        <div className="Stories">
            <Story 
            imgPerfil={fennekoPerfil} 
            nomeDaConta="fenneko"/>
            <Story
            imgPerfil={gabsPerfil} 
            nomeDaConta="gabau"/>
            <Story
            imgPerfil={maiselPerfil} 
            nomeDaConta="maisel"/>
            <Story
            imgPerfil={rosaPerfil} 
            nomeDaConta="rosa99"/>
            <Story
            imgPerfil={saulPerfil} 
            nomeDaConta="saul"/>
            <Story
            imgPerfil={terryPerfil} 
            nomeDaConta="terry"/>
        </div>
    )
}

export default Stories;