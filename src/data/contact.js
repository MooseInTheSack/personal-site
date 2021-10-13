import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faAngellist } from '@fortawesome/free-brands-svg-icons/faAngellist';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/MooseInTheSack',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.instagram.com/tbkirkpatrick/',
    label: 'Instagram',
    icon: faInstagram,
  },
  {
    link: 'https://www.linkedin.com/in/tyler-k-8a5907104/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://angel.co/u/tyler-kirkpatrick-1',
    label: 'Angel List',
    icon: faAngellist,
  },
  {
    link: 'mailto:tkirkpatrick@smu.edu',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
