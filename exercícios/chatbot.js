

function handleInput() {

  // Get the user input.
  var input = $("#chatbox").val();

  // Send the user input to the server.
  $.ajax({
      url: "/chat",
      data: { input: input },
      success: function(response) {

          // Get the response from the server.
          var responseText = response.text;

          // Display the response in the chatbox.
          $("#chatbox").val(responseText);
      }
  });
}

function fetchResponse() {

  // Get the user input.
  var input = $("#chatbox").val();

  // Send the user input to the server.
  $.ajax({
      url: "/chat",
      data: { input: input },
      success: function(response) {

          // Get the response from the server.
          var responseText = response.text;

          // Display the response in the chatbox.
          $("#chatbox").val(responseText);
      }
  });
}

$("#chatbox").on("input", handleInput);



