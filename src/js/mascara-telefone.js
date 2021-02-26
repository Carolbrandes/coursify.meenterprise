export default function mascaraTelefone() {
   
    const telefone = document.querySelector("#telefone");

    telefone.addEventListener('keyup', () => {
        let telefoneText = telefone.value;
        telefone.value = telefoneText.replace(/\D/g, '').replace(/^(\d{2})(\d)/g,"($1) $2").replace(/(\d)(\d{4})$/,"$1-$2");
    })

}