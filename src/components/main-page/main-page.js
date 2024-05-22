import './main-page.less';
import { jsx } from 'jsx';
import coreInfo from 'components/core-info/core-info';

const main = jsx({ tag: 'div', class: 'main' });

main.append(coreInfo);
export default main;
