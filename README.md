# Frenet - Simulador de fretes (Leonardo)

Acesse em: https://test-frenet.vercel.app/

## Tech Stack

**Web:** Vue 3, Vite, Vuetify e Pinia

**Testes unitários:** Vitest e Vue test utils


## Decisões técnicas

#### Porque Vue Router não foi instalado?

Não vi necessidade, visto que a aplicação não tem navegação.

#### Porque usar o Vuetify?

Já tenho conhecimento prévio do Vuetify e de Tailwind, mas optei pelo Vuetify por já usar a mais tempo e ter mais produtividade com ele.

#### Porque criou a função de debounce e não utilizou?

Criei a função para exemplificar com eu implementaria, mas não usei ela por não ver necessidade, já que a requisição feita pela aplicação é no click do botão, e já utiliza um sistema de loading e cache, acho que só adicionaria um efeito de delay na requisição e não faria uma diferença de performance.

Caso as requisições fossem feitas baseadas em um autocomplete ou input, nesse caso eu acredito que seria extremamente útil, e ja implementei em projetos que fiz.

## UI/UX

- As cores da aplicação foram inspiradas nas cores da marca Frenet, de acordo com o site da empresa.
- Criei um pattern para usar de background na aplicação com uma parte do logo da Frenet, criando mais identificação com a marca e deixando mais agradável visualmente.
- Implementei os temas light e dark para que o usuário decida qual prefere usar.

## Performance

- Criei um sistema de cache usando a store do Pinia e composables do Vue, que bloqueia requisições com url e body iguais dentro de determinado tempo (1 minuto).
- Implementei um loading na store do Pinia, que bloqueia o click do botão para calcular fretes até que ele tenha um retorno
- Criei uma função de debounce, mas não utilizei, expliquei nas decisões técnicas porque optei por isso.


## Executando o projeto localmente

Para facilitar a avaliação, foi realizado o deploy da aplicação na vercel e pode ser acessado pelo link: https://test-frenet.vercel.app/

Clone o projeto

```bash
  git clone https://github.com/lnrdrodri/test-frenet
```

Vá para a pasta do projeto

```bash
  cd test-frenet
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run dev
```

## Executando os testes

Para executar os testes, use o comando a seguir

```bash
  npm run test
```
