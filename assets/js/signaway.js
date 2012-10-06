$(function(){
  $('#signup').on('click', function(){('https://api.usergrid.com/signaway/signaway/users', JSON.stringify({firstName:$('#firstName').val(), lastName:$('#lastName').val(), eventCode:$('#eventCode').val()}));
    $('body').html('<div id="confirmed"><h1>Thanks!<br>You are now signed up.</h1><br><img alt="SignAway" id="signAwayLogo" src="https://raw.github.com/signaway/signaway/gh-pages/assets/js/logo.png" width="300" height="300"></div>')
    return false;
  });
});
