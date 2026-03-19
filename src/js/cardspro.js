(function() {
  function positionRowCards(row) {
    const cards = Array.from(row.querySelectorAll('[data-display]'));
    if (!cards.length) return;

    const measurements = cards.map(card => {
      const content = card.querySelector('[data-display-content]');
      content.style.top = '';
      content.style.bottom = '';
      content.style.maxHeight = '';
      content.style.overflowY = '';

      return {
        card,
        content,
        cardHeight: card.offsetHeight,
        contentHeight: content.offsetHeight
      };
    });

    const maxContentHeight = Math.max(...measurements.map(m => m.contentHeight));

    measurements.forEach(({card, content, cardHeight}) => {
      const twoThirdsPx = 0.7 * cardHeight;
      const lowerThirdPx = cardHeight - twoThirdsPx;

      if (maxContentHeight <= lowerThirdPx) {
        content.style.top = `${twoThirdsPx}px`;
        content.style.bottom = 'auto';
        content.style.overflowY = '';
        content.style.maxHeight = '';
      } else {
        const desiredTop = Math.max(0, Math.round(cardHeight - maxContentHeight));
        content.style.top = `${desiredTop}px`;
        content.style.bottom = 'auto';
        content.style.maxHeight = `${cardHeight - desiredTop}px`;
        content.style.overflowY = 'auto';
      }
    });
  }

  function positionAll() {
    const rows = document.querySelectorAll('.cl-display-cards_section .cl-tiles');
    rows.forEach(row => positionRowCards(row));
  }

  document.addEventListener('DOMContentLoaded', positionAll);
  window.addEventListener('resize', positionAll);
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(positionAll).catch(()=>{});
  }
})();
