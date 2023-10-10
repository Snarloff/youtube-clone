
# Clone da Interface do YouTube em Next.js 12

Este é um projeto de clone da interface do YouTube desenvolvido com Next.js 12, Material-UI para o design, autenticação utilizando NextAuth.js, Next-Connect para a API e MongoDB como banco de dados.

## Visão Geral

Este projeto tem como objetivo demonstrar a criação de uma aplicação web moderna com recursos de frontend e backend. Ele inclui as seguintes funcionalidades:

- Replicação da interface do YouTube, incluindo listagem de vídeos, reprodução e upagem de video na AWS (API).
- Autenticação de usuário com o **Google** usando NextAuth.js 
- Backend implementado com Next-Connect para fornecer APIs RESTful para a aplicação frontend.
- Armazenamento de dados em um banco de dados MongoDB.

## Fotos do Projeto


### Tema Claro

![Tema Branco](https://i.imgur.com/6csfQaA.png)

### Tema Escuro

![Tema Escuro](https://i.imgur.com/iZZX2eT.png)

## Tecnologias Utilizadas

- [Next.js 12](https://nextjs.org/): Framework de React para renderização do lado do servidor.
- [Material-UI](https://material-ui.com/): Biblioteca de componentes de UI para React.
- [NextAuth.js](https://next-auth.js.org/): Biblioteca de autenticação para Next.js.
- [MongoDB](https://www.mongodb.com/): Banco de dados NoSQL para armazenamento de dados.
- [Next-Connect](https://www.npmjs.com/package/next-connect): Middleware para criar rotas API no Next.js.

## Instalação e Execução

Certifique-se de ter o Node.js e o MongoDB instalados na sua máquina. Em seguida, siga os passos abaixo:

1. Clone este repositório:

   ```shell
   git clone https://github.com/Snarloff/youtube-clone.git
   ```

2. Navegue até o diretório do projeto:

   ```shell
   cd nome-do-repositorio
   ```

3. Instale as dependências:

   ```shell
   npm install
   ```

4. Configure as variáveis de ambiente. Crie um arquivo `.env.local` na raiz do projeto e defina as variáveis necessárias para a autenticação com NextAuth.js e a conexão com o MongoDB:

   ```env
   NEXTAUTH_URL=
   MONGODB_URI=
   AWS_SECRET_KEY=
   AWS_ACCESS_KEY=
   AWS_REGION=
   JWT_SECRET=
   GOOGLE_CLIENT_ID=
   GOGOLE_CLIENT_SECRET=
   ```

5. Inicie o servidor de desenvolvimento:

   ```shell
   npm run dev
   ```

6. Acesse a aplicação em seu navegador em `http://localhost:3000`.

## Contribuições

Contribuições são bem-vindas! Se você deseja contribuir para este projeto, siga as diretrizes de contribuição e envie um pull request.

## Problemas e Sugestões

Se você encontrar algum problema ou tiver sugestões para melhorar este projeto, por favor, abra uma issue neste repositório.

## Licença

Este projeto está sob a licença ISC.

---

```
Agradecemos por visitar este repositório e por seu interesse no projeto de clone da interface do YouTube em Next.js 12. Esperamos que este projeto seja útil e educativo para outros desenvolvedores interessados em construir aplicativos web modernos com Next.js e MongoDB.
```
