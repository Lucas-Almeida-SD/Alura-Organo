import Bulbasaur from '../assets/collaborators/Bulbasaur.png';
import Oddish from '../assets/collaborators/Oddish.png';
import Bellsprout from '../assets/collaborators/Bellsprout.png';
import Chikorita from '../assets/collaborators/Chikorita.png';
import Squirtle from '../assets/collaborators/Squirtle.png';
import Psyduck from '../assets/collaborators/Psyduck.png';
import Poliwag from '../assets/collaborators/Poliwag.png';
import Tentacool from '../assets/collaborators/Tentacool.png';
import Caterpie from '../assets/collaborators/Caterpie.png';
import Weedle from '../assets/collaborators/Weedle.png';
import Paras from '../assets/collaborators/Paras.png';
import Venonat from '../assets/collaborators/Venonat.png';
import Charmander from '../assets/collaborators/Charmander.png';
import Vulpix from '../assets/collaborators/Vulpix.png';
import Growlithe from '../assets/collaborators/Growlithe.png';
import Ponyta from '../assets/collaborators/Ponyta.png';
import Clefairy from '../assets/collaborators/Clefairy.png';
import Jigglypuff from '../assets/collaborators/Jigglypuff.png';
import Togepi from '../assets/collaborators/Togepi.png';
import mrMime from '../assets/collaborators/Mr_Mime.png';
import Pikachu from '../assets/collaborators/Pikachu.png';
import Magnemite from '../assets/collaborators/Magnemite.png';
import Electabuzz from '../assets/collaborators/Electabuzz.png';
import Jolteon from '../assets/collaborators/Jolteon.png';
import Mankey from '../assets/collaborators/Mankey.png';
import Machop from '../assets/collaborators/Machop.png';
import Hitmonlee from '../assets/collaborators/Hitmonlee.png';
import Hitmonchan from '../assets/collaborators/Hitmonchan.png';

const teamsDataList = {
  programacao: [
    {
      name: 'Bulbasaur',
      role: 'Desenvolvedor de software e instrutor',
      image: Bulbasaur,
      team: 'programacao',
      id: crypto.randomUUID(),
    },
    {
      name: 'Oddish',
      role: 'Engenheiro de Software ',
      image: Oddish,
      team: 'programacao',
      id: crypto.randomUUID(),
    },
    {
      name: 'Bellsprout',
      role: 'Desenvolvedor Python e JavaScript',
      image: Bellsprout,
      team: 'programacao',
      id: crypto.randomUUID(),
    },
    {
      name: 'Chikorita',
      role: 'Hipster e CEO',
      image: Chikorita,
      team: 'programacao',
      id: crypto.randomUUID(),
    },
  ],
  frontEnd: [
    {
      name: 'Squirtle',
      role: 'Desenvolvedor de software e instrutor',
      image: Squirtle,
      team: 'frontEnd',
      id: crypto.randomUUID(),
    },
    {
      name: 'Psyduck',
      role: 'Engenheiro de Software ',
      image: Psyduck,
      team: 'frontEnd',
      id: crypto.randomUUID(),
    },
    {
      name: 'Poliwag',
      role: 'Desenvolvedor Python e JavaScript',
      image: Poliwag,
      team: 'frontEnd',
      id: crypto.randomUUID(),
    },
    {
      name: 'Tentacool',
      role: 'Hipster e CEO',
      image: Tentacool,
      team: 'frontEnd',
      id: crypto.randomUUID(),
    },
  ],
  dataScience: [
    {
      name: 'Caterpie',
      role: 'Desenvolvedor de software e instrutor',
      image: Caterpie,
      team: 'dataScience',
      id: crypto.randomUUID(),
    },
    {
      name: 'Weedle',
      role: 'Engenheiro de Software ',
      image: Weedle,
      team: 'dataScience',
      id: crypto.randomUUID(),
    },
    {
      name: 'Paras',
      role: 'Desenvolvedor Python e JavaScript',
      image: Paras,
      team: 'dataScience',
      id: crypto.randomUUID(),
    },
    {
      name: 'Venonat',
      role: 'Hipster e CEO',
      image: Venonat,
      team: 'dataScience',
      id: crypto.randomUUID(),
    },
  ],
  devops: [
    {
      name: 'Charmander',
      role: 'Desenvolvedor de software e instrutor',
      image: Charmander,
      team: 'devops',
      id: crypto.randomUUID(),
    },
    {
      name: 'Vulpix',
      role: 'Engenheiro de Software ',
      image: Vulpix,
      team: 'devops',
      id: crypto.randomUUID(),
    },
    {
      name: 'Growlithe',
      role: 'Desenvolvedor Python e JavaScript',
      image: Growlithe,
      team: 'devops',
      id: crypto.randomUUID(),
    },
    {
      name: 'Ponyta',
      role: 'Hipster e CEO',
      image: Ponyta,
      team: 'devops',
      id: crypto.randomUUID(),
    },
  ],
  uxAndDesign: [
    {
      name: 'Clefairy',
      role: 'Desenvolvedora de software e instrutora',
      image: Clefairy,
      team: 'uxAndDesign',
      id: crypto.randomUUID(),
    },
    {
      name: 'Jigglypuff',
      role: 'Engenheira de Software ',
      image: Jigglypuff,
      team: 'uxAndDesign',
      id: crypto.randomUUID(),
    },
    {
      name: 'Togepi',
      role: 'Desenvolvedor Python e JavaScript',
      image: Togepi,
      team: 'uxAndDesign',
      id: crypto.randomUUID(),
    },
    {
      name: 'Mr. Mime',
      role: 'Hipster e CEO',
      image: mrMime,
      team: 'uxAndDesign',
      id: crypto.randomUUID(),
    },
  ],
  mobile: [
    {
      name: 'Pikachu',
      role: 'Desenvolvedor de software e instrutor',
      image: Pikachu,
      team: 'mobile',
      id: crypto.randomUUID(),
    },
    {
      name: 'Magnemite',
      role: 'Engenheiro de Software ',
      image: Magnemite,
      team: 'mobile',
      id: crypto.randomUUID(),
    },
    {
      name: 'Electabuzz',
      role: 'Desenvolvedor Python e JavaScript',
      image: Electabuzz,
      team: 'mobile',
      id: crypto.randomUUID(),
    },
    {
      name: 'Jolteon',
      role: 'Hipster e CEO',
      image: Jolteon,
      team: 'mobile',
      id: crypto.randomUUID(),
    },
  ],
  innovationAndManagement: [
    {
      name: 'Mankey',
      role: 'Desenvolvedor de software e instrutor',
      image: Mankey,
      team: 'innovationAndManagement',
      id: crypto.randomUUID(),
    },
    {
      name: 'Machop',
      role: 'Engenheiro de Software ',
      image: Machop,
      team: 'innovationAndManagement',
      id: crypto.randomUUID(),
    },
    {
      name: 'Hitmonlee',
      role: 'Desenvolvedor Python e JavaScript',
      image: Hitmonlee,
      team: 'innovationAndManagement',
      id: crypto.randomUUID(),
    },
    {
      name: 'Hitmonchan',
      role: 'Hipster e CEO',
      image: Hitmonchan,
      team: 'innovationAndManagement',
      id: crypto.randomUUID(),
    },
  ],
};

export default {
  teamsDataList,
};
