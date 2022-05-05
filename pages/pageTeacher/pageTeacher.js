const select = document.querySelector("#anos")
const containerAlunos = document.querySelector("#containerAlunos")
const alunosSelect = document.querySelector("#alunos")
const categorys = document.querySelector("#containerNavInputs")
const layersInputs = document.querySelector("#layersInputs")
const missLayer = document.querySelector("#missLayer")
let lockMode = true
let cleanOptions = true
var value = null
var data = null

document.querySelector("#miss").addEventListener("click", showMiss)
document.querySelector("#results").addEventListener("click", showResults)
document.querySelector("#activity").addEventListener("click", showLayerActivity)
document.querySelector("#warning").addEventListener("click", showLayerWarning)
document.querySelector("#closeMissLayer").addEventListener("click", closeMissLayer)
document.querySelector("#closeActivityLayer").addEventListener("click", closeActivityLayer)
document.querySelector("#closeResultsLayer").addEventListener("click", closeResultsLayer)
document.querySelector("#closeWarningLayer").addEventListener("click", closeWarningLayer)
document.querySelector("#submitSelect").addEventListener("click", checkOptions)
document.querySelector("#submitStudant").addEventListener("click", showCategorys)
document.querySelector("#submitActivity").addEventListener("click", createActivity)
document.querySelector("#submitWarning").addEventListener("click", createWarning)


function logout() {
    auth.signOut()
    location.href = "../../index.html"
}

function checkOptions() {
    if (lockMode) {
        if (cleanOptions) {
            value = select.options[select.selectedIndex].value
            showOptions()
            lockMode = false
            cleanOptions = false
            setTimeout(() => {
                lockMode = true
            }, 5000);
        }
        else {
            alunosSelect.innerHTML = ""
            cleanOptions = true
            checkOptions()
        }
    }
    else return
}

function showOptions() {
    dataBase.collection(value).get()
        .then((snapshot) =>
            snapshot.forEach(element => {
                const option = document.createElement("option")
                option.innerHTML = element.data().nome
                alunosSelect.appendChild(option)
                containerAlunos.style.display = "flex"
            })
        )
}

function showCategorys() {
    categorys.style.display = "flex"
    data = alunosSelect.options[alunosSelect.selectedIndex].value
    window.scroll({
        top: 100000,
        behavior: 'smooth'
    });
}

function closeMissLayer() {
    layersInputs.style.display = "none"
    missLayer.style.display = "none"
}

function closeActivityLayer() {
    activityLayer.style.display = "none"
    layersInputs.style.display = "none"
}

function closeResultsLayer() {
    document.querySelector("#resultsLayer").style.display = "none"
    layersInputs.style.display = "none"
}

function closeWarningLayer() {
    warningLayer.style.display = "none"
    layersInputs.style.display = "none"
}

function showLayerActivity() {
    layersInputs.style.display = "flex"
    activityLayer.style.display = "flex"
    createScienceActivity()
    createHistoryActivity()
    createMathActivity()
    createGeographyActivity()
    createPortuguesActivity()
}

function showLayerWarning() {
    layersInputs.style.display = "flex"
    warningLayer.style.display = "flex"
    createScienceWarning()
    createHistoryWarning()
    createMathWarning()
    createGeographyWarning()
    createPortuguesWarning()
}




