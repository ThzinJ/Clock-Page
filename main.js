const horas = document.getElementById('hours')
const minutos = document.getElementById('minutes')
const segundos = document.getElementById('seconds')

function newTime (){
   const date = new Date();
   
   const hours = date.getHours()
   const minutes = date.getMinutes()
   const seconds = date.getSeconds()
   
   horas.textContent = fixTime(hours)
   minutos.textContent = fixTime(minutes)
   segundos.textContent = fixTime(seconds)
}

function fixTime(time) {
   return time < 10 ? '0'+time : time
}

setInterval(() => {
   newTime()
}, 1000)
