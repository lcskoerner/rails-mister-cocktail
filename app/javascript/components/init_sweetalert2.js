import swal from 'sweetalert2';

const initSweetalert = (selector, options = {}) => {

  const swalButton = document.querySelector(selector);

  if (swalButton) { // protect other pages
    swalButton.addEventListener('click', (event) => {
      event.preventDefault();
      swal.fire(options).then((result) => {
        if (result.value) {
          swal.fire({
            title: 'Deleted!',
            text: 'Your cocktail has been deleted.',
            icon: 'success',
            confirmButtonColor: '#218838'
          })
          const link = document.querySelector('#delete-cocktail');
          link.click();
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === swal.DismissReason.cancel
        ) {
          swal.fire({
            title: 'Cancelled',
            text: 'Your cocktail is safe :)',
            icon: 'error',
            confirmButtonColor: '#218838'
          })
        }
      });
    });
  }
};

export { initSweetalert };
