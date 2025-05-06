// Fungsi untuk scroll halus ke bagian tertentu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Menambahkan efek pada elemen proyek ketika di-scroll
window.addEventListener('scroll', function() {
    const projects = document.querySelectorAll('.project');
    
    projects.forEach(project => {
        const projectPosition = project.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;

        // Jika proyek muncul di layar, beri efek fade-in
        if (projectPosition < screenPosition) {
            project.classList.add('fade-in');
        } else {
            project.classList.remove('fade-in');
        }
    });
});

// Menambahkan efek klik pada tombol
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', function() {
        alert("Tombol diklik!");
    });
});
