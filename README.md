Turma: 88434

Aluno: Kaio Sergio Sales Nunes

Matéria:Implantação de Sistemas

Docente:Professor Anderson Lima

# 🚗 Gerenciamento de Veículos com Dark Mode

Este é um projeto de gerenciamento de veículos desenvolvido com **React** para o frontend e **Spring Boot** para o backend. O projeto inclui funcionalidades de CRUD (Create, Read, Update, Delete) para veículos e um botão de dark mode para alternar entre temas claro e escuro.

---

## 📋 Funcionalidades

- **Listar veículos**: Exibe todos os veículos cadastrados.
- **Adicionar veículo**: Permite cadastrar um novo veículo.
- **Editar veículo**: Permite atualizar os dados de um veículo existente.
- **Excluir veículo**: Remove um veículo da lista.
- **Dark Mode**: Alterna entre temas claro e escuro com um botão interativo.

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React**: Biblioteca JavaScript para construção da interface do usuário.
- **Axios**: Cliente HTTP para fazer requisições ao backend.
- **Bootstrap**: Framework CSS para estilização responsiva.


### Backend
- **Spring Boot**: Framework Java para desenvolvimento do backend.
- **Spring Data JPA**: Para persistência de dados.
- **mysql Database**: Banco de dados em memória para desenvolvimento.

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
- **Node.js** (para o frontend)
- **Java JDK** (para o backend)
- **Maven** (para gerenciamento de dependências do backend)

### Passo a Passo

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   cd nome-do-repositorio
   ```

2. **Backend**:
   
   - Rode o arquivo ProdutosApplication.java
   
   - O backend estará disponível em `http://localhost:8080`.
  
   - garante que as dependencias do data-jpa,mysql,lombok,spring dev tools e web estão instaladas corretamente.
  
   - com suas devidas extenções
  
   - ### Backend
```
backend/
├── src/
│   ├── main/
│   │   ├── java/com/example/veiculo/
│   │   │   ├── controller/
│   │   │   ├── model/
│   │   │   ├── repository/
│   │   │   ├── service/
│   │   │   └── VeiculosApplication.java
│   │   └── resources/
│   │       └── application.properties
│   └── test/
└── pom.xml
```



---

3. **Frontend**:
   
   - Instale as dependências na sua pasta:
    
     // Instalar globalment

npm install -g create-react-app

//Depois, crie o app:
create-react-app meu-app

ou

npx create-react-app front-end



   
   - O frontend estará disponível em `http://localhost:3000`.

---

adcione os arquvivos do meu projeto as pastar criadas no no meu projeto,pois o github não me permite transportar os modulos para o repositorio,garanta que os inmports e afims do seu projeto estão combinando com os meus


### Frontend
```
frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── VeiculoList.js
│   │   ├── VeiculoForm.js
│   │   └── DarkModeToggle.js
│   ├── services/
│   │   └── api.js
│   ├── styles/
│   │   ├── app.css
│   │   
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## 🖼️ Capturas de Tela

### Modo Claro
![Modo Claro](https://via.placeholder.com/600x400.png?text=Modo+Claro)

### Modo Escuro
![Modo Escuro](https://via.placeholder.com/600x400.png?text=Modo+Escuro)

---

## 📄 Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

---


## 🙏 Agradecimentos

- À comunidade de desenvolvedores por compartilhar conhecimento.
- Aos criadores das bibliotecas e frameworks utilizados.

---

Esse README é um modelo básico. Você pode personalizá-lo conforme necessário, adicionando mais detalhes sobre o projeto, screenshots reais, ou links para demonstrações ao vivo. Se precisar de mais ajuda, é só avisar! 😊
