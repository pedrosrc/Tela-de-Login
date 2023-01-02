var resp = document.querySelector('div#res')

function design(){
    resp.style.color="white"
    resp.style.backgroundColor="green"
    resp.style.borderRadius="10px"
    resp.style.maxWidth="190px"
    resp.style.padding="7px"
    resp.style.margin="auto"
    resp.style.textAlign="center"
    resp.style.marginTop="20px"
    event.preventDefault()
}
function error(){
    design()
    resp.style.backgroundColor="red"
    resp.style.maxWidth="220px"
}
function logar(){
    let input = document.querySelector('div.user .form').value;
    let input_pass = document.querySelector('div.user .form-pass').value;
        if(input.length == 0 || input_pass.length ==0 ){
        resp.innerHTML=('Digite Corretamente os Dados!')
        error()
        window.alert("Você precisa digitar seus dados!")
    }else if (input.length > 1 || input_pass.length > 1 ){
        resp.innerHTML=("Você está logado!")
        design()
        window.location.assign("https://github.com/apenasopedro/Tela-de-Login")
        
    }
}
function cadastrar(){
    let input = document.querySelector('div.user .form').value;
    let input_pass = document.querySelector('div.user .form-pass').value;
    let input_name = document.querySelector('div.user .form-user').value;
    let input_user = document.querySelector('div.user .form-name').value;
    if(input_name.length==0 || input_user.length==0 || input.length == 0 || input_pass.length ==0 ){
        resp.innerHTML=('Digite Corretamente os Dados!')
        error()
        window.alert("Você precisa digitar seus dados!")
    }else if (input_name.length > 1 || input_user.length > 1 || input.length > 1 || input_pass.length > 1 ){
        resp.innerHTML=("Você está Cadastrado!")
        design()
        window.location.replace("https://apenasopedro.github.io/Tela-de-Login/")
       
        
    }
}