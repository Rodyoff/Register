document.addEventListener('DOMContentLoaded', function() {
    const selectInput = document.querySelector('.select-input');
    const dropdownContent = document.querySelector('.dropdown-content');
    const optionsList = document.querySelectorAll('.options-list li');
    const navLinks = document.querySelectorAll('.sidebar ul li a');
    const contentSections = document.querySelectorAll('.content-section');

    // Fonctionnalité du menu déroulant avec filtre
    selectInput.addEventListener('focus', function() {
        dropdownContent.style.display = 'block';
    });

    selectInput.addEventListener('input', function() {
        const filter = selectInput.value.toLowerCase();

        optionsList.forEach(function(option) {
            const text = option.textContent.toLowerCase();
            if (text.indexOf(filter) !== -1) {
                option.style.display = 'block';
            } else {
                option.style.display = 'none';
            }
        });
    });

    optionsList.forEach(function(option) {
        option.addEventListener('click', function() {
            selectInput.value = option.textContent;
            dropdownContent.style.display = 'none';
        });
    });

    selectInput.addEventListener('blur', function() {
        setTimeout(function() {
            dropdownContent.style.display = 'none';
        }, 200);
    });

    // Fonctionnalité de navigation dans la barre latérale
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = link.getAttribute('data-target');

            contentSections.forEach(function(section) {
                if (section.id === targetId) {
                    section.classList.add('active');
                } else {
                    section.classList.remove('active');
                }
            });
        });
    });
});


