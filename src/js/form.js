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
    const action = 'https://functions.yandexcloud.net/d4e7thbic5lt2m8f3mps';

    // if ok
    if (name && email && recatcha) {
      // need a request
      e.preventDefault();

      $.ajax({
        url: action,
        type: "POST",
        contentType : 'application/json',
        crossDomain: true,
        headers: { 'Access-Control-Allow-Origin': '*' },
        data: { name, email },

        // if request is ok (200)
        success: () => formModal.addClass('success'),

        // if request is not ok
        error: () => alert('Something is wrong!'),
      });

      // if validation is not ok
    } else {
      e.preventDefault();
      alert('Fill the form!');
    }
  });

  // send another one
  sendAnotherOne.on('click', () => {
    formModal.removeClass('success');
  });
});
