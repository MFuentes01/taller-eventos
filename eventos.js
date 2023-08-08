
document.addEventListener("DOMContentLoaded", function() {
    
    
    document.getElementById("contenedor").addEventListener("click", function() {
        alert("Hola! Soy el div");
    });

    document.getElementById("btn").addEventListener("click", function(event) {
        event.stopPropagation();
    });
    
    
});


