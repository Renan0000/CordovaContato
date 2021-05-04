let meuapp = {
    contatoSelecionado: null,

    inicializar: function(){
        console.log("inicializar: function(){...");
        document.addEventListener('deviceready',meuapp.onMyDeviceReady, false);
    },    


onMyDeviceReady: function(){
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById("btnSelecionaContato").addEventListener('click',meuapp.selecionarContato);
},

retornoAoPrimeiroPlano:function(onresumeEvent){
    console.log("#### -> retornoAoPrimeiroPlano:function(){...");
},

selecionarContato : function(){
    console.log("selecionarContato : function(){...");
    navigator.contacts.pickContact(function(c) {
        console.log("####=> Contacto Selecionado");
        console.log(c);
        meuapp.contatoSelecionado = c;
        console.log (c.displayName);
        let spanElement = document.getElementById("nomeDoContato").innerHTML = c.displayName;
        console.log(spanElement);

        console.log(c.photos);
        let imgElement = document.getElementById("imgDoContato");
        console.log("TAG Imagem...");
        console.log(imgDoContato);
        console.log("Value do obj Imagem do array photos");
        console.log(c.photos[0].value);

        imgElement.src = c.photos[0].value;

    },
    function (err){
        console.log("####=> Contato não selecionado");
        console.log(err);
    });

    }
}

meuapp.inicializar();
