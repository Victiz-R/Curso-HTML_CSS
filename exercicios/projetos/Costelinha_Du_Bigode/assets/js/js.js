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
//Modo escuro nas paginas usando o localStorage

//aqui vou pegar os elementos
const chk = document.getElementById('chk');

//Aqui vou adicionar um evento "sempre que o chk mudar" ou uma class dark é criada ou apagada
chk.addEventListener("change", ()=>{
    document.body.classList.toggle('dark');
    table.classList.toggle('dark');
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
   