function showResults() {
    layersInputs.style.display = "flex"
    document.querySelector("#resultsLayer").style.display = "flex"

    dataBase.collection(value).onSnapshot((snapshot) => {
        snapshot.forEach(snap => {
            if (snap.data().nome == data) {
                let notas = snap.data().notas

                document.querySelectorAll(".notah1")[0].innerHTML = notas.historia.b1 + " <button class = 'h1' onclick='checkContent(this)'>+</button>"
                document.querySelectorAll(".notah2")[0].innerHTML = notas.historia.b2 + " <button class = 'h2' onclick='checkContent(this)'>+</button>"
                document.querySelectorAll(".notah3")[0].innerHTML = notas.historia.b3 + " <button class = 'h3' onclick='checkContent(this)'>+</button>"
                document.querySelectorAll(".notah4")[0].innerHTML = notas.historia.b4 + " <button class = 'h4' onclick='checkContent(this)'>+</button>"

                document.querySelectorAll(".notac1")[0].innerHTML = notas.ciencias.b1 + " <button class = 'c1' onclick='checkContent(this)'>+</button>"
                document.querySelectorAll(".notac2")[0].innerHTML = notas.ciencias.b2 + " <button class = 'c2' onclick='checkContent(this)'>+</button>"
                document.querySelectorAll(".notac3")[0].innerHTML = notas.ciencias.b3 + " <button class = 'c3' onclick='checkContent(this)'>+</button>"
                document.querySelectorAll(".notac4")[0].innerHTML = notas.ciencias.b4 + " <button class = 'c4' onclick='checkContent(this)'>+</button>"

                document.querySelectorAll(".notap1")[0].innerHTML = notas.portugues.b1 + " <button class = 'p1' onclick='checkContent(this)'>+</button>"
                document.querySelectorAll(".notap2")[0].innerHTML = notas.portugues.b2 + " <button class = 'p2' onclick='checkContent(this)'>+</button>"
                document.querySelectorAll(".notap3")[0].innerHTML = notas.portugues.b3 + " <button class = 'p3' onclick='checkContent(this)'>+</button>"
                document.querySelectorAll(".notap4")[0].innerHTML = notas.portugues.b4 + " <button class = 'p4' onclick='checkContent(this)'>+</button>"

                document.querySelectorAll(".notam1")[0].innerHTML = notas.matematica.b1 + " <button class = 'm1' onclick='checkContent(this)'>+</button>"
                document.querySelectorAll(".notam2")[0].innerHTML = notas.matematica.b2 + " <button class = 'm2' onclick='checkContent(this)'>+</button>"
                document.querySelectorAll(".notam3")[0].innerHTML = notas.matematica.b3 + " <button class = 'm3' onclick='checkContent(this)'>+</button>"
                document.querySelectorAll(".notam4")[0].innerHTML = notas.matematica.b4 + " <button class = 'm4' onclick='checkContent(this)'>+</button>"

                document.querySelectorAll(".notag1")[0].innerHTML = notas.geografia.b1 + " <button class = 'g1' onclick='checkContent(this)'>+</button>"
                document.querySelectorAll(".notag2")[0].innerHTML = notas.geografia.b2 + " <button class = 'g2' onclick='checkContent(this)'>+</button>"
                document.querySelectorAll(".notag3")[0].innerHTML = notas.geografia.b3 + " <button class = 'g3' onclick='checkContent(this)'>+</button>"
                document.querySelectorAll(".notag4")[0].innerHTML = notas.geografia.b4 + " <button class = 'g4' onclick='checkContent(this)'>+</button>"
            }
        })
    })
}



function checkContent(doc) {
    let classd = doc.getAttribute("class")
    let Bimestre = null
    classd.includes("1") ? Bimestre = "b1" :
        classd.includes("2") ? Bimestre = "b2" :
            classd.includes("3") ? Bimestre = "b3" :
                classd.includes("4") ? Bimestre = "b4" : "";
    classd.includes("h") ? addHistoryRecord(Bimestre) :
        classd.includes("c") ? addCiensceRecord(Bimestre) :
            classd.includes("p") ? addPortuguesRecord(Bimestre) :
                classd.includes("m") ? addMatematicaRecord(Bimestre) :
                    classd.includes("g") ? addGeografiaRecord(Bimestre) : "";
}

function addHistoryRecord(Bimestre) {


    if (Bimestre == "b1") {
        dataBase.collection(value).doc(data).update({
            "notas.historia.b1": firebase.firestore.FieldValue.increment(1)
        })

    } else if (Bimestre == "b2") {
        dataBase.collection(value).doc(data).update({
            "notas.historia.b2": firebase.firestore.FieldValue.increment(1)
        })
    } else if (Bimestre == "b3") {
        dataBase.collection(value).doc(data).update({
            "notas.historia.b3": firebase.firestore.FieldValue.increment(1)
        })
    } else {
        dataBase.collection(value).doc(data).update({
            "notas.historia.b4": firebase.firestore.FieldValue.increment(1)
        })
    }
}

function addCiensceRecord(Bimestre) {
    if (Bimestre == "b1") {
        dataBase.collection(value).doc(data).update({
            "notas.ciencias.b1": firebase.firestore.FieldValue.increment(1)
        })
    } else if (Bimestre == "b2") {
        dataBase.collection(value).doc(data).update({
            "notas.ciencias.b2": firebase.firestore.FieldValue.increment(1)
        })
    } else if (Bimestre == "b3") {
        dataBase.collection(value).doc(data).update({
            "notas.ciencias.b3": firebase.firestore.FieldValue.increment(1)
        })
    } else {
        dataBase.collection(value).doc(data).update({
            "notas.ciencias.b4": firebase.firestore.FieldValue.increment(1)
        })
    }
}

function addGeografiaRecord(Bimestre) {
    if (Bimestre == "b1") {
        dataBase.collection(value).doc(data).update({
            "notas.geografia.b1": firebase.firestore.FieldValue.increment(1)
        })
    } else if (Bimestre == "b2") {
        dataBase.collection(value).doc(data).update({
            "notas.geografia.b2": firebase.firestore.FieldValue.increment(1)
        })
    } else if (Bimestre == "b3") {
        dataBase.collection(value).doc(data).update({
            "notas.geografia.b3": firebase.firestore.FieldValue.increment(1)
        })
    } else {
        dataBase.collection(value).doc(data).update({
            "notas.geografia.b4": firebase.firestore.FieldValue.increment(1)
        })
    }
}

function addMatematicaRecord(Bimestre) {
    if (Bimestre == "b1") {
        dataBase.collection(value).doc(data).update({
            "notas.matematica.b1": firebase.firestore.FieldValue.increment(1)
        })
    } else if (Bimestre == "b2") {
        dataBase.collection(value).doc(data).update({
            "notas.matematica.b2": firebase.firestore.FieldValue.increment(1)
        })
    } else if (Bimestre == "b3") {
        dataBase.collection(value).doc(data).update({
            "notas.matematica.b3": firebase.firestore.FieldValue.increment(1)
        })
    } else {
        dataBase.collection(value).doc(data).update({
            "notas.matematica.b4": firebase.firestore.FieldValue.increment(1)
        })
    }
}

function addPortuguesRecord(Bimestre) {
    if (Bimestre == "b1") {
        dataBase.collection(value).doc(data).update({
            "notas.portugues.b1": firebase.firestore.FieldValue.increment(1)
        })
    } else if (Bimestre == "b2") {
        dataBase.collection(value).doc(data).update({
            "notas.portugues.b2": firebase.firestore.FieldValue.increment(1)
        })
    } else if (Bimestre == "b3") {
        dataBase.collection(value).doc(data).update({
            "notas.portugues.b3": firebase.firestore.FieldValue.increment(1)
        })
    } else {
        dataBase.collection(value).doc(data).update({
            "notas.portugues.b4": firebase.firestore.FieldValue.increment(1)
        })
    }
}