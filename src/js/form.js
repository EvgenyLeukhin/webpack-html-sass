$(document).ready(() => {

  // open #modal-get-started
  $('.js-modal-get-started').on('click', e => {
    e.preventDefault();

    const modalGetStarted = $('.modal-get-started');
    const body = $('body');

    modalGetStarted.addClass('show');
    body.addClass('overlay');
  });


  $('.modal-get-started__close').on('click', e => {
    e.preventDefault();

    const modalGetStarted = $('.modal-get-started');
    const body = $('body');

    modalGetStarted.removeClass('show');
    body.removeClass('overlay');
  });


  // js-get-started-form
  // $('#modal-get-started').iziModal({
  //   width: 780,
  //   padding: '40px 60px',
  //   radius: 12,
  // });


  // form
  const form = $('#modal-get-started');

  form.on('submit', (e) => {

    const name = $('#modal-get-started__name').val();
    const email = $('#modal-get-started__email').val();

    if (name && email) {
      console.log(`name: ${name}, email: ${email}`);
    } else {
      alert('Fill the form!');
      e.preventDefault();
    }
  });
});
