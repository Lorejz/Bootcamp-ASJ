import java.util.Scanner;
public class Estructuras {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

//		int a = 10;
//		if (a < 10) {
//			
//		} else if (a > 2) {
//			
//		}
		
//		char variable = 'c';
//		
//		switch (variable) {
//		case 'a':
//			System.out.println("a");
//			break;
//		case 'c':
//			System.out.println("c"+variable);
//			break; //se utiliza break para q salga, si no se ejecutaria default si o si
//		default:
//				System.out.println("default entra si no entra otra");
//		}
		
		//operador ternario
//		boolean status = false;
//		String miVar = status? "Aprobado":"Desaprobado";
//		
//		System.out.println(miVar);
		
		
		//bucle for
//		for ( byte i=1; i<=5; i++ ) {
//			System.out.println("Linea "+ i);
//		}
		
		
//		//while hay que acordarse de cortarlo
//		while(status == false) {
//			System.out.println();
//		}
		
		
		//do-while
		
//		do {
//			System.out.println();
//		}while(status == false);
		
		//pedir al usuario que ingrese cuantas notas quiere ingresar,
		//a partir de eso pedir el valor de cada nota
		//sacar el promedio
		// posdata: hacerlo con for, while, do while java
		
//		Scanner scanner = new Scanner(System.in);
//
//        System.out.println("Ingrese la cantidad de notas que quiere ingresar:");
//        int cantNotas = scanner.nextInt();
//
//        if (cantNotas <= 0) {
//            System.out.println("La cantidad de notas debe ser un número positivo.");
//        } else {
//            // Crear un array para almacenar las notas
//            int[] notas = new int[cantNotas];
//
//            // Ingresar las notas en el array usando do-while
//            int contador = 0;
//            do {
//                System.out.print("Ingrese la nota " + (contador + 1) + ": ");
//                notas[contador] = scanner.nextInt();
//                contador++;
//            } while (contador < cantNotas);
//
//            int acumulador = 0;
//            for (int i = 0; i < cantNotas; i++) {
//                acumulador += notas[i];
//            }
//
//            float promedio = (float) acumulador / cantNotas;
//
//
//            System.out.println("El promedio de las notas ingresadas es: " + promedio);
//        }
//        scanner.close();
		
		
//		Scanner scanner = new Scanner(System.in);
//		
//		System.out.println("Ingrese 1er angulo");
//		int primerAngulo = scanner.nextInt();
//		
//		System.out.println("Ingrese 2do angulo");
//		int segundoAngulo = scanner.nextInt();
//		
//		System.out.println("Ingrese 2do angulo");
//		int tercerAngulo = scanner.nextInt();
//		
//		if ( primerAngulo > 0 && segundoAngulo > 0 && tercerAngulo > 0 ) {
//			int acum = primerAngulo + segundoAngulo + tercerAngulo;
//			if( acum == 180 ) {
//				System.out.println("Triangulo valido");
//			}else {
//				System.out.println("Angulo Invalido");
//			}
//		}else {
//			System.out.println("Ingrese angulos validos");
//		}
		
		
		
//		Scanner scanner = new Scanner(System.in);
//		
//		System.out.println("Ingrese un string");
//		String stringcito = scanner.nextLine();
//		
//        char primerCaracter = stringcito.charAt(0);
//
//        if (Character.isDigit(primerCaracter)) {
//            System.out.println("El string comienza con un número.");
//        } else if (Character.isLetter(primerCaracter)) {
//            System.out.println("El string comienza con una letra.");
//        } else {
//            System.out.println("El string no comienza con un número ni con una letra.");
//        }
//
//        // Cerrar el scanner
//        scanner.close();
		
		
		
		
//		Scanner scanner = new Scanner(System.in);
//		
//        System.out.println("Ingrese el valor de N:");
//        int n = scanner.nextInt();
//
//        System.out.println("Ingrese el valor de M:");
//        int m = scanner.nextInt();
//
//        int sumaPares = 0;
//
//
//        if (n % 2 != 0) {
//            n++;
//        }
//
//        for (int i = n; i <= m; i = i + 2) {
//            sumaPares = sumaPares + i;
//        }
//
//        System.out.println("La suma de los números pares entre " + n + " y " + m + " es: " + sumaPares);
//
//        scanner.close();
		
		
//		Scanner scanner = new Scanner(System.in);
//		
//		System.out.println("Ingrese un numero para saber si es perfecto");
//		int numeroIn = scanner.nextInt();
//		int acum = 0;
//        for (int i = 1; i <= numeroIn / 2; i++) {
//            if (numeroIn % i == 0) {
//            	acum += i;
//            }
//        }
//        if (acum == numeroIn) {
//        	System.out.println("NUMERO PERFECTO!");
//        }else {
//        	System.out.println("NO ES PERFECTO :(");
//        }
//		scanner.close();
		
		
		
//		Scanner scanner = new Scanner(System.in);
//		
//		System.out.print("Ingrese un numero entero: ");
//		int num = scanner.nextInt();
//		for (int i = 1; i <= num; i++) {
//			
//			if (i%2==0) {
//				for (int j = 0; j < (num-1); j++) {
//					System.out.print("* ");
//				}
//				System.out.print("\n");
//			}else {
//				for (int j = 0; j < num; j++) {
//					System.out.print("* ");
//				}
//				System.out.print("\n ");
//			}
//			
//		}
//		scanner.close();
		
		
		
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
	}

}
