import java.util.HashSet;
import java.util.Random;
import java.util.Set;

public class Ejercicio_4 {

    public static void main(String[] args) {
        // Ejercicio 4
        // Generar una matriz de 3×3 con números aleatorios sin repetirse.

        int[][] matriz = generarMatrizAleatoria(3, 3);

        // Mostrar la matriz generada
        mostrarMatriz(matriz);
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
}
