import '../scss/pages/about.scss';

// jQUERY //
$(document).ready(() => {
  const getStartedBtn = $('.js-modal-get-started');

  getStartedBtn.on('click', e => {
    e.preventDefault();

    alert(123);
  })
});
