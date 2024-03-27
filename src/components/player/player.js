import { createElement } from '../../services/createElement';
import './player.less';

const player = createElement({ tag: 'div', class: 'player-wrapper' });
const playerHeader = createElement({ tag: 'div', class: 'player-header' });
const playerHeaderText = createElement({ tag: 'p', class: 'player-image-text' });
playerHeaderText.innerText = 'Тут можно свернуть или развернуть блок';

const playerHeaderImage = createElement({ tag: 'img', class: 'player-image' });

playerHeader.append(playerHeaderImage, playerHeaderText);

player.append(playerHeader);
export default player;
