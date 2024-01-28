document.addEventListener('DOMContentLoaded', function () {
    var inputText = document.getElementById('inputText');
    var totalCharacters = document.getElementById('totalCharacters');
    var remainingCharacters = document.getElementById('remainingCharacters');

    inputText.addEventListener('input', function () {
        var inputValue = inputText.value;
        totalCharacters.textContent = inputValue.length;
        var remaining = 50 - inputValue.length;
        remainingCharacters.textContent = remaining;

        if (inputValue.length > 50) {
            inputText.value = inputValue.slice(0, 50);
        }
    });
});
