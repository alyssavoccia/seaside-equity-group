// Modal Fade In & Fade Out
let modal = $(".belch-modal");

$(".subscribe-button").click(function() {
    modal.fadeIn();
});

$(".belch-modal__close").click(function() {
    modal.fadeOut();
});