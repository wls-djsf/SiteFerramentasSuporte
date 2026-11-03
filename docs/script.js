// Filtro de busca dos cards
const q = document.getElementById('q');
const items = Array.from(document.querySelectorAll('.item'));
const count = document.getElementById('count');

function refresh(){
  const term = (q.value || '').trim().toLowerCase();
  let shown = 0;
  for (const el of items){
    const name = (el.getAttribute('data-name') || '').toLowerCase();
    const ok = !term || name.includes(term);
    el.classList.toggle('hidden', !ok);
    if (ok) shown++;
  }
  count.textContent = `${shown}/${items.length} categorias`;
}

if(q && count) {
  q.addEventListener('input', refresh);
  refresh();
}

// Ativação e instalação do PWA no celular
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js')
      .then(reg => console.log('Service Worker ativo, truta!', reg))
      .catch(err => console.log('Erro ao iniciar Service Worker:', err));
  });
}
