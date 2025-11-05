# 🌦️ Clima Animado

Um aplicativo web simples e elegante que exibe a previsão do tempo atual, utilizando animações dinâmicas em JavaScript para representar visualmente as condições climáticas.

![Sou uma imagem](Design%20s.gif)

## ✨ Funcionalidades

- **Dados em Tempo Real:** Consulta uma API de clima para buscar informações meteorológicas atualizadas.
- **Animações Dinâmicas:** Exibe diferentes animações de fundo (chuva, nuvens, céu claro, neve) de acordo com o clima atual.
- **Design Responsivo:** Interface limpa e adaptável a diferentes tamanhos de tela.
- **Busca por Cidade:** Permite ao usuário pesquisar o clima de qualquer cidade do mundo.

## 💻 Tecnologias Utilizadas

- **HTML5:** Para a estrutura semântica da página.
- **CSS3:** Para a estilização e o design responsivo.
- **JavaScript (Vanilla):** Para a lógica do aplicativo, manipulação do DOM, requisições à API e controle das animações.

## 📂 Estrutura do Projeto

O projeto foi organizado de forma modular para separar as responsabilidades e facilitar a manutenção do código.

```bash
/
├── src/
│ ├── clima/          # Scripts e animações visuais de condições climáticas (chuva, sol, nuvens, etc)
│ ├── config/         # Configurações gerais e chaves de API
│ ├── service/        # Serviços responsáveis por fazer requisições à API
│ └── view/           # Manipulação e exibição dos dados no front-end
│
├── .gitignore        # Arquivos e pastas ignorados pelo Git
├── api.json          # Arquivo auxiliar com dados ou exemplos de resposta da API
├── index.html        # Estrutura principal da aplicação
├── jsoncrack.com.png # Diagrama ilustrando o modelo de dados da API
├── LICENSE           # Licença do projeto
├── README.md         # Documentação do projeto
├── script.js         # Script principal
└── style.css         # Estilos globais
```

### Detalhes da Estrutura `src`

- **`src/clima`**: Cada arquivo nesta pasta (`chuva.js`, `nuvens.js`) é responsável por desenhar ou controlar uma animação específica. Isso mantém a lógica de animação isolada e organizada.
- **`src/config`**: Centraliza dados "estáticos" ou de mapeamento. Por exemplo, `clima_codes_background.js` provavelmente associa os códigos de clima retornados pela API a uma cor de fundo ou a um efeito visual específico.
- **`src/service`**: A pasta `service` abstrai a lógica de busca de dados. O arquivo `apiService.js` é o único que sabe como "conversar" com a API externa, tornando o resto do código independente de qual provedor de clima está sendo usado.
- **`src/view`**: Lida com a apresentação. `mostrando_dados.js` pega os dados processados e os insere no HTML, enquanto `seletores.js` pode centralizar a seleção de elementos do DOM para evitar repetição.

## 🚀 Como Executar

1.  **Clone o repositório:**

    ```bash
    git clone [https://github.com/seu-usuario/nome-do-repositorio.git](https://github.com/seu-usuario/nome-do-repositorio.git)
    ```

2.  **Obtenha uma chave de API:**

    - Este projeto precisa de uma chave de API de um provedor de clima, como o [OpenWeatherMap](https://openweathermap.org/api).
    - Crie uma conta e obtenha sua chave de API gratuita.

3.  **Configure a chave de API:**

    - No arquivo `src/service/apiService.js`, encontre a variável referente à chave (`API_KEY`) e insira a sua.

4.  **Abra o projeto:**
    - A maneira mais fácil é usar uma extensão como o **Live Server** no Visual Studio Code para abrir o `index.html`. Isso evita possíveis problemas de CORS ao fazer requisições da API a partir de um arquivo local.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
