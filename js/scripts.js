//Alerts section

function show_alert0(){
  alert('Te queda mucho por conocer de nuestros servicios, no te los pierdas!')
}

window.onmousemove = function (event) {
  if (event.pageY < 10){
    show_alert0();
  }
}

function show_alert1(){
  alert('Por cada rueda no utilizada te regalamos una semana en mar de las pampas con todo incluído!')
}

function show_alert2(){
  alert('Más práctico imposible! Así te podes ubicar siempre, no importa donde te encuentres')
}

function show_alert3(){
  alert('Te tento lo de la parrilla! Lamentablemente dejamos de ofrecer el servicio en 3 días, apurate a conseguirlo!')
}


// Clock section

function getFormattedNumber(number) {
  return number < 10 ? "0" + number.toString() : number.toString();
}

window.setInterval(function(){
  var now = new Date();
  var hours = now.getHours();
  var mins = now.getMinutes();
  var secs = now.getSeconds();

  document.getElementById("hours").innerHTML = getFormattedNumber(hours);
  document.getElementById("minutes").innerHTML = getFormattedNumber(mins);
  document.getElementById("seconds").innerHTML = getFormattedNumber(secs);


}, 500)


//Stopwatch section

var hours;
var mins;
var secs;
var milliseconds;

var start;
var now;
var interval;

var running = false; 
var passed = 0;

function currentTime(){
  
  // Calculate the current date from milliseconds (epoch)
  now = new Date().getTime();
  passed = now - start;

  hours = Math.floor(passed / 3600000);
  milliseconds = passed - (hours * 3600000);

  mins = Math.floor(milliseconds / 60000);
  milliseconds -= (mins * 60000);

  secs = Math.floor(milliseconds / 1000);
  milliseconds -= (secs * 1000);

  return getFormattedNumber(hours) + ":" 
                + getFormattedNumber(mins) + ":" 
                + getFormattedNumber(secs) + ":" 
                + getFormattedNumber(milliseconds);
}

document.getElementById("start_stop").onclick = function() {

    if (!running) {
        // clock running
        running = true;
        start = new Date().getTime() - passed;       

        interval = window.setInterval(function(){  
          document.getElementById("stopwatch").innerHTML = currentTime();
        },10);

    } else {
        // clock stopped
        window.clearInterval(interval);
        running = false;
    }
}

document.getElementById("reset").onclick = function() {
     // reset clock
    start = new Date().getTime();
    if (!running) {
        passed = 0;
        document.getElementById("stopwatch").innerHTML = "00:00:00 000";
    }
}

// Mobile Menu section

document.getElementById("hamburguer-icon").onclick = function() {
  document.getElementById("sliding-header-menu-outer").style.right = "0px";
}

document.getElementById("sliding-header-menu-close-button").onclick = function() {
  document.getElementById("sliding-header-menu-outer").style.right = "-320px";
}


// About us Tab section

var aboutUs = {
  "Misión": "Hacer que cada auto, sin importar cuán raro sea, pueda seguir rodando con estilo. Nos comprometemos a ofrecer repuestos que no solo funcionen, sino que también hagan reír. Porque un auto feliz es un auto que no se detiene… a menos que esté en un semáforo, claro.",
  "Visión": "Nuestro objetivo es que un día, en cada calle, los autos no solo giren en las esquinas, sino que puedan rotar sobre su mismo eje.",
  "Valores": "<ul><li>Risas sobre Repuestos</li><li>Compromiso con la policía</li><li>Comunidad Automovilística</li><li>Empatía con las sirenas</li><li>40% de descuento de lunes a martes</li></ul>"
};

var unseletectedColor = "#646872";
var seletectedColor = "#2A2D34";

var aboutUsTabs = document.getElementsByClassName("single-tab");

for (var i = 0; i < aboutUsTabs.length; i++) {
  aboutUsTabs[i].onclick = function() {
    var clickedOption = this.innerHTML;
    document.getElementById("box-text").innerHTML = aboutUs[clickedOption];

    for (var j = 0; j < aboutUsTabs.length; j++) {
      
      if(aboutUsTabs[j] == this){
        this.style.backgroundColor = seletectedColor;
        this.style.fontWeight = "bold";
    
      } else {
        aboutUsTabs[j].style.backgroundColor = unseletectedColor;
        aboutUsTabs[j].style.fontWeight = "normal";
      } 
     
    }
  }
}

// Service slider section

var ourServices = [
  {
    'title': 'Diseñamos Capot',
    'text': 'Nos especializamos en hacer que tu capot sea la estrella del espectáculo (o al menos el más divertido del estacionamiento). Ya sea que quieras un capot que grite "¡Mírame!" o uno que susurre "Soy el auto más elegante de la cuadra", ¡tenemos lo que necesitas!'
  },

  {
    'title': 'Fabricamos Ruedas Cuadradas',
    'text': '¿Te has cansado de las mismas aburridas ruedas redondas? ¿Quieres destacar en la carretera y causar confusión al mismo tiempo? Tenemos la solución perfecta para ti: ¡ruedas que desafían la gravedad y la lógica!'
  },

  {
    'title': 'Tenemos una compañia paralela de venta de repuestos',
    'text': '¿Tu auto se siente un poco… meh? ¿Hay más ruidos extraños que en una película de terror? No te preocupes, en Nuestra Compañía Paralela de Venta de Repuestos, estamos aquí para salvar el día (y tu auto) con repuestos tan buenos que hasta tu vehículo querrá darles una palmadita en la espalda.'
  }
  
];

var prevArrow = document.getElementById("service-previous");
var nextArrow = document.getElementById("service-next");
var index = 0;
var title = document.getElementById("service-title");
var text = document.getElementById("service-text");


function loadInfo(){
  title.innerHTML = ourServices[index].title;
  text.innerHTML = ourServices[index].text;
}

nextArrow.onclick = function() { 
  index = (index + 1) % ourServices.length;
  loadInfo();  
}

prevArrow.onclick = function() { 
  index = (index - 1 + ourServices.length) % ourServices.length;
  loadInfo();
}



// Footer section

function getFormattedDateOfToday() {
  const daysOfWeek = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];;
  
  const date = new Date();
  
  const dayOfWeek = daysOfWeek[date.getDay()];
  const dayOfMonth = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  
  return `${dayOfWeek} ${dayOfMonth} de ${month} del ${year}`;
}

document.getElementById("current_year").innerHTML = getFormattedDateOfToday();



  
   


   