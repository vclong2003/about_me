var app = angular.module('myApp',[]);
app.controller('myController', function($scope) {
	$scope.abm = "About Me";
	$scope.updateInfo = "";
	$scope.verify = "";
	$scope.des = "Description about me !";
	$scope.cv = "Job";
	$scope.job1 = "Web Developer";
	$scope.job2 = "";
	$scope.contact = "Info";
	$scope.contact1 = "vclong2003@gmail.com";
	$scope.contact2 = "facebook.com/charon833";
	$scope.contactmi = "CONTACT ME";
	$scope.ifyou = "My contact information";
	$scope.modal1 = "Facebook";
	$scope.modal2 = "Zalo";
	$scope.modal3 = "";
	$scope.modal4 = "Email";
	$scope.modal5 = "Sms";
	$scope.linkfb = "https://facebook.com/charon833";
	$scope.linkzl = "https://zalo.me/0888827768";
	$scope.linksc = "";
	$scope.linkgm = "vclong2003@gmail.com";
	$scope.phonenumber = "0888827768 - Vinaphone";
	$scope.email = "vclong2003@gmail.com";
	$scope.title2 = "My Story";
	$scope.contentStory1 = "JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.";
	$scope.contentStory2 = "Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.";
	$scope.storytitle1 = "";
	$scope.storytitle2 = "";
	$scope.nothinglikeus = "";
	$scope.thankall = "";
	$scope.au = "VCL";
	$scope.phone = false;
	$scope.reverse = function () {
		$scope.phone= !$scope.phone;
	}
	$scope.gmail = false;
	$scope.reverse2 = function () {
		$scope.gmail= !$scope.gmail;
	};
});