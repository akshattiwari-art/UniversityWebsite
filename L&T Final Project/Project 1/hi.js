// Ensure the document is ready before running any jQuery code
$(document).ready(function() {

    // --- Contact Us Form using jQuery ---
    $('#contactForm').on('submit', function(event) {
        event.preventDefault(); // Prevents the page from reloading

        // Retrieve form data
        const name = $('#name').val();
        const email = $('#email').val();
        const message = $('#message').val();

        // Basic validation
        if (name === "" || email === "" || message === "") {
            alert("Please fill out all fields.");
            return;
        }

        // Display a confirmation message
        alert(`Thank you, ${name}! Your message has been sent. We'll get back to you at ${email}.`);

        // Clear the form fields
        this.reset();
    });

    // --- Show/Hide Events section on button click ---
    $('#showEventsBtn').on('click', function() {
        const eventsContainer = $('#eventsContainer');
        
        // This is a simple example. In a real-world app, you might fetch data from a server.
        const eventsHtml = `
            <ul class="list-group">
                <li class="list-group-item">Cultural Fest: Oct 20-22</li>
                <li class="list-group-item">Annual Sports Meet: Nov 5-7</li>
                <li class="list-group-item">Deadline for Fees Submission: Oct 30</li>
            </ul>
        `;

        if (eventsContainer.is(':hidden')) {
            // Using jQuery's slideDown for a smooth animation
            eventsContainer.html(eventsHtml).slideDown();
            $(this).text('Hide Upcoming Events');
        } else {
            // Using jQuery's slideUp for a smooth animation
            eventsContainer.slideUp();
            $(this).text('Show Upcoming Events');
        }
    });

});