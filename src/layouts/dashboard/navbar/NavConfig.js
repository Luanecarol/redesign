// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// components
import Label from '../../../components/Label';
import SvgIconStyle from '../../../components/SvgIconStyle';

// ----------------------------------------------------------------------

const getIcon = (name) => <SvgIconStyle src={`/icons/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const ICONS = {
  blog: getIcon('ic_blog'),
  cart: getIcon('ic_cart'),
  chat: getIcon('ic_chat'),
  mail: getIcon('ic_mail'),
  user: getIcon('ic_user'),
  kanban: getIcon('ic_kanban'),
  banking: getIcon('ic_banking'),
  calendar: getIcon('ic_calendar'),
  ecommerce: getIcon('ic_ecommerce'),
  analytics: getIcon('ic_analytics'),
  dashboard: getIcon('ic_dashboard'),
  booking: getIcon('ic_booking'),
};

const navConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: 'Promoções',
    items: [
      { title: 'Promoções', path: PATH_DASHBOARD.general.app, icon: ICONS.dashboard },
      { title: 'Roleta', path: PATH_DASHBOARD.general.ecommerce, icon: ICONS.ecommerce },
    ],
  },

  {
    subheader: 'Originais',
    items: [
      { title: 'Crash', path: PATH_DASHBOARD.general.app, icon: ICONS.dashboard },
      { title: 'Double', path: PATH_DASHBOARD.general.ecommerce, icon: ICONS.ecommerce },
      { title: 'Mines', path: PATH_DASHBOARD.general.ecommerce, icon: ICONS.ecommerce },
    ],
  },
  {
    subheader: 'Games',
    items: [
      { title: 'Sloats', path: PATH_DASHBOARD.general.app, icon: ICONS.dashboard },
      { title: 'Cassino ao vivo', path: PATH_DASHBOARD.general.ecommerce, icon: ICONS.ecommerce },
      { title: 'Jogos ao vivo', path: PATH_DASHBOARD.general.ecommerce, icon: ICONS.ecommerce },
      { title: 'Tabela de jogos', path: PATH_DASHBOARD.general.ecommerce, icon: ICONS.ecommerce },
    ],
  },
  {
    subheader: 'Páginas',
    items: [
      { title: 'Suporte', path: PATH_DASHBOARD.general.app, icon: ICONS.dashboard },
      { title: 'Indique um amigo', path: PATH_DASHBOARD.general.ecommerce, icon: ICONS.ecommerce },
    ],
  },
];

export default navConfig;
