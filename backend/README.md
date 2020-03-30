# Backend do curso Starter da RocketSeat

- O que é API Rest e NodeJs?
    Api Rest é o conceito que separa o front-end do back-end, ou seja cada um tem sua responsabilidade na aplicação. Já o NodeJs é um código JavaScript escrito em cima do motor V8 do Chrome.

- Instalar o [NodeJs](https://nodejs.org/en/)

- Iniciar projeto:
    ```Shell
    npm init -y
    ```

- Criar Primeira rota:

    ```Shell
    npm install express
    ```

    - Importar express:

        ```JS
        const express = require('express');

        const app = express();
        ``` 

- Instalação do nodemon, que é uma ferramenta que possibilita que cada alteração no código seja observada pelo servidor.

    ```Shell
    npm install nodemon -D
    ``` 

- Instalar MongoDB usando [Docker](https://docs.docker.com/install/linux/docker-ce/ubuntu/)
    ```Shell
    docker pull mongo

    docker run --name mongo -p 27017:27017 -d mongo
    ```
    
    - Ver todas as imagens que estão rodando atualmente:
        
        ```Shell
        docker ps -a
        ```
    - Depois de desligar a máquina
        ```Shell
        docker start mongo
        ```

- Conectando Database
    ```Shell
    npm install mongoose
    ```

    - Importar mongoose
        ```JS
        const mongoose = require('mongoose');

        mongoose.connect('mongodb://localhost:port');
        ``` 

- Criando model de Produto.
    - Dentro da pasta src criei uma pasta models que basicamente, vai servir pra guardar produtos no banco de dados.

- Reestruturação de arquivos
    - Aplicando Pattern Design ao projeto, no caso MVC.

- Utilização do Insomnia.
    - Software usado para fazer testes no backend.

- Criação de registro.
    - Método index e create implementados.

- CRUD:
    - Criação dos métodos: Create, Read, Update e Delete.

- Paginação da lista:

    - Instaei o pacote mongoose-paginate:
        ```Shell
        npm install mongoose-paginate
        ```

- Adicionando CORS
    - Ferramenta usada para definir quais domínios poderão acessar minha API.
        ```Shell
        npm install cors
        ```