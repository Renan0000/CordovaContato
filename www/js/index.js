let meuapp = {
    inicializar: function(){
        console.log("inicializar: function(){...");
        document.addEventListener('deviceready',meuapp.onMyDeviceReady, false);
    },    


onMyDeviceReady: function(){
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById("btnSelecionaContato").addEventListener('click',meuapp.selecionarContato);
},

selecionarContato : function(){
    console.log("selecionarContato : function(){...");
    navigator.contacts.pickContact(function(c) {
        console.log("####=> Contacto Selecionado");
        console.log(c);
    },
    function (err){
        console.log("####=> Contato não selecionado");
        console.log(err);
    });

    }
}

meuapp.inicializar();