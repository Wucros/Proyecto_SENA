/* ===== Datos de productos ===== */
const NOMBRES_PLATAFORMA = {
  playstation: 'PlayStation',
  xbox: 'Xbox',
  nintendo: 'Nintendo',
  pc: 'PC'
};

/* URLs de carátulas: Steam CDN (header.jpg) y Wikipedia/Wikimedia donde aplica */
const STEAM_HEADER = (appId) => `https://cdn.cloudflare.steamstatic.com/steam/apps/${appId}/header.jpg`;

const productos = [
  /* ===== CONSOLAS ===== */
  { id: 1, nombre: 'PlayStation 5', categoria: 'consola', precio: 2309958, precioAnterior: 2519958, emoji: '🎮', oferta: true, imagen: 'https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21?$facebook$' },
  { id: 2, nombre: 'Xbox Series X', categoria: 'consola', precio: 2099958, precioAnterior: null, emoji: '🟢', oferta: false, imagen: 'https://phantom-elmundo.unidadeditorial.es/399620f3b3ae05ffa68c4c3e2bb62ccc/resize/414/f/jpg/assets/multimedia/imagenes/2019/12/13/15762254803742.jpg' },
  { id: 3, nombre: 'Nintendo Switch 2', categoria: 'consola', precio: 2600000, precioAnterior: 1553958, emoji: '🔴', oferta: true, imagen: 'https://images.ecestaticos.com/SzPRLV5qwdgOn8elQ6-TWIBouw0=/673x74:2012x1078/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fca4%2F1dd%2F433%2Fca41dd433fb247012cae8fce6350da64.jpg' },
  { id: 4, nombre: 'Steam Machine', categoria: 'consola', precio: 5000000, precioAnterior: null, emoji: '🎯', oferta: false, imagen: 'https://clan.fastly.steamstatic.com/images/45479024/d2ce7e96bb0ab51817ba37cf61e3ca919d6f7209.jpg' },
  /* ===== JUEGOS PLAYSTATION ===== */
  { id: 5, nombre: 'God of War Ragnarök', categoria: 'juego', plataforma: 'playstation', precio: 167958, precioAnterior: 293958, emoji: '🪓', oferta: true, imagen: STEAM_HEADER(1593500) },
  { id: 6, nombre: 'Spider-Man 2', categoria: 'juego', plataforma: 'playstation', precio: 293958, precioAnterior: null, emoji: '🕷️', oferta: false, imagen: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Marvel%27s_Spider-Man_2_cover_art.jpg/220px-Marvel%27s_Spider-Man_2_cover_art.jpg' },
  { id: 7, nombre: 'The Last of Us Part II', categoria: 'juego', plataforma: 'playstation', precio: 125958, precioAnterior: 209958, emoji: '🧟', oferta: true, imagen: STEAM_HEADER(2531310) },
  { id: 8, nombre: 'Ghost of Tsushima', categoria: 'juego', plataforma: 'playstation', precio: 146958, precioAnterior: 251958, emoji: '🗾', oferta: true, imagen: STEAM_HEADER(2215430) },
  { id: 9, nombre: 'Horizon Forbidden West', categoria: 'juego', plataforma: 'playstation', precio: 188958, precioAnterior: 293958, emoji: '🦖', oferta: true, imagen: STEAM_HEADER(2420110) },
  { id: 10, nombre: 'Ratchet & Clank: Rift Apart', categoria: 'juego', plataforma: 'playstation', precio: 209958, precioAnterior: null, emoji: '🔧', oferta: false, imagen: STEAM_HEADER(1895880) },
  { id: 11, nombre: 'Demon\'s Souls', categoria: 'juego', plataforma: 'playstation', precio: 230958, precioAnterior: 293958, emoji: '⚔️', oferta: true, imagen: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Demon%27s_Souls_cover_art.jpg/220px-Demon%27s_Souls_cover_art.jpg' },
  { id: 12, nombre: 'Gran Turismo 7', categoria: 'juego', plataforma: 'playstation', precio: 209958, precioAnterior: 251958, emoji: '🏎️', oferta: true, imagen: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Gran_Turismo_7_cover_art.jpg/220px-Gran_Turismo_7_cover_art.jpg' },
  { id: 13, nombre: 'Returnal', categoria: 'juego', plataforma: 'playstation', precio: 167958, precioAnterior: 293958, emoji: '🌀', oferta: true, imagen: STEAM_HEADER(1649240) },
  { id: 14, nombre: 'Final Fantasy XVI', categoria: 'juego', plataforma: 'playstation', precio: 230958, precioAnterior: null, emoji: '⚡', oferta: false, imagen: STEAM_HEADER(2169380) },
  { id: 15, nombre: 'Hogwarts Legacy', categoria: 'juego', plataforma: 'playstation', precio: 188958, precioAnterior: 251958, emoji: '🪄', oferta: true, imagen: STEAM_HEADER(990080) },
  { id: 16, nombre: 'Elden Ring', categoria: 'juego', plataforma: 'playstation', precio: 209958, precioAnterior: 251958, emoji: '🐉', oferta: true, imagen: STEAM_HEADER(1245620) },
  /* ===== JUEGOS XBOX ===== */
  { id: 17, nombre: 'Forza Horizon 5', categoria: 'juego', plataforma: 'xbox', precio: 125958, precioAnterior: 209958, emoji: '🏁', oferta: true, imagen: STEAM_HEADER(1551360) },
  { id: 18, nombre: 'Halo Infinite', categoria: 'juego', plataforma: 'xbox', precio: 146958, precioAnterior: 251958, emoji: '🛸', oferta: true, imagen: STEAM_HEADER(1240440) },
  { id: 19, nombre: 'Starfield', categoria: 'juego', plataforma: 'xbox', precio: 293958, precioAnterior: null, emoji: '🌌', oferta: false, imagen: STEAM_HEADER(1716740) },
  { id: 20, nombre: 'Forza Motorsport', categoria: 'juego', plataforma: 'xbox', precio: 251958, precioAnterior: null, emoji: '🏎️', oferta: false, imagen: STEAM_HEADER(2440510) },
  { id: 21, nombre: 'Gears 5', categoria: 'juego', plataforma: 'xbox', precio: 83958, precioAnterior: 167958, emoji: '🔫', oferta: true, imagen: STEAM_HEADER(1172470) },
  { id: 22, nombre: 'Sea of Thieves', categoria: 'juego', plataforma: 'xbox', precio: 146958, precioAnterior: null, emoji: '🏴‍☠️', oferta: false, imagen: STEAM_HEADER(1172620) },
  { id: 23, nombre: 'Microsoft Flight Simulator', categoria: 'juego', plataforma: 'xbox', precio: 209958, precioAnterior: 293958, emoji: '✈️', oferta: true, imagen: STEAM_HEADER(1250410) },
  { id: 24, nombre: 'Hellblade II: Senua\'s Saga', categoria: 'juego', plataforma: 'xbox', precio: 209958, precioAnterior: null, emoji: '🔥', oferta: false, imagen: STEAM_HEADER(1817190) },
  { id: 25, nombre: 'Fable', categoria: 'juego', plataforma: 'xbox', precio: 251958, precioAnterior: null, emoji: '🐔', oferta: false, imagen: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/Fable_2025_cover_art.jpg/220px-Fable_2025_cover_art.jpg' },
  { id: 26, nombre: 'Hi-Fi Rush', categoria: 'juego', plataforma: 'xbox', precio: 104958, precioAnterior: 125958, emoji: '🎸', oferta: true, imagen: STEAM_HEADER(1846380) },
  { id: 27, nombre: 'Psychonauts 2', categoria: 'juego', plataforma: 'xbox', precio: 125958, precioAnterior: 167958, emoji: '🧠', oferta: true, imagen: STEAM_HEADER(1031200) },
  /* ===== JUEGOS NINTENDO ===== */
  { id: 28, nombre: 'The Legend of Zelda: Tears of the Kingdom', categoria: 'juego', plataforma: 'nintendo', precio: 293958, precioAnterior: null, emoji: '🗡️', oferta: false, imagen: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2f/The_Legend_of_Zelda_Tears_of_the_Kingdom_cover.jpg/220px-The_Legend_of_Zelda_Tears_of_the_Kingdom_cover.jpg' },
  { id: 29, nombre: 'Mario Kart 8 Deluxe', categoria: 'juego', plataforma: 'nintendo', precio: 230958, precioAnterior: null, emoji: '🏎️', oferta: false, imagen: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Mario_Kart_8_Deluxe_cover_art.jpg/220px-Mario_Kart_8_Deluxe_cover_art.jpg' },
  { id: 30, nombre: 'Animal Crossing: New Horizons', categoria: 'juego', plataforma: 'nintendo', precio: 209958, precioAnterior: null, emoji: '🍃', oferta: false, imagen: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Animal_Crossing_New_Horizons.jpg/220px-Animal_Crossing_New_Horizons.jpg' },
  { id: 31, nombre: 'Super Mario Odyssey', categoria: 'juego', plataforma: 'nintendo', precio: 209958, precioAnterior: 251958, emoji: '🍄', oferta: true, imagen: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Super_Mario_Odyssey.jpg/220px-Super_Mario_Odyssey.jpg' },
  { id: 32, nombre: 'Splatoon 3', categoria: 'juego', plataforma: 'nintendo', precio: 230958, precioAnterior: null, emoji: '🦑', oferta: false, imagen: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/Splatoon_3_cover_art.jpg/220px-Splatoon_3_cover_art.jpg' },
  { id: 33, nombre: 'Pokémon Escarlata', categoria: 'juego', plataforma: 'nintendo', precio: 230958, precioAnterior: null, emoji: '🦎', oferta: false, imagen: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Pok%C3%A9mon_Scarlet_and_Violet_cover_art.jpg/220px-Pok%C3%A9mon_Scarlet_and_Violet_cover_art.jpg' },
  { id: 34, nombre: 'Pokémon Púrpura', categoria: 'juego', plataforma: 'nintendo', precio: 230958, precioAnterior: null, emoji: '🐱', oferta: false, imagen: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Pok%C3%A9mon_Scarlet_and_Violet_cover_art.jpg/220px-Pok%C3%A9mon_Scarlet_and_Violet_cover_art.jpg' },
  { id: 35, nombre: 'Metroid Dread', categoria: 'juego', plataforma: 'nintendo', precio: 209958, precioAnterior: 251958, emoji: '👾', oferta: true, imagen: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5b/Metroid_Dread_cover_art.jpg/220px-Metroid_Dread_cover_art.jpg' },
  { id: 36, nombre: 'Fire Emblem Engage', categoria: 'juego', plataforma: 'nintendo', precio: 230958, precioAnterior: null, emoji: '⚔️', oferta: false, imagen: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/90/Fire_Emblem_Engage_cover_art.jpg/220px-Fire_Emblem_Engage_cover_art.jpg' },
  { id: 37, nombre: 'Super Smash Bros. Ultimate', categoria: 'juego', plataforma: 'nintendo', precio: 251958, precioAnterior: null, emoji: '👊', oferta: false, imagen: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/50/Super_Smash_Bros._Ultimate_cover_art.jpg/220px-Super_Smash_Bros._Ultimate_cover_art.jpg' },
  { id: 38, nombre: 'Luigi\'s Mansion 3', categoria: 'juego', plataforma: 'nintendo', precio: 188958, precioAnterior: 251958, emoji: '👻', oferta: true, imagen: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0a/Luigi%27s_Mansion_3_cover_art.jpg/220px-Luigi%27s_Mansion_3_cover_art.jpg' },
  { id: 39, nombre: 'Kirby y la Tierra Olvidada', categoria: 'juego', plataforma: 'nintendo', precio: 209958, precioAnterior: null, emoji: '⭐', oferta: false, imagen: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Kirby_and_the_Forgotten_Land_cover_art.png/220px-Kirby_and_the_Forgotten_Land_cover_art.png' },
  /* ===== JUEGOS PC ===== */
  { id: 40, nombre: 'Baldur\'s Gate 3', categoria: 'juego', plataforma: 'pc', precio: 230958, precioAnterior: null, emoji: '🐉', oferta: false, imagen: STEAM_HEADER(1086940) },
  { id: 41, nombre: 'Cyberpunk 2077', categoria: 'juego', plataforma: 'pc', precio: 125958, precioAnterior: 209958, emoji: '🌃', oferta: true, imagen: STEAM_HEADER(1091500) },
  { id: 42, nombre: 'Half-Life: Alyx', categoria: 'juego', plataforma: 'pc', precio: 209958, precioAnterior: 251958, emoji: '🥽', oferta: true, imagen: STEAM_HEADER(546560) },
  { id: 43, nombre: 'Counter-Strike 2', categoria: 'juego', plataforma: 'pc', precio: 0, precioAnterior: null, emoji: '🔫', oferta: false, imagen: STEAM_HEADER(730) },
  { id: 44, nombre: 'Valheim', categoria: 'juego', plataforma: 'pc', precio: 83958, precioAnterior: null, emoji: '🪓', oferta: false, imagen: STEAM_HEADER(892970) },
  { id: 45, nombre: 'Hades', categoria: 'juego', plataforma: 'pc', precio: 104958, precioAnterior: 125958, emoji: '⚡', oferta: true, imagen: STEAM_HEADER(1145360) },
  { id: 46, nombre: 'Stray', categoria: 'juego', plataforma: 'pc', precio: 125958, precioAnterior: 146958, emoji: '🐱', oferta: true, imagen: STEAM_HEADER(1332010) },
  { id: 47, nombre: 'Disco Elysium', categoria: 'juego', plataforma: 'pc', precio: 83958, precioAnterior: 167958, emoji: '🔍', oferta: true, imagen: STEAM_HEADER(632470) },
  { id: 48, nombre: 'Portal 2', categoria: 'juego', plataforma: 'pc', precio: 37758, precioAnterior: 41958, emoji: '🔵', oferta: true, imagen: STEAM_HEADER(620) },
  { id: 49, nombre: 'Hollow Knight', categoria: 'juego', plataforma: 'pc', precio: 62958, precioAnterior: null, emoji: '🦗', oferta: false, imagen: STEAM_HEADER(367520) },
  { id: 50, nombre: 'Celeste', categoria: 'juego', plataforma: 'pc', precio: 83958, precioAnterior: null, emoji: '🍓', oferta: false, imagen: STEAM_HEADER(504230) }
];

/* ===== Estado ===== */
let carrito = [];
let filtroActual = 'todos';
let filtroPlataforma = 'todos';
let textoBusqueda = '';

/* ===== DOM ===== */
const productsGrid = document.getElementById('productsGrid');
const cartCount = document.getElementById('cartCount');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const cartItems = document.getElementById('cartItems');
const cartEmpty = document.getElementById('cartEmpty');
const cartFooter = document.getElementById('cartFooter');
const cartTotal = document.getElementById('cartTotal');
const btnCart = document.getElementById('btnCart');
const btnCloseCart = document.getElementById('btnCloseCart');
const btnCheckout = document.getElementById('btnCheckout');
const btnMenu = document.getElementById('btnMenu');
const searchInput = document.getElementById('searchInput');

/* ===== Formatear precio (COP - pesos colombianos) ===== */
function formatoPrecio(num) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(num);
}

/* ===== Renderizar productos ===== */
function renderProductos() {
  const filtrados = productos.filter(p => {
    const cumpleCategoria = filtroActual === 'todos' || p.categoria === filtroActual;
    const cumplePlataforma = p.categoria !== 'juego' || filtroPlataforma === 'todos' || p.plataforma === filtroPlataforma;
    const cumpleBusqueda = !textoBusqueda ||
      p.nombre.toLowerCase().includes(textoBusqueda.toLowerCase());
    return cumpleCategoria && cumplePlataforma && cumpleBusqueda;
  });

  const filterPlatformEl = document.getElementById('filterPlatform');
  if (filterPlatformEl) {
    filterPlatformEl.style.display = filtroActual === 'consola' ? 'none' : 'block';
  }

  productsGrid.innerHTML = '';

  if (filtrados.length === 0) {
    productsGrid.innerHTML = '<p class="no-results">No hay productos que coincidan con tu búsqueda.</p>';
    return;
  }

  filtrados.forEach(p => {
    const card = document.createElement('article');
    card.className = 'product-card' + (p.categoria === 'consola' ? ' product-card--consola' : '');
    card.dataset.id = p.id;
    const categoriaLabel = p.categoria === 'consola' ? 'Consola' : 'Videojuego';
    const plataformaBadge = p.plataforma
      ? `<span class="product-platform">${NOMBRES_PLATAFORMA[p.plataforma] || p.plataforma}</span>`
      : '';
    const precioTexto = p.precio === 0 ? 'Gratis' : formatoPrecio(p.precio);
    const imgContent = p.imagen
      ? `<img src="${p.imagen}" alt="${p.nombre}" class="product-cover" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"><span class="product-cover-fallback" style="display:none">${p.emoji}</span>`
      : `<span class="product-cover-fallback">${p.emoji}</span>`;
    card.innerHTML = `
      <div class="product-image">${imgContent}</div>
      <div class="product-info">
        <div class="product-meta">
          <span class="product-category">${categoriaLabel}</span>
          ${plataformaBadge}
        </div>
        <h3 class="product-name">${p.nombre}</h3>
        <p class="product-price">
          ${p.precioAnterior ? `<span class="old">${formatoPrecio(p.precioAnterior)}</span>` : ''}
          ${precioTexto}
        </p>
        <button type="button" class="btn-add" data-id="${p.id}" ${p.precio === 0 ? 'disabled' : ''}>${p.precio === 0 ? 'Gratis' : 'Añadir al carrito'}</button>
      </div>
    `;
    productsGrid.appendChild(card);
  });

  document.querySelectorAll('.btn-add').forEach(btn => {
    btn.addEventListener('click', () => añadirAlCarrito(parseInt(btn.dataset.id, 10)));
  });
}

/* ===== Carrito ===== */
function añadirAlCarrito(id) {
  const producto = productos.find(p => p.id === id);
  if (!producto) return;

  const existente = carrito.find(item => item.id === id);
  if (existente) {
    existente.cantidad += 1;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }

  actualizarCarritoUI();
  abrirCarrito();
}

function quitarDelCarrito(id) {
  carrito = carrito.filter(item => item.id !== id);
  actualizarCarritoUI();
}

function cambiarCantidad(id, delta) {
  const item = carrito.find(i => i.id === id);
  if (!item) return;
  item.cantidad += delta;
  if (item.cantidad <= 0) quitarDelCarrito(id);
  else actualizarCarritoUI();
}

function actualizarCarritoUI() {
  const totalItems = carrito.reduce((sum, item) => sum + item.cantidad, 0);
  cartCount.textContent = totalItems;
  cartCount.dataset.count = totalItems;

  if (carrito.length === 0) {
    cartEmpty.hidden = false;
    cartFooter.hidden = true;
    cartItems.innerHTML = '';
    cartItems.appendChild(cartEmpty);
    return;
  }

  cartEmpty.hidden = true;
  cartFooter.hidden = false;

  const total = carrito.reduce((sum, item) => sum + item.precio * item.cantidad, 0);
  cartTotal.textContent = formatoPrecio(total);

  cartItems.innerHTML = '';
  carrito.forEach(item => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    const cartImg = item.imagen
      ? `<img src="${item.imagen}" alt="" class="cart-item-cover" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"><span class="cart-item-emoji" style="display:none">${item.emoji}</span>`
      : `<span class="cart-item-emoji">${item.emoji}</span>`;
    div.innerHTML = `
      <div class="cart-item-image">${cartImg}</div>
      <div class="cart-item-details">
        <p class="cart-item-name">${item.nombre}</p>
        <p class="cart-item-price">${formatoPrecio(item.precio)} × ${item.cantidad}</p>
        <div class="cart-item-actions">
          <div class="cart-item-qty">
            <button type="button" aria-label="Menos" data-id="${item.id}" data-delta="-1">−</button>
            <span>${item.cantidad}</span>
            <button type="button" aria-label="Más" data-id="${item.id}" data-delta="1">+</button>
          </div>
          <button type="button" class="cart-item-remove" data-id="${item.id}">Eliminar</button>
        </div>
      </div>
    `;
    cartItems.appendChild(div);
  });

  cartItems.querySelectorAll('.cart-item-qty button[data-delta]').forEach(btn => {
    btn.addEventListener('click', () => {
      cambiarCantidad(parseInt(btn.dataset.id, 10), parseInt(btn.dataset.delta, 10));
    });
  });
  cartItems.querySelectorAll('.cart-item-remove').forEach(btn => {
    btn.addEventListener('click', () => quitarDelCarrito(parseInt(btn.dataset.id, 10)));
  });
}

function abrirCarrito() {
  cartSidebar.classList.add('open');
  cartOverlay.classList.add('open');
  cartSidebar.setAttribute('aria-hidden', 'false');
  cartOverlay.setAttribute('aria-hidden', 'false');
}

function cerrarCarrito() {
  cartSidebar.classList.remove('open');
  cartOverlay.classList.remove('open');
  cartSidebar.setAttribute('aria-hidden', 'true');
  cartOverlay.setAttribute('aria-hidden', 'true');
}

function finalizarCompra() {
  if (carrito.length === 0) return;
  const total = carrito.reduce((sum, item) => sum + item.precio * item.cantidad, 0);
  alert(`¡Gracias por tu compra!\n\nTotal: ${formatoPrecio(total)}\n\nEste es un proyecto de demostración. No se ha realizado ningún cargo.`);
  carrito = [];
  actualizarCarritoUI();
  cerrarCarrito();
}

/* ===== Filtros ===== */
document.querySelectorAll('.filter-btn[data-filter]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn[data-filter]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    filtroActual = btn.dataset.filter;
    renderProductos();
  });
});

document.querySelectorAll('.filter-btn[data-platform]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn[data-platform]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    filtroPlataforma = btn.dataset.platform;
    renderProductos();
  });
});

searchInput.addEventListener('input', () => {
  textoBusqueda = searchInput.value.trim();
  renderProductos();
});

/* ===== Navegación móvil ===== */
const nav = document.querySelector('.nav');
btnMenu.addEventListener('click', () => {
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  if (nav.style.display === 'flex') {
    nav.style.flexDirection = 'column';
    nav.style.position = 'absolute';
    nav.style.top = '100%';
    nav.style.left = '0';
    nav.style.right = '0';
    nav.style.background = 'var(--bg-card)';
    nav.style.padding = '1rem';
    nav.style.borderBottom = '1px solid var(--border)';
  }
});

/* ===== Eventos carrito ===== */
btnCart.addEventListener('click', abrirCarrito);
btnCloseCart.addEventListener('click', cerrarCarrito);
cartOverlay.addEventListener('click', cerrarCarrito);
btnCheckout.addEventListener('click', finalizarCompra);

/* ===== Inicio ===== */
renderProductos();
actualizarCarritoUI();
