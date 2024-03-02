import webbrowser
import http.server
import socketserver
import os

PORT = 8000

Handler = http.server.SimpleHTTPRequestHandler

# Check if Python is installed by attempting to import a standard library module
try:
    import sys
except ImportError:
    print("Python is not installed. Please install Python to use this script.")
    sys.exit(1)

# Start the HTTP server
with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print("Starting local server...")
    webbrowser.open(f"http://localhost:{PORT}/index.html")
    print(f"Server started at http://localhost:{PORT}")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        pass
    httpd.server_close()
    print("Server stopped.")