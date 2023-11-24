
<div align="center" id=topo>

<h1> 🐱 Sistema de Atendimento para PetShop 🐶 </h1> 
  
> Pet Lovers project from the subject: Programming Techniques, ministered by teacher: Gerson Penha

<p>
    <a href="req">Requisitos do Sistema</a> | 
    <a href="#atividades1">Parte1</a> | 
    <a href="#atividades2">Parte2</a> | 
    <a href="#atividades3">Parte3</a> | 
    <a href="#atividades4">Parte4</a> |
    <a href="#atividades5">Parte5</a> 
</p>

</div>

<br>

<span id="req">
  
## 📚 Requisitos

Para que a execução do sistema e seu uso sejam efetivados, tenha instalado as seguintes tecnologias:

1. Git:
  - Você precisará do Git instalado para poder fazer a clonagem deste repositório: [Clique aqui para instalar o Git](https://git-scm.com/downloads) 

2. NodeJS:
  - No momento em que for instalar o Node, escolha a versão "LTS"; [Clique aqui para instalar o Node](https://nodejs.org/en)

3. Java:
  - Para rodar a 4 parte do projeto será nescessário utilização do Java; [Clique aqui para instalar o Java](https://www.java.com/pt-BR/download/)



<br>

<span id="atividades1">

## Parte1 *Sistema CLI* 1️⃣
<p>
    <a href="#tec">Tecnologia</a> | 
    <a href="#backlog">Backlog</a> | 
    <a href="#manual">Manual de Usuário</a> 
</p>

## :pushpin: Sobre o desafio
 Você é um empreendedor e também é um engenheiro de software formidável. Ao unir suas habilidades, junto com as informações sobre o crescimento do comercio eletrônico de produtos para pets e pet shops, você decidiu criar uma empresa especializada no desenvolvimento de sistemas para gerenciamento de lojas nestes segmentos. 
 Assim surgiu a tua empresa, a Computer4Pet (C4P). O objetivo da C4P é desenvolver sistemas para atender, lojas de comercio eletrônico, pet shops e clínicas veterinárias em geral. O primeiro projeto que recebeu investimento foi um sistema do tipo CLI (Command-Line Interface). O sistema foi batizado como PetLovers (PL). O PL foi pensando para gerenciar pet shops e/ou clínicas veterinárias. A primeira versão do software foi desenvolvida por uma “software house” – empresa especializada no desenvolvimento de software por encomenda. Contudo, infelizmente a empresa não fez um bom trabalho. Agora resta a você terminar o serviço e evitar um prejuízo maior.

 
<br>

> 🔗 **Link** <br>
> - Documento de apoio da atividade1: [Clique para visualizar](https://github.com/b4hia/PetLovers-PL/tree/main/documents/atvi-pl.pdf)
    
<br>
  
<span id="tec">

## 🔌 Tecnologias Utilizadas

<div align="center">
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/>
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
</div>

<br>

<span id="backlog">

## 🌱 Backlog do Produto *Atividade1*

 #### Épicos (Requisitos Funcionais) 

- [x] CRUD (Create, Read, Update e Delete) de clientes e seus respectivos Pets.
- [x] CRUD de produtos e serviços.
- [x] Registro de consumo dos produtos ou serviços que cada cliente adquiriu.

 #### Especificação das Listagens
- [x] Listagem dos 10 clientes que mais consumiram produtos ou serviços, em quantidade, não em valor.
- [x] Listagem geral dos serviços ou produtos mais consumidos.
- [ ] Listagem dos serviços ou produtos mais consumidos por tipo e raça de pets.
- [x] Listagem dos 5 clientes que mais consumiram em valor, não em quantidade.

<br>


→ [Voltar ao topo](#topo)

<br>

<span id="manual">

## :scroll: Manual do Usuário

- crie uma pasta, entre nela e abra o cmd
- clone o repositório
~~~
git clone https://github.com/b4hia/PetLovers-PL/atv1-pl.git 
~~~
    
- entre no clone 
~~~
cd atv1-pl
~~~

- entre na pasta source 
~~~
cd src
~~~

- compile o arquivo
~~~
npx tsc
~~~

- rode a aplicação
~~~   
node out/app/main.js
~~~

<span id="atividades2">
  
## Parte2 *Sistema com GUI* 2️⃣
  
<p>
    <a href="#tec2">Tecnologia</a> | 
    <a href="#backlog2">Backlog</a> | 
    <a href="#manual2">Manual de Usuário</a> 
</p>

## :pushpin: Sobre o desafio
  O sistema desenvolvido para o grupo C4P foi um sucesso, várias franquias de lojas especializadas em produtos para o mercado pet adotaram o sistema. Mas, há uma questão ainda não resolvida, o sistema não tem uma GUI - Graphical User Interface.
 Por isso, o objetivo é atualizar o sistema com uma GUI moderna e que funcione tanto em navegadores comuns quanto em navegadores de dispositivos móveis.
  
<br>

> 🔗 **Link** <br>
> - Documento de apoio da atividade2: [Clique para visualizar](https://github.com/b4hia/PetLovers-PL/tree/main/documents/atvii-pl.pdf)

<br>

<span id="tec2">

## 🔌 Tecnologias Utilizadas

<div align="center">
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/>
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
<img src="https://img.shields.io/badge/Bootstrap-white?style=for-the-badge&logo=bootstrap&logoColor=7610F6"/>
</div>

<br>

<span id="backlog2">

## 🌱 Backlog do Produto *Atividade2*

 #### Épicos (Requisitos) 
- [x] Desenvolver todas as interfaces HTML.
- [x] Não é nescessário integração com o back-end.
- [x] Utilizar as bibliotecas Bootstrap e React.
- [x] Todas os componentes criados com react devem ser componentes de classe.
- [x] O Design precisa ser responsivo.



→ [Voltar ao topo](#topo)

<br>

<span id="manual2">

## :scroll: Manual do Usuário

- crie uma pasta, entre nela e abra o cmd
- clone o repositório
~~~
git clone https://github.com/b4hia/PetLovers-PL/atv2-pl.git 
~~~
    
- entre no clone 
~~~
cd atv2-pl
~~~

- entre na pasta source 
~~~
cd src
~~~

- instale os pacotes
~~~
npm i
~~~

- rode a aplicação
~~~
npm start
~~~

<span id="atividades3">
  
## Parte3 *Incrementando Hooks ao Sistema* 3️⃣
  
<p>
    <a href="#tec3">Tecnologia</a> | 
    <a href="#backlog3">Backlog</a> | 
    <a href="#manual3">Manual de Usuário</a> 
</p>

## :pushpin: Sobre o desafio
  O objetivo é construir a mesma GUI, feita anteriormente com componentes de classe, mas agora com componentes de função.
<br>

> 🔗 **Link** <br>
> - Documento de apoio da atividade3: [Clique para visualizar](https://github.com/b4hia/PetLovers-PL/tree/main/documents/atviii-pl.pdf)

<br>

<span id="tec3">

## 🔌 Tecnologias Utilizadas

<div align="center">
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/>
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
<img src="https://img.shields.io/badge/Bootstrap-white?style=for-the-badge&logo=bootstrap&logoColor=7610F6"/>
</div>

<br>

<span id="backlog3">

## 🌱 Backlog do Produto *Atividade3*

 #### Épicos (Requisitos) 
- [x] Substituir os componentes de função por componentes de classe
- [x] Adaptar a GUI atual para o uso de Hooks.


→ [Voltar ao topo](#topo)

<br>

<span id="manual3">

## :scroll: Manual do Usuário

- crie uma pasta, entre nela e abra o cmd
- clone o repositório
~~~
git clone https://github.com/b4hia/PetLovers-PL/atv2-pl.git 
~~~
    
- entre no clone 
~~~
cd atv3-pl
~~~

- entre na pasta source 
~~~
cd src
~~~

- instale os pacotes
~~~
npm i
~~~

- rode a aplicação
~~~
npm start
~~~

<span id="atividades4">

## Parte4 *Integração do Back-end com o Front-end* 4️⃣
  
<p>
    <a href="#tec4">Tecnologia</a> | 
    <a href="#backlog4">Backlog</a> | 
    <a href="#manual4">Manual de Usuário</a> 
</p>

## :pushpin: Sobre o desafio
  O objetivo é construir uma aplicação front-end que consiga se comunicar com a aplicação back-end, todas as funções do CRUD devem estar disponíveis para que um cliente comum consiga realizar, porém utilizando a GUI desenvolvida anteriormente.
  > OBS: o back-end disponibilizado está em JAVA, mas, opicionalmente, ele pode ser desenvolvido em outra linguagem se assim o desenvolvedor preferir.
<br>

> 🔗 **Link** <br>
> - Documento de apoio da atividade4: [Clique para visualizar](https://github.com/b4hia/PetLovers-PL/tree/main/documents/atviv-pl.pdf)

<br>

<span id="tec4">

## 🔌 Tecnologias Utilizadas

<div align="center">
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/>
<img src="https://img.shields.io/badge/Java-%23ED8B00?style=for-the-badge&logo=openjdk&logoColor=white"/>
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
<img src="https://img.shields.io/badge/Bootstrap-white?style=for-the-badge&logo=bootstrap&logoColor=7610F6"/>
</div>

<br>

<span id="backlog4">

## 🌱 Backlog do Produto *Atividade4*

 #### Épicos (Requisitos) 
- [ ] Fazer o back-end se comunicar com front-end
- [ ] Adaptar a GUI para realizar a conexão back-front.


→ [Voltar ao topo](#topo)

<br>

<span id="manual4">

## :scroll: Manual do Usuário

- crie uma pasta, entre nela e abra o cmd
- clone o repositório
~~~
git clone https://github.com/b4hia/PetLovers-PL/atv2-pl.git 
~~~
    
- entre no clone 
~~~
cd atv4-pl
~~~



