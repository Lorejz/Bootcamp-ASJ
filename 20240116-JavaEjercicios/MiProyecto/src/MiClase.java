import java.util.Scanner;
public class MiClase {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		// "Console.log()" similiar a console.log de javascript
		//		System.out.println("hola");
		/*
		 * Tipo De Datos
		 * int
		 * double
		 * float
		 * boolean
		 * String
		 * char
		 * 
		 */
		
//		int entero;
//		double doble;
//		float flotante;
//		boolean booleano;
//		String string;
//		char caracter;
//		byte miByte;
//		short mishort;
//		long miLong;
		
//		//maximos y minimos de algunas variables
//		System.out.println("Tipo - Minimo - Maximo");
//		System.out.println("Int: "+Integer.MIN_VALUE+" "+Integer.MAX_VALUE);
//		System.out.println("\n");
//		System.out.println("Tipo - Minimo - Maximo");
//		System.out.println("Byte: "+Byte.MIN_VALUE+" "+Byte.MAX_VALUE);
//		System.out.println("\n");
//		System.out.println("Tipo - Minimo - Maximo");
//		System.out.println("Float: "+Float.MIN_VALUE+" "+Float.MAX_VALUE);
//		System.out.println("\n");
//		System.out.println("Tipo - Minimo - Maximo");
//		System.out.println("Long: "+Long.MIN_VALUE+" "+Long.MAX_VALUE);
		
//		byte pruebaByte = 12;
//		
//		System.out.println( (int)pruebaByte ); //parseo o casteo
		
		/*
		 * dada una palabra ingresada por el usuario
		 * mostrar su equivalente en ascii (letra por letra)
		 * ej: ingresa: hola --> 72 122 32 22
		 * 
		 * extra: agregar espacios blancos
		 */
		
		Scanner scanner = new Scanner(System.in);
		
		System.out.println("Ingrese una palabra");
		String inputString = scanner.nextLine();
		scanner.close();
		
        char[] charArray = inputString.toCharArray();

        for (char c : charArray) {
            int asciiValue = (int) c; //cada item del arreglo se parsea a int asi obteniendo el valor ascii
            System.out.print(asciiValue+" ");
        }
        
        
        
	}

}
