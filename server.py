from http.server import BaseHTTPRequestHandler, HTTPServer

class MiHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/':
            self.path = '/index.html'  # Cambia 'index.html' por el nombre de tu archivo HTML principal
        try:
            # Abre el archivo solicitado
            with open(self.path[1:], 'rb') as file:
                content = file.read()
            # Envía la respuesta HTTP
            self.send_response(200)
            self.send_header('Content-type', 'text/html')
            self.end_headers()
            self.wfile.write(content)
        except FileNotFoundError:
            # Si el archivo no se encuentra, envía un error 404
            self.send_error(404, 'Archivo no encontrado')

def run():
    print('Iniciando el servidor...')
    server_address = ('', 8080)  # Puedes cambiar el puerto aquí si es necesario
    httpd = HTTPServer(server_address, MiHandler)
    print('Servidor en ejecución...')
    httpd.serve_forever()

if __name__ == '__main__':
    run()
