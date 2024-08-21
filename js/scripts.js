document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('area-form');
    const result = document.getElementById('result');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const length = parseFloat(document.getElementById('length').value);
        const width = parseFloat(document.getElementById('width').value);

        if (isNaN(length) || isNaN(width)) {
            result.textContent = 'Por favor, ingresa valores válidos.';
        } else {
            const area = length * width;
            result.textContent = `El área del rectángulo es: ${area} unidades cuadradas.`;
        }
    });
});
