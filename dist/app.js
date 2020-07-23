root = document.getElementById('aside')

axios.get('https://dog.ceo/api/breeds/list/all')
    .then(resp => {
        let dados = resp.data.message
        racas = (Object.keys(dados))
      
        let selectRacas = document.createElement('select')
        selectRacas.id = "racas"
        selectRacas.classList.add('racas')

        for (let i = 0; i < racas.length; i++) {
            opcao = document.createElement('option')
            let itemDaLista = racas[i]
            opcao.innerText = itemDaLista
            selectRacas.append(opcao)
        }
        root.append(selectRacas)

    })

//trecho para seleção de cores
const cores = ["Black", "Red", "Green", "Blue", "Yellow", "Pink"]

let selectCores = document.createElement('select')
selectCores.id = 'cores'
selectCores.classList.add('cores')
for (let i = 0; i < cores.length; i++) {
    opcao = document.createElement('option')
    let itemDaLista = cores[i]
    opcao.innerText = itemDaLista
    selectCores.append(opcao)
}
root.append(selectCores)

//trecho para seleção de fonts
const fonts = ["Roboto", "Lexend Zetta", "Lobster", "Rowdies", "Shadows Into Light"]

let selectFonts = document.createElement('select')
selectFonts.id = 'fonts'
selectFonts.classList.add('fonts')
for (let i = 0; i < fonts.length; i++) {
    opcao = document.createElement('option')
    let itemDaLista = fonts[i]
    opcao.innerText = itemDaLista
    selectFonts.append(opcao)
}
root.append(selectFonts)