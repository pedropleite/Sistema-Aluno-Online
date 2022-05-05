checkEmail()

let data = null
let value = null
const layersInputs = document.querySelector("#layersInputs")
const activityLayer = document.querySelector("#activityLayer")
const missLayer = document.querySelector("#missLayer")
const warningLayer = document.querySelector("#warningLayer")

document.querySelector("#miss").addEventListener("click", showMiss)
document.querySelector("#activity").addEventListener("click", showActivity)
document.querySelector("#warning").addEventListener("click", showWarning)
document.querySelector("#results").addEventListener("click", showResults)
document.querySelector("#closeMissLayer").addEventListener("click", closeMissLayer)
document.querySelector("#closeActivityLayer").addEventListener("click", closeActivityLayer)
document.querySelector("#closeResultsLayer").addEventListener("click", closeResultsLayer)
document.querySelector("#closeWarningLayer").addEventListener("click", closeWarningLayer)

function checkEmail() {
    let emailStudent = localStorage.getItem("email")
    dataBase.collection("1°Ano").get().then((snapshot) => {
        snapshot.forEach(doc => {
            if (doc.data().email == emailStudent) {
                value = "1°Ano"
                data = doc.data().nome
            }
        });
    })
    dataBase.collection("2°Ano").get().then((snapshot) => {
        snapshot.forEach(doc => {
            if (doc.data().email == emailStudent) {
                value = "2°Ano"
                data = doc.data().nome
            }
        });
    })
    dataBase.collection("3°Ano").get().then((snapshot) => {
        snapshot.forEach(doc => {
            if (doc.data().email == emailStudent) {
                value = "3°Ano"
                data = doc.data().nome
            }
        });
    })
}

function logout() {
    auth.signOut()
    location.href = "../../index.html"
    localStorage.removeItem("email")
}

function closeMissLayer() {
    layersInputs.style.display = "none"
    missLayer.style.display = "none"
}

function closeActivityLayer() {
    layersInputs.style.display = "none"
    activityLayer.style.display = "none"
}

function closeResultsLayer() {
    document.querySelector("#resultsLayer").style.display = "none"
    layersInputs.style.display = "none"
}

function closeWarningLayer() {
    warningLayer.style.display = "none"
    layersInputs.style.display = "none"
}

function showActivity() {
    layersInputs.style.display = "flex"
    activityLayer.style.display = "flex"
    createScienceActivity()
    createHistoryActivity()
    createMathActivity()
    createGeographyActivity()
    createPortuguesActivity()
}

function showWarning() {
    layersInputs.style.display = "flex"
    warningLayer.style.display = "flex"
    createScienceWarning()
    createHistoryWarning()
    createMathWarning()
    createGeographyWarning()
    createPortuguesWarning()
}
