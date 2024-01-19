import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class ClasePrincipal {
	public static void main(String[] args) {
//		Automovil auto1 = new Automovil("Mercedez Benz",2023);
		
//		1) Cree una clase que me permita realizar una operación matemática de 2 números.
//		(Crear los metodos y atributos necesarios)
		
		//Operacion suma1 = new Suma(4, 2);
		//System.out.println(suma1.toString());
		
//		ejercicio 2
		
        List<Password> contrasenias = new ArrayList();

        Scanner scanner = new Scanner(System.in);
        
        System.out.println("Ingrese contraseñas (ingrese 'fin' para terminar):");

        while (true) {
            System.out.print("Contraseña: ");
            String input = scanner.nextLine();

            if (input.equalsIgnoreCase("fin")) {
                break;
            }

            Password contrasenia = new Password(input);
            contrasenias.add(contrasenia);
        }
        
        System.out.println("\nContraseñas ingresadas:");
        
        for (Password contrasenia : contrasenias) {
            System.out.println(contrasenia.getContrasenia() + " - Es fuerte: " + contrasenia.esFuerte());
        }

        scanner.close();
	
		
		
	}
}
