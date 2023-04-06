function getNotifications(){

    if( !("Notification" in window)) {
        console.log('Navegador não suporta notificações');
    } else if ( Notification.permission === "granted") {
        const notify = new Notification('As notificações estão ativadas!');
    } else if ( Notification.permission !== "denied") {
        Notification.requestPermission( function(permission){
            if(permission === "granted"){
                const notify = new Notification('Notificações ativadas!');
            }
        })
    }

} 