$(document).ready(function() {
    $('#formulário_de_tarefa').on('submit', function(e) {
        e.preventDefault();
        var nomeDaTarefa = $('#entrada_de_tarefa').val();
        if (nomeDaTarefa) {
            // Adiciona um botão de apagar junto com cada tarefa
            $('#lista_de_tarefas').append('<li>' + nomeDaTarefa + ' <button class="delete">Apagar</button></li>');
            $('#entrada_de_tarefa').val(''); // Limpa o campo de entrada
        }
    });

    $('#lista_de_tarefas').on('click', 'li', function() {
        $(this).css('text-decoration', function(index, valorAtual) {
            return valorAtual === 'line-through' ? 'none' : 'line-through';
        });
    });

    // Evento para o botão de apagar
    $('#lista_de_tarefas').on('click', '.delete', function(e) {
        e.stopPropagation(); // Evita que o evento de clique no li seja também disparado
        $(this).parent().remove(); // Remove o li que contém o botão de apagar
    });
});
