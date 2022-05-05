function showMiss() {
    layersInputs.style.display = "flex"
    missLayer.style.display = "flex"

    dataBase.collection(value).onSnapshot((snapsho) => {
        snapsho.forEach(snap => {
            if (snap.data().nome == data) {
                let faltas = snap.data().faltas

                document.querySelectorAll(".faltah1")[0].innerHTML = faltas.historia.b1
                document.querySelectorAll(".faltah2")[0].innerHTML = faltas.historia.b2
                document.querySelectorAll(".faltah3")[0].innerHTML = faltas.historia.b3
                document.querySelectorAll(".faltah4")[0].innerHTML = faltas.historia.b4

                document.querySelectorAll(".faltac1")[0].innerHTML = faltas.ciencias.b1
                document.querySelectorAll(".faltac2")[0].innerHTML = faltas.ciencias.b2
                document.querySelectorAll(".faltac3")[0].innerHTML = faltas.ciencias.b3
                document.querySelectorAll(".faltac4")[0].innerHTML = faltas.ciencias.b4

                document.querySelectorAll(".faltap1")[0].innerHTML = faltas.portugues.b1
                document.querySelectorAll(".faltap2")[0].innerHTML = faltas.portugues.b2
                document.querySelectorAll(".faltap3")[0].innerHTML = faltas.portugues.b3
                document.querySelectorAll(".faltap4")[0].innerHTML = faltas.portugues.b4

                document.querySelectorAll(".faltam1")[0].innerHTML = faltas.matematica.b1
                document.querySelectorAll(".faltam2")[0].innerHTML = faltas.matematica.b2
                document.querySelectorAll(".faltam3")[0].innerHTML = faltas.matematica.b3
                document.querySelectorAll(".faltam4")[0].innerHTML = faltas.matematica.b4

                document.querySelectorAll(".faltag1")[0].innerHTML = faltas.geografia.b1
                document.querySelectorAll(".faltag2")[0].innerHTML = faltas.geografia.b2
                document.querySelectorAll(".faltag3")[0].innerHTML = faltas.geografia.b3
                document.querySelectorAll(".faltag4")[0].innerHTML = faltas.geografia.b4
            }
        })
    })
}