<h1 align="center">Escrevendo as Classes de Um Jogo</h1>

Mais um desafio do curso de Formação Lógica de Programação da DIO desenvolvido em JavaScript.

**O que foi utilizado:**
+ Variáveis
+ Operadores
+ Estruturas de decisões
+ Funções
+ Classes e Objetos

## Objetivo
Criar uma classe genérica que represente um herói de uma aventura e que possua as seguintes propriedades:

+ nome
+ idade
+ tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

+ exibir a mensagem: "o {tipo} atacou usando {ataque}"
+ onde o {tipo} deve estar concatenando o tipo que está na propriedade da classe
+ e no {ataque} seguir uma descrição conforme o tipo, seguindo a tabela abaixo:

  se mago -> no ataque exibir (magia) \
  se guerreiro -> no ataque exibir (espada) \
  se monge -> no ataque exibir (artes marciais) \
  se ninja -> no ataque exibir (shuriken) 

## Saída
Ao final deve-se exibir uma mensagem:

"o {tipo} atacou usando {ataque}" 

ex: mago atacou usando magia \
guerreiro atacou usando espada
