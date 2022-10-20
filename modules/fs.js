const fs = require('fs')
const path = require('path')

// fs.mkdir(path.join(__dirname, '/test'), (error) => {
//     if (error){
//         return console.log('Erro: ', error)
//     }
//     console.log('Pasta criada com sucesso!')
// });

fs.writeFile(path.join(__dirname, '/test', 'test.txt'), 'Hello node :)', (error) => {
        if (error){
            return console.log('Erro: ', error)
        }
        console.log('Arquivo salvo com sucesso')
        fs.appendFile(path.join(__dirname, '/test', 'test.txt'), 'Hello world :)', (error) => {
            if (error){
                return console.log('Erro: ', error)
            }
            console.log('Deu certo')
        });
        fs.readFile(path.join(__dirname, '/test', 'test.txt'), 'utf8', (error, data) => {
            if (error) {
                return console.log('Erro: ', error);
            }
            console.log(data)
        });
    }
);



