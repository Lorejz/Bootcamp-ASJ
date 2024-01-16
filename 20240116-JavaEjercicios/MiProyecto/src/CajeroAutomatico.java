import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class CajeroAutomatico {

    private static List<String> movimientos = new ArrayList<>();

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int numInput;
        double saldo = 129.40;
        double cantDineroExtraccion;
        double cantDineroDeposito;

        do {
            mostrarMenu();
            numInput = scanner.nextInt();

            switch (numInput) {
                case 1:
                    System.out.println("FUNCION EXTRAER");
    				System.out.println("Ingrese la cantidad que desea extraer: ");
                    cantDineroExtraccion = scanner.nextDouble();
                    if (cantDineroExtraccion <= saldo) {
                        saldo = calculoSaldoExtraccion(cantDineroExtraccion, saldo);
                        registrarMovimiento("EXTRAER", cantDineroExtraccion);
                        System.out.println("Operacion Finalizada Exitosamente! Saldo Restante = $ " + saldo);
                        System.out.println("------------------------------");
                    } else {
                        System.out.println("Cantidad invalida, repita la operacion");
                        System.out.println("------------------------------");
                    }
                    break;
                case 2:
                    System.out.println("FUNCION DEPOSITAR");
    				System.out.println("Ingrese la cantidad que desea depositar: ");
                    cantDineroDeposito = scanner.nextDouble();
                    if (cantDineroDeposito > 0) {
                        saldo = calculoSaldoDeposito(cantDineroDeposito, saldo);
                        registrarMovimiento("DEPOSITAR", cantDineroDeposito);
                        System.out.println("Operacion Finalizada Exitosamente! Saldo Restante = $ " + saldo);
                        System.out.println("------------------------------");
                    } else {
                        System.out.println("Cantidad invalida, repita la operacion");
                        System.out.println("------------------------------");
                    }
                    break;
                case 3:
                    System.out.println("FUNCION CONSULTAR SALDO");
                    registrarMovimiento("Consultar Saldo", saldo);
                    System.out.println("Su saldo es de: $ " + saldo);
                    System.out.println("------------------------------");
                    break;
                case 4:
                    System.out.println("FUNCION VER ÚLTIMOS MOVIMIENTOS");
                    verUltimosMovimientos();
                    System.out.println("------------------------------");
                    break;
                default:
                    System.out.println("");
                    break;
            }

        } while (numInput != 5);

        scanner.close();
    }

    public static double calculoSaldoExtraccion(double cant, double saldo) {
        return saldo - cant;
    }

    public static double calculoSaldoDeposito(double cant, double saldo) {
        return saldo + cant;
    }

    public static void registrarMovimiento(String tipo, double cantidad) {
        movimientos.add(tipo + " " + cantidad);
    }

    public static void verUltimosMovimientos() {
        System.out.println("Últimos movimientos:");
        for (String movimiento : movimientos) {
            System.out.println(movimiento);
        }
    }

    public static void mostrarMenu() {
        System.out.println("Ingrese el numero de la operacion que desea realizar");
        System.out.println("1- EXTRAER");
        System.out.println("2- DEPOSITAR");
        System.out.println("3- CONSULTAR SALDO");
        System.out.println("4- VER ÚLTIMOS MOVIMIENTOS");
        System.out.println("5- SALIR");
        System.out.println("------------------------------");
    }
}
