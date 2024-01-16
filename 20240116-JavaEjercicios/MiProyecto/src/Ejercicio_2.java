import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Ejercicio_2 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
//		Ejercicio 2 
//		Escribe un programa que lea 15 números por teclado y que los almacene en un array.
//		Rota los elementos de ese array, es decir, el elemento de la posición 0 debe pasar a la posición 1, el de la 1 a la 2, etc.
//		El número que se encuentra en la última posición debe pasar a la posición 0. Finalmente, muestra el contenido del array.
		
        int datos[] = new int[15];
        int numInput;

        Scanner scanner = new Scanner(System.in);

        System.out.println("Ingrese 15 números:");

        for (int i = 0; i < datos.length; i++) {
            numInput = scanner.nextInt();
            datos[i] = numInput;
        }
        
        System.out.println("array antes de ordenarlo");
        mostrarArray(datos);
        ordenarArray(datos);
        mostrarArray(datos);
        
		
	}

	   public static void mostrarArray(int[] numeros) {
	        for (int i : numeros) {
	            System.out.print(i + " ");
	        }
	        System.out.println();
	    }
	   
	   public static void ordenarArray ( int[] array ) {
	        int ultimoElemento = array[array.length - 1];

	        for (int i = array.length - 1; i > 0; i--) {
	            array[i] = array[i - 1];
	        }

	        array[0] = ultimoElemento;
	   }
	   
	
}
