function showMiss() {
    layersInputs.style.display = "flex"
    missLayer.style.display = "flex"

    dataBase.collection(value).onSnapshot((snapsho) => {
        snapsho.forEach(snap => {
            if (snap.data().nome == data) {
                let faltas = snap.data().faltas

                document.querySelectorAll(".faltah1")[0].innerHTML = faltas.historia.b1 + " <button class = 'h1' onclick='checkbtn(this)'>+</button>"
                document.querySelectorAll(".faltah2")[0].innerHTML = faltas.historia.b2 + " <button class = 'h2' onclick='checkbtn(this)'>+</button>"
                document.querySelectorAll(".faltah3")[0].innerHTML = faltas.historia.b3 + " <button class = 'h3' onclick='checkbtn(this)'>+</button>"
                document.querySelectorAll(".faltah4")[0].innerHTML = faltas.historia.b4 + " <button class = 'h4' onclick='checkbtn(this)'>+</button>"

                document.querySelectorAll(".faltac1")[0].innerHTML = faltas.ciencias.b1 + " <button class = 'c1' onclick='checkbtn(this)'>+</button>"
                document.querySelectorAll(".faltac2")[0].innerHTML = faltas.ciencias.b2 + " <button class = 'c2' onclick='checkbtn(this)'>+</button>"
                document.querySelectorAll(".faltac3")[0].innerHTML = faltas.ciencias.b3 + " <button class = 'c3' onclick='checkbtn(this)'>+</button>"
                document.querySelectorAll(".faltac4")[0].innerHTML = faltas.ciencias.b4 + " <button class = 'c4' onclick='checkbtn(this)'>+</button>"

                document.querySelectorAll(".faltap1")[0].innerHTML = faltas.portugues.b1 + " <button class = 'p1' onclick='checkbtn(this)'>+</button>"
                document.querySelectorAll(".faltap2")[0].innerHTML = faltas.portugues.b2 + " <button class = 'p2' onclick='checkbtn(this)'>+</button>"
                document.querySelectorAll(".faltap3")[0].innerHTML = faltas.portugues.b3 + " <button class = 'p3' onclick='checkbtn(this)'>+</button>"
                document.querySelectorAll(".faltap4")[0].innerHTML = faltas.portugues.b4 + " <button class = 'p4' onclick='checkbtn(this)'>+</button>"

                document.querySelectorAll(".faltam1")[0].innerHTML = faltas.matematica.b1 + " <button class = 'm1' onclick='checkbtn(this)'>+</button>"
                document.querySelectorAll(".faltam2")[0].innerHTML = faltas.matematica.b2 + " <button class = 'm2' onclick='checkbtn(this)'>+</button>"
                document.querySelectorAll(".faltam3")[0].innerHTML = faltas.matematica.b3 + " <button class = 'm3' onclick='checkbtn(this)'>+</button>"
                document.querySelectorAll(".faltam4")[0].innerHTML = faltas.matematica.b4 + " <button class = 'm4' onclick='checkbtn(this)'>+</button>"

                document.querySelectorAll(".faltag1")[0].innerHTML = faltas.geografia.b1 + " <button class = 'g1' onclick='checkbtn(this)'>+</button>"
                document.querySelectorAll(".faltag2")[0].innerHTML = faltas.geografia.b2 + " <button class = 'g2' onclick='checkbtn(this)'>+</button>"
                document.querySelectorAll(".faltag3")[0].innerHTML = faltas.geografia.b3 + " <button class = 'g3' onclick='checkbtn(this)'>+</button>"
                document.querySelectorAll(".faltag4")[0].innerHTML = faltas.geografia.b4 + " <button class = 'g4' onclick='checkbtn(this)'>+</button>"
            }
        })
    })
}



function checkbtn(doc) {
    let classd = doc.getAttribute("class")
    let Bimestre = null
    classd.includes("1") ? Bimestre = "b1" :
        classd.includes("2") ? Bimestre = "b2" :
            classd.includes("3") ? Bimestre = "b3" :
                classd.includes("4") ? Bimestre = "b4" : "";
    classd.includes("h") ? addHistory(Bimestre) :
        classd.includes("c") ? addCiensce(Bimestre) :
            classd.includes("p") ? addPortugues(Bimestre) :
                classd.includes("m") ? addMatematica(Bimestre) :
                    classd.includes("g") ? addGeografia(Bimestre) : "";
}

function addHistory(Bimestre) {
    if (Bimestre == "b1") {
        dataBase.collection(value).doc(data).update({
            "faltas.historia.b1": firebase.firestore.FieldValue.increment(1)
        })
    } else if (Bimestre == "b2") {
        dataBase.collection(value).doc(data).update({
            "faltas.historia.b2": firebase.firestore.FieldValue.increment(1)
        })
    } else if (Bimestre == "b3") {
        dataBase.collection(value).doc(data).update({
            "faltas.historia.b3": firebase.firestore.FieldValue.increment(1)
        })
    } else {
        dataBase.collection(value).doc(data).update({
            "faltas.historia.b4": firebase.firestore.FieldValue.increment(1)
        })
    }
}

function addCiensce(Bimestre) {
    if (Bimestre == "b1") {
        dataBase.collection(value).doc(data).update({
            "faltas.ciencias.b1": firebase.firestore.FieldValue.increment(1)
        })
    } else if (Bimestre == "b2") {
        dataBase.collection(value).doc(data).update({
            "faltas.ciencias.b2": firebase.firestore.FieldValue.increment(1)
        })
    } else if (Bimestre == "b3") {
        dataBase.collection(value).doc(data).update({
            "faltas.ciencias.b3": firebase.firestore.FieldValue.increment(1)
        })
    } else {
        dataBase.collection(value).doc(data).update({
            "faltas.ciencias.b4": firebase.firestore.FieldValue.increment(1)
        })
    }
}

function addGeografia(Bimestre) {
    if (Bimestre == "b1") {
        dataBase.collection(value).doc(data).update({
            "faltas.geografia.b1": firebase.firestore.FieldValue.increment(1)
        })
    } else if (Bimestre == "b2") {
        dataBase.collection(value).doc(data).update({
            "faltas.geografia.b2": firebase.firestore.FieldValue.increment(1)
        })
    } else if (Bimestre == "b3") {
        dataBase.collection(value).doc(data).update({
            "faltas.geografia.b3": firebase.firestore.FieldValue.increment(1)
        })
    } else {
        dataBase.collection(value).doc(data).update({
            "faltas.geografia.b4": firebase.firestore.FieldValue.increment(1)
        })
    }
}

function addMatematica(Bimestre) {
    if (Bimestre == "b1") {
        dataBase.collection(value).doc(data).update({
            "faltas.matematica.b1": firebase.firestore.FieldValue.increment(1)
        })
    } else if (Bimestre == "b2") {
        dataBase.collection(value).doc(data).update({
            "faltas.matematica.b2": firebase.firestore.FieldValue.increment(1)
        })
    } else if (Bimestre == "b3") {
        dataBase.collection(value).doc(data).update({
            "faltas.matematica.b3": firebase.firestore.FieldValue.increment(1)
        })
    } else {
        dataBase.collection(value).doc(data).update({
            "faltas.matematica.b4": firebase.firestore.FieldValue.increment(1)
        })
    }
}

function addPortugues(Bimestre) {
    falta
    if (Bimestre == "b1") {
        dataBase.collection(value).doc(data).update({
            "faltas.portugues.b1": firebase.firestore.FieldValue.increment(1)
        })
    } else if (Bimestre == "b2") {
        dataBase.collection(value).doc(data).update({
            "faltas.portugues.b2": firebase.firestore.FieldValue.increment(1)
        })
    } else if (Bimestre == "b3") {
        dataBase.collection(value).doc(data).update({
            "faltas.portugues.b3": firebase.firestore.FieldValue.increment(1)
        })
    } else {
        dataBase.collection(value).doc(data).update({
            "faltas.portugues.b4": firebase.firestore.FieldValue.increment(1)
        })
    }
}