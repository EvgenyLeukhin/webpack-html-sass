$(document).ready(() => {

  // modal
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


  // form
  const formModal = $('#modal-get-started');
  const sendAnotherOne = $('.js-send-another-one');

  formModal.on('submit', (e) => {

    const name = $('#modal-get-started__name').val();
    const email = $('#modal-get-started__email').val();
    const recatcha = $('#g-recaptcha-response').val();

    if (name && email && recatcha) {
      // if ok
      // need a request
      e.preventDefault();
      formModal.addClass('success');
    } else {
      // if not ok
      e.preventDefault();
      alert('Fill the form!');
    }
  });

  // send another one
  sendAnotherOne.on('click', () => {
    formModal.removeClass('success');
  });
});

