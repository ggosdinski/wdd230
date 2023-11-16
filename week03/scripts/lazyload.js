document.addEventListener("DOMContentLoaded", function() {
    var lastModifiedElement = document.getElementById("lastModified");
    var lastModified = new Date(document.lastModified);
    
    var options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    var formattedDate = lastModified.toLocaleDateString(undefined, options);
    
    lastModifiedElement.textContent = "Last Modification: " + formattedDate;
});
