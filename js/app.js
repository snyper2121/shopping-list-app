$( document ).ready(function() {
    console.log( "ready!" );

    $('.add').click(function() {
    	var addedItem = $('#input-box').val();
    	$('#input-box').val('');
    	console.log(addedItem);

    	var itemOutput = '<li class="item"><p><i class="fa fa-check-square-o space-right" aria-hidden="true"></i>' + addedItem + '<i class="fa fa-trash-o space-left" aria-hidden="true"></i></p></li>';

    	$('.list-items').append(itemOutput);
    });

    // $('.fa-trash-o').click(function() {
  		// $(this).closest('li').remove();
	// });

	$('.list-items').on('click', '.fa-trash-o', function(events) {
		$(this).closest('li').remove();
	});

	$('.list-items').on('click', '.fa-check-square-o', function(events) {
		if ($(this).closest('li').css('text-decoration') == 'line-through') {
			$(this).closest('li').css('text-decoration', 'none');
		} else {
			$(this).closest('li').css('text-decoration', 'line-through');
		}
	});
    // <li class="item"><p>milk</p></li>
    // <i class="fa fa-trash-o" aria-hidden="true"></i>

});
