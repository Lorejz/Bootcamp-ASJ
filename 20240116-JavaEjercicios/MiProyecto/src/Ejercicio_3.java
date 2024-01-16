import java.util.Random;

public class Ejercicio_3 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

//		Ejercicio 3 
//		Escribe un programa que genere 20 números enteros aleatorios entre 0 y 100 y que los almacene en un array.
//		El programa debe ser capaz de pasar todos los números pares a las primeras posiciones
//		del array (del 0 en adelante) y todos los números impares a las celdas restantes.
//		Utiliza arrays auxiliares si es necesario.

		int[] numeros = new int[20];

		int[] numerosPares = new int[20];
		int[] numerosInpares = new int[20];

		int indicePares = 0;
		int indiceInpares = 0;

		Random random = new Random();

		for (int i = 0; i < numeros.length; i++) {
			// Generar número aleatorio entre 0 y 100
			int numeroAleatorio = random.nextInt(101);
			numeros[i] = numeroAleatorio;
		}

		for (int i = 0; i < numeros.length; i++) {
			if (numeros[i] % 2 == 0) {
				numerosPares[indicePares++] = numeros[i];
			} else {
				numerosInpares[indiceInpares++] = numeros[i];
			}
		}
		
		for (int i = 0; i < indiceInpares; i++ ) {
			numeros[i] = numerosInpares[i];
		}
		
		for (int i = 0; i < indicePares; i++ ) {
			numeros[i] = numerosPares[i];
		}
		
		
		mostrarArray(numeros);
		
	}
	
	   public static void mostrarArray(int[] numeros) {
	        for (int i : numeros) {
	            System.out.print(i + " ");
	        }
	        System.out.println();
	    }
}
