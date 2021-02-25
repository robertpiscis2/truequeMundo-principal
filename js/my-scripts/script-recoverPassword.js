const btnRecover = document.getElementById('btnSubmitRecover');

btnRecover.addEventListener('click', submitDataRecover);

async function submitDataRecover(){
    let email = document.getElementById('frmEmailRecover');

    let validation = validateEmail(email.value);

    if(validation == 'ok'){
        let url = 'http://truequemundo.xyz:3000/events/recuperarContrasena';

        const dataDetails = {
            method: 'POST',
            body: JSON.stringify({
            "email": email.value
            }),
            headers:{
                'Content-Type': 'application/json',
            }
            };     

        const response = await fetch(url, dataDetails);
        console.log(response);
        
        if(response.status === 200){
            const data = await response.json();
            sendMessageToUser(data);
            alert('Se ha enviado una nueva contraseña al celular registrado en el sistema');
        }
        else
            alert('El email ingresado es incorrecto, intente nuevamente');
    }
    else{
        alert('Los espacios no pueden estar en blanco');
    }
}

function validateEmail(email){
    if(email=='')
        return 'error';
    else
        return 'ok';
}

function sendMessageToUser(data){
    console.log(data);

    const message = "Su nueva clave es " + data.newPassword;

    // let urlWhatsapp = `https://api.whatsapp.com/send?phone=${data.celular}&text=${message}`;
    let urlWhatsapp = `https://api.whatsapp.com/api/send?phone=51957368262&text=esto%20es%20una%20prueba%20para%20la%20api%20de%20whatsapp`;

    console.log(urlWhatsapp);
    
}
