/* File Name: app.js
   Author Name: Keying Song
   Student ID: 301166693
   Web App Name:   */
"use strict";
(function () {
    function confirmDelete() {
        $("a.delete").on("click", function (event) {
            if (!confirm("Are you sure?")) {
                event.preventDefault();
                location.href = '/books';
            }
        });
    }
    function Start() {
        console.log("App Started");
        confirmDelete();
    }
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=app.js.map