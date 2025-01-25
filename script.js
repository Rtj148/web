// وظيفة لإظهار وإخفاء التفاصيل عند الضغط على الزر
function toggleDetails(id) {
    var details = document.getElementById(id);
    var button = document.querySelector(`[data-target='${id}']`);

    if (details.classList.contains('hidden')) {
        details.classList.remove('hidden');
        button.textContent = 'Hide Details';
    } else {
        details.classList.add('hidden');
        button.textContent = 'Show Details';
    }
}