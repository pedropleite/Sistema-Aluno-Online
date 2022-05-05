let indiceScienceActivity = 0

async function createScienceActivity() {
    let science = null
    await dataBase.collection(value).doc(data).get().then((snapshot) => {
        science = snapshot.data().atividades.Ciências
    })
    if (science.length > 0) {
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
}

let indiceHistoryActivity = 0

async function createHistoryActivity() {
    let history = null
    await dataBase.collection(value).doc(data).get().then((snapshot) => {
        history = snapshot.data().atividades.História
    })
    if (history.length > 0) {
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
}

let indiceMathActivity = 0

async function createMathActivity() {
    let math = null
    await dataBase.collection(value).doc(data).get().then((snapshot) => {
        math = snapshot.data().atividades.Matemática
    })
    if (math.length > 0) {
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
}

let indiceGeoActivity = 0

async function createGeographyActivity() {
    let geography = null
    await dataBase.collection(value).doc(data).get().then((snapshot) => {
        geography = snapshot.data().atividades.Geografia
    })
    if (geography.length > 0) {
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
}

let indicePortuguesActivity = 0

async function createPortuguesActivity() {
    let portugues = null
    await dataBase.collection(value).doc(data).get().then((snapshot) => {
        portugues = snapshot.data().atividades.Português
    })
    if (portugues.length > 0) {
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
}