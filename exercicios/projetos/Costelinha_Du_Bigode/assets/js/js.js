
// >>Modo Dark<<

/*aqui vou pegar os elementos
const chk = document.getElementById('chk');

//Aqui vou adicionar um evento "sempre que o chk mudar" ou uma class dark é criada ou apagada
chk.addEventListener("change", ()=>{
    document.body.classList.toggle('dark');
    
});
    document.addEventListener('DOMContentLoaded', ()=> {
        //Verifica se há uma preferência salva no localStorage
        const darkModePreference = localStorage.getItem('darkMode') === 'true';

        //Se a preferência for salva como true, aplica o modo escuro
        if (darkModePreference){
            document.body.classList.add('dark');
            document.getElementById('chk').checked = true;
        }

        //Adiciona um ouvinte de evento para o checkbox
        const checkbox = document.getElementById('chk');
        checkbox.addEventListener('change', () =>{
            if (checkbox.checked){
                document.body.classList.add('dark');
                localStorage.setItem('darkMode', 'true');
            }else{
                document.body.classList.remove('dark');
                localStorage.setItem('darkMode', 'false');
            }
        });
    });*/
    document.addEventListener('DOMContentLoaded', () => {
        const chk = document.getElementById('chk');

        //Verifica se há uma preferência salva no localStorage
        const darkModePreference = localStorage.getItem('darkMode') === 'true';

        //Se a preferência for salva como 'true', aplica modo escuro
        if (darkModePreference){
            document.body.classList.add('dark');
            if (chk){
                chk.check = true; //Marca o checkbox se ele existir
            }
        }
        //Se o checkbox for encontrado, adiciona um evento para alternar o modo escuro
        if (chk){
            chk.addEventListener('change', () => {
                if (chk.checked){
                    document.body.classList.add('dark');
                    localStorage.setItem('darkMode', 'true'); //Salva a preferência como 'true'
                } else{
                    document.body.classList.remove('dark');
                    localStorage.setItem('darkMode', 'false');//Salva a preferência como 'false'
                }
            });
        }
    });
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
//Reserva de Mesas
    // Dados de mesas (fictícias)
    const tables = [
        { id: 1, available: true, selected: false },
        { id: 2, available: true, selected: false },
        { id: 3, available: true, selected: false },
        { id: 4, available: true, selected: false },
        { id: 5, available: true, selected: false },
        { id: 6, available: true, selected: false },
        { id: 7, available: true, selected: false },
        { id: 8, available: true, selected: false }
    ];

    // Renderiza as mesas
    function renderTables() {
    const tableContainer = document.getElementById('table-container');
    tableContainer.innerHTML = '';  // Limpa a área antes de re-renderizar

    tables.forEach(table => {
        const tableElement = document.createElement('div');
        tableElement.classList.add('table');
        tableElement.setAttribute('data-id', table.id); // Adiciona o atributo data-id

        // Verifica se a mesa está ocupada
        if (!table.available) {
            tableElement.classList.add('occupied');
            tableElement.title = 'Mesa Ocupada';
        }

        // Verifica se a mesa foi selecionada
        if (table.selected) {
            tableElement.classList.add('selected');
        }

        // Adiciona evento de clique
        tableElement.addEventListener('click', () => selectTable(table));

        tableContainer.appendChild(tableElement);
    });
}


    // Função para selecionar a mesa
    function selectTable(table) {
        if (!table.available) return; // Não permite selecionar mesas ocupadas

        // Marca ou desmarca a mesa como selecionada
        table.selected = !table.selected;
        renderTables();
    }

// >>Modo Dark<<

//aqui vou pegar os elementos
const chk = document.getElementById('chk');
const table = document.querySelector('table');  // ou algum seletor de tabela específico


//Aqui vou adicionar um evento "sempre que o chk mudar" ou uma class dark é criada ou apagada
chk.addEventListener("change", ()=>{
    document.body.classList.toggle('dark');
    table.classList.toggle('dark');
});
    document.addEventListener('DOMContentLoaded', ()=> {
        //Verifica se há uma preferência salva no localStorage
        const darkModePreference = localStorage.getItem('darkMode') === 'true';

        //Se a preferência for salva como true, aplica o modo escuro
        if (darkModePreference){
            document.body.classList.add('dark');
            document.getElementById('chk').checked = true;
        }

        //Adiciona um ouvinte de evento para o checkbox
        const checkbox = document.getElementById('chk');
        checkbox.addEventListener('change', () =>{
            if (checkbox.checked){
                document.body.classList.add('dark');
                localStorage.setItem('darkMode', 'true');
            }else{
                document.body.classList.remove('dark');
                localStorage.setItem('darkMode', 'false');
            }
        });
    });