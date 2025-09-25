function mostrarActividad() {
    const dia = document.getElementById('diaSemana').value.toLowerCase().trim();
    const mensaje = document.getElementById('mensaje').value.trim();
    const resultado = document.getElementById('resultado');
    let actividad;

    switch(dia) {
        case 'lunes':
            actividad = 'atender un cliente específico';
            break;
        case 'martes':
            actividad = 'visitar una agencia fuera de la ciudad';
            break;
        case 'miércoles':
        case 'miercoles':
            actividad = 'llevar a mi hija al ballet';
            break;
        case 'jueves':
            actividad = 'priorizar entregas de desarrollo';
            break;
        case 'viernes':
            actividad = 'atender problemas de manera remota';
            break;
        case 'sábado':
        case 'sabado':
            actividad = 'hacer lo que mi esposa quiera';
            break;
        case 'domingo':
            actividad = 'descansar, día libre';
            break;
        default:
            actividad = null;
    }

  
    if (actividad) {
        resultado.textContent = `Hola ${mensaje }, hoy debes: ${actividad}.`;
    } else {
        resultado.textContent = 'No hay actividad programada para este día.';
    }
}
