		import java.util.HashMap;
		import java.util.Map;
		import java.util.Scanner;
public class EjercicoTecladoNokia {
    public static void main(String[] args) {
        Map<Character, String> tecladoNumerico = crearTecladoNumerico();
        Scanner scanner = new Scanner(System.in);

        System.out.println("Ingrese la secuencia de números:");

        String secuenciaNumeros = scanner.nextLine();
        String palabra = generarPalabra(secuenciaNumeros, tecladoNumerico);

        System.out.println("Palabra generada: " + palabra);
    }

    private static Map<Character, String> crearTecladoNumerico() {
        Map<Character, String> tecladoNumerico = new HashMap<>();
        tecladoNumerico.put('2', "ABC");
        tecladoNumerico.put('3', "DEF");
        tecladoNumerico.put('4', "GHI");
        tecladoNumerico.put('5', "JKL");
        tecladoNumerico.put('6', "MNO");
        tecladoNumerico.put('7', "PQRS");
        tecladoNumerico.put('8', "TUV");
        tecladoNumerico.put('9', "WXYZ");
        tecladoNumerico.put('0', " ");

        return tecladoNumerico;
    }

    private static String generarPalabra(String secuenciaNumeros, Map<Character, String> tecladoNumerico) {
        StringBuilder palabraGenerada = new StringBuilder();
        char[] numeros = secuenciaNumeros.toCharArray();

        for (char numero : numeros) {
            String letras = tecladoNumerico.get(numero);

            if (letras != null) {
                // Obtener la letra correspondiente según la posición
                char letra = letras.charAt(0);

                // Verificar si es necesario agregar un espacio antes de la letra
                if (palabraGenerada.length() > 0 && palabraGenerada.charAt(palabraGenerada.length() - 1) != ' ') {
                    palabraGenerada.append(' ');
                }

                // Agregar la letra a la palabra generada
                palabraGenerada.append(letra);
            }
        }

        return palabraGenerada.toString();
    }
}


		
	

