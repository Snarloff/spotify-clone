# Clone da Versão Web do Spotify

Este é um projeto de clonagem da versão web do Spotify, desenvolvido com Next.js 13 e estilizado com Tailwind CSS. O objetivo deste projeto é criar uma réplica da interface web do Spotify.

## Visão Geral

Neste projeto, você encontrará uma réplica da interface web do Spotify, incluindo funcionalidades como:

- Exibição de playlists, álbuns e músicas.
- Reprodutor de músicas com controles de reprodução.
- Efeito de gradiante verde ao passar o mouse pelos albums

### Melhorias Futuras (To-Do)

- [  ] Adicionar a fonte real do Spotify para corresponder à identidade visual.
- [ ] Melhorar espaçamentos e estilos dos cards de playlists, álbuns e músicas.
- [ ] Melhorar a responsividade em dispositivos móveis.
- [  ] Reproduzir áudio e mostrar o contador

## Tecnologias Utilizadas

- [Next.js 13](https://nextjs.org/): Framework de React para renderização do lado do servidor.
- [Tailwind CSS](https://tailwindcss.com/): Biblioteca de estilos utilitários.
- [ESLint](https://eslint.org/): Linter para JavaScript/TypeScript.
- [Prettier](https://prettier.io/): Formatador de código.
- [Eslint Config @snarloff](https://www.npmjs.com/package/@snarloff/eslint-config): Pacote de configuração ESLint personalizado.

## Configuração do ESLint e Prettier

Para manter a consistência e a qualidade do código, este projeto utiliza a configuração personalizada do ESLint disponível em [@snarloff/eslint-config](https://www.npmjs.com/package/@snarloff/eslint-config). Para configurar o ESLint e o Prettier no seu projeto, siga os passos abaixo:

1. Instale o pacote do ESLint e Prettier:

   ```shell
   npm install eslint prettier --save-dev
   ```

2. Instale a configuração personalizada:

   ```shell
   npm install @snarloff/eslint-config --save-dev
   ```

3. Crie um arquivo `.eslintrc.js` na raiz do seu projeto e adicione o seguinte conteúdo:

   ```javascript
   module.exports = {
     extends: ['@snarloff'],
   };
   ```

Agora você tem a configuração do ESLint e Prettier configurada de acordo com o padrão de código deste projeto.

## Execução do Projeto

Siga os passos abaixo para executar a aplicação:

1. Clone este repositório:

   ```shell
   git clone https://github.com/Snarloff/spotify-clone.git
   ```

2. Navegue até o diretório do projeto:

   ```shell
   cd nome-do-repositorio
   ```

3. Instale as dependências:

   ```shell
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```shell
   npm run dev
   ```

5. Acesse a aplicação em seu navegador em `http://localhost:3000`.

## Contribuições

Contribuições são bem-vindas! Se você deseja contribuir para este projeto, siga as diretrizes de contribuição e envie um pull request.

## Problemas e Sugestões

Se você encontrar algum problema ou tiver sugestões para melhorar este projeto, por favor, abra uma issue neste repositório.
