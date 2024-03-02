import webbrowser
import http.server
import socketserver
import os
import signal
import sys

PORT = 8000
Handler = http.server.SimpleHTTPRequestHandler

# Define a signal handler function
def signal_handler(signum, frame):
    print('Signal received, stopping server...')
    httpd.server_close()
    print("Server stopped.")
    sys.exit(0)

# Register signal handler for SIGINT and SIGTERM
signal.signal(signal.SIGINT, signal_handler)
signal.signal(signal.SIGTERM, signal_handler)

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
    finally:
        httpd.server_close()
        print("Server stopped.")
