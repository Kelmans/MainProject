class MyApp extends HTMLElement {
  connectedCallback() {
    const root = null;
    const useHash = true; // Defaults to: false
    const hash = '#!'; // Defaults to: '#'
    this.router = new Navigo(root, useHash, hash);
  }
}
customElements.define('app', MyApp);

connectedCallback() {
    let root = null;
    let useHash = true; // Defaults to: false
    let hash = '#!'; // Defaults to: '#'
    this.router = new Navigo(root, useHash, hash);
    router
        .on('page-a', () => {
            this.innerHTML = '';
            this.insertAdjacentHTML('beforeend', '<page-a></page-a>');
        })
        .on('page-b', () => {
            this.innerHTML = '';
            this.insertAdjacentHTML('beforeend', '<page-b></page-b>');
        })
        .on('*', () => {
            this.innerHTML = '';
            this.insertAdjacentHTML('beforeend', '<div>Please click links above</div>');
        })
        .resolve();
}

class PageA extends HTMLElement {
    connectedCallback() {
        this.insertAdjacentHTML('beforeend', '<div>This is a page A</div>');
    }
}
class PageB extends HTMLElement {
    connectedCallback() {
        this.insertAdjacentHTML('beforeend', '<div>This is a page B</div>');
    }
}
customElements.define('page-a', PageA);
customElements.define('page-b', PageB);