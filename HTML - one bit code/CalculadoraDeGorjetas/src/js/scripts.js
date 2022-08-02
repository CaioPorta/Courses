function calculateTip(event){
    event.preventDefault(); /*faz com que não recarregue a pagina ao submit*/
    let bill = document.getElementById("bill").value;
    let serviceQual = document.getElementById("serviceQual").value;
    let people = document.getElementById("people").value;

    if (serviceQual == "-1") {
        alert("Selecione o serviço");
        return;
    } else if (bill <= 0 | people <= 0) {
        alert("Confira os valores inseridos");
        return;
    }

    if (people == 1) {
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }

    let total = (bill * serviceQual) / people;
    total = total.toFixed(2);
    document.getElementById("tip").innerHTML = total;
    document.getElementById("totalTip").style.display = "block";
}

document.getElementById('totalTip').style.display = "none";

document.getElementById("tipsForm").addEventListener('submit', calculateTip);