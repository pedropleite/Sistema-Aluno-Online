function showResults() {
    layersInputs.style.display = "flex"
    document.querySelector("#resultsLayer").style.display = "flex"

    dataBase.collection(value).onSnapshot((snapshot) => {
        snapshot.forEach(snap => {
            if (snap.data().nome == data) {
                let notas = snap.data().notas

                document.querySelectorAll(".notah1")[0].innerHTML = notas.historia.b1
                document.querySelectorAll(".notah2")[0].innerHTML = notas.historia.b2
                document.querySelectorAll(".notah3")[0].innerHTML = notas.historia.b3
                document.querySelectorAll(".notah4")[0].innerHTML = notas.historia.b4

                document.querySelectorAll(".notac1")[0].innerHTML = notas.ciencias.b1
                document.querySelectorAll(".notac2")[0].innerHTML = notas.ciencias.b2
                document.querySelectorAll(".notac3")[0].innerHTML = notas.ciencias.b3
                document.querySelectorAll(".notac4")[0].innerHTML = notas.ciencias.b4

                document.querySelectorAll(".notap1")[0].innerHTML = notas.portugues.b1
                document.querySelectorAll(".notap2")[0].innerHTML = notas.portugues.b2
                document.querySelectorAll(".notap3")[0].innerHTML = notas.portugues.b3
                document.querySelectorAll(".notap4")[0].innerHTML = notas.portugues.b4

                document.querySelectorAll(".notam1")[0].innerHTML = notas.matematica.b1
                document.querySelectorAll(".notam2")[0].innerHTML = notas.matematica.b2
                document.querySelectorAll(".notam3")[0].innerHTML = notas.matematica.b3
                document.querySelectorAll(".notam4")[0].innerHTML = notas.matematica.b4

                document.querySelectorAll(".notag1")[0].innerHTML = notas.geografia.b1
                document.querySelectorAll(".notag2")[0].innerHTML = notas.geografia.b2
                document.querySelectorAll(".notag3")[0].innerHTML = notas.geografia.b3
                document.querySelectorAll(".notag4")[0].innerHTML = notas.geografia.b4
            }
        })
    })
}