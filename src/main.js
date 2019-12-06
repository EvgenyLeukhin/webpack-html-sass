import './style.scss';
import iziModal from 'izimodal/js/iziModal';

// Initialise imported function as jQuery function
$.fn.iziModal = iziModal;

// jQUERY //
$(document).ready(() => {

  // initialize modal
  $("#modal-youtube").iziModal({
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
    iframeURL: "https://www.youtube.com/embed/F3TGcQWCH1g",
    history: false,
    loop: true
  });

});
