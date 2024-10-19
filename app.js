// Variables principales del juego
let numeroMaximoPosible = 100;
let numeroSecreto = Math.floor(Math.random() * numeroMaximoPosible) + 1;
let numeroUsuario = 0;
let intentos = 1;
// Número máximo de intentos permitidos
let maximosIntentos = 6;

// Bucle principal para adivinar el número secreto
while (numeroUsuario != numeroSecreto) {
    // Se solicita al usuario que introduzca un número
    numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${numeroMaximoPosible} por favor:`));

    // Comprobación de si el usuario acertó
    if (numeroUsuario == numeroSecreto) {
        // Mensaje de éxito con el número de intentos realizados
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
    } else {
        // Indicación de si el número es mayor o menor que el número secreto
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        // Incremento del contador de intentos
        intentos++;

        // Comprobación de si se alcanzó el número máximo de intentos
        if (intentos > maximosIntentos) {
            alert(`Llegaste al número máximo de ${maximosIntentos} intentos`);
            break;
        }
    }
}
