(function($) { 
	"use strict";
	
jQuery(document).ready(function(){
	$('#cform').submit(function(){

		var action = $(this).attr('action');

		$("#message").slideUp(750,function() {
		$('#message').hide();

 		/*$('#submit')
			.before('<img src="images/ajax-loader.gif" class="contact-loader" />')
			.attr('disabled','disabled');*/

		// Initialize Firebase
		  var config = {
		    apiKey: "AIzaSyAOXBnuGf_vVWRPWsRkDQmUzfUSxOLubiQ",
		    authDomain: "webresume-6714f.firebaseapp.com",
		    databaseURL: "https://webresume-6714f.firebaseio.com",
		    storageBucket: "",
		  };
		  firebase.initializeApp(config);

		  //Submit Binding
		  var databaseMSG = firebase.database();
		  databaseMSG.ref('/').push({
		        name: $('#name').val(),
		        email: $('#email').val(),
		        message: $('#comments').val()
		    });
		  $('#submit').attr('disabled','disabled');
		  $('#submit').val("Thank you for your message");
		/*$.post(action, {
			name: $('#name').val(),
			email: $('#email').val(),
			comments: $('#comments').val(),
		},
			function(data){
				document.getElementById('message').innerHTML = data;
				$('#message').slideDown('slow');
				$('#cform img.contact-loader').fadeOut('slow',function(){$(this).remove()});
				$('#submit').removeAttr('disabled');
				if(data.match('success') != null) $('#cform').slideUp('slow');
			}
		);*/

		});

		return false;

	});

});

}(jQuery));
