$(document).ready(function() {
  var gameName = $('#gameName');
  var playerName = $('#playerName');
  var ante = $('#ante');
  $('#submit').on('click', function(e) {
    e.preventDefault();
    var data =  {};
    data.gameName = gameName.val();
    data.playerName = playerName.val();
    data.ante = ante.val();
    var jqxhr = $.post('http://localhost:3000/new', function(data) {
      console.log('success?');
    }).done(function() {
    }).always(function() {
      window.location.href = '../html/home.html';
    })
  });
});
