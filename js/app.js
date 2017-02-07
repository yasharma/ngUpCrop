'use strict';
(function(){
	angular.module('ngUpCropApp', ['ngMaterial', 'ngFileUpload', 'ngImgCrop'])
	.controller('ngUpCropCtrl', ['$mdDialog', 'Upload',function ($mdDialog, Upload) {
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
			Upload.upload({
	            url: 'admin/site-settings',
	            data:  {
          			logo: Upload.dataUrltoBlob(dataUrl, file.name)
        		},
	        }).then(function (response) {
	            $timeout(function () {
          			onSuccessItem(response.data);
        		});
	        }, function (response) {
	            if (response.status > 0) onErrorItem(response.errors);
	        }, function (evt) {
	            vm.progress = parseInt(100.0 * evt.loaded / evt.total, 10);
	        });
		};

		function onSuccessItem(response) {
			console.log(response);
			vm.fileSelected = false;
		}

		function onErrorItem(response) {
			console.log(response);
		}
	}]);
}());