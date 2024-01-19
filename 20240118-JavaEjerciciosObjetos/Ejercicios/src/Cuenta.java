
public class Cuenta {
	
	private String titular;
	private double cantidad;
	
	public Cuenta ( String titular ) {
		this.titular = titular;
		this.cantidad = 0;
	}
	
	public Cuenta ( String titular, double cantidad ) {
		this.titular = titular;
		this.cantidad = cantidad;
	}
	
	public void ingresar(double cantidad) {
		if(cantidad > 0) {
			this.cantidad = (this.cantidad + cantidad);
			System.out.println("Operacion Finalizada con exito, saldo: "+this.cantidad);
		}else {
			System.out.println("Cantidad invalida, negativa");
		}
	}
	
    public void retirar(double cantidad) {
        if (cantidad > 0) {
            if (this.cantidad - cantidad >= 0) {
                this.cantidad = (this.cantidad - cantidad);
                System.out.println("Retiro exitoso. Nuevo saldo: " + this.cantidad);
            } else {
                this.cantidad = 0;
                System.out.println("El saldo no puede ser negativo. Saldo actual: " + this.cantidad);
            }
        } else {
            System.out.println("Error: La cantidad a retirar debe ser positiva.");
        }
    }
}
