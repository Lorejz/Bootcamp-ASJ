import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class PrincipalDePersona {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Scanner scanner = new Scanner(System.in);
		
		List<Persona> personas = new ArrayList();
		
		System.out.println("Ingrese datos de persona 1");
		System.out.println("Ingrese nombre Persona1:");
		String nombreInput = scanner.nextLine();
		
		System.out.println("Ingrese edad:");
		int edadInput = scanner.nextInt();
		
		scanner.nextLine();
		
		System.out.println("Ingrese sexo:");
		String sexoInput = scanner.nextLine();
		
		System.out.println("Ingrese peso:");
		double pesoInput = scanner.nextDouble();
		
		System.out.println("Ingrese altura:");
		double alturaInput = scanner.nextDouble();
		
		Persona persona1 = new Persona(nombreInput, edadInput, sexoInput, pesoInput, alturaInput);
		
		personas.add(persona1);
		
		System.out.println("Ingrese datos de persona 2");
		System.out.println("Ingrese nombre Persona2:");
		String nombreInput2 = scanner.nextLine();
		scanner.nextLine();
		System.out.println("Ingrese edad Persona2:");
		int edadInput2 = scanner.nextInt();
		
		scanner.nextLine();
		
		System.out.println("Ingrese sexo Persona2:");
		String sexoInput2 = scanner.nextLine();
		
		Persona persona2 = new Persona(nombreInput2, edadInput2, sexoInput2);
		
		personas.add(persona2);
		
		Persona persona3 = new Persona();
		
		personas.add(persona3);
		
		//comprobaciones
		for ( Persona persona : personas) {
			System.out.println("------Info Persona------");
			persona.comprobarSexo();
			int valorIMC = persona.calcularIMC();
			if(valorIMC == 0) {
				System.out.println("debajo peso ideal");
			}else if(valorIMC == 1) {
				System.out.println("sobrepeso");
			}
			System.out.println("Es mayor ? "+persona.esMayorDeEdad());
			System.out.println(persona.toString());
		}
		
		
	}

}
