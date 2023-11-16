
<div align="center" id=topo>

<h1> 🐱 Sistema de Atendimento para PetShop 🐶 </h1> 
  
> Pet Lovers project from the subject: Programming Techniques, ministered by teacher: Gerson Penha

<p>
    <a href="req">Requisitos do Sistema</a> | 
    <a href="#atividades1">Parte1</a> | 
    <a href="#atividades2">Parte2</a> | 
    <a href="#atividades3">Parte3</a> | 
    <a href="#atividades4">Parte4</a> 
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

<br>

<span id="atividades1">

## Parte1 *Sistema CLI*
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
  
## Parte2 *Sistema com GUI*
  
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
</div>

<br>

<span id="backlog2">

## 🌱 Backlog do Produto *Atividade2*

 #### Épicos (Requisitos) 
| CÓDIGO | DESCRIÇÃO |
|:------:|:----------:|
|   REQ_1  | Desenvolver todas as interfaces HTML. 
|   REQ_2  | Não é nescessário integração com o back-end.
|   REQ_3  | Utilizar as bibliotecas Bootstrap e React. 
|   REQ_4  | Todas os componentes criados com react devem ser componentes de classe.
|   REQ_5  | O Design precisa ser responsivo 


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

