const http = require('http')

const port = 80

const server = http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain'})
  response.write('What is Up\n')
  response.write('hello\n')
  response.end('Version: ' + process.env.NODE_VERSION + '\n')

 const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
   }); 
 
  question('Who are you?', name => {
  console.log(`Hey there ${name}!`);
  readline.close(); 
  
  
})

server.listen(port)

console.log(`Server running at http://localhost: ${port}`)
