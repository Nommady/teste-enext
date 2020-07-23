function salvarValores() {
    let nome = document.getElementById('nomeDoCachorro').value
    if (nome == "") {
        alert("Você salvou seu cachorro sem um nome :(")
    }
    let font = document.getElementById('fonts').value
    let cor = document.getElementById('cores').value
    let raca = document.getElementById('racas').value

    date = new Date()
    var dataAtual = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes();

    localStorage.setItem("Nome", nome)
    localStorage.setItem("Font", font)
    localStorage.setItem("Cor", cor)
    localStorage.setItem("Raça", raca)
    localStorage.setItem("Data", dataAtual)



    return
}
function setValores() {
    let nome = localStorage.getItem('Nome')
    let font = localStorage.getItem('Font')
    let cor = localStorage.getItem('Cor')
    let raca = localStorage.getItem('Raça')

    let nomeInput = document.getElementById('nomeDoCachorro').value
    if (nome == nomeInput) {
        let aviso = document.getElementById('salvo')
        aviso.innerText = "salvo com sucesso"
    }


    let setNome = document.getElementById('nome')
    setNome.style.fontFamily = font
    setNome.style.color = cor
    setNome.innerText = nome

    axios.get(`https://dog.ceo/api/breed/${raca}/images`)
        .then(resp => {
            img = resp.data.message[0]
            imagem = document.getElementById('image')
            imagem.src = img
        })
    return
}
setValores()
function del() {
    let aviso = document.getElementById('salvo')
    setTimeout(function () {
        aviso.innerHTML = " "
    }, 1000)
}
