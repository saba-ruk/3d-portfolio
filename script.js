document.addEventListener('DOMContentLoaded', () => {
    const pageTurnBtn = document.querySelectorAll('.nextprev-btn');
    const pages = document.querySelectorAll('.book-page.page-right');
    const contactMeBtn = document.querySelector('.btn.contact-me');
    let totalPages = pages.length;
    let pageNumber = 0;

    // Function to update page numbers
    function updatePageNumbers() {
        const numberPages = document.querySelectorAll('.number-page');
        numberPages.forEach((numPage, index) => {
            numPage.textContent = index + 1; // Set the correct page number
        });
    }

    // Initialize page numbers
    updatePageNumbers();

    pageTurnBtn.forEach((el, index) => {
        el.onclick = () => {
            const pageTurnId = el.getAttribute('data-page');
            const pageTurn = document.getElementById(pageTurnId);

            if (pageTurn.classList.contains('turn')) {
                pageTurn.classList.remove('turn');
                setTimeout(() => {
                    pageTurn.style.zIndex = 20 - index;
                }, 500);
            } else {
                pageTurn.classList.add('turn');
                setTimeout(() => {
                    pageTurn.style.zIndex = 20 + index;
                }, 500);
            }
        };
    });

    contactMeBtn.onclick = () => {
        pages.forEach((page, index) => {
            setTimeout(() => {
                page.classList.add('turn');

                setTimeout(() => {
                    page.style.zIndex = 20 + index;
                }, 500);
            }, (index + 1) * 200 + 100);
        });
    };

    function reverseIndex() {
        pageNumber--;
        if (pageNumber < 0) {
            pageNumber = totalPages - 1;
        }
    }

    const backProfileBtn = document.querySelector('.back-profile');

    backProfileBtn.onclick = () => {
        pages.forEach((_, index) => {
            setTimeout(() => {
                reverseIndex();
                pages[pageNumber].classList.remove('turn');

                setTimeout(() => {
                    reverseIndex();
                    pages[pageNumber].style.zIndex = 10 + index;
                }, 500)
            }, (index + 1) * 200 + 100)
        })
    }

    
pages.forEach((_, index) => {
setTimeout(() => {
    reverseIndex();
    pages[pageNumber].classList.remove('turn');

    setTimeout(() => {
        reverseIndex();
        pages[pageNumber].style.zIndex = 10 + index;
    }, 500)
}, (index + 1) * 200 + 2100)
});


    // Add swipe support
    let touchStartX = 0;
    document.addEventListener('touchstart', e => {
      touchStartX = e.touches[0].clientX;
    });
  
    document.addEventListener('touchend', e => {
      const touchEndX = e.changedTouches[0].clientX;
      const diff = touchStartX - touchEndX;
      
      if(Math.abs(diff) > 50) {
        if(diff > 0 && currentPage < pagess.length - 1) {
          showPage(currentPage + 1);
        } else if(diff < 0 && currentPage > 0) {
          showPage(currentPage - 1);
        }
      }
    });
  
})


const coverRight = document.querySelector('.cover.cover-right');
const pageLeft = document.querySelector('.book-page.page-left');

setTimeout(() => {
    coverRight.classList.add('turn');

}, 2100)

setTimeout(() => {
    coverRight.style.zIndex = -1;

}, 2800)

setTimeout(() => {
    pageLeft.style.zIndex = 20;

}, 3200)

