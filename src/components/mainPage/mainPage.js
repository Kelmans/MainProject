import { createElement } from '../../services/createElement';
import './mainPage.less';
import player from "../player/player";

const main = createElement({ tag: 'div', class: 'main' });

main.append(player);
export default main;
