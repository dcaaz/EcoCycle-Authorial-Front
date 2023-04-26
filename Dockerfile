FROM node

# pasta para onde vai o build
WORKDIR /tmp/react

# copia os arquivos para dentro da pasta WORKDIR
COPY . .

# instala as dependências do projeto
RUN npm i

#bugfix - enquanto usa o CRA para buildar
RUN chmod a+x /tmp/react/node_modules/.bin/react-scripts 

# cria a versão otimizada de produção
RUN npm run build

# cria todo o caminho (-p) da pasta que será servida pelo nginx
RUN mkdir -p /var/www/html

# move o conteúdo
RUN mv build/* /var/www/html

# sai da pasta
WORKDIR /

# remove todo o diretório de desenvolvimento
RUN rm -rf /tmp/react