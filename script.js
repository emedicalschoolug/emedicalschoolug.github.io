function navigateNotes() {
    const dropdown = document.getElementById('note-dropdown');
    const selectedValue = dropdown.value;
    if (selectedValue) {
        document.getElementById(selectedValue).scrollIntoView({ behavior: 'smooth' });
    }
}

function searchHeadings() {
    const input = document.getElementById('search-bar').value.toLowerCase();
    const headings = document.querySelectorAll('h2');

    headings.forEach(heading => {
        const text = heading.textContent.toLowerCase();
        if (text.includes(input)) {
            heading.style.backgroundColor = 'yellow';
        } else {
            heading.style.backgroundColor = '';
        }
    });
}
