$(function() {
	/*----------------------- API -----------------------------*/
	var myRequest = new XMLHttpRequest(),
		allData = [];

	myRequest.onreadystatechange = function() {
		if (this.readyState === 4 && this.status === 200) {
			allData = JSON.parse(this.response).results;

			var myText = ``;

			for (var i = 0; i < allData.length; i++) {
				myText += `<div class="col-md-4">
									<div class="content">
										<img src="https://image.tmdb.org/t/p/w500/${allData[i].poster_path}" class="img-fluid">
										<div class="overlay">
											<div id="items">
												<h3>${allData[i].title}</h3>
												<p>${allData[i].overview}</p>
												<span>${allData[i].vote_average}</span>
												<span>${allData[i].release_date}</span>
											</div>
										</div>
									</div>
								</div>`;
			}
			document.getElementById('row-data').innerHTML = myText;
		}
	};

	myRequest.open(
		'GET',
		'https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR35QxoXlojYybSZ0uPFLbx41XnNkb3r6UaPB-fE9IYhOhL5N1S7iTAhI-M',
		true
	);

	myRequest.send();

	/*----------------------- Nav-Bar -----------------------------*/
	$('.side-menu .open-icon i').click(function() {
		$('.nav-menu').toggleClass('translate');

		if ($('.nav-menu').hasClass('translate')) {
			$('.side-menu').css('left', '0');
			$('.side-menu .open-icon i').attr('class', 'fas fa-align-justify fa-2x');
			$('.nav-menu ul li').animate(
				{
					paddingTop: '50rem',
					opacity: '0'
				},
				1000
			);
		} else {
			$('.side-menu').css('left', $('.nav-menu').css('width'));
			$('.side-menu .open-icon i').attr('class', 'fas fa-times fa-2x');
			$('.nav-menu ul li').animate(
				{
					paddingTop: '.8rem',
					opacity: '1'
				},
				1000
			);
		}
	});

	/*----------------------- Validation Form -----------------------------*/

	$('#theName').keyup(function() {
		nameFunc();
	});
	function nameFunc() {
		let myName = $('#theName').val(),
			userNameReg = /^[a-z]{3,}([0-9]{1,9})?$/gi;

		if (userNameReg.test(myName) == false) {
			$('#alertName').css('display', 'block');
			return false;
		} else {
			$('#alertName').css('display', 'none');
			return true;
		}
	}

	$('#theEmail').keyup(function() {
		emailfunc();
	});
	function emailfunc() {
		let myEmail = $('#theEmail').val(),
			userEmailReg = /^[a-z]{3,}([0-9]{1,9})?@[a-z]{1,}.com$/gi;

		if (userEmailReg.test(myEmail) == false) {
			$('#alertEmail').css('display', 'block');
			return false;
		} else {
			$('#alertEmail').css('display', 'none');
			return true;
		}
	}


	$('#thePhone').keyup(function() {
		phoneFunc();
	});
	function phoneFunc() {
		let myPhone = $('#thePhone').val(),
			userPhoneReg = /^(002)?(011|012|010|015)[0-9]{8}$/;

		if (userPhoneReg.test(myPhone) == false) {
			$('#alertPhone').css('display', 'block');
			return false;
		} else {
			$('#alertPhone').css('display', 'none');
			return true;
		}
	}


	$('#theAge').keyup(function() {
		ageFunc();
	});
	function ageFunc() {
		let myAge = $('#theAge').val(),
			userAgeReg = /^(([1-9][6-9])|([2-9][0-9])|100)$/;

		if (userAgeReg.test(myAge) == false) {
			$('#alertAge').css('display', 'block');
			return false;
		} else {
			$('#alertAge').css('display', 'none');
			return true;
		}
	}


	$('#ThePass').keyup(function() {
		passFunc();
	});
	function passFunc() {
		let myPassword = $('#ThePass').val(),
			userpassReg = /^[a-z]{8,}[0-9]{1,}$/i;

		if (userpassReg.test(myPassword) == false) {
			$('#alertPass').css('display', 'block');
			return false;
		} else {
			$('#alertPass').css('display', 'none');
			return true;
		}
	}


	$('#TheRePass').keyup(function() {
		rePassFunc();
	});
	function rePassFunc() {
		let myRePassword = $('#TheRePass').val(),
			myPassword = $('#ThePass').val();

		if (myRePassword != myPassword) {
			$('#alertRePass').css('display', 'block');
			return false;
		} else {
			$('#alertRePass').css('display', 'none');
			return true;
		}
	}

	$('input').blur(function() {
		if (nameFunc() && emailfunc() && phoneFunc() && ageFunc() && passFunc() && rePassFunc()) {
			$('#sub-btn').removeAttr('disabled');
		}
	});
});
