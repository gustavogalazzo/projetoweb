const url = 'https://api-go-wash-efc9c9582687.herokuapp.com/api/user';

async function cadastroUsuario(){   
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
    
        if(email.value==''){
        alert("preencha o seu Email")
        return
        }

    

    let resposta = await fetch(url,{
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

    //if (cpf_cnpj.value !=)

    if(data.data?.statusCode && data.data.statusCode != 200){
        alert(data.data.errors);
        return;
    }
    alert("Cadastro feito com sucesso");
    window.location.href = "login.html";

 



}

   