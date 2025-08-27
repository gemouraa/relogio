const horas = document.querySelector('#horas')
const minutos = document.querySelector('#minutos')
const segundos = document.querySelector('#segundos')

//eventos

setInterval(relogio, 1000)

//funções

function relogio(){
    
    hoje = new Date()

    hr = hoje.getHours()
    min = hoje.getminuts()
    sec = hoje.getSeconds()
    

    if(sec<10){
        sec = '0'+sec
    }
    horas.textContent = hr
    minutos.textContent = min
    segundos.textContent = sec
}