# Buscaminas


El lado cliente se comunica a través de un servcio rest (usando flask-restful) al servidor hecho en python.

En el lado servidor se genera el tablero para el juego, con sus dimensiones, cantidad de minas, y los valores correspondientes para deducir dónde se encuentran las minas.

El lado cliente dibuja el tablero a partir de una matriz obtenida a través del servicio rest y maneja la lógica de presentación y eventos de click del usuario.

métodos rest: 
	localhost:8000/start_buscaminas/
	localhost:8000/board_custom/<size>/<mines>/

## Para correr el proyecto

-instalar los requirements:

$ pip install -r requirements.txt

-ejecutar buscaminas.py:

$ python buscaminas.py 

-abrir el index.html con cualquier navegador y jugar

## ToDo-List
* Bloquear juego si se piso una mina, ahora se puede reiniciar el juego o seguir jugando.
* Permitir deshacer el marcado de un celda y actualice las minas restantes.
* Marcar la celda una sola vez (no mas) y actualice las minas restantes.
* Revelar celdas adyacentes cuando no hay minas.
* Si se descubren todas las celdas sin pisar minas terminar el juego.
