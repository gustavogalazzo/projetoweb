const url = 'https://api-go-wash-efc9c9582687.herokuapp.com/api/user';     // LINK DA API 


async function cadastroUsuario(){    // função criada de forma asyncrona, ou seja, executa linha por linha. oque evita que o java processe os codigos antes de acessar a api ( caso o codigo fosse processado primeiro, daria que as variaveis são " indefinidas")
    let name = document.getElementById('name');
    let email = document.getElementById('email')   
    let cpf_cnpj = document.getElementById('cpf_cnpj')
    let password = document.getElementById('password')
    let birthday = document.getElementById('birthday')

    // essa verificação foi colocada aqui devido ser necessario executa-la antes do fetch(função que chama a API)
    if(name.value==''){
        alert("preencha o seu nome")
        return
        }
    
    if(cpf_cnpj.value==''){
        alert("preencha o seu CPF")
        return
        }

    if(email.value==''){
        alert("preencha o seu Email")
        return
        }

    if(birthday.value==''){
        alert("preencha o seu Aniversário")
        return
        }
    if(password.value==''){
        alert("preencha o sua Senha")
        return
        }
  
    

    

    let resposta = await fetch(url,{  // o Fetch é a função que irá conectar o parametro utilizado ao nosso codig  //Await significa que o codigo deve esperar até a chamada da API 
        method:"POST",
        body:JSON.stringify(
            {
                "name":name.value,
                "email":email.value,
                "user_type_id":1,
                "password":password.value,
                "cpf_cnpj":cpf_cnpj.value.replace(/[^0-9]/g,''), 
                "terms": 1,
                "birthday":birthday.value   
            }
        ),
        headers:{
            'Content-Type': 'application/json'
        }        
    });

    let data = await resposta.json();

    if(data.data?.statusCode && data.data.statusCode != 200){
        alert(data.data.errors);
        return;
    }



    alert("Cadastro feito com sucesso");
    window.location.href = "login.html";

 



}

   