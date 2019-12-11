import './style.scss';
import iziModal from 'izimodal/js/iziModal';

// Initialise imported function as jQuery function
$.fn.iziModal = iziModal;

// jQUERY //
$(document).ready(() => {

  // initialize modal
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

  // js-get-started-form
  $('#modal-get-started').iziModal({
    width: 780,
    padding: '40px 60px',
    radius: 12,
  });

  const form = $('.modal-get-started');

  form.submit((e) => {
    e.preventDefault();

    let data = {};

    data = form.serialize();
    console.log(data);

    // $.ajax({
    //   type: 'POST',
    //   // url: 'wdh_send_form.php',
    //   data: $('.modal-get-started').serialize(),
    //   success: function(data) {
    //     $('.modal-get-started .results').html(data);
    //   }
    // });
  });
});
