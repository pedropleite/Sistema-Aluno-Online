const activityLayer = document.querySelector("#activityLayer")

function createActivity() {

    const selectActivity = document.querySelector("#selectActivity")
    const materia = selectActivity.options[selectActivity.selectedIndex].value
    const textActivity = document.querySelector("#textActivity").value


    if (materia == "ciencias") {
        dataBase.collection(value).doc(data).update({
            "atividades.Ciências": firebase.firestore.FieldValue.arrayUnion(textActivity)
        })
        createScienceActivity()
    } else if (materia == "historia") {
        dataBase.collection(value).doc(data).update({
            "atividades.História": firebase.firestore.FieldValue.arrayUnion(textActivity)
        })
        createHistoryActivity()
    } else if (materia == "matematica") {
        dataBase.collection(value).doc(data).update({
            "atividades.Matemática": firebase.firestore.FieldValue.arrayUnion(textActivity)
        })
        createMathActivity()
    } else if (materia == "geografia") {
        dataBase.collection(value).doc(data).update({
            "atividades.Geografia": firebase.firestore.FieldValue.arrayUnion(textActivity)
        })
        createGeographyActivity()
    } else {
        dataBase.collection(value).doc(data).update({
            "atividades.Português": firebase.firestore.FieldValue.arrayUnion(textActivity)
        })
    }

}

let indiceScienceActivity = 0
async function createScienceActivity() {
    let science = null
    await dataBase.collection(value).doc(data).get().then((snapshot) => {
        science = snapshot.data().atividades.Ciências
    })
    while (indiceScienceActivity < science.length) {
        let divFather = document.createElement("div")
        let span1 = document.createElement("span1")
        let span2 = document.createElement("span2")
        let btn = document.createElement("button")

        span1.innerText = "Ciência"
        span2.innerText = science[indiceScienceActivity]
        btn.innerText = "Acesse aqui"

        span1.classList.add("spanActivity")
        span2.classList.add("spanActivity")
        btn.classList.add("btnActivity")
        divFather.classList.add("activity")
        divFather.appendChild(span1)
        divFather.appendChild(span2)
        divFather.appendChild(btn)

        activityLayer.appendChild(divFather)
        indiceScienceActivity++
    }
}

let indiceHistoryActivity = 0
async function createHistoryActivity() {
    let history = null
    await dataBase.collection(value).doc(data).get().then((snapshot) => {
        history = snapshot.data().atividades.História
    })
    while (indiceHistoryActivity < history.length) {
        let divFather = document.createElement("div")
        let span1 = document.createElement("span1")
        let span2 = document.createElement("span2")
        let btn = document.createElement("button")

        span1.innerText = "História"
        span2.innerText = history[indiceHistoryActivity]
        btn.innerText = "Acesse aqui"

        span1.classList.add("spanActivity")
        span2.classList.add("spanActivity")
        btn.classList.add("btnActivity")
        divFather.classList.add("activity")
        divFather.appendChild(span1)
        divFather.appendChild(span2)
        divFather.appendChild(btn)

        activityLayer.appendChild(divFather)
        indiceHistoryActivity++
    }
}

let indiceMathActivity = 0
async function createMathActivity() {
    let math = null
    await dataBase.collection(value).doc(data).get().then((snapshot) => {
        math = snapshot.data().atividades.Matemática
    })
    while (indiceMathActivity < math.length) {
        let divFather = document.createElement("div")
        let span1 = document.createElement("span1")
        let span2 = document.createElement("span2")
        let btn = document.createElement("button")

        span1.innerText = "Matemática"
        span2.innerText = math[indiceMathActivity]
        btn.innerText = "Acesse aqui"

        span1.classList.add("spanActivity")
        span2.classList.add("spanActivity")
        btn.classList.add("btnActivity")
        divFather.classList.add("activity")
        divFather.appendChild(span1)
        divFather.appendChild(span2)
        divFather.appendChild(btn)

        activityLayer.appendChild(divFather)
        indiceMathActivity++
    }
}

let indiceGeoActivity = 0
async function createGeographyActivity() {
    let geography = null
    await dataBase.collection(value).doc(data).get().then((snapshot) => {
        geography = snapshot.data().atividades.Geografia
    })
    while (indiceGeoActivity < geography.length) {
        let divFather = document.createElement("div")
        let span1 = document.createElement("span1")
        let span2 = document.createElement("span2")
        let btn = document.createElement("button")

        span1.innerText = "Geografia"
        span2.innerText = geography[indiceGeoActivity]
        btn.innerText = "Acesse aqui"

        span1.classList.add("spanActivity")
        span2.classList.add("spanActivity")
        btn.classList.add("btnActivity")
        divFather.classList.add("activity")
        divFather.appendChild(span1)
        divFather.appendChild(span2)
        divFather.appendChild(btn)

        activityLayer.appendChild(divFather)
        indiceGeoActivity++
    }
}

let indicePortuguesActivity = 0
async function createPortuguesActivity() {
    let portugues = null
    await dataBase.collection(value).doc(data).get().then((snapshot) => {
        portugues = snapshot.data().atividades.Português
    })
    while (indicePortuguesActivity < portugues.length) {
        let divFather = document.createElement("div")
        let span1 = document.createElement("span1")
        let span2 = document.createElement("span2")
        let btn = document.createElement("button")

        span1.innerText = "Português"
        span2.innerText = portugues[indicePortuguesActivity]
        btn.innerText = "Acesse aqui"

        span1.classList.add("spanActivity")
        span2.classList.add("spanActivity")
        btn.classList.add("btnActivity")
        divFather.classList.add("activity")
        divFather.appendChild(span1)
        divFather.appendChild(span2)
        divFather.appendChild(btn)

        activityLayer.appendChild(divFather)
        indicePortuguesActivity++
    }
}