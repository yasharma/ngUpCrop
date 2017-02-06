'use strict';
(function(){
	angular.module('ngUpCropApp', ['ngMaterial', 'ngFileUpload', 'ngImgCrop'])
	.controller('ngUpCropCtrl', ['$mdDialog', function ($mdDialog) {
		var vm = this;

		// when file will selected
		vm.onFileSelect = function (file, event, show) {
			if(file && show) {
				$mdDialog.show({
					contentElement: '#imageDialog',
					parent: angular.element(document.body),
					clickOutsideToClose: true
				});
			}
		};

		// Close md-dialog
		vm.closeImageDialog = function () {
			vm.fileSelected = false;
			$mdDialog.hide();
		};

		// upload file to server
		vm.uploadFile = function (dataUrl, file) {
			console.log(dataUrl);
			console.log(file);
		};
	}]);
}());