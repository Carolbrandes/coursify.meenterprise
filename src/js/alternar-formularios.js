export default function alternarFormulario() {
    console.log("carregado");
    const btnCadastro = document.querySelector("#acessoCadastro");
    const btnLogin = document.querySelector("#acessoLogin");
    const wrapperBtns = document.querySelector(".acesso__btns");
    const formCadastro = document.querySelector(".form-cadastro");
    const formLogin = document.querySelector(".form-login");


    btnLogin.addEventListener('click', (event) => {
        event.preventDefault();

        wrapperBtns.classList.remove("acesso__btn-cadastro");
        wrapperBtns.classList.add("acesso__btn-login");

        formCadastro.classList.remove("posicao-formCadastro-ativo");
        formLogin.classList.remove("posicao-formLogin-inativo");
        formCadastro.classList.add("posicao-formCadastro-inativo");
        formLogin.classList.add("posicao-formLogin-ativo");

        btnCadastro.classList.remove("botao-ativo", "posicao-botao-ativo-cadastro");
        btnCadastro.classList.add("botao-inativo", "posicao-botao-inativo-cadastro");
        btnLogin.classList.remove("botao-inativo", "posicao-botao-inativo-login");
        btnLogin.classList.add("posicao-botao-ativo-login", "botao-ativo");

    });

    btnCadastro.addEventListener('click', (event) => {
        event.preventDefault();

        wrapperBtns.classList.remove("acesso__btn-login");
        wrapperBtns.classList.add("acesso__btn-cadastro");

        formCadastro.classList.remove("posicao-formCadastro-inativo");
        formLogin.classList.remove("posicao-formLogin-ativo");
        formCadastro.classList.add("posicao-formCadastro-ativo");
        formLogin.classList.add("posicao-formLogin-inativo");

        btnCadastro.classList.remove("botao-inativo", "posicao-botao-inativo-cadastro");
        btnCadastro.classList.add("posicao-botao-ativo-cadastro", "botao-ativo");

        btnLogin.classList.remove("botao-ativo", "posicao-botao-ativo-login");
        btnLogin.classList.add("posicao-botao-inativo-login", "botao-inativo");
    });
}