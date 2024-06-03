document.addEventListener('DOMContentLoaded', function () {
    var alumnos = [
        { nombre: 'Juan Gomez', nota: 0 },
        { nombre: 'Pedro Rodriguez', nota: 0 },
        { nombre: 'Roxana García', nota: 0 },
        { nombre: 'Luciano Lopez', nota: 0 },
        { nombre: 'Fernanda Gimenez', nota: 0 },
        { nombre: 'Florencia Martinez', nota: 0 },
        { nombre: 'Raul Sanchez', nota: 0 },
        { nombre: 'Sandra Figueroa', nota: 0 }
    ];

    var alumnosInputs = document.getElementById('alumnosInputs');

    // Generar inputs para cada alumno
    alumnos.forEach(function (alumno, index) {
        var div = document.createElement('div');
        div.innerHTML = `
            <label for="nota-${index}">${alumno.nombre}:</label>
            <input type="number" id="nota-${index}" name="nota-${index}" min="0" max="10" step="0.1" required>
        `;
        alumnosInputs.appendChild(div);
    });

    // Manejar el envío del formulario
    document.getElementById('notasForm').addEventListener('submit', function (event) {
        event.preventDefault();

        // Obtener las notas ingresadas
        alumnos.forEach(function (alumno, index) {
            var notaInput = document.getElementById(`nota-${index}`);
            alumno.nota = parseFloat(notaInput.value);
        });

        // Filtrar los alumnos aprobados
        var alumnosAprobados = alumnos.filter(function (alumno) {
            return alumno.nota >= 7;
        });

        // Mostrar los alumnos aprobados
        var alumnosAprobadosList = document.getElementById('alumnosAprobados');
        alumnosAprobadosList.innerHTML = '';
        alumnosAprobados.forEach(function (alumno) {
            var li = document.createElement('li');
            li.textContent = `${alumno.nombre} - Nota: ${alumno.nota}`;
            alumnosAprobadosList.appendChild(li);
        });
    });
});
