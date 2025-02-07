# Send Email firebase Function 📧
## Descrição
Esta é uma Firebase functions que tem como objetivo enviar emails para usuarios de uma coleção do cloud firestore database, para a construção dessa função foi utilizado JavaScript, NodeJs, nodeMailer, e o Firebase functions, utilizando do o gmmail como ferramenta para distribuir os emails

## 🛠️ Ferramentos Utilizadas 
<img src="https://github.com/tandpfun/skill-icons/blob/main/icons/JavaScript.svg" width="50px"> <img src="https://github.com/tandpfun/skill-icons/blob/main/icons/NodeJS-Dark.svg" width="50px"> <img src="https://github.com/tandpfun/skill-icons/blob/main/icons/Firebase-Dark.svg" width="50px"> 
<img src="https://github.com/tandpfun/skill-icons/blob/main/icons/Gmail-Dark.svg" width="50px">

## Como executa o projeto
### Pré-requisitos
- Node: 20.12.2
- firebase-admin: 12.6.0
- nodemailer: 6.9.16
- firebase-admin: 12.6.0
### Passo a Passo para Execução
#### 1. Clone o repositorio
```bash
git clone https://github.com/Walmircsanto/Send-email-function.git
cd Send-email-function
````

### 2. Baixar as dependencias do packager.json
```Node
  npm install
```
### 3. Configure as credenciais do gmail
Para usar o serviço do gmail e necessario realizar uma etapa de ativação do seu serviço, para isso siga o video a seguir e realize o procedimento para configurar o seu email ate o minuto 04:49 [Assista ao vídeo](https://www.youtube.com/watch?v=_MwdIaMy_Ao&t=289s)  
edite as credenciais do arquivo example.env
```javascript
#configuração - credenciais email
USER_EMAIL=SEU_EMAIL_CONFIGURADO
PASSWORD_EMAIL=SUA_CHAVE_GERADA
MAIL_HOST=smtp.gmail.com
EMAIL_PORT=PORTA_DO_SERVIÇO_DE_EMAIL
});
```

### 4. Configurar o Node.js e a CLI do Firebase
```bash
 npm install -g firebase-tools
```

### 5. Logar na sua conta do Firebase
```bash
  firebase login
```

### 6. Inicializar o Firebase
```bash
  firebase init firestore
```

### 7. Executar o firebase functions
```bash
  firebase init functions
```

### 8. Compile e Execute a aplicação
Execute o comando 
```bash
  firebase emulators:start
```
Ao executar esse comando e necessario ter o java instalado na sua maquina de forma correta

### 5. Acesse a função gerada pelo firebase functions 🌐
Quando o emulador roda ira gera uma url parecida com essa
``` http://seu-ip-gerado/logs?q=metadata.emulator.name%3D%22functions%```
Utilizamos o Postman como nosso client para consumir a url criada, mas você pode usar qualquer um da sua preferencia. 


