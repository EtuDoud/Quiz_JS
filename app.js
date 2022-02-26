const form = document.querySelector('.form-quiz');
let tableauResult = [];
const responses = ['c', 'a', 'b', 'a', 'c']
const emojis = ['✔️', '✨', '👀', '😭', '👎']
const titreResults = document.querySelector('.resultats h2')
const noteResults = document.querySelector('.note')
const aideResults = document.querySelector('.aide')
const toutesLesQuestions = document.querySelectorAll('.block-question');
let verifTableau = []

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // console.log(document.querySelector('input[name="q1"]:checked').value);

    for (i = 1; i < 6; i++) {
        tableauResult.push(document.querySelector(`input[name="q${i}"]:checked`).value)
    }
    // console.log(tableauResult)
    verifFunc(tableauResult)
        // tableauResult = []
})

function verifFunc(tabResults) {

    for (let a = 0; a < 5; a++) {

        if (tabResults[a] === responses[a]) {
            verifTableau.push(true)
        } else {
            verifTableau.push(false)
        }
    }

    // console.log(verifTableau)
    afficherResults(verifTableau)
    couleursFunction(verifTableau)
    verifTableau = []
}

function afficherResults(tabCheck) {

    const nbDeFaute = tabCheck.filter(el => el !== true).length
        // console.log(nbDeFaute)

    switch (nbDeFaute) {
        case 0:
            titreResults.innerText = `✔️ Bravo c'est un sans faute! ✔`
            aideResults.innerText = ''
            noteResults.innerText = '5/5'
            break
        case 1:
            titreResults.innerText = `✨ Vous y êtes presque ! ✨`
            aideResults.innerText = 'Retentez une autre réponse dans la case rouge, puis re-validez !'
            noteResults.innerText = '4/5'
            break
        case 2:
            titreResults.innerText = `✨ Encore un effort ... 👀`
            aideResults.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResults.innerText = '3/5'
            break
        case 3:
            titreResults.innerText = `👀 Il reste quelques erreurs. 😭`
            aideResults.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResults.innerText = '2/5'
            break
        case 4:
            titreResults.innerText = `😭 Peux mieux faire ! 😭`
            aideResults.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResults.innerText = '1/5'
            break
        case 5:
            titreResults.innerText = `👎 Peux mieux faire ! 👎`
            aideResults.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResults.innerText = '0/5'
            break

        default:
            'Wops, cas innatendu.'

    }

}

function couleursFunction(tabValBool) {

    for (let j = 0; j < tabValBool.length; j++) {

        if (tabValBool[j] === true) {
            toutesLesQuestions[j].style.background = 'lightgreen';
        } else {
            toutesLesQuestions[j].style.background = '#ffb8b8'
            toutesLesQuestions[j].classList.add('echec')

            setTimeout(() => {
                toutesLesQuestions[j].classList.remove('echec')
            }, 500)
        }
    }
}

toutesLesQuestions.forEach(item => {
    item.addEventListener('click', () => {
        item.style.background = 'white'
    })
})