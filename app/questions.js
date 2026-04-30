const questions = {
  html: [
    // Fáceis
    {
      question: "Qual tag é usada para criar um parágrafo em HTML?",
      options: [
        { text: "<p>", correct: true },
        { text: "<div>", correct: false },
        { text: "<span>", correct: false },
        { text: "<h1>", correct: false },
      ],
      level: "easy",
    },
    {
      question: "Qual atributo define o link de uma tag <a>?",
      options: [
        { text: "src", correct: false },
        { text: "alt", correct: false },
        { text: "id", correct: false },
        { text: "href", correct: true },
      ],
      level: "easy",
    },
    {
      question: "Qual tag é usada para inserir uma imagem?",
      options: [
        { text: "<picture>", correct: false },
        { text: "<img>", correct: true },
        { text: "<src>", correct: false },
        { text: "<image>", correct: false },
      ],
      level: "easy",
    },
    {
      question: "Qual tag define o título principal da página?",
      options: [
        { text: "<title>", correct: false },
        { text: "<header>", correct: false },
        { text: "<h1>", correct: true },
        { text: "<head>", correct: false },
      ],
      level: "easy",
    },
    {
      question: "Qual tag é usada para criar uma lista ordenada?",
      options: [
        { text: "<ol>", correct: true },
        { text: "<ul>", correct: false },
        { text: "<li>", correct: false },
        { text: "<dl>", correct: false },
      ],
      level: "easy",
    },
    {
      question: "Qual tag é usada para criar uma lista não ordenada?",
      options: [
        { text: "<ol>", correct: false },
        { text: "<ul>", correct: true },
        { text: "<li>", correct: false },
        { text: "<dl>", correct: false },
      ],
      level: "easy",
    },
    {
      question: "Qual tag representa um item de lista?",
      options: [
        { text: "<item>", correct: false },
        { text: "<list>", correct: false },
        { text: "<li>", correct: true },
        { text: "<ul>", correct: false },
      ],
      level: "easy",
    },
    {
      question: "Qual tag é usada para criar uma tabela?",
      options: [
        { text: "<tab>", correct: false },
        { text: "<tr>", correct: false },
        { text: "<td>", correct: false },
        { text: "<table>", correct: true },
      ],
      level: "easy",
    },
    {
      question: "Qual tag cria uma linha de tabela?",
      options: [
        { text: "<td>", correct: false },
        { text: "<th>", correct: false },
        { text: "<row>", correct: false },
        { text: "<tr>", correct: true },
      ],
      level: "easy",
    },
    {
      question: "Qual tag cria uma célula de tabela?",
      options: [
        { text: "<tr>", correct: false },
        { text: "<th>", correct: false },
        { text: "<cell>", correct: false },
        { text: "<td>", correct: true },
      ],
      level: "easy",
    },
    {
      question: "Qual tag cria uma célula de cabeçalho em tabela?",
      options: [
        { text: "<th>", correct: true },
        { text: "<td>", correct: false },
        { text: "<tr>", correct: false },
        { text: "<thead>", correct: false },
      ],
      level: "easy",
    },
    {
      question: "Qual tag é usada para criar um formulário?",
      options: [
        { text: "<form>", correct: true },
        { text: "<input>", correct: false },
        { text: "<fieldset>", correct: false },
        { text: "<label>", correct: false },
      ],
      level: "easy",
    },
    {
      question: "Qual tag cria um campo de entrada de texto?",
      options: [
        { text: "<input>", correct: true },
        { text: "<textarea>", correct: false },
        { text: "<field>", correct: false },
        { text: "<entry>", correct: false },
      ],
      level: "easy",
    },
    {
      question: "Qual atributo define o tipo de um input?",
      options: [
        { text: "name", correct: false },
        { text: "id", correct: false },
        { text: "value", correct: false },
        { text: "type", correct: true },
      ],
      level: "easy",
    },
    {
      question: "Qual tag cria um botão?",
      options: [
        { text: "<input>", correct: false },
        { text: "<button>", correct: true },
        { text: "<submit>", correct: false },
        { text: "<click>", correct: false },
      ],
      level: "easy",
    },

    // Médias
    {
      question:
        "Qual tag é usada para agrupar conteúdo sem significado semântico específico?",
      options: [
        { text: "<span>", correct: false },
        { text: "<section>", correct: false },
        { text: "<div>", correct: true },
        { text: "<article>", correct: false },
      ],
      level: "medium",
    },
    {
      question: "Qual tag é usada para agrupar conteúdo em linha?",
      options: [
        { text: "<span>", correct: true },
        { text: "<div>", correct: false },
        { text: "<p>", correct: false },
        { text: "<section>", correct: false },
      ],
      level: "medium",
    },
    {
      question:
        "Qual atributo é usado para identificar um elemento de forma única?",
      options: [
        { text: "class", correct: false },
        { text: "id", correct: true },
        { text: "name", correct: false },
        { text: "style", correct: false },
      ],
      level: "medium",
    },
    {
      question:
        "Qual atributo é usado para aplicar estilos a múltiplos elementos?",
      options: [
        { text: "id", correct: false },
        { text: "style", correct: false },
        { text: "group", correct: false },
        { text: "class", correct: true },
      ],
      level: "medium",
    },
    {
      question:
        "Qual tag é usada para criar uma seção independente de conteúdo?",
      options: [
        { text: "<div>", correct: false },
        { text: "<section>", correct: true },
        { text: "<span>", correct: false },
        { text: "<header>", correct: false },
      ],
      level: "medium",
    },
    {
      question: "Qual tag é usada para definir o rodapé de uma página?",
      options: [
        { text: "<footer>", correct: true },
        { text: "<bottom>", correct: false },
        { text: "<end>", correct: false },
        { text: "<foot>", correct: false },
      ],
      level: "medium",
    },
    {
      question: "Qual tag é usada para definir a barra de navegação?",
      options: [
        { text: "<nav>", correct: true },
        { text: "<menu>", correct: false },
        { text: "<header>", correct: false },
        { text: "<aside>", correct: false },
      ],
      level: "medium",
    },
    {
      question: "Qual tag é usada para conteúdo lateral relacionado?",
      options: [
        { text: "<section>", correct: false },
        { text: "<footer>", correct: false },
        { text: "<aside>", correct: true },
        { text: "<nav>", correct: false },
      ],
      level: "medium",
    },
    {
      question: "Qual tag é usada para definir um artigo independente?",
      options: [

        { text: "<section>", correct: false },
        { text: "<div>", correct: false },
        { text: "<main>", correct: false },
                { text: "<article>", correct: true },
      ],
      level: "medium",
    },
    {
      question:
        "Qual tag é usada para agrupar campos de formulário relacionados?",
      options: [

        { text: "<form>", correct: false },
                { text: "<fieldset>", correct: true },
        { text: "<legend>", correct: false },
        { text: "<group>", correct: false },
      ],
      level: "medium",
    },
    {
      question: "Qual tag fornece uma legenda para um fieldset?",
      options: [
        
        { text: "<caption>", correct: false },
        { text: "<legend>", correct: true },
        { text: "<label>", correct: false },
        { text: "<title>", correct: false },
      ],
      level: "medium",
    },
    {
      question:
        "Qual tag é usada para inserir conteúdo interativo como gráficos?",
      options: [
        { text: "<canvas>", correct: true },
        { text: "<svg>", correct: false },
        { text: "<object>", correct: false },
        { text: "<embed>", correct: false },
      ],
      level: "medium",
    },
    {
      question: "Qual tag é usada para inserir conteúdo vetorial?",
      options: [
        
        { text: "<canvas>", correct: false },
        { text: "<object>", correct: false },
        { text: "<embed>", correct: false },
        { text: "<svg>", correct: true },
      ],
      level: "medium",
    },
    {
      question: "Qual tag é usada para inserir conteúdo externo como PDF?",
      options: [
        { text: "<embed>", correct: true },
        { text: "<object>", correct: false },
        { text: "<iframe>", correct: false },
        { text: "<include>", correct: false },
      ],
      level: "medium",
    },
    {
      question: "Qual tag é usada para definir o conteúdo principal da página?",
      options: [
        
        { text: "<body>", correct: false },
        { text: "<section>", correct: false },
        { text: "<article>", correct: false },
        { text: "<main>", correct: true },
      ],
      level: "medium",
    },

    // Difíceis
    {
      question:
        "Qual atributo deve ser usado para associar um rótulo (<label>) a um campo de formulário?",
      options: [
        
        { text: "id", correct: false },
        { text: "for", correct: true },
        { text: "name", correct: false },
        { text: "ref", correct: false },
      ],
      level: "hard",
    },
    {
      question:
        "Qual elemento HTML5 é usado para exibir conteúdo que pode ser expandido ou recolhido?",
      options: [
        { text: "<details>", correct: true },
        { text: "<summary>", correct: false },
        { text: "<dialog>", correct: false },
        { text: "<section>", correct: false },
      ],
      level: "hard",
    },
    {
      question: "Qual tag HTML5 é usada para criar uma caixa de diálogo?",
      options: [
        { text: "<dialog>", correct: true },
        { text: "<details>", correct: false },
        { text: "<summary>", correct: false },
        { text: "<popup>", correct: false },
      ],
      level: "hard",
    },
    {
      question:
        "Qual atributo deve ser usado para fornecer uma descrição acessível a leitores de tela?",
      options: [
        
        { text: "alt", correct: false },
        { text: "aria-label", correct: true },
        { text: "title", correct: false },
        { text: "desc", correct: false },
      ],
      level: "hard",
    },
    {
      question:
        "Qual elemento HTML5 é usado para representar código de programação?",
      options: [
        
        { text: "<pre>", correct: false },
        { text: "<code>", correct: true },
        { text: "<kbd>", correct: false },
        { text: "<samp>", correct: false },
      ],
      level: "hard",
    },
    {
      question:
        "Qual elemento é usado para representar entrada do usuário via teclado?",
      options: [
        
        { text: "<code>", correct: false },
        { text: "<samp>", correct: false },
        { text: "<kbd>", correct: true },
        { text: "<input>", correct: false },
      ],
      level: "hard",
    },
    {
      question:
        "Qual elemento é usado para representar saída de um programa ou sistema?",
      options: [
        
        { text: "<output>", correct: false },
        { text: "<code>", correct: false },
        { text: "<var>", correct: false },
        { text: "<samp>", correct: true },
      ],
      level: "hard",
    },
    {
      question: "Qual elemento é usado para representar uma variável em HTML?",
      options: [
        
        { text: "<code>", correct: false },
        { text: "<samp>", correct: false },
        { text: "<var>", correct: true },
        { text: "<kbd>", correct: false },
      ],
      level: "hard",
    },
    {
      question:
        "Qual atributo deve ser usado para indicar que um campo de formulário é obrigatório?",
      options: [
        { text: "required", correct: true },
        { text: "mandatory", correct: false },
        { text: "validate", correct: false },
        { text: "must", correct: false },
      ],
      level: "hard",
    },
    {
      question:
        "Qual atributo deve ser usado para fornecer um valor inicial em um campo de formulário?",
      options: [
        { text: "value", correct: true },
        { text: "default", correct: false },
        { text: "placeholder", correct: false },
        { text: "init", correct: false },
      ],
      level: "hard",
    },
    {
      question:
        "Qual atributo deve ser usado para fornecer um texto de ajuda dentro de um campo de formulário?",
      options: [
        
        { text: "hint", correct: false },
        { text: "title", correct: false },
        { text: "placeholder", correct: true },
        { text: "alt", correct: false },
      ],
      level: "hard",
    },
    {
      question:
        "Qual elemento HTML5 é usado para agrupar conteúdo multimídia e suas legendas?",
      options: [
        
        { text: "<figcaption>", correct: false },
        { text: "<picture>", correct: false },
        { text: "<figure>", correct: true },
        { text: "<caption>", correct: false },
      ],
      level: "hard",
    },
    {
      question: "Qual elemento HTML5 fornece uma legenda para um <figure>?",
      options: [
        
        { text: "<caption>", correct: false },
        { text: "<figcaption>", correct: true },
        { text: "<legend>", correct: false },
        { text: "<summary>", correct: false },
      ],
      level: "hard",
    },
    {
      question:
        "Qual atributo deve ser usado para indicar que um campo de formulário deve ser preenchido com um padrão específico?",
      options: [
        { text: "pattern", correct: true },
        { text: "regex", correct: false },
        { text: "match", correct: false },
        { text: "rule", correct: false },
      ],
      level: "hard",
    },
    {
      question:
        "Qual atributo deve ser usado para desabilitar um campo de formulário?",
      options: [
        { text: "disabled", correct: true },
        { text: "readonly", correct: false },
        { text: "inactive", correct: false },
        { text: "off", correct: false },
      ],
      level: "hard",
    },
  ],

  css: [
    // Fáceis
    {
      question: "Qual propriedade muda a cor do texto?",
      options: [
        { text: "color", correct: true },
        { text: "background-color", correct: false },
        { text: "font-color", correct: false },
        { text: "text-color", correct: false },
      ],
      level: "easy",
    },
    {
      question: "Qual propriedade muda a cor de fundo?",
      options: [ 
        { text: "color", correct: false },
        { text: "border-color", correct: false },
        { text: "fill", correct: false },
        { text: "background-color", correct: true },
      ],
      level: "easy",
    },
    {
      question: "Qual propriedade muda o tamanho da fonte?",
      options: [
        { text: "text-size", correct: false },
        { text: "size", correct: false },
        { text: "font-weight", correct: false },
        { text: "font-size", correct: true },
      ],
      level: "easy",
    },
    {
      question: "Qual propriedade muda o estilo da fonte?",
      options: [
        { text: "font-style", correct: true },
        { text: "font-weight", correct: false },
        { text: "text-style", correct: false },
        { text: "style", correct: false },
      ],
      level: "easy",
    },
    {
      question: "Qual propriedade muda a espessura da fonte?",
      options: [
        
        { text: "font-style", correct: false },
        { text: "font-size", correct: false },
        { text: "font-weight", correct: true },
        { text: "boldness", correct: false },
      ],
      level: "easy",
    },
    {
      question: "Qual propriedade centraliza o texto?",
      options: [
        { text: "text-align", correct: true },
        { text: "align", correct: false },
        { text: "center", correct: false },
        { text: "justify", correct: false },
      ],
      level: "easy",
    },
    {
      question: "Qual propriedade define o espaçamento entre linhas?",
      options: [
        
        { text: "letter-spacing", correct: false },
        { text: "word-spacing", correct: false },
        { text: "line-height", correct: true },
        { text: "spacing", correct: false },
      ],
      level: "easy",
    },
    {
      question: "Qual propriedade define o espaçamento entre letras?",
      options: [
        
        { text: "word-spacing", correct: false },
        { text: "line-height", correct: false },
        { text: "font-spacing", correct: false },
        { text: "letter-spacing", correct: true },
      ],
      level: "easy",
    },
    {
      question: "Qual propriedade define o espaçamento entre palavras?",
      options: [
        
        { text: "letter-spacing", correct: false },
        { text: "line-height", correct: false },
        { text: "word-spacing", correct: true },
        { text: "text-spacing", correct: false },
      ],
      level: "easy",
    },
    {
      question: "Qual propriedade adiciona sombra ao texto?",
      options: [
        
        { text: "box-shadow", correct: false },
        { text: "shadow", correct: false },
        { text: "font-shadow", correct: false },
        { text: "text-shadow", correct: true },
      ],
      level: "easy",
    },
    {
      question: "Qual propriedade adiciona sombra a caixas?",
      options: [
        { text: "box-shadow", correct: true },
        { text: "text-shadow", correct: false },
        { text: "shadow", correct: false },
        { text: "border-shadow", correct: false },
      ],
      level: "easy",
    },
    {
      question: "Qual propriedade define a largura de um elemento?",
      options: [
        { text: "width", correct: true },
        { text: "size", correct: false },
        { text: "length", correct: false },
        { text: "height", correct: false },
      ],
      level: "easy",
    },
    {
      question: "Qual propriedade define a altura de um elemento?",
      options: [
        
        { text: "width", correct: false },
        { text: "size", correct: false },
        { text: "height", correct: true },
        { text: "length", correct: false },
      ],
      level: "easy",
    },
    {
      question: "Qual propriedade define a margem externa de um elemento?",
      options: [
        
        { text: "padding", correct: false },
        { text: "border", correct: false },
        { text: "margin", correct: true },
        { text: "space", correct: false },
      ],
      level: "easy",
    },
    {
      question: "Qual propriedade define o espaçamento interno de um elemento?",
      options: [
        
        { text: "margin", correct: false },
        { text: "padding", correct: true },
        { text: "border", correct: false },
        { text: "spacing", correct: false },
      ],
      level: "easy",
    },

    // Médias
    {
      question: "Qual propriedade define o estilo da borda?",
      options: [
        
        { text: "border-type", correct: false },
        { text: "border-style", correct: true },
        { text: "border-shape", correct: false },
        { text: "border-format", correct: false },
      ],
      level: "medium",
    },
    {
      question: "Qual propriedade define a largura da borda?",
      options: [
        { text: "border-width", correct: true },
        { text: "border-size", correct: false },
        { text: "border-thickness", correct: false },
        { text: "border-length", correct: false },
      ],
      level: "medium",
    },
    {
      question: "Qual propriedade define a cor da borda?",
      options: [
        { text: "border-color", correct: true },
        { text: "color", correct: false },
        { text: "outline-color", correct: false },
        { text: "background-color", correct: false },
      ],
      level: "medium",
    },
    {
      question: "Qual propriedade arredonda os cantos de um elemento?",
      options: [
        
        { text: "corner-radius", correct: false },
        { text: "round-corner", correct: false },
        { text: "border-radius", correct: true },
        { text: "radius", correct: false },
      ],
      level: "medium",
    },
    {
      question: "Qual propriedade controla a transparência de um elemento?",
      options: [
        
        { text: "visibility", correct: false },
        { text: "opacity", correct: true },
        { text: "transparent", correct: false },
        { text: "alpha", correct: false },
      ],
      level: "medium",
    },
    {
      question: "Qual propriedade define a posição de fundo de um elemento?",
      options: [
        
        { text: "background-align", correct: false },
        { text: "background-place", correct: false },
        { text: "background-location", correct: false },
        { text: "background-position", correct: true },
      ],
      level: "medium",
    },
    {
      question: "Qual propriedade define se a imagem de fundo se repete?",
      options: [
        
        { text: "background-loop", correct: false },
        { text: "background-cycle", correct: false },
        { text: "background-repeat", correct: true },
        { text: "background-flow", correct: false },
      ],
      level: "medium",
    },
    {
      question: "Qual propriedade define o tamanho da imagem de fundo?",
      options: [
        
        { text: "background-scale", correct: false },
        { text: "background-size", correct: true },
        { text: "background-zoom", correct: false },
        { text: "background-dimension", correct: false },
      ],
      level: "medium",
    },
    {
      question: "Qual propriedade define a posição de um elemento?",
      options: [
        { text: "position", correct: true },
        { text: "location", correct: false },
        { text: "place", correct: false },
        { text: "align", correct: false },
      ],
      level: "medium",
    },
    {
      question:
        "Qual propriedade define o deslocamento superior de um elemento?",
      options: [
        { text: "top", correct: true },
        { text: "margin-top", correct: false },
        { text: "padding-top", correct: false },
        { text: "offset-top", correct: false },
      ],
      level: "medium",
    },
    {
      question:
        "Qual propriedade define o deslocamento esquerdo de um elemento?",
      options: [
        
        { text: "margin-left", correct: false },
        { text: "padding-left", correct: false },
        { text: "offset-left", correct: false },
        { text: "left", correct: true },
      ],
      level: "medium",
    },
    {
      question:
        "Qual propriedade define o deslocamento direito de um elemento?",
      options: [
        
        { text: "margin-right", correct: false },
        { text: "right", correct: true },
        { text: "padding-right", correct: false },
        { text: "offset-right", correct: false },
      ],
      level: "medium",
    },
    {
      question:
        "Qual propriedade define o deslocamento inferior de um elemento?",
      options: [
        
        { text: "margin-bottom", correct: false },
        { text: "padding-bottom", correct: false },
        { text: "offset-bottom", correct: false },
        { text: "bottom", correct: true },
      ],
      level: "medium",
    },
    {
      question: "Qual propriedade define o tipo de exibição de um elemento?",
      options: [
        
        { text: "visibility", correct: false },
        { text: "display", correct: true },
        { text: "position", correct: false },
        { text: "show", correct: false },
      ],
      level: "medium",
    },
    {
      question: "Qual propriedade define a visibilidade de um elemento?",
      options: [
        
        { text: "display", correct: false },
        { text: "opacity", correct: false },
        { text: "visibility", correct: true },
        { text: "hidden", correct: false },
      ],
      level: "medium",
    },

    // Difíceis
    {
      question:
        "Qual propriedade CSS permite criar múltiplos planos de fundo em um mesmo elemento?",
      options: [
        
        { text: "background-layer", correct: false },
        { text: "multi-background", correct: false },
        { text: "background-stack", correct: false },
        { text: "background-image", correct: true },
      ],
      level: "hard",
    },
    {
      question:
        "Qual propriedade CSS define a ordem de sobreposição dos elementos?",
      options: [
        { text: "z-index", correct: true },
        { text: "order", correct: false },
        { text: "stack", correct: false },
        { text: "layer", correct: false },
      ],
      level: "hard",
    },
    {
      question: "Qual propriedade CSS controla a velocidade da transição?",
      options: [
        { text: "transition-duration", correct: true },
        { text: "transition-time", correct: false },
        { text: "animation-speed", correct: false },
        { text: "speed", correct: false },
      ],
      level: "hard",
    },
    {
      question:
        "Qual propriedade CSS define a função de aceleração da transição?",
      options: [
        
        { text: "transition-ease", correct: false },
        { text: "timing", correct: false },
        { text: "transition-timing-function", correct: true },
        { text: "animation-timing", correct: false },
      ],
      level: "hard",
    },
    {
      question:
        "Qual propriedade CSS define o atraso antes de iniciar uma transição?",
      options: [
        
        { text: "transition-wait", correct: false },
        { text: "transition-delay", correct: true },
        { text: "animation-delay", correct: false },
        { text: "delay", correct: false },
      ],
      level: "hard",
    },
    {
      question: "Qual propriedade CSS define o nome da animação?",
      options: [
        { text: "animation-name", correct: true },
        { text: "animation-id", correct: false },
        { text: "animation-title", correct: false },
        { text: "animation-ref", correct: false },
      ],
      level: "hard",
    },
    {
      question:
        "Qual propriedade CSS define quantas vezes uma animação será repetida?",
      options: [
        
        { text: "animation-repeat", correct: false },
        { text: "animation-loop", correct: false },
        { text: "animation-times", correct: false },
        { text: "animation-iteration-count", correct: true },
      ],
      level: "hard",
    },
    {
      question:
        "Qual propriedade CSS define se a animação deve alternar direções?",
      options: [
        
        { text: "animation-flow", correct: false },
        { text: "animation-orientation", correct: false },
        { text: "animation-mode", correct: false },
        { text: "animation-direction", correct: true },
      ],
      level: "hard",
    },
    {
      question: "Qual propriedade CSS define o estado final de uma animação?",
      options: [
        { text: "animation-fill-mode", correct: true },
        { text: "animation-end", correct: false },
        { text: "animation-stop", correct: false },
        { text: "animation-final", correct: false },
      ],
      level: "hard",
    },
    {
      question:
        "Qual propriedade CSS define se um elemento é exibido como grid?",
      options: [
        { text: "display: grid", correct: true },
        { text: "grid-layout", correct: false },
        { text: "grid-display", correct: false },
        { text: "layout-grid", correct: false },
      ],
      level: "hard",
    },
    {
      question: "Qual propriedade CSS define o número de colunas em um grid?",
      options: [
        
        { text: "grid-columns", correct: false },
        { text: "columns", correct: false },
        { text: "grid-template-columns", correct: true },
        { text: "grid-layout-columns", correct: false },
      ],
      level: "hard",
    },
    {
      question: "Qual propriedade CSS define o número de linhas em um grid?",
      options: [
        
        { text: "grid-rows", correct: false },
        { text: "rows", correct: false },
        { text: "grid-layout-rows", correct: false },
        { text: "grid-template-rows", correct: true },
      ],
      level: "hard",
    },
    {
      question:
        "Qual propriedade CSS define o espaço entre colunas em um grid?",
      options: [
        
        { text: "grid-gap", correct: false },
        { text: "gap-columns", correct: false },
        { text: "col-gap", correct: false },
        { text: "column-gap", correct: true },
      ],
      level: "hard",
    },
    {
      question: "Qual propriedade CSS define o espaço entre linhas em um grid?",
      options: [
        { text: "row-gap", correct: true },
        { text: "grid-gap", correct: false },
        { text: "gap-rows", correct: false },
        { text: "line-gap", correct: false },
      ],
      level: "hard",
    },
    {
      question:
        "Qual propriedade CSS define o espaço entre linhas e colunas em um grid?",
      options: [
        
        { text: "grid-gap", correct: false },
        { text: "spacing", correct: false },
        { text: "gap", correct: true },
        { text: "grid-spacing", correct: false },
      ],
      level: "hard",
    },
  ],

  js: [
    // Fáceis
    {
      question: "Qual comando imprime uma mensagem no console?",
      options: [
        { text: "console.log()", correct: true },
        { text: "print()", correct: false },
        { text: "echo()", correct: false },
        { text: "log()", correct: false },
      ],
      level: "easy",
    },
    {
      question: "Qual palavra-chave declara uma variável?",
      options: [
        { text: "var", correct: true },
        { text: "let", correct: false },
        { text: "const", correct: false },
        { text: "define", correct: false },
      ],
      level: "easy",
    },
    {
      question: "Qual símbolo é usado para comentários de linha única?",
      options: [
        
        { text: "/*", correct: false },
        { text: "#", correct: false },
        { text: "//", correct: true },
        { text: "<!--", correct: false },
      ],
      level: "easy",
    },
    {
      question: "Qual símbolo é usado para comentários de múltiplas linhas?",
      options: [
        
        { text: "//", correct: false },
        { text: "/* ... */", correct: true },
        { text: "#", correct: false },
        { text: "<!-- -->", correct: false },
      ],
      level: "easy",
    },
    {
      question: "Qual operador soma dois valores?",
      options: [
        { text: "+", correct: true },
        { text: "-", correct: false },
        { text: "*", correct: false },
        { text: "/", correct: false },
      ],
      level: "easy",
    },
    {
      question: "Qual operador subtrai dois valores?",
      options: [
        
        { text: "+", correct: false },
        { text: "*", correct: false },
        { text: "/", correct: false },
        { text: "-", correct: true },
      ],
      level: "easy",
    },
    {
      question: "Qual operador multiplica dois valores?",
      options: [
        { text: "*", correct: true },
        { text: "+", correct: false },
        { text: "-", correct: false },
        { text: "/", correct: false },
      ],
      level: "easy",
    },
    {
      question: "Qual operador divide dois valores?",
      options: [
        
        { text: "*", correct: false },
        { text: "-", correct: false },
        { text: "+", correct: false },
        { text: "/", correct: true },
      ],
      level: "easy",
    },
    {
      question: "Qual operador verifica igualdade de valor e tipo?",
      options: [
        
        { text: "==", correct: false },
        { text: "=", correct: false },
        { text: "===", correct: true },
        { text: "!=", correct: false },
      ],
      level: "easy",
    },
    {
      question: "Qual operador lógico representa 'E'?",
      options: [
        
        { text: "||", correct: false },
        { text: "!", correct: false },
        { text: "&", correct: false },
        { text: "&&", correct: true },
      ],
      level: "easy",
    },
    {
      question: "Qual operador lógico representa 'OU'?",
      options: [
        
        { text: "&&", correct: false },
        { text: "!", correct: false },
        { text: "|", correct: false },
        { text: "||", correct: true },
      ],
      level: "easy",
    },
    {
      question: "Qual operador lógico representa 'NÃO'?",
      options: [
        { text: "!", correct: true },
        { text: "&&", correct: false },
        { text: "||", correct: false },
        { text: "not", correct: false },
      ],
      level: "easy",
    },
    {
      question: "Qual função converte uma string em número inteiro?",
      options: [
        { text: "parseInt()", correct: true },
        { text: "parseFloat()", correct: false },
        { text: "Number()", correct: false },
        { text: "toInt()", correct: false },
      ],
      level: "easy",
    },
    {
      question: "Qual função converte uma string em número decimal?",
      options: [
        
        { text: "parseInt()", correct: false },
        { text: "Number()", correct: false },
        { text: "parseFloat()", correct: true },
        { text: "toFloat()", correct: false },
      ],
      level: "easy",
    },
    {
      question: "Qual função retorna o tamanho de uma string?",
      options: [
        { text: ".length", correct: true },
        { text: ".size", correct: false },
        { text: ".count", correct: false },
        { text: ".chars", correct: false },
      ],
      level: "easy",
    },

    // Médias
    {
      question: "Qual método converte JSON em objeto JavaScript?",
      options: [
        { text: "JSON.parse()", correct: true },
        { text: "JSON.stringify()", correct: false },
        { text: "JSON.object()", correct: false },
        { text: "parseJSON()", correct: false },
      ],
      level: "medium",
    },
    {
      question: "Qual método converte um objeto JavaScript em JSON?",
      options: [
        { text: "JSON.stringify()", correct: true },
        { text: "JSON.parse()", correct: false },
        { text: "toJSON()", correct: false },
        { text: "objectToJSON()", correct: false },
      ],
      level: "medium",
    },
    {
      question: "Qual método remove o último elemento de um array?",
      options: [
        
        { text: "shift()", correct: false },
        { text: "splice()", correct: false },
        { text: "pop()", correct: true },
        { text: "remove()", correct: false },
      ],
      level: "medium",
    },
    {
      question: "Qual método adiciona um elemento ao final de um array?",
      options: [
        
        { text: "unshift()", correct: false },
        { text: "append()", correct: false },
        { text: "add()", correct: false },
        { text: "push()", correct: true },
      ],
      level: "medium",
    },
    {
      question: "Qual método adiciona um elemento no início de um array?",
      options: [
        
        { text: "push()", correct: false },
        { text: "prepend()", correct: false },
        { text: "unshift()", correct: true },
        { text: "insert()", correct: false },
      ],
      level: "medium",
    },
    {
      question: "Qual método remove o primeiro elemento de um array?",
      options: [
        
        { text: "pop()", correct: false },
        { text: "splice()", correct: false },
        { text: "remove()", correct: false },
        { text: "shift()", correct: true },
      ],
      level: "medium",
    },
    {
      question: "Qual método retorna o índice de um elemento em um array?",
      options: [
        
        { text: "findIndex()", correct: false },
        { text: "search()", correct: false },
        { text: "indexOf()", correct: true },
        { text: "position()", correct: false },
      ],
      level: "medium",
    },
    {
      question:
        "Qual método retorna verdadeiro se algum elemento satisfaz a condição?",
      options: [
        
        { text: "every()", correct: false },
        { text: "some()", correct: true },
        { text: "filter()", correct: false },
        { text: "includes()", correct: false },
      ],
      level: "medium",
    },
    {
      question:
        "Qual método retorna verdadeiro se todos os elementos satisfazem a condição?",
      options: [
        
        { text: "some()", correct: false },
        { text: "filter()", correct: false },
        { text: "includes()", correct: false },
        { text: "every()", correct: true },
      ],
      level: "medium",
    },
    {
      question:
        "Qual método cria um novo array com todos os elementos que passam em um teste?",
      options: [
        
        { text: "map()", correct: false },
        { text: "reduce()", correct: false },
        { text: "filter()", correct: true },
        { text: "forEach()", correct: false },
      ],
      level: "medium",
    },
    {
      question:
        "Qual método aplica uma função a cada elemento e retorna um novo array?",
      options: [
        { text: "map()", correct: true },
        { text: "forEach()", correct: false },
        { text: "filter()", correct: false },
        { text: "reduce()", correct: false },
      ],
      level: "medium",
    },
    {
      question:
        "Qual método executa uma função para cada elemento sem retornar novo array?",
      options: [
        { text: "forEach()", correct: true },
        { text: "map()", correct: false },
        { text: "filter()", correct: false },
        { text: "reduce()", correct: false },
      ],
      level: "medium",
    },
    {
      question: "Qual método reduz um array a um único valor?",
      options: [
        
        { text: "map()", correct: false },
        { text: "reduce()", correct: true },
        { text: "filter()", correct: false },
        { text: "concat()", correct: false },
      ],
      level: "medium",
    },
    {
      question:
        "Qual método junta todos os elementos de um array em uma string?",
      options: [
        { text: "join()", correct: true },
        { text: "concat()", correct: false },
        { text: "toString()", correct: false },
        { text: "stringify()", correct: false },
      ],
      level: "medium",
    },
    {
      question:
        "Qual método retorna verdadeiro se um array contém determinado elemento?",
      options: [
        
        { text: "indexOf()", correct: false },
        { text: "some()", correct: false },
        { text: "includes()", correct: true },
        { text: "contains()", correct: false },
      ],
      level: "medium",
    },

    // Difíceis
    {
      question:
        "Qual palavra-chave é usada para criar uma classe em JavaScript?",
      options: [
        
        { text: "function", correct: false },
        { text: "object", correct: false },
        { text: "class", correct: true },
        { text: "constructor", correct: false },
      ],
      level: "hard",
    },
    {
      question: "Qual método retorna uma Promise resolvida após um tempo?",
      options: [
        { text: "setTimeout()", correct: true },
        { text: "setInterval()", correct: false },
        { text: "Promise.resolve()", correct: false },
        { text: "delay()", correct: false },
      ],
      level: "hard",
    },
    {
      question:
        "Qual palavra-chave pausa a execução de uma função async até a Promise ser resolvida?",
      options: [
        
        { text: "async", correct: false },
        { text: "yield", correct: false },
        { text: "pause", correct: false },
        { text: "await", correct: true },
      ],
      level: "hard",
    },
    {
      question: "Qual palavra-chave é usada para criar um gerador?",
      options: [
        
        { text: "generator", correct: false },
        { text: "yield", correct: false },
        { text: "function*", correct: true },
        { text: "gen", correct: false },
      ],
      level: "hard",
    },
    {
      question: "Qual método retorna todas as chaves de um objeto?",
      options: [
        
        { text: "Object.values()", correct: false },
        { text: "Object.entries()", correct: false },
        { text: "Object.keys()", correct: true },
        { text: "Object.getKeys()", correct: false },
      ],
      level: "hard",
    },
    {
      question: "Qual método retorna todos os valores de um objeto?",
      options: [
      
        { text: "Object.keys()", correct: false },
        { text: "Object.entries()", correct: false },
        { text: "Object.values()", correct: true },
        { text: "Object.getValues()", correct: false },
      ],
      level: "hard",
    },
    {
      question: "Qual método retorna pares [chave, valor] de um objeto?",
      options: [
        
        { text: "Object.keys()", correct: false },
        { text: "Object.values()", correct: false },
        { text: "Object.pairs()", correct: false },
        { text: "Object.entries()", correct: true },
      ],
      level: "hard",
    },
    {
      question:
        "Qual operador é usado para espalhar elementos de um array ou objeto?",
      options: [
        
        { text: "=>", correct: false },
        { text: "??", correct: false },
        { text: "...", correct: true },
        { text: "::", correct: false },
      ],
      level: "hard",
    },
    {
      question:
        "Qual operador retorna o primeiro valor não nulo ou indefinido?",
      options: [
        
        { text: "||", correct: false },
        { text: "&&", correct: false },
        { text: "?", correct: false },
        { text: "??", correct: true },
      ],
      level: "hard",
    },
    {
      question: "Qual método copia parte de um array sem alterar o original?",
      options: [
        
        { text: "splice()", correct: false },
        { text: "copy()", correct: false },
        { text: "cut()", correct: false },
        { text: "slice()", correct: true },
      ],
      level: "hard",
    },
    {
      question:
        "Qual método altera o conteúdo de um array removendo ou adicionando elementos?",
      options: [
        { text: "splice()", correct: true },
        { text: "slice()", correct: false },
        { text: "split()", correct: false },
        { text: "replace()", correct: false },
      ],
      level: "hard",
    },
    {
      question:
        "Qual método retorna uma string com todos os elementos de um array separados por vírgula?",
      options: [
        { text: "toString()", correct: true },
        { text: "join()", correct: false },
        { text: "concat()", correct: false },
        { text: "stringify()", correct: false },
      ],
      level: "hard",
    },
    {
      question:
        "Qual método retorna uma Promise que resolve quando todas as Promises foram resolvidas?",
      options: [
        
        { text: "Promise.race()", correct: false },
        { text: "Promise.all()", correct: true },
        { text: "Promise.any()", correct: false },
        { text: "Promise.resolve()", correct: false },
      ],
      level: "hard",
    },
    {
      question:
        "Qual método retorna uma Promise que resolve quando a primeira Promise é resolvida?",
      options: [
        
        { text: "Promise.all()", correct: false },
        { text: "Promise.any()", correct: false },
        { text: "Promise.resolve()", correct: false },
        { text: "Promise.race()", correct: true },
      ],
      level: "hard",
    },
    {
      question:
        "Qual método retorna uma Promise que resolve quando qualquer Promise é resolvida?",
      options: [
        { text: "Promise.any()", correct: true },
        { text: "Promise.race()", correct: false },
        { text: "Promise.all()", correct: false },
        { text: "Promise.resolve()", correct: false },
      ],
      level: "hard",
    },
  ],
};

export default questions;
