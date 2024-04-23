import { createElement } from '#services/createElement';
import './mainPage.less';
import coreInfo from "../core-info/core-info";

const main = createElement({ tag: 'div', class: 'main' });

main.append(coreInfo);
export default main;
