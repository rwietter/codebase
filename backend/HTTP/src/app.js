const http = require('http');

/*
request => menssagem que chegou no servidor
- pegar entidades, recursos, dados, cabeçalhos do pedido

response => menssagem que retorno para o cliente
- cabeçalhos de resposta, entidades, mensagem de status
*/
const server = http.createServer((request, response) => {
  console.log('method', request.method);
  console.log('headers', request.headers);
  console.log('httpVersion', request.httpVersion);

  // response.end('Message'); // envia uma mensagem para o cliente

  if(request.method === 'POST'){
    response.writeHead(201, {
      'Content-Type': 'application/json'
    })
    response.write('{"message:" "Cadastro realizado com sucesso"}');
  }
  
  if(request.method === 'GET'){
    response.writeHead(201, {
      'Content-Type': 'text/html'
    })
    response.write(`
    <!DOCTYPE html>
      <html>
        <head>
            <meta charset="utf-8" />
            <style>
              body { font-family:helvetica,arial,sans-serif; font-size:13px; }
              h1 { color:hsl(0, 0%, 40%); background:#eee; margin:20px 10px 0; padding:10px; border-radius:2px; font-weight:normal; font-size:17px; }
              h2 { color:hsl(0,0%,33%); margin-left:25px; margin-top:20px; font-weight:normal; font-size:15px; }
              ul { list-style-type:none; }
              li { white-space:nowrap; padding:3px 0; }
              a { text-decoration:none; vertical-align:middle; color:black; }
              a:hover { text-decoration:underline; }
              .sb-favicon { height:16px; width:16px; margin-right:12px; vertical-align:middle; }
            </style>
        </head>
        <body>
            <ul>
              <li><img class="sb-favicon" src="https://static.todamateria.com.br/favicon.ico"><a href="https://www.todamateria.com.br/pronomes-em-ingles/" target="_blank">Pronomes&nbsp;em&nbsp;Inglês&nbsp;-&nbsp;Pronouns&nbsp;-&nbsp;Toda&nbsp;Matéria</a></li>
              <li><img class="sb-favicon" src="https://www.wordreference.com/favicons/favicon.ico"><a href="https://www.wordreference.com/" target="_blank">English&nbsp;to&nbsp;French,&nbsp;Italian,&nbsp;German&nbsp;&amp;&nbsp;Spanish&nbsp;Dictionary&nbsp;-&nbsp;WordReference.com</a></li>
              <li><img class="sb-favicon" src="https://ororo.tv/favicon.png?v=1"><a href="https://ororo.tv/en" target="_blank">ororo.tv</a></li>
            </ul>
        </body>
      </html>
    `);
    response.end();
  }
});

server.listen(5000, () => {
  console.log(`Server is listen`); 
}); 
