import java.util.Random;

public class Password {
	
	private int longitud = 8;
	private String contrasenia;
	
	public Password() {
		this.contrasenia = generarContraseniaAleatoria(this.longitud);
	}
	
	public Password (int longitud) {
		this.longitud = longitud;
		this.contrasenia = generarContraseniaAleatoria(longitud);
	}
	
	public Password(String contrasenia) {
		this.contrasenia = contrasenia;
	}

	public boolean esFuerte() {
        int mayusculas = 0;
        int minusculas = 0;
        int numeros = 0;

        for (char c : contrasenia.toCharArray()) {
            if (Character.isUpperCase(c)) {
                mayusculas++;
            } else if (Character.isLowerCase(c)) {
                minusculas++;
            } else if (Character.isDigit(c)) {
                numeros++;
            }
        }
        
        if(mayusculas > 2 && minusculas > 1 && numeros > 5) {
        	return true;
        }else {
        	return false;
        }
    }
	
	
	private String generarContraseniaAleatoria (int longitud) {
		String caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        StringBuilder contraseñaGenerada = new StringBuilder();

        Random random = new Random();

        for (int i = 0; i < longitud; i++) {
            int index = random.nextInt(caracteres.length());
            contraseñaGenerada.append(caracteres.charAt(index));
        }

        return contraseñaGenerada.toString();
    }
	
    public int getLongitud() {
		return longitud;
	}

	public void setLongitud(int longitud) {
		this.longitud = longitud;
	}

	public String getContrasenia() {
		return contrasenia;
	}

	public void setContrasenia(String contrasenia) {
		this.contrasenia = contrasenia;
	}
	
}
