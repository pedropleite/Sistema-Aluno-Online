const warningLayer = document.querySelector("#warningLayer")

function createWarning() {

    const selectWarning = document.querySelector("#selectWarning")
    const materia = selectWarning.options[selectWarning.selectedIndex].value
    const textWarning = document.querySelector("#textWarning").value


    if (materia == "ciencias") {
        dataBase.collection(value).doc(data).update({
            "advertencias.Ciências": firebase.firestore.FieldValue.arrayUnion(textWarning)
        })
        createScienceWarning()
    } else if (materia == "historia") {
        dataBase.collection(value).doc(data).update({
            "advertencias.História": firebase.firestore.FieldValue.arrayUnion(textWarning)
        })
        createHistoryWarning()
    } else if (materia == "matematica") {
        dataBase.collection(value).doc(data).update({
            "advertencias.Matemática": firebase.firestore.FieldValue.arrayUnion(textWarning)
        })
        createMathWarning()
    } else if (materia == "geografia") {
        dataBase.collection(value).doc(data).update({
            "advertencias.Geografia": firebase.firestore.FieldValue.arrayUnion(textWarning)
        })
        createGeographyWarning()
    } else {
        dataBase.collection(value).doc(data).update({
            "advertencias.Português": firebase.firestore.FieldValue.arrayUnion(textWarning)
        })
    }

}

let indiceScienceWarning = 0
async function createScienceWarning() {
    let science = null
    await dataBase.collection(value).doc(data).get().then((snapshot) => {
        science = snapshot.data().advertencias.Ciências
    })
    while (indiceScienceWarning < science.length) {
        let divFather = document.createElement("div")
        let span1 = document.createElement("span1")
        let span2 = document.createElement("span2")
        let btn = document.createElement("button")

        span1.innerText = "Ciência"
        span2.innerText = science[indiceScienceWarning]
        btn.innerText = "Acesse aqui"

        span1.classList.add("spanWarning")
        span2.classList.add("spanWarning")
        btn.classList.add("btnWarning")
        divFather.classList.add("warning")
        divFather.appendChild(span1)
        divFather.appendChild(span2)
        divFather.appendChild(btn)

        warningLayer.appendChild(divFather)
        indiceScienceWarning++
    }
}

let indiceHistoryWarning = 0
async function createHistoryWarning() {
    let history = null
    await dataBase.collection(value).doc(data).get().then((snapshot) => {
        history = snapshot.data().advertencias.História
    })
    while (indiceHistoryWarning < history.length) {
        let divFather = document.createElement("div")
        let span1 = document.createElement("span1")
        let span2 = document.createElement("span2")
        let btn = document.createElement("button")

        span1.innerText = "História"
        span2.innerText = history[indiceHistoryWarning]
        btn.innerText = "Acesse aqui"

        span1.classList.add("spanWarning")
        span2.classList.add("spanWarning")
        btn.classList.add("btnWarning")
        divFather.classList.add("warning")
        divFather.appendChild(span1)
        divFather.appendChild(span2)
        divFather.appendChild(btn)

        warningLayer.appendChild(divFather)
        indiceHistoryWarning++
    }
}

let indiceMathWarning = 0
async function createMathWarning() {
    let math = null
    await dataBase.collection(value).doc(data).get().then((snapshot) => {
        math = snapshot.data().advertencias.Matemática
    })
    while (indiceMathWarning < math.length) {
        let divFather = document.createElement("div")
        let span1 = document.createElement("span1")
        let span2 = document.createElement("span2")
        let btn = document.createElement("button")

        span1.innerText = "Matemática"
        span2.innerText = math[indiceMathWarning]
        btn.innerText = "Acesse aqui"

        span1.classList.add("spanWarning")
        span2.classList.add("spanWarning")
        btn.classList.add("btnWarning")
        divFather.classList.add("warning")
        divFather.appendChild(span1)
        divFather.appendChild(span2)
        divFather.appendChild(btn)

        warningLayer.appendChild(divFather)
        indiceMathWarning++
    }
}

let indiceGeoWarning = 0
async function createGeographyWarning() {
    let geography = null
    await dataBase.collection(value).doc(data).get().then((snapshot) => {
        geography = snapshot.data().advertencias.Geografia
    })
    while (indiceGeoWarning < geography.length) {
        let divFather = document.createElement("div")
        let span1 = document.createElement("span1")
        let span2 = document.createElement("span2")
        let btn = document.createElement("button")

        span1.innerText = "Geografia"
        span2.innerText = geography[indiceGeoWarning]
        btn.innerText = "Acesse aqui"

        span1.classList.add("spanWarning")
        span2.classList.add("spanWarning")
        btn.classList.add("btnWarning")
        divFather.classList.add("warning")
        divFather.appendChild(span1)
        divFather.appendChild(span2)
        divFather.appendChild(btn)

        warningLayer.appendChild(divFather)
        indiceGeoWarning++
    }
}

let indicePortuguesWarning = 0
async function createPortuguesWarning() {
    let portugues = null
    await dataBase.collection(value).doc(data).get().then((snapshot) => {
        portugues = snapshot.data().advertencias.Português
    })
    while (indicePortuguesWarning < portugues.length) {
        let divFather = document.createElement("div")
        let span1 = document.createElement("span1")
        let span2 = document.createElement("span2")
        let btn = document.createElement("button")

        span1.innerText = "Português"
        span2.innerText = portugues[indicePortuguesWarning]
        btn.innerText = "Acesse aqui"

        span1.classList.add("spanWarning")
        span2.classList.add("spanWarning")
        btn.classList.add("btnWarning")
        divFather.classList.add("warning")
        divFather.appendChild(span1)
        divFather.appendChild(span2)
        divFather.appendChild(btn)

        warningLayer.appendChild(divFather)
        indicePortuguesWarning++
    }
}