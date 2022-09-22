window.onload = function() {
  //location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}

function sendMail(mail) {
    $.ajax({
      type: 'POST',
      url: 'https://mandrillapp.com/api/1.0/messages/send.json',
      data: {
        'key': 'YOUR API KEY HERE',
        'message': {
          'from_email': 'iam.wheelia@gmail.com',
          'to': [
              {
                'email': mail,
                'type': 'to'
              }
            ],
          'autotext': 'true',
          'subject': 'Welcome to Wheel-IA!',
          'html': 'YOUR EMAIL CONTENT HERE! YOU CAN USE HTML!'
        }
      }
     }).done(function(response) {
       console.log(response);
     });
}