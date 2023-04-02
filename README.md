# PIXNOW

`NodeJs` `Express` `Typescript` `Prisma` `SQLite` `Zod` 

<br/>

## ROTAS

### CRIAÇÃO DE UM USUÁRIO

`POST` `/user`

> rota responsável pela criação de um novo usuário, ao criar um novo usuário ainda sim não é gerado um token de autenticação essa função é totalmente de responsabilidade da rota `POST` `/USER/AUTH`
> 

<br/>

`BODY`
```json
{
	"firstName":"franklin",
	"lastName":"silva",
	"email":"exemplo@ex.com",
	"password":"qwe123"
}
```
<br/><br/>

### AUTENTICAÇÃO

`POST` `/user/auth`

> rota responsável pela autenticação de usuário existentes caso o usuário não possua um cadastro no site é possível criar um novo usuário pela rota `PUT` `/user/auth`
> 

<br/>

`BODY`

```json
{
	"email":"exemplo@ex.com",
	"password":"qwe123"
}
```

<br/><br/>

### TODAS AS CHAVES BANCARIAS

`GET` `/key`

> para acessar todas as chaves bancarias de um usuário basta acessar essa mesma rota, vale lembrar que é necessário o usuário esta logado para acessar todas as rotas a partir de `/key`
> 
<br/><br/>
### CRIAR UMA NOVA CHAVE BANCARIA

`POST` `/key`

> para atribuir uma nova chave ao seu usuário basta emitir os dados da chave e pronto… fácil e rápido.
> 

<br/>

`BODY`

```json
{
	"key":"<sua-chave>",
	"description":"<descrição-ou-atributos-sobre-a-chave>"
}
```
<br/><br/>
### DELETAR UMA CHAVE BANCARIA

`DELETE` `/key`

> se por algum motivo desejar deletar uma de suas chaves, você pode acessar essa mesma rota enviando os dados necessários  assim como no exemplo abaixo:
> 

<br/>

`BODY`

```json
{
	"id":"qwe123qwe123qwe132"
}
```
<br/><br/>
### ATUALIZAR UMA CHAVE BANCARIA

`PUT` `/key`

> para atualizar uma de suas chaves é necessário emitir os dados necessário assim como no exemplo abaixo, vale lembra que somente parte dos dados passados serão atualizados, o atributo `id` é o identificador da chave bancaria e ele não pode ser alterado, o `id` é apenas uma forma de encontrar a chave bancaria existente, essa caso só se aplica ao atributo `id`
> 

<br/>

`BODY`

```json
{
	"id": "qwe123qwe123qwe123", // não pode ser nulo
	"key": "<nova-chave ou nulo>",
	"description": "<nova-descricao ou nulo>"
}
```