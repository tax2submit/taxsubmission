document.addEventListener('DOMContentLoaded', function() {

    // --- Mobile Menu Functionality ---
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
        });
    }

    // --- FAQ Accordion Functionality ---
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });

    // --- SIP Calculator Function ---
    const calculateSIPButton = document.querySelector('.sip-calculator .btn');
    if (calculateSIPButton) {
        calculateSIPButton.addEventListener('click', function(event) {
            event.preventDefault(); // Prevents the form from refreshing the page

            const sipAmount = parseFloat(document.getElementById('sipAmount').value);
            const expectedRate = parseFloat(document.getElementById('expectedRate').value) / 100 / 12;
            const timePeriod = parseFloat(document.getElementById('timePeriod').value) * 12;

            if (isNaN(sipAmount) || isNaN(expectedRate) || isNaN(timePeriod)) {
                alert("Please enter valid numbers for all fields.");
                return;
            }

            const futureValue = sipAmount * ((Math.pow((1 + expectedRate), timePeriod) - 1) / expectedRate) * (1 + expectedRate);
            const totalInvested = sipAmount * timePeriod;
            const estimatedReturns = futureValue - totalInvested;

            document.getElementById('investedAmount').textContent = Math.round(totalInvested).toLocaleString('en-IN');
            document.getElementById('estimatedReturns').textContent = Math.round(estimatedReturns).toLocaleString('en-IN');
            document.getElementById('totalValue').textContent = Math.round(futureValue).toLocaleString('en-IN');
        });
    }

    // --- Insurance Coverage Estimator Function ---
    const calculateInsuranceButton = document.querySelector('.insurance-calculator .btn');
    if (calculateInsuranceButton) {
        calculateInsuranceButton.addEventListener('click', function(event) {
            event.preventDefault(); // Prevents the form from refreshing the page

            const annualIncome = parseFloat(document.getElementById('annualIncome').value);
            const dependents = parseFloat(document.getElementById('dependents').value);

            if (isNaN(annualIncome) || isNaN(dependents)) {
                alert("Please enter valid numbers for all fields.");
                return;
            }

            const baseCoverage = annualIncome * 12;
            const dependentCoverage = dependents * 500000;
            const estimatedCoverage = baseCoverage + dependentCoverage;

            document.getElementById('estimatedCoverage').textContent = Math.round(estimatedCoverage).toLocaleString('en-IN');
        });
    }
    
    // Testimonial Carousel functionality
    const reviewsContainer = document.querySelector('.testimonial-quotes');
    const leftBtn = document.querySelector('.left-btn');
    const rightBtn = document.querySelector('.right-btn');
    const reviews = document.querySelectorAll('.testimonial-quotes blockquote');

    if (reviewsContainer && leftBtn && rightBtn && reviews.length > 0) {
        let currentReviewIndex = 0;

        function scrollToReview(index) {
            reviewsContainer.scrollLeft = reviews[index].offsetLeft - reviewsContainer.offsetLeft;
        }

        leftBtn.addEventListener('click', () => {
            currentReviewIndex = (currentReviewIndex > 0) ? currentReviewIndex - 1 : reviews.length - 1;
            scrollToReview(currentReviewIndex);
        });

        rightBtn.addEventListener('click', () => {
            currentReviewIndex = (currentReviewIndex < reviews.length - 1) ? currentReviewIndex + 1 : 0;
            scrollToReview(currentReviewIndex);
        });
    }

});