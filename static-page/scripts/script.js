// Select the HTML elements
// that we need to interact with
const body = document.body;
const btn = document.getElementById('btn-menu');
const navhm=document.getElementById('nav-hm');


// Create our event handlers

// Hamberger-menu (Click Event) 
// - Toggle a "show" class on / off on the body
//   element
btn.addEventListener('click', _ => { 
    body.classList.toggle('show'); 
    navhm.classList.toggle('open');
});

//dropdown menu (sortby, year)
for (const dropdown of document.querySelectorAll(".custom-select-wrapper")) {
    dropdown.addEventListener('click', function() {
        this.querySelector('.custom-select').classList.toggle('open');
    })
}

for (const option of document.querySelectorAll(".custom-option")) {
    option.addEventListener('click', function() {
        if (!this.classList.contains('selected')) {
            this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
            this.classList.add('selected');
            this.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = this.textContent;
        }
    })
}

window.addEventListener('click', function(e) {
    for (const select of document.querySelectorAll('.custom-select')) {
        if (!select.contains(e.target)) {
            select.classList.remove('open');
        }
    }
});


