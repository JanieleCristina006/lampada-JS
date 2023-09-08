let on = document.querySelector('.img-lampada');
let btn = document.querySelector('.btn-on');
let btnOff = document.querySelector('.btn-off');

function LampadaAcessa(){

    
    on.src = 'lapA2.jpg';
    on.style.opacity = '2';
   
}

function lampadaApagada(){
    on.style.opacity = '1';
    on.src = 'lamp2.jpg'
}