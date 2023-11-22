// const Admin = () => {
//     var UrbanLocalbodies = document.getElementById("UrbanLocalbodies").value;
//     var linkofpdf = document.getElementById("linkofpdf").value;

//     console.log(UrbanLocalbodies);
//     console.log(linkofpdf);
//     localStorage.setItem('UrbanLocalbodies', UrbanLocalbodies)
// }

 window.onload = function() {

    // Check for LocalStorage support.
    if (localStorage) {
  
      // Add an event listener for form submissions
      document.getElementById('contactForm').addEventListener('submit', function() {
        // Get the value of the name field.
        // var name = document.getElementById('name').value;
        var UrbanLocalbodies = document.getElementById("UrbanLocalbodies").value;
        var linkofpdf = document.getElementById("linkofpdf").value;
  
        // Save the name in localStorage.
      let a =  localStorage.setItem('UrbanLocalbodies', UrbanLocalbodies);
      let b =  localStorage.setItem('linkofpdf', linkofpdf);
      document.getElementById("output").value = a;

        if(UrbanLocalbodies != 0 & linkofpdf != 0)
        {
          alert(window.location = "http://localhost:5173/adminmaps")
        }
      });
  
    }
  
 }