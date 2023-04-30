import MeuPerfil from './componentes/MeuPerfil';
import Sugestao from './componentes/Sugestao'
import './LadoDireito.css';

import fotoMeuPerfil from './imagens/meuPerfil.png'
import c3po from './imagens/c3poPerfil.png'
import moon from './imagens/moonPerfil.png'
import totoro from './imagens/totoroPerfil.png'
import whisper from './imagens/whisperPerfil.png'
import zero from './imagens/zeroPerfil.png'

export default function LadoDireito() {
    return (

        <div className='LadoDireito'>
            <MeuPerfil
                fotoMeuPerfil={fotoMeuPerfil}
                meuNick='gabi.as'
                meuNome='Gabriela Souza'
            />
            <div className='Sugeridos'>
                <span className='SugestaoPessoal'>Sugestões para você</span>
                <span className='VerTudo'>Ver tudo</span>
            </div>
            <Sugestao
                fotoPerfilSugerido={c3po}
                nickSugerido='c3po'
                nomeSugerido='Sugestão para você'
            />
            <Sugestao
                fotoPerfilSugerido={moon}
                nickSugerido='mooncake'
                nomeSugerido='Sugestão para você'
            />
            <Sugestao
                fotoPerfilSugerido={totoro}
                nickSugerido='totoro'
                nomeSugerido='Sugestão para você'
            />
            <Sugestao
                fotoPerfilSugerido={whisper}
                nickSugerido='shizuku.tsukishima'
                nomeSugerido='Sugestão para você'
            />
            <Sugestao
                fotoPerfilSugerido={zero}
                nickSugerido='zer0budapest'
                nomeSugerido='Sugestão para você'
            />
            <footer className='Footer'>
                <p>
                    <span> Sobre </span> &bull;
                    <span> Ajuda </span> &bull;
                    <span> Imprensa </span> &bull;
                    <span> API </span> &bull;
                    <span> Carreiras </span> &bull;
                    <span> Privacidade </span> &bull;
                    <span> Termos </span> &bull;
                    <span> Localização </span> &bull;
                    <span> Idioma </span> &bull; <span> Meta Verified </span>
                </p>
                <p className='FeitoPor' >&copy; <a href='https://github.com/gabrielaasouza' target="_blank" rel="noreferrer">2023 INSTAGRAM FROM GABRIELA AS</a></p>
            </footer>
        </div>
    );
}