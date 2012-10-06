$(function(){
  console.log('hello signaway');
  
  // update this apigee post url.
  var apigeePostURL = null
  
  $('#signup').on('click', function(){
    
    /* Tony: Do error check / validation here.
    url is here http://bassistance.de/jquery-plugins/jquery-plugin-validation/
      Ex.
      - Is the email address field an email address
      - first/last name length, can it include numbers, etc
      - event code is it numbers only, length check, any character allowed? 
    stuff like this...
      
      
      if all validation is done do a post
      else show error message based on failed validation
    */
    
     
//  simple
    $.post(apigeePostURL, $('#signaway').serialize());


// more advanced    
    // $.post(url, $('#signaway').serialize(),function(data, textStatus, jqXHR){  
    //   console.log('data');
    // }).error(function(){
    //   /*
    //     TODO Do error checking.
    //   */
    //   alert('Internal Server Error! :(');
    // });
 
 
 /* success  make sure you show a message saying you are signed up */
 /* error: internal error, etc */
 
    return false;
  });
});
