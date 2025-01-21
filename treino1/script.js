// $(document).ready(function() {
//     $("#btnClick").on("click", function() {
//         alert("você clicou");
//     })

//     $("#btnToggle").on("click", function() {
//         $("#toggleText").toggle();
//     })

//     $("#exampleForm").submit(function(e) {
//         e.preventDefault();
//         let name = $("#inputName").val().trim();
//         let email = $("#inputEmail").val().trim();
//         let id = $("#exampleTable tbody tr").length + 1;

//         $("#exampleTable tbody").append(

//             `
//             <tr>
//                 <td>${id}</td>
//                 <td>${name}</td>
//                 <td>${email}</td>
//                 <td><button class="btn btn-danger btn-sm remove-row" id="removeBtn">Remover</button></td>
//             </tr>
//             `
            
//         );

//         $("#inputName").val('');
//         $("#inputEmail").val('');

//         $(document).on("click", "#limparBtn", function(){
//             $("#inputName").val('');
//             $("#inputEmail").val('');
//         })

//     });

//     $(document).on("click","#removeBtn", function() {
//         $(this).closest("tr").remove();

//         $("#exampleTable tbody tr").each(function(i) {
//             $(this).find("td:first").text(i + 1);
//         });
//     });

//     $("#addTextButton").on("click", function() {
//         if ($("#dynamicTextarea").length === 0) {
//             $("#interactiveDev").append(
//                 `
//                 <textarea id="dynamicTextarea" class="form-control mt-3" rows="3" placeholder="Digite algo..."></textarea>
//                 <button id="submitTextButton" class="btn btn-success mt-2">Adicionar Texto</button>
//                 `
//             );
//         }
//     });

//     $(document).on("click", "#submitTextButton", function() {
//         let text = $("#dynamicTextarea").val().trim();

//         if(text !== "") {
//             $("#interactiveDiv").append(`<p>${text}</p>`);

//             $("#dynamicTextarea").remove();
//             $(this).remove();
//         } else {
//             alert("Por favor, digite algo antes de adicionar.")
//         }
//     });
// });

//CORREÇÃO PELO GPT

$(document).ready(function() {
    // Exibe um alerta quando o botão é clicado
    $("#btnClick").on("click", function() {
        alert("Você clicou!");
    });

    // Alterna a visibilidade do texto com animação
    $("#btnToggle").on("click", function() {
        $("#toggleText").slideToggle(); // Slide com efeito visual
    });

    // Evento de envio do formulário
    $("#exampleForm").submit(function(e) {
        e.preventDefault(); // Previne comportamento padrão do formulário

        // Obtém os valores dos campos com validação de entrada
        let name = $("#inputName").val().trim();
        let email = $("#inputEmail").val().trim();

        if (name === "" || email === "") {
            alert("Por favor, preencha todos os campos!");
            return; // Sai da função se os campos estiverem vazios
        }

        let id = $("#exampleTable tbody tr").length + 1;

        // Adiciona uma nova linha à tabela
        $("#exampleTable tbody").append(`
            <tr>
                <td>${id}</td>
                <td>${name}</td>
                <td>${email}</td>
                <td><button class="btn btn-danger btn-sm remove-row">Remover</button></td>
            </tr>
        `);

        // Limpa os campos do formulário
        $("#inputName, #inputEmail").val('');
    });

    // Botão de reset do formulário (separado do submit)
    $("#limparBtn").on("click", function() {
        $("#inputName, #inputEmail").val(''); // Limpa os campos
    });

    // Evento para remover linhas da tabela
    $(document).on("click", ".remove-row", function() {
        $(this).closest("tr").remove(); // Remove a linha

        // Atualiza os IDs das linhas restantes
        $("#exampleTable tbody tr").each(function(i) {
            $(this).find("td:first").text(i + 1);
        });
    });

    // Botão para adicionar um textarea e botão dinamicamente
    $("#addTextButton").on("click", function() {
        // Verifica se o textarea já existe
        if ($("#dynamicTextarea").length === 0) {
            $("#interactiveDiv").append(`
                <textarea id="dynamicTextarea" class="form-control mt-3" rows="3" placeholder="Digite algo..."></textarea>
                <button id="submitTextButton" class="btn btn-success mt-2">Adicionar Texto</button>
            `);
        }
    });

    // Evento para adicionar o texto digitado ao conteúdo da div
    $(document).on("click", "#submitTextButton", function() {
        let text = $("#dynamicTextarea").val().trim();

        if (text !== "") {
            // Adiciona o texto como um novo parágrafo
            $("#interactiveDiv").append(`<p>${text}</p>`);

            // Remove o textarea e o botão
            $("#dynamicTextarea, #submitTextButton").remove();
        } else {
            alert("Por favor, digite algo antes de adicionar!");
        }
    });
});
