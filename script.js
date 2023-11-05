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
            <p>${sessionPlan.split("\n").join("<br>")}</p>
        `;
    });

    // Replace this function with the actual ChatGPT API call
    function getChatGPTResponse(branchLocation) {
        // Return the optimized session plan, with HTML line breaks
        return `Recommended Optimized Session Plan for ${branchLocation}:<br>` +
               `- January: begin 3 month session<br>` +
               `- February: begin 1 month session<br>` +
               `- March: begin 2 month session<br>` +
               `- April: begin 1 month session<br>` +
               `- May: begin 1 month session<br>` +
               `- June: begin 1 month session<br>` +
               `- July: begin 1 month session<br>` +
               `- August: begin 1 month session<br>` +
               `- September: begin 1 month session<br>` +
               `- October: begin 1 month session<br>` +
               `- November: begin 1 month session<br>` +
               `- December: begin 3 month session`;
    }
});
