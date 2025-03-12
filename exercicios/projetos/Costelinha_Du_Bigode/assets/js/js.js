let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();
}, 5000)

function nextImage(){
    count++;
    if(count>3){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}

//Vai para o formulario de envio de pedido

function enviarpedido() {
    var numerotelefone = "+558591392420"; // Número de telefone para o WhatsApp (no formato internacional)

    var nome = document.querySelector('.nome').value.trim();
    var localizacao = document.querySelector('.localizacao').value.trim();
    var telefone = document.querySelector('.telefone').value.trim();
    var txtpedido = document.querySelector('.txtpedido').value.trim();

    // Verifica se todos os campos foram preenchidos
    if (!nome || !localizacao || !telefone || !txtpedido) {
        alert("Por favor, preencha todos os campos!");
        return; // Impede o envio se algum campo estiver vazio
    }

    // Codificando os valores para a URL
    var url = "https://wa.me/" + numerotelefone + "?text=" +
        "*Nome:* " + encodeURIComponent(nome) + "%0a" +
        "*Localização:* " + encodeURIComponent(localizacao) + "%0a" +
        "*Telefone:* " + encodeURIComponent(telefone) + "%0a" +
        "*Pedido:* " + encodeURIComponent(txtpedido) + "%0a%0a" +
        "Esse é o pedido da pessoa acima!";

    // Redireciona para o WhatsApp diretamente
    window.location.href = url;
}

// Js Reserva de mesas
    //Dados das mesas
    const tables = [
        { id: 1, available: true, selected: false },
        { id: 2, available: true, selected: false },
        { id: 3, available: false, selected: false },
        { id: 4, available: true, selected: false },
        { id: 5, available: true, selected: false },
        { id: 6, available: false, selected: false },
        { id: 7, available: true, selected: false },
        { id: 8, available: true, selected: false },
    ];

    //Renderizar as mesas
    function renderTables (){
        const tableContainer = document.getElementById('table-container');
        tableContainer.innerHTML = ''; //Vai limpar as seleções antes de re-renderizar

        tables.forEach(table =>{
            const tableELement = document.createElement('div');
            tableELement.classList.add('table');

            //Verificar se a mesa está ocupada
            if (!table.available) {
                tableElement.classList.add('occupied');
                tableElement.title = 'Mesa Ocupada';
            }

            // Verifica se a mesa foi selecionada
            if (table.selected) {
                tableElement.classList.add('selected');
            }

            //Adiciona a função ao clique para selecionar a mesa
            tableELement.addEventListener('click', () => selectTable(table));

            tableContainer.appendChild(tableELement);
        });
    }

    //Função para selecionar a mesa
    function selectTable(table) {
        if (!table.available) return; // Não permite selecionar mesas ocupadas

        // Marca ou desmarca a mesa como selecionada
        table.selected = !table.selected;
        renderTables();
    }

    //Função para reservar
    document.getElementById('reserva_mesas').addEventListener('submit',
        function(event) {
            event.preventDefault();

            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;
            const numeroPessoas = document.getElementById('numeroPessoas').value;

            //Verifica se uma mesa foi selecionada
            const selectedTable = table.find(table => table.selected);

            if (!selectedTable) {
                alert("Por favor, selecione uma mesa!");
                return;
            }

            //Atualiza a disponibilidade da mesa (agora ocupada)
            selectedTable.available = false;
            selectedTable.selected = false;

            //Exibe a confirmação
            const confirmation = document.getElementById('confirmation');
            confirmation.style.display = 'block';
            confirmation.innerHTML = `Reserva Confirmada! <br> Mesa ${selectedTable.id} <br> Data: ${date} <br> Hora: ${time} <br> Número de Pessoas: ${numeroPessoas}`;

            //Limpa o formulário e re-renderiza as mesas
            document.getElementById('reserva_mesas').reset();
                renderTables();
        });
            //Chama a função para renderizar as mesas ao carregar a página
            renderTables();