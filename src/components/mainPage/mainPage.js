import './mainPage.less';
import coreInfo from '../core-info/core-info';
import { jsx } from 'services/jsx';

const main = jsx({ tag: 'div', class: 'main' });

main.append(coreInfo);
export default main;
