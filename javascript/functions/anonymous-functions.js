	var anonymous = function () {
		console.log('Yes');
	};

	var ninja = {
		shout: function () {
			console.log('Shout');
		}
	};

	ninja.shout();

	setTimeout(
		function () {console.log('Anonymous function');}, 
		500);