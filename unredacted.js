const redacted = document.querySelectorAll('.redacted');

redacted.forEach((el, i) => {
    el.style.transitionDelay = `${i * 500}ms`
});