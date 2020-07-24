

### Perguntas de Javascript

1. Explique com suas palavras a diferença entre a utilização de var, const e let?
> Var e let são utilizados para variáveis que serão alteradas durante a execução do bloco em que se encontrarm, porém ao declararmos uma variável com var, os seus valores e referências são guardadas na memória e é possível acesssa-las fora do bloco em que foram declaradas, quando declaramos uma variável com let é possível apenas acessa-la dentro do bloco em foi declarada. Agora quando usamos const significa que queremos que o valor inicial atribuido á variável seja imutável.
---

2. Assinale a(s) diferença(s) entre Funções normais e Arrow Functions?

 - [ ] Funções normais não guardam escopo  
 - [x] Funções normais guardam escopo  
 - [x] Arrow function são mais rápidas  
 - [ ] Arrow function podem ser instanciadas  
 - [x] Arrow function não guardam escopo  

---

3. qual o valor da constante name após a execução da função?

```javascript
 content = {
  name: "John",
  getName: function() {
    this.name = "James"
    return this.name
  }
}

userData = {
  name: "Luke",
  getName: content.getName
}
this.name = "Walter"
const name = userData.getName()

```
 - [ ] John
 - [ ] Luke
 - [x] James
 - [ ] Walter

---

4. Qual o retorno da função event.getTitle()

```javascript
function Event(name, day) {
  this.date = day
  this.name = name

  this.getName = function() {
    return this.name
  }
  this.getDate = function() {
    return this.date
  }
}

const event = new Event("04/02/2019", "Event Test")

Event.prototype.getTitle = function() {
  return `The event ${this.name} will take place on ${this.date} `
}
event.getTitle()

```

 - [x] The event 04/02/2019 will take place on Event Test
 - [ ] The event undefined will take place on undefined
 - [ ] Uncaught TypeError
 - [ ] The event null will take place on null

---

5. Quais são as formas de selecionar um elemento na DOM e qual a diferença entre elas?

  > As formas para se selecionar um elemento na DOM são:
  > - **document.getElementById()**: acessa o elemento pelo atributo ID inserido no HTML.
 >  - **document.getElementsByName()**: acessa o elemento pelo atributo nme inserido no HTML.
   >- **document.getElementsByTagName()**: Acessa o elemento pelo nome da tag encontrad no HTML.
   >- **document.getElementsByClassName()**: Acessa o elemento pelo nome da classe colocada no HTML.
   >- **document.querySelectorAll()**: Essa função recebe como parâmetro um seletor css, e retorna todas as nodeslists encontradas no HTML.
---

6. Como inserir um evento em determinado elemento?
>Existem duas formas, a forma inline que é quando inserimos manualmente no HTML, existe a forma "externa" quando usamos o manipulador de eventos ``event listener`` que nos permite adicionar ou remover eventos pelo javascript. ex:
```javascript
 let elemento = document.getElementById('meu-elemento')
 elemento.addEventListener("submit", function( e ) { 
   alert('evento disparado');
   return false; 
  }
);
```
 
---

7. Como remover um evento em determinado elemento?
>Da mesma forma que adicionar evento porém utilizando o removeEventListner
```javascript
 let elemento = document.getElementById('meu-elemento')
 elemento.removeEventListener("submit", function( e ) { 
   alert('evento removido');
   return false; 
  }
);
```
---

8. Descreva com suas palavras o que é event bubbling?
> Event bubbling é um comportamento "natural" do html e javascript, ocorre quando um evento é disparado em um elemento, e esse mesmo evento é propagado para os seus "parentes"(elemento pai, elemento avô e etc.) É muito comum utilizar o ```StopPropagation()``` quando se lida com muitos eventos.

---

9. Descreva qual a diferença nos métodos de declaração de objetos?

```javascript
const object = {}
const object = new Object()
const object = Object.create()
```
>Enquanto a declaração com **New Object()** e **={}** são praticamente a mesma coisa, a única diferença é que a declaraçação com **={}** é mais performática. Já o
**Object.create()** É utilizado para criar um novo objeto utilizando um outro objeto ja existene como base (protótipo).Muito utilizado para fazer herança simples.

---

10. Qual a diferença no uso de XMLHttpRequest e Fetch ? E qual devemos usar atualmente ?
>Existem várias diferenças entre o **XMLHttpRequest** e **Fetch**, porém a principal é que o Fetch por padrão utiliza **Promises** enquanto o **XMLHttpRequest** nos força a usar callbacks o que pode ocasionar no famoso **callbackHell** Apesar do **Fetch** ser um pouco mais lento que o **XMLHttpRequest**, hoje ele é mais recomendado devido a sua maneira _clean_ de lidar com as requisições.
---

11. O que são Promises ? Como podemos declarar uma promise em javascript ?
>Promisse (promessa) são um tipo objeto em javascript que nos ajudam a lidar com o assincronismo do browser. Uma Promise pode ser resolvida, rejeitada, ou nunca tiver um retorno dependendo da requisição. Uma Promise pode ser criada dessa forma:
```javascript
 new Promise(function(resolve, reject) { ... });
```
---

12. Liste 3 formas de iterar um Array em javascript e explique a diferença entre cada um deles?

>As formas de se iterar por um array são:
>- **array.map()**: Esse método retorna um novo array e recebe como parâmetro uma função (anônima) que será executada para cada elemento contido no array.
>- **array.forEach()**: Esse método altera o array existente e recebe como parâmetro uma função (anônima) que será executada para cada elemento contido no array.
>- **array.filter()**: Esse método retorna um novo array e para cada iteração a uma verificaço se o elemento deve continuar ou ser removido do array original.
--- 

13. Quando utilizar map, reduce ou filter ?
>- **map()**: Utiliza-se quando se deseja retornar um novo array, tendo com base um "array original" é muito comum quando queremos alterar o um determinado array sem perder seu valor original.
>- **reduce()**: Utiliza-se quando se deseja retornar um valor cumulativo ou concatenado com base em elementos de todo o array.
>- **filter()**: Utiliza-se quando se deseja remover elementos de um array com base em alguma condição.
---

14. Qual o método do Array é mais indicado para remover elementos ?
 >O método **reduce()** é o mais indicado.
---

15. Cite 4 métodos presentes na API de strings do Javascript e explique cada um deles;
>- **slice()**: tira uma parte da string e retorna uma nova.
>- **toString()**: retorna a a representação de um objeto em string
>- **ToLowerCase()**: Torna as letras de uma string em minusculo.
>- **substring()**: Retornar uma nova String a partir de uma outra string e recebe como parâmetros inicio e fim da nova string.

---

16. Escreva um código para inserir e resgatar items do LocalStorage/SessionStorage
```
  localStorage.setItem('nome-do-item', {nome: 'vinicius', sobrenome:'Puente'});
```
```
  localStorage.getItem('nome-do-item');
```
---

17. Qual a melhor forma para definir um cookie utilizando javascript ?
>```updatedCookie = document.cookie```

---

18. Quais os tipos de Loops existentes em javascript ?
> - for
 >- do while
 >- while
 >- for...in
 >- for...of
---

19. Descreva com suas palavras o que é hoisting ?
> Hoisting é um comportamento do interpretador do javascript, que permite que uma função declarada no final da pagina do código, possa ser chamada no começo. O javascript não é lido de forma sincrona procedural. 
---

20. Em um ambiente do browser. Qual o valor do this utilizando "use-strict";

 - [x] window
 - [ ] global
 - [ ] undefined
 - [ ] null

---
21.Quando eu posso utilizar o "Use-strict" no meu código ?

 - [x] No ínicio do meu código
 - [] No inicio do block if
 - [] No inicio de um loop
 - [] no inicio de uma função
