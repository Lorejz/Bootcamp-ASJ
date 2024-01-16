import java.util.HashSet;
import java.util.Random;
import java.util.Scanner;
import java.util.Set;

public class Ejercicio_5 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scanner = new Scanner(System.in);

		int[][] matriz = generarMatrizAleatoria(3, 3);

		mostrarMatriz(matriz);

        System.out.println("¿Desea sumar una fila o una columna? (fila/columna): ");
        String opcion = scanner.next();

        if (opcion.equalsIgnoreCase("fila")) {
            System.out.println("Ingrese el número de la fila que desea sumar (1, 2, 3): ");
            int fila = scanner.nextInt();

            // Verificar la entrada del usuario
            if (fila >= 1 && fila <= matriz.length) {
                int sumaFila = sumaFila(matriz, fila);

                System.out.println("La suma de la fila " + fila + " es: " + sumaFila);
            } else {
                System.out.println("Número de fila no válido.");
            }
        } else if (opcion.equalsIgnoreCase("columna")) {
            System.out.println("Ingrese el número de la columna que desea sumar (1, 2, 3): ");
            int columna = scanner.nextInt();

            if (columna >= 1 && columna <= matriz[0].length) {
                int sumaColumna = sumaColumna(matriz, columna);
                System.out.println("La suma de la columna " + columna + " es: " + sumaColumna);
            } else {
                System.out.println("Número de columna no válido.");
            }
        } else {
            System.out.println("Opción no válida. Ingrese 'fila' o 'columna'");
        }

        scanner.close();

//		Ejercicio 5
//		Dada la matriz anterior, realizar la suma de una columna o fila
//		(preguntar al usuario que desea sumar, si una fila o una columna, y cual de ellas).
//		Extra: mostrar el resultado al final de la fila/columna correspondiente
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
					numeroAleatorio = random.nextInt(15); // Rango del 0 al 99
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
