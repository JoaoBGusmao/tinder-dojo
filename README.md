# DOJO - Tinder
## Problema
Dado uma lista de usuários do aplicativo Tinder, devemos retornar uma lista com os usuários que combinam com o perfil do nosso jogador, onde o primeiro da lista seja o candidato que tenha mais em comum com ele.
Devemos nos atentar às seguintes regras:
* A única forma de desqualificar um usuário, é se o mesmo não satisfazer os requisitos básicos que são `interests.gender` e `interests.age`
* Para cada ponto de interesse em comum (dado pelo campo `interests.others`), o usuário tem mais chances de ser o par ideal do nosso jogador.
* Nenhum interesse desclassifica um usuário, ou seja, ele não terá menos chance por ter interesses diferentes
* Caso haja tempo, podemos implementar o cenário onde os jogadores também são desqualificados se o nosso jogador não preencher os interesses dele.

## Input
Nosso programa receberá dois parâmetros de entrada. São eles: `player` e `users`, onde player diz respeito ao nosso jogador, e users à lista de usuários a serem qualificados.
`player` é um objeto com as seguintes características:
```
{
    name: 'Joseferson',
    age: 20,
    gender: 'Homem',
    interests: {
        age: [20,30],
        gender: 'Mulher',
        all: ['Phil Collins', 'Pizza', 'Java', 'Chocolate']
    }
}
```
A entrada que representa a lista de usuários, nada mais é do que uma array com objetos iguais ao objeto player
### Obs:
Quando `gender` de interesse não for passado, podemos assumir que tanto 'Homem', quanto 'Mulher' pode ser de interesse.

## Output
A saída do nosso programa é uma array de `player` ordenada pelo usuário que mais combina com o nosso player