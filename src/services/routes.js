import Navigo from 'navigo';

const router = new Navigo('/');

router.on('/about', () => {
  document.getElementById('app').innerHTML = '<h1>About</h1>';
}).on('/contact', () => {
  document.getElementById('app').innerHTML = '<h1>Contact</h1>';
}).notFound(() => {
  document.getElementById('app').innerHTML = '<h1>Страница не найдена</h1>';
}).resolve();

export function setupLinks() {
  document.querySelectorAll('a[data-navigo="true"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      router.navigate(link.getAttribute('href'));
    });
  });
}

router.hooks({
  after: (done) => {
    setupLinks();
    done();
  },
});
