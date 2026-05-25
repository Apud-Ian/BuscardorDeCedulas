// Funciones del Motor
function irAlMotor(modo) {
    document.getElementById('motor-busqueda').scrollIntoView({ behavior: 'smooth' });
    cambiarModo(modo);
}

function cambiarModo(modo) {
    const secEncontre = document.getElementById('seccion-encontre');
    const secPerdio = document.getElementById('seccion-perdio');
    const tabEncontre = document.getElementById('tab-encontre');
    const tabPerdio = document.getElementById('tab-perdio');
    const consola = document.getElementById('consola-resultados');

    consola.classList.remove('mostrar');
    setTimeout(() => consola.style.display = 'none', 300);

    if(modo === 'encontre') {
        secPerdio.classList.remove('activa');
        tabPerdio.classList.remove('activa');
        setTimeout(() => {
            secEncontre.classList.add('activa');
            tabEncontre.classList.add('activa');
        }, 100);
    } else {
        secEncontre.classList.remove('activa');
        tabEncontre.classList.remove('activa');
        setTimeout(() => {
            secPerdio.classList.add('activa');
            tabPerdio.classList.add('activa');
        }, 100);
    }
}

// Llamadas al Backend
async function enviarHallazgo() {
    const btn = document.querySelector('#seccion-encontre .btn-submit');
    const textoOriginal = btn.innerHTML;

    try {
        const ci = document.getElementById('ci_encontrada').value;
        const nombre = document.getElementById('nombre_encontrada').value;
        const email = document.getElementById('email_encontro').value;
        const lugar = document.getElementById('lugar_encontrada').value; 

        if(!ci || !nombre || !email) {
            mostrarMensaje("⚠️ Por favor, completa los campos obligatorios.", "#FEF3C7", "#92400E");
            return;
        }

        btn.innerHTML = "⏳ Publicando de forma segura...";
        btn.disabled = true;
        btn.style.opacity = "0.7";

        const respuesta = await fetch('/api/encontre', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ numero_cedula: ci, nombre_pila: nombre, email_contacto: email, lugar: lugar })
        });
        
        const datos = await respuesta.json();
        mostrarMensaje("✅ " + datos.mensaje, "#D1FAE5", "#065F46");
        
        document.getElementById('ci_encontrada').value = '';
        document.getElementById('nombre_encontrada').value = '';
        document.getElementById('email_encontro').value = '';
        document.getElementById('lugar_encontrada').value = ''; 
        
    } catch (error) {
        mostrarMensaje("❌ Error de conexión con el servidor.", "#FEE2E2", "#991B1B");
    } finally {
        btn.innerHTML = textoOriginal;
        btn.disabled = false;
        btn.style.opacity = "1";
    }
}

async function buscarCedula() {
    const btn = document.querySelector('#seccion-perdio .btn-submit');
    const textoOriginal = btn.innerHTML;

    try {
        const ci = document.getElementById('ci_perdida').value;
        const email = document.getElementById('email_perdio').value;

        if(!ci || !email) {
            mostrarMensaje("⚠️ Por favor, ingresa tu cédula y correo.", "#FEF3C7", "#92400E");
            return;
        }

        mostrarMensaje("⏳ Conectando con la base de datos...", "#E6F0FA", "#001f3f");
        
        btn.innerHTML = "🔍 Rastreado sistema...";
        btn.disabled = true;
        btn.style.opacity = "0.7";

        const respuesta = await fetch('/api/busco', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ numero_cedula: ci, mi_email: email })
        });

        const datos = await respuesta.json();
        
        if(datos.match) {
            mostrarMensaje("🎉 " + datos.mensaje + "<br><br>👉 Escribe a: <b>" + datos.datos_contacto + "</b>", "#E6F0FA", "#001f3f");
        } else {
            mostrarMensaje("😔 " + datos.mensaje, "#FEE2E2", "#991B1B");
        }
        
    } catch (error) {
        mostrarMensaje("❌ Error de conexión: El motor de búsqueda no está respondiendo.", "#FEE2E2", "#991B1B");
    } finally {
        btn.innerHTML = textoOriginal;
        btn.disabled = false;
        btn.style.opacity = "1";
    }
}

function mostrarMensaje(texto, colorFondo, colorTexto) {
    const div = document.getElementById('consola-resultados');
    div.style.display = 'block';
    div.innerHTML = texto;
    div.style.backgroundColor = colorFondo;
    div.style.color = colorTexto;
    div.style.border = `1px solid ${colorTexto}`;
    setTimeout(() => div.classList.add('mostrar'), 10);
}

// Formateo de Cédula
function formatearCedula(input) {
    let numeros = input.value.replace(/\D/g, '');
    if (numeros.length > 8) numeros = numeros.substring(0, 8);
    
    let resultado = '';
    for (let i = 0; i < numeros.length; i++) {
        if (i === 1 || i === 4) resultado += '.'; 
        else if (i === 7) resultado += '-'; 
        resultado += numeros[i];
    }
    input.value = resultado;
}

document.getElementById('ci_encontrada').addEventListener('input', function() { formatearCedula(this); });
document.getElementById('ci_perdida').addEventListener('input', function() { formatearCedula(this); });

// Animación de Scroll
function animacionScroll() {
    let revelables = document.querySelectorAll('.revelar');
    for (let i = 0; i < revelables.length; i++) {
        let alturaVentana = window.innerHeight;
        let topeElemento = revelables[i].getBoundingClientRect().top;
        let puntoRevelado = 100;
        if (topeElemento < alturaVentana - puntoRevelado) revelables[i].classList.add('activo');
    }
}
window.addEventListener('scroll', animacionScroll);
animacionScroll(); 

// Acordeón Dinámico
const acordeonBotones = document.querySelectorAll('.acordeon-btn');
acordeonBotones.forEach(boton => {
    boton.addEventListener('click', function() {
        const itemActual = this.parentElement;
        document.querySelectorAll('.acordeon-item').forEach(item => {
            if (item !== itemActual) {
                item.classList.remove('activo');
                item.querySelector('.acordeon-contenido').style.maxHeight = null;
            }
        });
        itemActual.classList.toggle('activo');
        const contenido = this.nextElementSibling;
        if (itemActual.classList.contains('activo')) {
            contenido.style.maxHeight = contenido.scrollHeight + "px";
        } else {
            contenido.style.maxHeight = null;
        }
    });
});