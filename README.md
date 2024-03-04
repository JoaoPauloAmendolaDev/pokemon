Poke-Challenge API

A Poke-Challenge API permite aos usuários criar e gerenciar seus próprios times de Pokémon. Utiliza a PokeAPI para buscar dados dos Pokémon e os armazena em um banco de dados PostgreSQL para recuperação rápida e eficiente.
Tecnologias Utilizadas

    Node.js
    TypeScript
    Prisma ORM
    PostgreSQL
    Docker e Docker Compose

Configuração Inicial
Pré-requisitos

    Node.js (versão recomendada: 14 ou superior)
    Docker e Docker Compose
    npm ou yarn

Configuração do Projeto

    Clone o repositório do projeto:


    git clone https://github.com/JoaoPauloAmendolaDev/pokemon.git
    cd poke-challenge

Instale as dependências do projeto:

    npm install
    # ou, se você estiver usando yarn
    yarn install

Configure as variáveis de ambiente:

Duplique o arquivo .env.example para .env e ajuste as variáveis conforme necessário, especialmente a DATABASE_URL para o seu ambiente de banco de dados.

Uso do Docker

  Crie teu arquivo de configuração do banco na pasta raiz do projeto, use o .env.example de exemplo. vale lembrar que os dados que devem ser preenchidos nesse arquivo estão dentro do docker-compose, na parte de DB.

    .env.development

  agora você irá colocar o comando:

    npx prisma generate

  após isso, faça o build da aplicação utilizando o comando, o comando também levantará a aplicação após o build.

    sudo docker-compose up --build -d

agora podemos fazer todas as requisições, vale lembrar que 
utilizamos a porta 4000 em nosso docker composeEndpoints da API

POST /api/teams: Cria um novo time de Pokémon.

              "{
            	"user": "joao",
            	"pokemons": [
            		"ditto",
            		"dugtrio",
            		"dragonite",
            		"charmander",
            		"zapdos",
            		"mew"
            	]
            }"

GET /api/teams: Lista todos os times registrados.


    "{
	"1": {
		"owner": "pedro paulo",
		"pokemons": [
			{
				"id": 25,
				"name": "pikachu",
				"weight": 60,
				"height": 4
			},
			{
				"id": 51,
				"name": "dugtrio",
				"weight": 333,
				"height": 7
			},
			{
				"id": 149,
				"name": "dragonite",
				"weight": 2100,
				"height": 22
			},
			{
				"id": 4,
				"name": "charmander",
				"weight": 85,
				"height": 6
			},
			{
				"id": 145,
				"name": "zapdos",
				"weight": 526,
				"height": 16
			},
			{
				"id": 151,
				"name": "mew",
				"weight": 40,
				"height": 4
			}
		]
	},
	"2": {
		"owner": "pedro pedro",
		"pokemons": [
			{
				"id": 25,
				"name": "pikachu",
				"weight": 60,
				"height": 4
			},
			{
				"id": 51,
				"name": "dugtrio",
				"weight": 333,
				"height": 7
			},
			{
				"id": 149,
				"name": "dragonite",
				"weight": 2100,
				"height": 22
			},
			{
				"id": 4,
				"name": "charmander",
				"weight": 85,
				"height": 6
			},
			{
				"id": 145,
				"name": "zapdos",
				"weight": 526,
				"height": 16
			},
			{
				"id": 151,
				"name": "mew",
				"weight": 40,
				"height": 4
			}
		]
	}"

 
GET /api/teams/{user}: Recupera um time específico pelo ID.
    
    "{
    	"owner": "pedro paulo",
    	"pokemons": [
    		{
    			"id": 25,
    			"name": "pikachu",
    			"height": 4,
    			"weight": 60
    		},
    		{
    			"id": 51,
    			"name": "dugtrio",
    			"height": 7,
    			"weight": 333
    		},
    		{
    			"id": 149,
    			"name": "dragonite",
    			"height": 22,
    			"weight": 2100
    		},
    		{
    			"id": 4,
    			"name": "charmander",
    			"height": 6,
    			"weight": 85
    		},
    		{
    			"id": 145,
    			"name": "zapdos",
    			"height": 16,
    			"weight": 526
    		},
    		{
    			"id": 151,
    			"name": "mew",
    			"height": 4,
    			"weight": 40
    		}
    	]
    }"
