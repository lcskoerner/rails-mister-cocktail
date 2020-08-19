import swal from 'sweetalert';

const initSwal = (selector, options = {}) => {
  const swalCocktail = document.querySelector(selector);
  const keyTerm = selector.split('-')[1];
  if (swalCocktail) {
    swalCocktail.addEventListener('click', (event) => {
      event.preventDefault();
      swal(options).then((value) => {
        if (value) {
          swal({
            title: 'Deleted!',
            text: `Your ${keyTerm} has been deleted.`,
            icon: 'success'
          })
            .then((value) => {
              const deleteLink = document.querySelector(`#delete-${keyTerm}-link`);
              console.log(deleteLink);
              deleteLink.click();
            });

        } else {
          swal({
            title: 'Cancelled',
            text: `Your ${keyTerm} is safe :)`,
            icon: 'error'
          })
        }
      })
    });
  }
};

export { initSwal };
