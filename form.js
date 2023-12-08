function submitForm() {
    var name = document.getElementById('name').value;
    var inGameName = document.getElementById('inGameName').value;
    var email = document.getElementById('email').value;

    var specialID = email;

    localStorage.setItem('name-' + specialID, name);
    localStorage.setItem('inGameName-' + specialID, inGameName);
    localStorage.setItem('email-' + specialID, email);
    localStorage.setItem('specialID', specialID);

    // Přesměrování na stránku s účtem a přidání e-mailu do URL
    window.location.href = 'ucet.html?email=' + encodeURIComponent(email);
    return false;
}

window.onload = function () {
    document.getElementById('name').value = localStorage.getItem('name') || '';
    document.getElementById('inGameName').value = localStorage.getItem('inGameName') || '';
    document.getElementById('email').value = localStorage.getItem('email') || ''; };