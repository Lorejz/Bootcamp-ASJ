import java.util.Random;

public class Persona {

	private String nombre;
	private int edad;
	private int dni;
	private String sexo;
	private double peso;
	private double altura;

	public Persona() {
		this.nombre = "";
		this.edad = 0;
		this.dni = generarDNI();
		this.sexo = "H"; // Valor por defecto 'H' (hombre)
		this.peso = 0.0;
		this.altura = 0.0;
	}

	public Persona(String nombre, int edad, String sexo) {
		this.nombre = nombre;
		this.edad = edad;
		this.dni = generarDNI();
		this.sexo = sexo;
		this.peso = 0.0;
		this.altura = 0.0;
	}

	public Persona(String nombre, int edad, String sexo, double peso, double altura) {
		this.nombre = nombre;
		this.edad = edad;
		this.dni = generarDNI();
		this.sexo = sexo;
		this.peso = peso;
		this.altura = altura;
	}

	public int calcularIMC() {
		double calculo;
		double alturaEnMetros = this.altura / 100.0;

		calculo = (double) ((this.peso) / (alturaEnMetros * alturaEnMetros));

		if (calculo < 20) {
			return -1; //nose
		} else if (calculo >= 20 && calculo <= 25) {
			return 0; //debajo peso ideal
		} else if (calculo > 25) {
			return 1; // sobrepeso
		} else {
			System.out.println("error");
			return 404;
		}

	}
	
	public boolean esMayorDeEdad() {
		if (this.edad >= 18) {
			return true;
		}else {
			return false;
		}
	}
	
	
	public void comprobarSexo() {
		if(this.sexo.charAt(0) != 'H' || this.sexo.charAt(0) != 'F') {
			setSexo("H");
		}
	}
	
    private static int generarDNI() {
        StringBuilder dniGenerado = new StringBuilder();
        Random random = new Random();

        for (int i = 0; i < 8; i++) {
            int digito = random.nextInt(10);
            dniGenerado.append(digito);
        }

        return Integer.parseInt(dniGenerado.toString());
    }
	
	
	@Override
	public String toString() {
		return "Persona [nombre=" + nombre + ", edad=" + edad + ", dni=" + dni + ", sexo=" + sexo + ", peso=" + peso
				+ ", altura=" + altura + "]";
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public int getEdad() {
		return edad;
	}

	public void setEdad(int edad) {
		this.edad = edad;
	}

	public int getDni() {
		return dni;
	}

	public void setDni(int dni) {
		this.dni = dni;
	}

	public String getSexo() {
		return sexo;
	}

	public void setSexo(String sexo) {
		this.sexo = sexo;
	}

	public double getPeso() {
		return peso;
	}

	public void setPeso(double peso) {
		this.peso = peso;
	}

	public double getAltura() {
		return altura;
	}

	public void setAltura(double altura) {
		this.altura = altura;
	}
	
	

}
