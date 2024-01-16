import java.util.HashSet;
import java.util.Random;
import java.util.Scanner;
import java.util.Set;

public class Ejercicio_6 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

//		Nos piden crear una matriz de 4×4 de números enteros que inicialmente esta vacía, nos piden hacer un menú con estas opciones:
//
//			-Rellenar TODA la matriz de números, debes pedírselo al usuario.
//			-Suma de una fila que se pedirá al usuario (controlar que elija una correcta)
//			-Suma de una columna que se pedirá al usuario (controlar que elija una correcta)
//			-Sumar la diagonal principal (ver ejemplo)
//			-Sumar la diagonal inversa (ver ejemplo)
//			-La media de todos los valores de la matriz
//
//			IMPORTANTE: hasta que no se haga la primera opción, el resto de opciones no se deberán de ejecutar, simplemente mostrar
//			un mensaje donde diga que debes rellenar la matriz
		Scanner scanner = new Scanner(System.in);

		int opcionInput;
		boolean flag = false;
		int[][] matriz = null; // inicializo
		do {
			mostrarMenu();
			opcionInput = scanner.nextInt();
			switch (opcionInput) {
			case 1:
				System.out.println("entro a 1");
			    matriz = generarMatrizAleatoria(4, 4);
				System.out.println("entro a 1");

			    flag = true; // bandera de control, para saber si está rellena
			    mostrarMatriz(matriz);
			    System.out.println("Matriz Rellena Correctamente");
			    break;
			case 2:
				if (flag == true) {
					System.out.println("Ingrese el numero de fila que desea sumar (1, 2, 3, 4): ");
					int fila = scanner.nextInt();
					if (fila >= 1 && fila <= matriz.length) {
						int sumaFila = sumaFila(matriz, fila);
						System.out.println("La suma de la fila " + fila + " es: " + sumaFila);
						break;
					} else {
						System.out.println("Número de fila no válido.");
						break;
					}
				} else {
					System.out.println("Por favor rellene la matriz antes de ejecutar esta opcion.");
					break;
				}
			case 3:
				if (flag==true) {
					System.out.println("Ingrese el número de la columna que desea sumar (1, 2, 3, 4): ");
		            int columna = scanner.nextInt();
		            if (columna >= 1 && columna <= matriz[0].length) {
		                int sumaColumna = sumaColumna(matriz, columna);
		                System.out.println("La suma de la columna " + columna + " es: " + sumaColumna);
		            } else {
		                System.out.println("Número de columna no válido.");
		            }
				}else {
					System.out.println("Por favor rellene la matriz antes de ejecutar esta opcion.");
					break;
				}
			}
		} while (opcionInput != 7);
		scanner.close();

	}

	public static void mostrarMenu() {
		System.out.println("Opciones:");
		System.out.println("1- Rellenar Matriz");
		System.out.println("2- Suma de una Fila");
		System.out.println("3- Suma de una columna");
		System.out.println("4- Suma de diagonal Principal");
		System.out.println("5- Suma de diagonal Inversa");
		System.out.println("6- Calcular media de todos los valores");
		System.out.println("7- Salir");
		System.out.println("Ingrese el numero de la opcion que desea ejecutar");
	}

	public static int[][] generarMatrizAleatoria(int filas, int columnas) {
		int[][] matriz = new int[filas][columnas];
		Set<Integer> numerosGenerados = new HashSet<>();
		Random random = new Random();

		for (int i = 0; i < filas; i++) {
			for (int j = 0; j < columnas; j++) {
				int numeroAleatorio;

				// Generar número aleatorio sin repetir
				do {
					numeroAleatorio = random.nextInt(15); // Rango del 0 al 99, puedes ajustar según tus necesidades
				} while (!numerosGenerados.add(numeroAleatorio));

				matriz[i][j] = numeroAleatorio;
			}
		}

		return matriz;
	}
	
	public static void mostrarMatriz(int[][] matriz) {
		System.out.println("Matriz generada:");

		for (int i = 0; i < matriz.length; i++) {
			for (int j = 0; j < matriz[i].length; j++) {
				System.out.print(matriz[i][j] + " ");
			}
			System.out.println(); // Salto de línea al final de cada fila
		}
	}

	public static int sumaFila(int[][] matriz, int fila) {
		int suma = 0;

		for (int j = 0; j < matriz[fila - 1].length; j++) {
			suma += matriz[fila - 1][j];
		}

		return suma;
	}
	
    public static int sumaColumna(int[][] matriz, int columna) {
        int suma = 0;

        for (int i = 0; i < matriz.length; i++) {
            suma += matriz[i][columna - 1];
        }

        return suma;
    }
}
