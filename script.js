function mostrarocultarsenha() {
    var senha = document.getElementById('senha')
    var imagem = document.getElementById('olho')

    if(senha.type == 'password') {
        senha.type = 'text'
        imagem.src = 'imagens/olho-fechado-branco.png'
    } else {
        senha.type = 'password'
        imagem.src = 'imagens/olho-branco.png'
    }
}