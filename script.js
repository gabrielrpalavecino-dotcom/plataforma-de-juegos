// Motor principal de la plataforma de juegos 3D
function abrirJuego(nombre) {
  document.getElementById('selectorVista').style.display = 'none';
  let arena = document.getElementById('gameArena');
  arena.classList.add('active');
  
  if (nombre === 'dados') {
    renderGenerala3D(arena);
  } else if (nombre === 'cartas') {
    renderCartas3D(arena);
  } else if (nombre === 'damas') {
    renderDamasBot(arena);
  }
}

function volverAlMenu() {
  document.getElementById('gameArena').classList.remove('active');
  document.getElementById('selectorVista').style.display = 'block';
}

// Simulador de Dados en 3D con Animación Real
function renderGenerala3D(container) {
  container.innerHTML = `
    <h2>🎲 Generala / Dados 3D con Bot</h2>
    <p>Lanza los dados y compite contra el bot inteligente.</p>
    <div class="dice-3d-container">
      <div class="die-3d" id="d1">🎲</div>
      <div class="die-3d" id="d2">🎲</div>
      <div class="die-3d" id="d3">🎲</div>
    </div>
    <div id="statusMsg" style="font-size: 1.1rem; color: var(--gold); font-weight: bold;">Tira los dados para comenzar la ronda.</div>
    <button class="btn" onclick="lanzarDados3D()">Lanzar Dados 3D</button>
    <button class="btn" style="background:#334155; color:#fff;" onclick="volverAlMenu()">Volver al Menú</button>
  `;
}

function lanzarDados3D() {
  let diceElements = [document.getElementById('d1'), document.getElementById('d2'), document.getElementById('d3')];
  if(!diceElements[0]) return;

  diceElements.forEach(d => d.classList.add('rolling'));
  document.getElementById('statusMsg').innerText = "Rodando dados en el espacio 3D...";

  setTimeout(() => {
    let resultados = diceElements.map(d => {
      let val = Math.floor(Math.random() * 6) + 1;
      d.classList.remove('rolling');
      d.innerText = val;
      return val;
    });

    document.getElementById('statusMsg').innerText = `¡Resultado: ${resultados.join(', ')}! Turno del Bot...`;
    
    // Turno del bot automático inteligente tras 1 segundo
    setTimeout(() => {
      let botRes = [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1];
      document.getElementById('statusMsg').innerText = `Tus dados: [${resultados.join(', ')}] | El Bot obtuvo: [${botRes.join(', ')}]`;
    }, 1200);

  }, 600);
}

// Simulador de Cartas 3D
function renderCartas3D(container) {
  container.innerHTML = `
    <h2>🃏 Mesa de Cartas 3D & Duelo</h2>
    <p>Tus cartas en mano con efectos gráficos 3D avanzados:</p>
    <div class="cards-container">
      <div class="card-3d"><span>10 ♠</span><span>⚔️</span><span>10 ♠</span></div>
      <div class="card-3d" style="border-color: var(--accent);"><span>A ♥</span><span>👑</span><span>A ♥</span></div>
      <div class="card-3d"><span>7 ♣</span><span>🛡️</span><span>7 ♣</span></div>
    </div>
    <div id="msgCartas" style="font-size: 1.1rem; color: var(--green); font-weight: bold;">Selecciona una carta para jugar contra el bot.</div>
    <button class="btn" onclick="jugarCartaBot()">Jugar Carta vs Bot</button>
    <button class="btn" style="background:#334155; color:#fff;" onclick="volverAlMenu()">Volver al Menú</button>
  `;
}

function jugarCartaBot() {
  document.getElementById('msgCartas').innerText = "🤖 El Bot analiza tu jugada y responde con una carta defensiva...";
  setTimeout(() => {
    document.getElementById('msgCartas').innerText = "🎉 ¡Ganaste la baza! El Bot no pudo superar tu As de Corazones.";
  }, 1500);
}

function renderDamasBot(container) {
  container.innerHTML = `
    <h2>🎯 Damas contra Bot Inteligente</h2>
    <p>Módulo de tablero táctico en desarrollo activo con IA integrada.</p>
    <button class="btn" style="background:#334155; color:#fff;" onclick="volverAlMenu()">Volver al Menú</button>
  `;
}