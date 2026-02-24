// Button activities

document.addEventListener('DOMContentLoaded', function () {

    let currentFilter = 'all'; 
    const blank = document.getElementById('blank');

    
    function getCards() {
        return document.querySelectorAll('.card');
    }

    
    function updateScoreboard() {
        const cards = getCards();
        let total = cards.length;
        let interviewCount = 0;
        let rejectedCount = 0;

        cards.forEach(card => {
            if (card.dataset.status === 'interview') interviewCount++;
            if (card.dataset.status === 'rejected') rejectedCount++;
        });

        document.querySelector('.totall').innerText = total;
     document.querySelector('.inters').innerText = interviewCount;
        document.querySelector('.rejs').innerText = rejectedCount;
    }

    
    function filterCards(status) {
        const cards = getCards();
        let visibleCount = 0;

        cards.forEach(card => {
            if (status === 'all' || card.dataset.status === status) {
                card.style.display = 'block';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        if (cards.length === 0 || visibleCount === 0) {
            blank.classList.remove('hidden');
        } else {
            blank.classList.add('hidden');
        }
    }

    
    const allBtn = document.querySelector('.btn-all');
    const interviewBtn = document.querySelector('.btn-inter');
    const rejectBtn = document.querySelector('.btn-rej');

    allBtn.addEventListener('click', () => { currentFilter = 'all'; filterCards(currentFilter); });
    interviewBtn.addEventListener('click', () => { currentFilter = 'interview'; filterCards(currentFilter); });
    rejectBtn.addEventListener('click', () => { currentFilter = 'rejected'; filterCards(currentFilter); });

    
    function initCards() {
        const cards = getCards();
        cards.forEach(card => {
            const inter = card.querySelector('.btn-success');
            const rej = card.querySelector('.btn-error');
            
            const badge = card.querySelector('img');
            const dlt = card.querySelector('.btn-dlt');

            inter.addEventListener('click', function () {
                card.dataset.status = 'interview';
                badge.src = 'inter.png';
                updateScoreboard();
                filterCards(currentFilter);
            });

            rej.addEventListener('click', function () {
                card.dataset.status = 'rejected';
                badge.src = 'reg.png';
                updateScoreboard();
                filterCards(currentFilter);
            });

            dlt.addEventListener('click', function () {
                card.remove();
                updateScoreboard();
                filterCards(currentFilter);
            });
        });
    }

    initCards();
    updateScoreboard();
    filterCards(currentFilter);

});





