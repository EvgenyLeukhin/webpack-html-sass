import '../scss/pages/index.scss';

// Initialise imported function as jQuery function
import iziModal from 'izimodal/js/iziModal';
$.fn.iziModal = iziModal;

$(document).ready(() => {

  // #modal-youtube
  $('#modal-youtube').iziModal({
    title: 'What is GRC?',
    headerColor: 'black',
    background: 'black',
    borderBottom: false,
    closeButton: true,
    transitionIn: 'fadeInDown',
    iframe: true,
    iframeHeight: 315,
    width: 560,
    fullscreen: true,
    iframeURL: 'https://www.youtube.com/embed/F3TGcQWCH1g',
    history: false,
    loop: true
  });

  // open/close #modal-get-started
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
