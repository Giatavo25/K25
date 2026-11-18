/* =========================================================
   ✏️  EDITA SOLO ESTA PARTE  ✏️
   ========================================================= */
const CONFIG = {
  nombre: "Karel",
  titulo: "Hoy es el cumpleaños de mi persona favorita",
  fechaCumple: "25 de noviembre",

  fechaInicio: "2021-05-09",          // AAAA-MM-DD  (9 de mayo de 2021)
  fechaInicioTexto: "el 9 de mayo de 2021",

  // Un mensaje por toque. El último aparece al llegar al 100%.
  mensajesCorazon: [
    "Toca el corazón para despertar la magia",
    "Otra vez…",
    "Algo se está encendiendo…",
    "Las velas empiezan a flotar…",
    "Sigue, que esto se calienta",
    "Un poquito más…",
    "No pares ahora",
    "Casi, casi…",
    "¡La magia despertó! ✨"
  ],
  hechizoIntro: "Lumos",              // palabra que brilla al llegar al 100%
  hechizoSobre: "Alohomora",          // palabra que brilla al abrir el sobre

  // CAPÍTULO I · Nuestra historia (de la más vieja a la más nueva)
  fotos: [
    { src: "fotos/h01.jpg", fecha: "8 de mayo · 2021", texto: "la noche donde empezó todo" },
    { src: "fotos/h02.jpg", fecha: "8 de mayo · 2021", texto: "esa sonrisa me ganó para siempre" },
    { src: "fotos/h03.jpg", fecha: "2021", texto: "tú brillando, como siempre" },
    { src: "fotos/h04.jpg", fecha: "25 de julio · 2021", texto: "amaneciendo juntos frente al mar" },
    { src: "fotos/h05.jpg", fecha: "25 de julio · 2021", texto: "arena, sol y tú" },
    { src: "fotos/h06.jpg", fecha: "2021", texto: "mis besos favoritos" },
    { src: "fotos/h07.jpg", fecha: "2021", texto: "riéndonos de todo y de nada" },
    { src: "fotos/h08.jpg", fecha: "18 de septiembre · 2021", texto: "cada día un poquito más tuyo" },
    { src: "fotos/h09.jpg", fecha: "27 de febrero · 2022", texto: "y seguimos sumando capítulos" }
  ],

  // CAPÍTULO II · Y la magia creció (después del mensaje de Gia y papi)
  fotosFamilia: [
    { src: "fotos/f01.jpg", fecha: "", texto: "y llegó nuestra magia más grande" },
    { src: "fotos/f02.jpg", fecha: "", texto: "nuestras primeras aventuras de tres" },
    { src: "fotos/f03.jpg", fecha: "11 de noviembre · 2024", texto: "luces, risas y nuestra niña" },
    { src: "fotos/f04.jpg", fecha: "25 de octubre · 2026", texto: "nuestro mar, ahora somos tres" },
    { src: "fotos/f05.jpg", fecha: "11 de noviembre · 2026", texto: "y lo que nos falta por vivir…" }
  ],

  cartaSaludo: "Mi amor,",
  carta: `Hoy cumples años y yo quisiera tener una varita para regalarte todo lo que mereces. Como no la tengo, te escribí esto con el corazón, que es lo más mágico que tengo.

El 9 de mayo de 2021 empezó el mejor hechizo de mi vida. No hubo fórmulas ni palabras raras: solo tú, siendo tú, y yo sin poder dejar de mirarte.

Desde entonces hemos vivido de todo: días buenos, días difíciles, risas, cansancio, maratones de películas abrazados… y el regalo más grande de todos: Gia. Verte ser su mamá es la magia más real que he visto.

Gracias por tu paciencia, por tu fuerza, por cuidarnos y por convertir cualquier lugar en un hogar. Gracias por elegirme cada día, incluso los días en que no te lo pongo fácil.

En este nuevo año de vida te deseo salud, paz, sueños cumplidos y mil razones para sonreír. Y te prometo seguir a tu lado, escribiendo nuestra historia capítulo por capítulo.

Feliz cumpleaños, Karel. Eres mi persona favorita en este mundo y en cualquier otro.`,
  firma: "Siempre tuyo ✦",

  // Ingredientes de la poción. {dias} se reemplaza por los días que llevan juntos.
  pocion: [
    "{dias} días de amor desde el 9 de mayo de 2021",
    "La risa de Gia por las mañanas",
    "Tres gotas de tu paciencia (que es infinita)",
    "Un puñado de besos robados",
    "Noches de películas mágicas, abrazados en el sofá",
    "Una pizca de locura (de la buena)",
    "Y mi corazón entero"
  ],
  pocionResultado: "Resultado: la mujer más mágica del mundo… tú ✦",

  hija: {
    nombre: "Gia",
    foto: "fotos/gia-y-papi.jpg",
    mensaje: "Gia y yo te deseamos muchas felicidades. Te amamos y queremos que todos tus días sean tan especiales como hoy.",
    firma: "— Gia y papi ♥"
  },

  velas: 5,

  finalTitulo: "Te amo, Karel",
  finalTexto: "Que todo lo que deseaste se haga realidad.\nHoy celebramos tu vida, y yo celebro tenerte en la mía.",
  finalFirma: "Hoy, mañana y siempre ✦",

  // Música: SanLuis – "Dónde andabas tú" (ya recortada: empieza en el segundo 23 de la original)
  musica: ["musica/cancion1.mp3"]
};
/* ================= FIN DE LO EDITABLE ================= */


const $ = (s) => document.querySelector(s);
const vibrar = (p) => { try { navigator.vibrate && navigator.vibrate(p); } catch (e) {} };
const diasJuntos = () => CONFIG.fechaInicio ? Math.floor((new Date() - new Date(CONFIG.fechaInicio + "T00:00:00")) / 864e5) : 0;

function hechizo(palabra) {
  const h = $("#hechizo");
  h.textContent = palabra;
  h.classList.remove("on"); void h.offsetWidth; h.classList.add("on");
}

/* ---------- estrellas ---------- */
(() => {
  const c = $("#estrellas");
  for (let i = 0; i < 70; i++) {
    const s = document.createElement("i");
    s.style.left = Math.random() * 100 + "%";
    s.style.top = Math.random() * 100 + "%";
    const t = Math.random() < .15 ? 3 : 2;
    s.style.width = s.style.height = t + "px";
    s.style.setProperty("--d", (2 + Math.random() * 4) + "s");
    s.style.setProperty("--r", (-Math.random() * 5) + "s");
    c.appendChild(s);
  }
})();

/* ---------- velas flotantes ---------- */
const VelasFlotantes = (() => {
  const c = $("#velasFlotantes"), lista = [];
  const N = 14;
  for (let i = 0; i < N; i++) {
    const v = document.createElement("div");
    v.className = "vf"; v.innerHTML = '<span class="llama-vf"></span>';
    // repartidas evitando el centro de la pantalla
    const izq = i % 2 === 0;
    const x = izq ? 3 + Math.random() * 22 : 75 + Math.random() * 20;
    const y = 4 + (i / N) * 86 + Math.random() * 4;
    v.style.left = x + "%"; v.style.top = y + "%";
    v.style.setProperty("--w", (6 + Math.random() * 6) + "px");
    v.style.setProperty("--d", (5 + Math.random() * 4) + "s");
    v.style.setProperty("--r", (-Math.random() * 6) + "s");
    c.appendChild(v); lista.push(v);
  }
  const orden = lista.slice().sort(() => Math.random() - .5);
  return {
    encender(frac) {
      const n = Math.ceil(N * frac);
      orden.forEach((v, i) => v.classList.toggle("encendida", i < n));
    }
  };
})();

/* ---------- efectos ---------- */
const FX = (() => {
  const cv = $("#fx"), ctx = cv.getContext("2d");
  let W, H, dpr, parts = [], corriendo = false;
  const colores = ["#f3d791", "#d4a24c", "#fff3cf", "#b8323d", "#c98ae8", "#9cc1df", "#ffffff"];
  function tam() { dpr = Math.min(window.devicePixelRatio || 1, 2); W = cv.width = innerWidth * dpr; H = cv.height = innerHeight * dpr; }
  addEventListener("resize", tam); tam();

  function corazon(s) {
    ctx.beginPath();
    ctx.moveTo(0, s * .3);
    ctx.bezierCurveTo(0, 0, -s * .5, 0, -s * .5, s * .3);
    ctx.bezierCurveTo(-s * .5, s * .6, 0, s * .8, 0, s);
    ctx.bezierCurveTo(0, s * .8, s * .5, s * .6, s * .5, s * .3);
    ctx.bezierCurveTo(s * .5, 0, 0, 0, 0, s * .3);
    ctx.fill();
  }
  function estrella(s) {
    ctx.beginPath();
    for (let i = 0; i < 4; i++) {
      const a = i * Math.PI / 2;
      ctx.lineTo(Math.cos(a) * s, Math.sin(a) * s);
      ctx.lineTo(Math.cos(a + Math.PI / 4) * s * .3, Math.sin(a + Math.PI / 4) * s * .3);
    }
    ctx.closePath(); ctx.fill();
  }
  function loop() {
    ctx.clearRect(0, 0, W, H);
    parts = parts.filter(p => p.vida > 0);
    for (const p of parts) {
      p.vx *= p.roce; p.vy = p.vy * p.roce + p.g;
      p.x += p.vx; p.y += p.vy; p.rot += p.vr; p.vida--;
      ctx.save();
      ctx.globalAlpha = Math.min(1, p.vida / 40);
      ctx.fillStyle = p.c;
      if (p.brillo) { ctx.shadowColor = p.c; ctx.shadowBlur = 10 * dpr; }
      ctx.translate(p.x, p.y); ctx.rotate(p.rot);
      if (p.t === "corazon") { ctx.translate(0, -p.s / 2); corazon(p.s); }
      else if (p.t === "estrella") estrella(p.s);
      else if (p.t === "chispa") { ctx.beginPath(); ctx.arc(0, 0, p.s, 0, 7); ctx.fill(); }
      else ctx.fillRect(-p.s / 2, -p.s / 4, p.s, p.s / 2);
      ctx.restore();
    }
    if (parts.length) requestAnimationFrame(loop); else { corriendo = false; ctx.clearRect(0, 0, W, H); }
  }
  const go = () => { if (!corriendo) { corriendo = true; requestAnimationFrame(loop); } };
  const col = (n) => colores[Math.random() * n | 0];

  return {
    corazones(x, y, n = 8) {
      for (let i = 0; i < n; i++) {
        const a = -Math.PI / 2 + (Math.random() - .5) * 2.4, v = (2 + Math.random() * 4) * dpr;
        parts.push({ t: Math.random() < .5 ? "corazon" : "estrella", brillo: true, x: x * dpr, y: y * dpr,
          vx: Math.cos(a) * v, vy: Math.sin(a) * v, g: .04 * dpr, roce: .98, s: (6 + Math.random() * 10) * dpr,
          rot: (Math.random() - .5) * .6, vr: (Math.random() - .5) * .05, vida: 70 + Math.random() * 40, c: col(4) });
      }
      go();
    },
    varita(x, y) {
      for (let i = 0; i < 2; i++)
        parts.push({ t: Math.random() < .4 ? "estrella" : "chispa", brillo: true, x: x * dpr, y: y * dpr,
          vx: (Math.random() - .5) * 1.5 * dpr, vy: (Math.random() - .2) * 1.5 * dpr, g: .03 * dpr, roce: .97,
          s: (1.5 + Math.random() * 3) * dpr, rot: Math.random() * 3, vr: .05, vida: 30 + Math.random() * 25, c: col(3) });
      go();
    },
    confeti(n = 160) {
      for (let i = 0; i < n; i++)
        parts.push({ t: ["papel", "papel", "estrella", "corazon"][Math.random() * 4 | 0], x: Math.random() * W, y: -20 * dpr - Math.random() * H * .5,
          vx: (Math.random() - .5) * 3 * dpr, vy: (2 + Math.random() * 3) * dpr, g: .03 * dpr, roce: .995,
          s: (6 + Math.random() * 8) * dpr, rot: Math.random() * 6, vr: (Math.random() - .5) * .25,
          vida: 260 + Math.random() * 120, c: col(colores.length) });
      go();
    },
    fuego(x, y) {
      const c = col(colores.length);
      for (let i = 0; i < 70; i++) {
        const a = Math.random() * Math.PI * 2, v = (1 + Math.random() * 5) * dpr;
        parts.push({ t: "chispa", brillo: true, x: x * dpr, y: y * dpr, vx: Math.cos(a) * v, vy: Math.sin(a) * v,
          g: .05 * dpr, roce: .97, s: (1.5 + Math.random() * 2) * dpr, rot: 0, vr: 0, vida: 60 + Math.random() * 45, c });
      }
      go();
    },
    fuegos(veces = 6) {
      for (let i = 0; i < veces; i++)
        setTimeout(() => this.fuego(innerWidth * (.15 + Math.random() * .7), innerHeight * (.12 + Math.random() * .35)), i * 420);
    }
  };
})();

/* estela de varita al deslizar el dedo */
(() => {
  let ultimo = 0;
  const estela = (x, y) => { const t = performance.now(); if (t - ultimo > 28) { ultimo = t; FX.varita(x, y); } };
  addEventListener("touchmove", e => { const p = e.touches[0]; estela(p.clientX, p.clientY); }, { passive: true });
  addEventListener("mousemove", e => { if (e.buttons) estela(e.clientX, e.clientY); });
})();

/* ---------- música (lista) ---------- */
const Musica = (() => {
  const audio = $("#audio"), btn = $("#btnMusica");
  const lista = (Array.isArray(CONFIG.musica) ? CONFIG.musica : [CONFIG.musica]).filter(Boolean);
  let i = 0, fallos = 0;
  let objetivo = .75;
  if (!lista.length) return { play() {}, bajar() {}, subir() {} };
  audio.src = lista[0];
  audio.addEventListener("ended", () => { i = (i + 1) % lista.length; if (lista.length > 1) audio.src = lista[i]; else audio.currentTime = 0; audio.play().catch(() => {}); });
  audio.addEventListener("error", () => {
    fallos++;
    if (fallos >= lista.length) { btn.classList.add("oculto"); return; }
    i = (i + 1) % lista.length; audio.src = lista[i]; audio.play().catch(() => {});
  });
  btn.addEventListener("click", () => {
    if (audio.paused) { audio.play(); btn.classList.add("sonando"); } else { audio.pause(); btn.classList.remove("sonando"); }
  });
  return {
    play() {
      audio.volume = 0;
      audio.play().then(() => {
        btn.classList.remove("oculto"); btn.classList.add("sonando");
        let v = 0; const t = setInterval(() => { v += .04; audio.volume = Math.min(objetivo, v); if (v >= .75) clearInterval(t); }, 150);
      }).catch(() => {});
    },
    // baja la música mientras ella sopla, para que el micrófono la escuche a ella
    bajar() { objetivo = .12; audio.volume = Math.min(audio.volume, objetivo); },
    subir() { objetivo = .75; audio.volume = objetivo; }
  };
})();

/* ---------- textos ---------- */
document.querySelectorAll("[data-nombre]").forEach(e => e.textContent = CONFIG.nombre);
$("#titulo").textContent = CONFIG.titulo;
$("#fecha").textContent = CONFIG.fechaCumple;
$("#desde").textContent = CONFIG.fechaInicioTexto;
$("#selloInicial").textContent = (CONFIG.nombre[0] || "♥").toUpperCase();
$(".sobre-carta-asoma span").textContent = "Para " + CONFIG.nombre + "…";
$("#msgCorazon").textContent = CONFIG.mensajesCorazon[0];

/* ---------- PANTALLA 1 ---------- */
(() => {
  const btn = $("#corazon"), msg = $("#msgCorazon"), relleno = $("#barraRelleno"), pct = $("#porcentaje");
  const pasos = CONFIG.mensajesCorazon.length - 1;
  let toques = 0, terminado = false;

  btn.addEventListener("click", () => {
    if (terminado) return;
    if (toques === 0) Musica.play();
    toques++;
    const frac = toques / pasos, p = Math.round(frac * 100);
    relleno.style.width = p + "%"; pct.textContent = p + "%";
    VelasFlotantes.encender(frac);

    btn.classList.remove("golpe"); void btn.offsetWidth; btn.classList.add("golpe");
    const r = btn.getBoundingClientRect();
    FX.corazones(r.left + r.width / 2, r.top + r.height / 2, 5 + toques * 2);
    vibrar(30 + toques * 8);

    msg.classList.add("cambia");
    setTimeout(() => { msg.textContent = CONFIG.mensajesCorazon[toques]; msg.classList.remove("cambia"); }, 200);

    if (toques >= pasos) {
      terminado = true;
      btn.classList.add("lleno");
      vibrar([60, 40, 60, 40, 200]);
      setTimeout(() => { hechizo(CONFIG.hechizoIntro); FX.corazones(innerWidth / 2, innerHeight / 2, 70); }, 300);
      setTimeout(() => $("#intro").classList.add("saliendo"), 1500);
      setTimeout(mostrarSorpresa, 2600);
    }
  });
})();

/* ---------- PANTALLA 2 ---------- */
function mostrarSorpresa() {
  document.body.classList.remove("oscuro");
  $("#intro").classList.remove("activa");
  $("#sorpresa").classList.add("activa");
  scrollTo(0, 0);
  FX.confeti(150);
  setTimeout(() => $("#lechuza").classList.add("vuela"), 700);

  const obs = new IntersectionObserver((ents) => {
    ents.forEach(en => { if (en.isIntersecting) { en.target.classList.add("visible"); obs.unobserve(en.target); } });
  }, { threshold: .15 });
  document.querySelectorAll(".revelar").forEach((el, i) => {
    el.style.transitionDelay = (i < 3 ? .4 + i * .3 : 0) + "s";
    obs.observe(el);
  });
  iniciarContador();
  iniciarCarrusel();
}

function iniciarContador() {
  if (!CONFIG.fechaInicio) { $("#contador").remove(); return; }
  const ini = new Date(CONFIG.fechaInicio + "T00:00:00"), hoy = new Date();
  let a = hoy.getFullYear() - ini.getFullYear(), m = hoy.getMonth() - ini.getMonth(), d = hoy.getDate() - ini.getDate();
  if (d < 0) { m--; d += new Date(hoy.getFullYear(), hoy.getMonth(), 0).getDate(); }
  if (m < 0) { a--; m += 12; }
  const contar = (el, fin) => {
    const t0 = performance.now(), dur = 2000;
    const paso = (t) => { const k = Math.min(1, (t - t0) / dur); el.textContent = Math.round(fin * (1 - Math.pow(1 - k, 3))).toLocaleString("es"); if (k < 1) requestAnimationFrame(paso); };
    requestAnimationFrame(paso);
  };
  setTimeout(() => { contar($("#cAnios"), a); contar($("#cMeses"), m); contar($("#cDias"), d); contar($("#cTotal"), diasJuntos()); }, 1200);
}

function iniciarCarrusel() {
  crearCarrusel(document.querySelector('[data-carrusel="historia"]'), CONFIG.fotos);
  crearCarrusel(document.querySelector('[data-carrusel="familia"]'), CONFIG.fotosFamilia || []);
}

function crearCarrusel(polaroid, fotos) {
  if (!polaroid) return;
  if (!fotos.length) { polaroid.closest("section").remove(); return; }
  const cont = polaroid.querySelector(".carrusel"), puntos = polaroid.querySelector(".puntos"),
        pie = polaroid.querySelector(".pie-foto"), fecha = polaroid.querySelector(".fecha-foto");
  fotos.forEach(f => {
    const sl = document.createElement("div"); sl.className = "slide";
    const bg = document.createElement("div"); bg.className = "fondo-blur"; bg.style.backgroundImage = `url("${f.src}")`;
    const img = new Image(); img.src = f.src; img.alt = f.texto || ""; img.draggable = false; img.loading = "lazy";
    sl.append(bg, img); cont.appendChild(sl);
    puntos.appendChild(document.createElement("i"));
  });
  const slides = cont.querySelectorAll(".slide"), dots = puntos.querySelectorAll("i");
  let i = 0, timer, visible = false;
  const textos = () => { pie.textContent = fotos[i].texto || ""; fecha.textContent = fotos[i].fecha || ""; };
  function ir(n) {
    slides[i].classList.remove("on"); dots[i].classList.remove("on");
    i = (n + fotos.length) % fotos.length;
    slides[i].classList.add("on"); dots[i].classList.add("on");
    pie.style.opacity = fecha.style.opacity = 0;
    setTimeout(() => { textos(); pie.style.opacity = fecha.style.opacity = 1; }, 250);
  }
  const auto = () => { clearInterval(timer); if (visible) timer = setInterval(() => ir(i + 1), 4200); };
  slides[0].classList.add("on"); dots[0].classList.add("on"); textos();
  // solo avanza solo cuando está en pantalla, así ella ve cada capítulo desde la primera foto
  new IntersectionObserver(([en]) => { visible = en.isIntersecting; auto(); }, { threshold: .5 }).observe(cont);
  let x0 = null;
  cont.addEventListener("touchstart", e => { x0 = e.touches[0].clientX; }, { passive: true });
  cont.addEventListener("touchend", e => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 35) { ir(i + (dx < 0 ? 1 : -1)); auto(); }
    x0 = null;
  });
  cont.addEventListener("click", e => { const r = cont.getBoundingClientRect(); ir(i + (e.clientX - r.left > r.width / 2 ? 1 : -1)); auto(); });
}

/* ---------- sobre y carta ---------- */
(() => {
  const sobre = $("#sobre"), modal = $("#modalCarta"), txt = $("#cartaTexto"), firma = $("#cartaFirma");
  let escrita = false, timer = null;
  $("#cartaSaludo").textContent = CONFIG.cartaSaludo;
  firma.textContent = CONFIG.firma;

  const completar = () => { clearInterval(timer); escrita = true; txt.textContent = CONFIG.carta; firma.classList.add("on"); };
  function escribir() {
    if (escrita) return completar();
    const texto = CONFIG.carta; let k = 0;
    txt.innerHTML = '<span></span><i class="cursor"></i>';
    const span = txt.firstChild, carta = txt.parentElement;
    timer = setInterval(() => {
      k++;
      span.textContent = texto.slice(0, k);
      if (carta.scrollHeight > carta.clientHeight) carta.scrollTop = carta.scrollHeight;
      if (k >= texto.length) completar();
    }, 36);
  }
  const abrirModal = () => { modal.classList.add("abierto"); modal.setAttribute("aria-hidden", "false"); escribir(); };

  $("#sello").addEventListener("click", () => {
    hechizo(CONFIG.hechizoSobre);
    vibrar([30, 30, 60]);
    const r = sobre.getBoundingClientRect();
    FX.corazones(r.left + r.width / 2, r.top + r.height / 2, 24);
    setTimeout(() => sobre.classList.add("abierto"), 500);
    setTimeout(abrirModal, 1900);
  });
  sobre.addEventListener("click", (e) => { if (sobre.classList.contains("abierto") && e.target.id !== "sello") abrirModal(); });
  txt.addEventListener("click", () => { if (!escrita) completar(); });
  const cerrar = () => { modal.classList.remove("abierto"); modal.setAttribute("aria-hidden", "true"); };
  $("#cerrarCarta").addEventListener("click", cerrar);
  modal.addEventListener("click", (e) => { if (e.target === modal) cerrar(); });
})();

/* ---------- poción ---------- */
(() => {
  const caldero = $("#caldero"), ul = $("#ingredientes"), ayuda = $("#ayudaPocion"), res = $("#pocionResultado");
  let hecho = false;
  CONFIG.pocion.forEach(t => {
    const li = document.createElement("li");
    li.textContent = t.replace("{dias}", diasJuntos().toLocaleString("es"));
    ul.appendChild(li);
  });
  caldero.addEventListener("click", () => {
    if (hecho) return; hecho = true;
    caldero.classList.add("removiendo");
    ayuda.textContent = "Removiendo… ✦";
    vibrar([20, 60, 20, 60, 20]);
    const lis = ul.querySelectorAll("li");
    lis.forEach((li, k) => setTimeout(() => {
      li.classList.add("on");
      const r = caldero.getBoundingClientRect();
      FX.corazones(r.left + r.width / 2, r.top + r.height * .35, 6);
    }, 500 + k * 650));
    setTimeout(() => {
      caldero.classList.remove("removiendo"); caldero.classList.add("lista");
      ayuda.textContent = "¡La poción está lista!";
      res.textContent = CONFIG.pocionResultado; res.classList.add("on");
      const r = caldero.getBoundingClientRect();
      FX.fuego(r.left + r.width / 2, r.top + r.height * .3);
    }, 700 + lis.length * 650);
  });
})();

/* ---------- Gia y papi ---------- */
if (CONFIG.hija && CONFIG.hija.nombre) {
  document.querySelectorAll("[data-hija-nombre]").forEach(e => e.textContent = CONFIG.hija.nombre);
  $("#hijaMsg").textContent = CONFIG.hija.mensaje;
  $("#hijaFirma").textContent = CONFIG.hija.firma || "";
  if (CONFIG.hija.foto) $("#hijaFoto").src = CONFIG.hija.foto; else $(".hija-foto").remove();
} else { $("#hija").remove(); }

/* ---------- pastel ---------- */
(() => {
  const cont = $("#velas"), btn = $("#btnSoplar"), ayuda = $("#ayudaVelas");
  const medidor = $("#medidor"), medRelleno = $("#medidorRelleno"), medLinea = $("#medidorLinea");
  let encendidas = CONFIG.velas, acabado = false, stream = null, ctxAudio = null, escuchando = false;

  for (let i = 0; i < CONFIG.velas; i++) {
    const v = document.createElement("div");
    v.className = "vela"; v.innerHTML = '<div class="llama"></div>';
    v.style.height = (40 + (i % 2) * 8) + "px";
    v.addEventListener("click", () => apagar(v));
    cont.appendChild(v);
  }
  // las llamas tiemblan cuando detecta aire
  const temblar = (k) => cont.querySelectorAll(".vela:not(.apagada) .llama").forEach(l => {
    l.style.transform = `translateX(-50%) rotate(${(Math.random() - .5) * 40 * k}deg) scaleY(${1 - .35 * k})`;
  });

  function apagar(v) {
    if (v.classList.contains("apagada")) return;
    v.classList.add("apagada");
    v.querySelector(".llama").style.transform = "";
    const h = document.createElement("div"); h.className = "humo"; v.appendChild(h);
    setTimeout(() => h.remove(), 1700);
    vibrar(25);
    if (--encendidas <= 0) celebrar();
  }
  function celebrar() {
    if (acabado) return; acabado = true;
    pararMic(); btn.style.display = "none"; medidor.classList.remove("on");
    ayuda.textContent = "¡Deseo concedido! ✨";
    hechizo("¡Feliz cumpleaños!");
    vibrar([80, 50, 80, 50, 300]);
    FX.confeti(220); FX.fuegos(9);
    $("#finalTitulo").textContent = CONFIG.finalTitulo;
    $("#finalTexto").innerHTML = CONFIG.finalTexto.replace(/\n/g, "<br>");
    $("#finalFirma").textContent = CONFIG.finalFirma;
    setTimeout(() => { $("#final").classList.add("on"); $("#final").scrollIntoView({ behavior: "smooth", block: "center" }); }, 1800);
  }
  function pararMic() {
    escuchando = false;
    if (stream) stream.getTracks().forEach(t => t.stop());
    if (ctxAudio) ctxAudio.close().catch(() => {});
    stream = ctxAudio = null;
    btn.classList.remove("escuchando");
    temblar(0);
    Musica.subir();
  }

  btn.addEventListener("click", async () => {
    if (escuchando) { pararMic(); btn.textContent = "🌬️ Soplar de verdad"; medidor.classList.remove("on"); return; }

    // 1) El audio se crea EN EL MISMO TOQUE (si no, el teléfono lo deja en pausa)
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC || !navigator.mediaDevices) { ayuda.textContent = "Este teléfono no deja usar el micrófono: toca las llamas 🔥"; return; }
    ctxAudio = new AC();
    ctxAudio.resume && ctxAudio.resume();

    // 2) Micrófono SIN filtro anti-ruido (ese filtro borraba el soplido)
    try {
      stream = await navigator.mediaDevices.getUserMedia({
        audio: { echoCancellation: false, noiseSuppression: false, autoGainControl: false }
      });
    } catch (e) {
      try { stream = await navigator.mediaDevices.getUserMedia({ audio: true }); }
      catch (e2) { ctxAudio.close(); ctxAudio = null; ayuda.textContent = "Sin permiso del micrófono: toca las llamas 🔥"; return; }
    }
    if (ctxAudio.state !== "running") { try { await ctxAudio.resume(); } catch (e) {} }

    Musica.bajar();
    const an = ctxAudio.createAnalyser();
    an.fftSize = 1024; an.smoothingTimeConstant = .2;
    ctxAudio.createMediaStreamSource(stream).connect(an);
    const frec = new Uint8Array(an.frequencyBinCount), onda = new Uint8Array(an.fftSize);
    const binMax = Math.max(4, Math.round(2000 / (ctxAudio.sampleRate / an.fftSize))); // graves (< 2 kHz): ahí vive el soplido

    escuchando = true;
    btn.classList.add("escuchando"); btn.textContent = "Escuchando… (toca para parar)";
    ayuda.textContent = "Un segundito…";
    medidor.classList.add("on");

    const nivel = () => {
      an.getByteFrequencyData(frec);
      let f = 0; for (let k = 1; k < binMax; k++) f += frec[k];
      f /= (binMax - 1);
      an.getByteTimeDomainData(onda);
      let r = 0; for (const d of onda) { const x = (d - 128) / 128; r += x * x; }
      r = Math.sqrt(r / onda.length);
      return Math.max(f / 255, Math.min(1, r * 4));   // 0 … 1
    };

    // 3) Calibra el ruido del lugar durante ~0.7 s y ajusta la sensibilidad sola
    let piso = 0, n = 0;
    const t0 = performance.now();
    while (performance.now() - t0 < 700 && escuchando) {
      piso += nivel(); n++;
      await new Promise(r => requestAnimationFrame(r));
    }
    if (!escuchando) return;
    piso = n ? piso / n : 0;
    const umbral = Math.min(.85, Math.max(piso + .12, piso * 1.5, .18));
    medLinea.style.left = (umbral * 100) + "%";
    ayuda.textContent = "¡Ahora sopla fuerte cerca del micrófono! 🌬️";

    let acumulado = 0, previo = performance.now();
    (function oir(t) {
      if (!escuchando) return;
      const dt = t - previo; previo = t;
      const v = nivel();
      medRelleno.style.width = Math.min(100, v * 100) + "%";
      medRelleno.classList.toggle("fuerte", v > umbral);
      if (v > umbral) {
        acumulado += dt;
        temblar(Math.min(1, (v - umbral) / .2 + .3));
        if (acumulado > 160) {          // cada ~0.16 s de soplido apaga una vela
          acumulado = 0;
          const vivas = [...cont.querySelectorAll(".vela:not(.apagada)")];
          if (vivas.length) apagar(vivas[Math.random() * vivas.length | 0]);
        }
      } else { acumulado = Math.max(0, acumulado - dt * .5); temblar(0); }
      requestAnimationFrame(oir);
    })(performance.now());
  });
})();

$("#btnRepetir").addEventListener("click", () => location.reload());
