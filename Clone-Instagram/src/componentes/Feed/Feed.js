import './Feed.css';

import Post from './componentes/Post/Post';

import princessCaroline from './imagens/princessCaroline.png';
import princessCarolinePerfil from './imagens/princessCarolinePerfil.png';
import jessePinkman from './imagens/jessePinkman.png';
import jessePinkmanPerfil from './imagens/jessePinkmanPerfil.png';
import hariSeldon from './imagens/hariSeldon.png';
import hariSeldonPerfil from './imagens/hariSeldonPerfil.png';
import fleabag from './imagens/fleabag.png';
import fleabagPerfil from './imagens/fleabagPerfil.png';
import clancyMidnight from './imagens/clancyMidnight.png';
import clancyMidnightPerfil from './imagens/clancyMidnightPerfil.png';
import gus from './imagens/gus.png';
import gusPerfil from './imagens/gusPerfil.png';
import ellie from './imagens/ellie.png';
import elliePerfil from './imagens/elliePerfil.png';
import tudoCerto from './imagens/tudoCerto.png'


export default function Feed() {
    return (
        <div className="Feed">
            <Post
                nomePerfil='princess.caroline'
                imagemPost={princessCaroline}
                imagemPerfil={princessCarolinePerfil}
                curtidas='4,224'
                nomeAutor='princess.caroline'
                legenda=' Não há palavras para descrever a felicidade e gratidão que sinto ao ter essa pequena ao meu lado. Agradeço à todos que me apoiaram nessa jornada, especialmente ao meu amor Ralph, que sempre esteve ao meu lado ❤️'
                hashtag=' #familia #bebe'
                comentarios='252'
                tempo='HÁ 30 MINUTOS'
            />

            <Post nomePerfil='gus.fring'
                imagemPost={gus}
                imagemPerfil={gusPerfil}
                curtidas='106'
                nomeAutor='gus.fring'
                legenda=' Hoje fazem 20 anos que estamos juntos. É um privilégio compartilhar tantas partes da vida com você. Que venham mais anos nessa longa jornada.'
                hashtag=''
                comentarios='3'
                tempo='HÁ 3 DIAS'
            />

            <Post nomePerfil='ellie'
                imagemPost={ellie}
                imagemPerfil={elliePerfil}
                curtidas='666'
                nomeAutor='ellie'
                legenda=' Por que o garçon foi convocado às forças armadas? Para servir ao exército hahaha Minhas piadas ficam melhores quando eu tenho com quem compartilhar. Obrigada por estar sempre aqui 🤣🤣'
                hashtag=' #BFF #riley'
                comentarios='23'
                tempo='HÁ 8 DIAS'
            />

            <Post nomePerfil='jessejesse'
                imagemPost={jessePinkman}
                imagemPerfil={jessePinkmanPerfil}
                curtidas='327'
                nomeAutor='jessejesse'
                legenda=' Yo, pessoal! Encontrei a paz e o amor que sempre busquei e agora estou pronto para viver uma vida normal com minha Jane. Valeu todos que me apoiaram nesta jornada difícil e espero inspirar outros a perseguir seus sonhos e encontrar a felicidade. Yeah, beach!'
                hashtag=' #jane #science'
                comentarios='112'
                tempo='HÁ 12 DIAS'
            />

            <Post nomePerfil='prof.seldon'
                imagemPost={hariSeldon}
                imagemPerfil={hariSeldonPerfil}
                curtidas='256'
                nomeAutor='prof.seldon'
                legenda=' Quando olho para o futuro, vejo um caminho iluminado pela ciência e pela razão. Através da psico história pude garantir o futuro da humanidade, mas só pude realizar isto graças à minha querida Dors, que esteve ao meu lado por todos esses anos.'
                hashtag=''
                comentarios='56'
                tempo='HÁ 20 DIAS'
            />

            <Post nomePerfil='fleabag'
                imagemPost={fleabag}
                imagemPerfil={fleabagPerfil}
                curtidas='11'
                nomeAutor='fleabag'
                legenda=' Acho que encontrei um propósito na vida. Percebi que a felicidade não está em ser perfeita ou ter tudo sob controle, mas em encontrar alegria nos momentos mais simples.'
                hashtag=' #r.i.p.boo #sister'
                comentarios='5'
                tempo='HÁ 1 MÊS'
            />

            <Post nomePerfil='clancybytrussel'
                imagemPost={clancyMidnight}
                imagemPerfil={clancyMidnightPerfil}
                curtidas='42'
                nomeAutor='clancybytrussel'
                legenda=' Depois de anos de busca e reflexão, finalmente encontrei as respostas que procurava. A compreensão profunda do universo e da existência humana que tanto almejei agora está clara para mim. É um sentimento indescritível perceber que tudo tem um propósito, mesmo que às vezes pareça sem sentido.'
                hashtag=' #semsentido #pessoal #LOL #midnightGospel #espacocast'
                comentarios='24'
                tempo='HÁ 1 MÊS'
            />

            <div className='TudoCerto'>
                <img alt='Você já viu todos os posts do último mês' src={tudoCerto}/>
                <p className='TudoCertoH1'>Você já viu tudo</p>
                <p className='TudoCertoH2'>Você viu todos os novos posts do último mês</p>
                <p className='TudoCertoH3'>Ver posts antigos</p>
            </div>
        </div>
    )
}