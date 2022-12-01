'use strict';

const minutos = document.getElementById('minutos');
const horas = document.getElementById('horas');
const dias = document.getElementById('dias');

const contagemRegressiva = (tempo) => {
    const pararContagem = () => clearInterval(id);
        const contar = () => {
            if (tempo==0){
                pararContagem();
            } else {
                atualizarTempo(tempo);
                tempo--;
            }
    }
    const id = setInterval(contar, 1000);
}

const formataDigito = (digito) => `0${digito}`.slice(-2);

const tempoRestante = () => {
    // 1 de Janeiro de 1970
    const dataEvento = new Date ('2022-12-30 23:59:00');
    const hoje = Date.now();
    return Math.floor((dataEvento - hoje) / 1000);
}

const atualizarTempo = (tempo) =>{
    const segundos = document.getElementById('segundos');
    const minutos = document.getElementById('minutos');
    const horas = document.getElementById('horas');
    const dias = document.getElementById('dias');
    
    const qtdSegundos = tempo%60;
    const qtdMinutos = Math.floor((tempo % (60 * 60)) / 60);
    const qtdHoras = Math.floor((tempo % (60 * 60 * 24)) / (60 * 60));
    const qtdDias = Math.floor(tempo / (60*60*24));

    dias.innerHTML = formataDigito(qtdDias);
    horas.innerHTML = formataDigito(qtdHoras);
    minutos.innerHTML = formataDigito(qtdMinutos);
    segundos.innerHTML = formataDigito(qtdSegundos);
}


contagemRegressiva(tempoRestante());