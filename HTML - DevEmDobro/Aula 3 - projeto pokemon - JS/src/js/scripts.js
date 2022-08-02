// document.getElementById("MyElement").classList.add('MyClass');
// document.getElementById("MyElement").classList.remove('MyClass');
// if ( document.getElementById("MyElement").classList.contains('MyClass')){}

function slideLeft(event){
    event.preventDefault();
    if (document.getElementById("cartao-1").classList.contains('selecionado')){
        document.getElementById("cartao-1").classList.remove('selecionado');
        document.getElementById("cartao-3").classList.add('selecionado');
    } else if (document.getElementById("cartao-3").classList.contains('selecionado')) {
        document.getElementById("cartao-3").classList.remove('selecionado');
        document.getElementById("cartao-2").classList.add('selecionado');
    } else {
        document.getElementById("cartao-2").classList.remove('selecionado');
        document.getElementById("cartao-1").classList.add('selecionado');
    }
}

function slideRight(event){
    event.preventDefault();
    if (document.getElementById("cartao-1").classList.contains('selecionado')){
        document.getElementById("cartao-1").classList.remove('selecionado');
        document.getElementById("cartao-2").classList.add('selecionado');
    } else if (document.getElementById("cartao-2").classList.contains('selecionado')) {
        document.getElementById("cartao-2").classList.remove('selecionado');
        document.getElementById("cartao-3").classList.add('selecionado');
    } else {
        document.getElementById("cartao-3").classList.remove('selecionado');
        document.getElementById("cartao-1").classList.add('selecionado');
    }
}

document.getElementById("button-left").addEventListener('click', slideLeft);
document.getElementById("button-right").addEventListener('click', slideRight);