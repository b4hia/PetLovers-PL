
<div align="center" id=topo>

<h1> 🐱 Sistema de Atendimento para PetShop 🐶 </h1> 
  
> Pet Lovers project from the subject: Programming Techniques, ministered by teacher: Gerson Penha

<p>
    <a href="#sobre">Sobre</a> | 
    <a href="#tec">Tecnologia</a> | 
    <a href="#backlog">Backlogs</a> | 
    <a href="#manual">Manual de Usuário</a> |
</p>

</div>

<br>

<span id="sobre">

## :pushpin: Sobre o projeto
 Você é um empreendedor e também é um engenheiro de software formidável. Ao unir suas habilidades, junto com as informações sobre o crescimento do comercio eletrônico de produtos para pets e pet shops, você decidiu criar uma empresa especializada no desenvolvimento de sistemas para gerenciamento de lojas nestes segmentos. 
 Assim surgiu a tua empresa, a Computer4Pet (C4P). O objetivo da C4P é desenvolver sistemas para atender, lojas de comercio eletrônico, pet shops e clínicas veterinárias em geral. O primeiro projeto que recebeu investimento foi um sistema do tipo CLI (Command-Line Interface). O sistema foi batizado como PetLovers (PL). O PL foi pensando para gerenciar pet shops e/ou clínicas veterinárias. A primeira versão do software foi desenvolvida por uma “software house” – empresa especializada no desenvolvimento de software por encomenda. Contudo, infelizmente a empresa não fez um bom trabalho. Agora resta a você terminar o serviço e evitar um prejuízo maior.

 
<br>

> 🔗 **Link** <br>
> - Documento de apoio: [Clique para visualizar](https://github.com/b4hia/PetLovers-PL/tree/main/documents/9995766/atvi-pl.pdf)
    
<br>

<span id="tec">

## 🔌 Tecnologias

<div align="center">
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/>
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
</div>

<br>

<span id="backlog">

## 🌱 Backlog do Produto  

 #### Épicos (Requisitos Funcionais) 
| CÓDIGO | DESCRIÇÃO |
|:------:|:----------:|
|   REQ_1  | CRUD (Create, Read, Update e Delete) de clientes e seus respectivos Pets. 
|   REQ_2  | CRUD de produtos e serviços.
|   REQ_3  | Registro de consumo dos produtos ou serviços que cada cliente adquiriu. 

 #### Especificação das Listagens
| CÓDIGO | DESCRIÇÃO |
|:------:|:----------:|
|   LIST_1    | Listagem dos 10 clientes que mais consumiram produtos ou serviços, em quantidade, não em valor.
|   LIST_2    | Listagem geral dos serviços ou produtos mais consumidos.
|   LIST_3    | Listagem dos serviços ou produtos mais consumidos por tipo e raça de pets.
|   LIST_4    | Listagem dos 5 clientes que mais consumiram em valor, não em quantidade.


→ [Voltar ao topo](#topo)

<br>

<span id="manual">

## :scroll: Manual do Usuário

- crie uma pasta, entre nela e abra o cmd
- clone o repositório
~~~
[git clone https://github.com/b4hia/PetLovers-PL/atv1-pl.git 
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
