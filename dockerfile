# Especifica a imagem base do Node.js
FROM node:21

# Cria e define o diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copia os arquivos de dependência de pacotes
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Gere o Prisma Client
RUN npx prisma generate

# Copia os arquivos do projeto para o diretório de trabalho do container
COPY . .

# Compila o código TypeScript para JavaScript
RUN npm run build

# Expõe a porta que a API usará
EXPOSE 4000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
