
### Perguntas de Javascript

1. Explique com suas palavras a diferença entre a utilização de var, const e let?

---

2. Assinale a(s) diferença(s) entre Funções normais e Arrow Functions?

 - [ ] Funções normais não guardam escopo  
 - [ ] Funções normais guardam escopo  
 - [ ] Arrow function são mais rápidas  
 - [ ] Arrow function podem ser instanciadas  
 - [ ] Arrow function não guardam escopo  

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
 - [ ] James
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

 - [ ] The event 04/02/2019 will take place on Event Test
 - [ ] The event undefined will take place on undefined
 - [ ] Uncaught TypeError
 - [ ] The event null will take place on null

---

5. Quais são as formas de selecionar um elemento na DOM e qual a diferença entre elas?

---

6. Como inserir um evento em determinado elemento?

---

7. Como remover um evento em determinado elemento?

---

8. Descreva com suas palavras o que é event bubbling?

---

9. Descreva qual a diferença nos métodos de declaração de objetos?

```javascript
const object = {}
const object = new Object()
const object = Object.create()
```

---

10. Qual a diferença no uso de XMLHttpRequest e Fetch ? E qual devemos usar atualmente ?

---

11. O que são Promises ? Como podemos declarar uma promise em javascript ?

---

12. Liste 3 formas de iterar um Array em javascript e explique a diferença entre cada um deles?

---

13. Quando utilizar map, reduce ou filter ?

---

14. Qual o método do Array é mais indicado para remover elementos ?

---

15. Cite 4 métodos presentes na API de strings do Javascript e explique cada um deles;

---

16. Escreva um código para inserir e resgatar items do LocalStorage/SessionStorage

---

17. Qual a melhor forma para definir um cookie utilizando javascript ?

---

18. Quais os tipos de Loops existentes em javascript ?

---

19. Descreva com suas palavras o que é hoisting ?

---

20. Em um ambiente do browser. Qual o valor do this utilizando "use-strict";

 - [ ] window
 - [ ] global
 - [ ] undefined
 - [ ] null

---
