"use strict";

const send = document.getElementById('send')
const reload = document.getElementById('reload')

function agregarEventos() {  
  reload.addEventListener("click", restart)
}