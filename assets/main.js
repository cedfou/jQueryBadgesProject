$(function() {

  // your code will go here
  $.ajax({
    url: 'https://www.codeschool.com/users/cedfou.json',
    dataType: 'jsonp',
    success: function(response) {
console.log(response.courses.completed);
    var badgesElements = $.map(response.courses.completed, function(badge, i) {
       var listItem = $('<div class="course"></div>');
       $('<h3>'+badge.title+'</h3>').appendTo(listItem);
       $('<img src="'+badge.badge+'" alt="'+badge.title+'" />').appendTo(listItem);
      $('<a href="'+badge.url+'" alt="'+badge.title+'" target="_blank" class="btn btn-primary">See course</a>').appendTo(listItem);
       return listItem;
});
     $('#badges').html(badgesElements);
      //$("#badges").text(JSON.stringify(response));
    }
  });

});
