function validarCadastro() {
    var form = document.getElementById("cadastroForm");
    var inputs = form.querySelectorAll("input[required], select[required]");
    var isValid = true;

    inputs.forEach(function(input) {
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add("is-invalid");
        } else {
            input.classList.remove("is-invalid");
        }
    });

    if (isValid) {
        // Todos os campos estão preenchidos, pode prosseguir com o cadastro
        alert("Cadastro realizado com sucesso!");
        // Aqui você pode enviar o formulário ou executar outra ação
    } else {
        alert("Por favor, preencha todos os campos obrigatórios.");
    }
}