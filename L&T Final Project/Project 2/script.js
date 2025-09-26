$(document).ready(function() {
    let totalBudget = 500; // Starting budget with the initial flight cost

    // Function to update the total cost display
    function updateBudget() {
        $('#totalCost').text(`$${totalBudget}`);
    }

    // --- Activity Planner and Budget Tracker using jQuery ---
    $('#activityForm').on('submit', function(event) {
        event.preventDefault();

        const activity = $('#activity').val();
        const cost = parseFloat($('#cost').val());

        // Basic validation
        if (activity === "" || isNaN(cost) || cost <= 0) {
            alert("Please enter a valid activity and cost.");
            return;
        }

        // Create a new list item for the itinerary
        const newItem = `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                ${activity}
                <span class="badge bg-success rounded-pill">$${cost}</span>
            </li>
        `;
        
        // Append the new item to the itinerary list
        $('#itineraryList').append(newItem);

        // Update the total budget
        totalBudget += cost;
        updateBudget();

        // Clear the form fields
        this.reset();
    });

    // --- Simple Destination Search (Front-end only) ---
    $('#searchBtn').on('click', function() {
        const query = $('#destinationInput').val().toLowerCase();
        const resultsContainer = $('#searchResults');
        resultsContainer.empty(); // Clear previous results

        const sampleDestinations = [
            { name: "Paris, France", type: "city", description: "The City of Love, famous for the Eiffel Tower and art museums." },
            { name: "Maui, Hawaii", type: "beach", description: "Stunning beaches and lush volcanic landscapes." },
            { name: "Banff National Park, Canada", type: "mountains", description: "Breathtaking mountain views and hiking trails." }
        ];

        let resultsFound = false;
        sampleDestinations.forEach(dest => {
            if (dest.name.toLowerCase().includes(query) || dest.type.toLowerCase().includes(query)) {
                const card = `
                    <div class="col-md-4 mb-4">
                        <div class="card h-100">
                            <div class="card-body">
                                <h5 class="card-title">${dest.name}</h5>
                                <p class="card-text">${dest.description}</p>
                            </div>
                        </div>
                    </div>
                `;
                resultsContainer.append(card);
                resultsFound = true;
            }
        });

        if (!resultsFound) {
            resultsContainer.html('<p class="text-center text-muted">No destinations found. Try searching for "beach," "city," or "mountains."</p>');
        }
    });
});