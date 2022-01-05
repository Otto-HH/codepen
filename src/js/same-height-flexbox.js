class EqualHeightCards {

    constructor(context) {
        this.cards = context.querySelectorAll('.card');
        this.equalizeHeight();

        window.addEventListener('resize', this.equalizeHeight())
    }

    equalizeHeight() {
        let maxHeight = 0;

        this.cards.forEach(card => {
            card.getBoundingClientRect().height > maxHeight ? maxHeight = card.getBoundingClientRect().height : false;
        });

        this.cards.forEach(card => {
            card.style.height = maxHeight + 'px';
        });
    }
}

// Initialize the card height equlizer after content is loaded
window.addEventListener('load', () => {
    document.querySelectorAll('[data-equal-cards-wrapper]').forEach( item => new EqualHeightCards(item));
})




