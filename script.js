document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("input-form");
    const branchLocationInput = document.getElementById("branch-location");
    const chatOutput = document.getElementById("chat-output");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get user input
        const branchLocation = branchLocationInput.value;

        // Send a request to ChatGPT (replace with the actual ChatGPT API call)
        const sessionPlan = getChatGPTResponse(branchLocation);

        // Display the chatbot response
        chatOutput.innerHTML = `
            <p><strong>Session Plan:</strong></p>
            <p>${sessionPlan}</p>
        `;
    });

    // Replace this function with the actual ChatGPT API call
    function getChatGPTResponse(branchLocation) {
        // Return the optimized session plan
        return `Recommended Optimized Session Plan for ${branchLocation}:\n` +
               `- January: begin 3 month session\n` +
               `- February: begin 1 month session\n` +
               `- March: begin 2 month session\n` +
               `- April: begin 1 month session\n` +
               `- May: begin 1 month session\n` +
               `- June: begin 1 month session\n` +
               `- July: begin 1 month session\n` +
               `- August: begin 1 month session\n` +
               `- September: begin 1 month session\n` +
               `- October: begin 1 month session\n` +
               `- November: begin 1 month session\n` +
               `- December: begin 3 month session`;
    }
    
});
