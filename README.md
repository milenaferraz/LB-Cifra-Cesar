# Laboratória -4ª Geração :two_hearts: 
***
### :zap: Projeto: Cifra de César

***

## :star: 1. Prefácio

Cifrar significa codificar. A [cifra de
César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar) é um dos primeiros
tipos de criptografias conhecidas na história. O imperador romano Júlio César
utilizava essa cifra para enviar ordens secretas aos seus generais no campo de
batalha.

![caeser-cipher](https://user-images.githubusercontent.com/11894994/60990999-07ffdb00-a320-11e9-87d0-b7c291bc4cd1.png)

A cifra de César é uma das técnicas mais simples de cifrar uma mensagem. É um
tipo de cifra por substituição, em que cada letra do texto original é
substituida por outra que se encontra há um número fixo de posições
(deslocamento) mais a frente do mesmo alfabeto.

Por exemplo se usarmos o deslocamento (Chave) de 3 posições:

* Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto com cifra:  D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
* A letra A será D
* A palavra CASA será FDVD

Atualmente todas as cifras de substituição alfabética simples, são decifradas
com facilidade e não oferecem muita segurança na comunição, mas a cifra de César
muitas vezes pode fazer parte de um sistema mais complexo de criptografia, como
a cifra de Vigenère, e tem aplicação no sistema ROT13.

## 2. Resumo do projeto

Neste projeto você poderá cifrar e decrifrar um texto
indicando a chave de deslocamento.

Você poderá usar a aplicação para codificar ou descodificar uma mensagem.

## :warning: Pré-Requisitos:

****
1. Node.js e Yarn instalado


## 🚀 3. Rodando o projeto localmente

****

1. Clone o projeto na sua máquina

```sh
git clone https://github.com/milenaferraz/LB-Cifra-Cesar.git
```

2. Acesse a pasta do projeto

```sh
cd LB-Cifra-Cesar
```

3. Instale todas as dependências do projeto

```sh
yarn install
```

4. Rode o projeto na sua máquina

```sh
yarn start
```

5. Abre o navegador e visualize o projeto

```sh
http://localhost:3000
```
* 

### :satisfied: Entender a lógica do projeto

A seguir um vídeo do instrutor Daniel que te ajudará a entender a fórmula matemática usada
pela Cifra de César e algumas coisas mais que deve saber para entender a fórmula usada.

[![Dicas Cifra de
César](https://img.youtube.com/vi/utiLWBXmNQU/0.jpg)](https://www.youtube.com/watch?v=utiLWBXmNQU)