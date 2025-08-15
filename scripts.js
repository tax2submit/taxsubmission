// --- SIP Calculator Function ---
function calculateSIP() {
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
}

// --- Insurance Coverage Estimator Function ---
function calculateInsurance() {
    const annualIncome = parseFloat(document.getElementById('annualIncome').value);
    const dependents = parseFloat(document.getElementById('dependents').value);

    if (isNaN(annualIncome) || isNaN(dependents)) {
        alert("Please enter valid numbers for all fields.");
        return;
    }

    // A common thumb rule is 10-15 times annual income, plus a fixed amount per dependent.
    const baseCoverage = annualIncome * 12;
    const dependentCoverage = dependents * 500000;
    const estimatedCoverage = baseCoverage + dependentCoverage;

    document.getElementById('estimatedCoverage').textContent = Math.round(estimatedCoverage).toLocaleString('en-IN');
}

// --- FAQ Accordion Functionality ---
document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Other event listeners are here...

    // Testimonial Scroll functionality
    const testimonialContainer = document.querySelector('.testimonial-quotes');
    const scrollLeftBtn = document.getElementById('scrollLeft');
    const scrollRightBtn = document.getElementById('scrollRight');

    const scrollAmount = 350; // Adjust this value to change scroll distance

    if (scrollLeftBtn && scrollRightBtn && testimonialContainer) {
        scrollLeftBtn.addEventListener('click', () => {
            testimonialContainer.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });

        scrollRightBtn.addEventListener('click', () => {
            testimonialContainer.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
    }
});