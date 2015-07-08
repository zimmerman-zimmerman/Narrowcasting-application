/**
* WysiwygController
* @namespace ncs.presentations.controllers
*/

(function () {
  'use strict';

  angular
    .module('ncs.presentations.controllers')
    .controller('WysiwygController', WysiwygController);

  WysiwygController.$inject = ['$scope', 'Authentication', 'Snackbar', 'Slides'];

  /**
  * @namespace WysiwygController
  */
  function WysiwygController($scope, Authentication, Snackbar, Slides) {
    
    var vm = this;
    vm.slideType = 'iati'; // options; loading, content, iati, rsr
    vm.slide = {};
    vm.selectedField = '';
    vm.Slides = Slides;
    vm.optionFontSize = 18;
    vm.optionColor = "#969696";

    vm.fontSize = function(){
        vm.slide.slideContent[vm.selectedField].cssStyle['font-size'] = vm.optionFontSize; 
    }

    vm.bold = function(){
        vm.slide.slideContent[vm.selectedField].cssStyle['font-weight'] = vm.slide.slideContent[vm.selectedField].cssStyle['font-weight'] == 'normal' ? 'bold' : 'normal'; 
    }

    vm.italic = function(){
        vm.slide.slideContent[vm.selectedField].cssStyle['font-style'] = vm.slide.slideContent[vm.selectedField].cssStyle['font-style'] == 'normal' ? 'italic' : 'normal'; 
    }

    vm.underline = function(){
        vm.slide.slideContent[vm.selectedField].cssStyle['text-decoration'] = vm.slide.slideContent[vm.selectedField].cssStyle['text-decoration'] == 'none' ? 'underline' : 'none'; 
    }

    vm.removeBackgroundImage = function(){
        vm.slide.backgroundImage = null;
    }   

    function activate(){

        $scope.$watch("vm.Slides.saveSlide", function (saveSlide) {
            console.log(saveSlide);
            if(saveSlide == true){
                vm.save();
                Slides.saveSlide = false;
            } 
        }, true);

        $scope.$watch("vm.Slides.currentSlide", function (slideId) {

            vm.slideType = 'loading';

            if(slideId > 0){
                Slides.getSingle(slideId).then(successFn, errorFn);
            }

            function successFn(data, status, headers, config) {
                data.data.slideContent = JSON.parse(data.data.slideContent);
                vm.slide = data.data;
                vm.slideType = data.data.source;
                vm.afterSlideLoad();
            }

            function errorFn(data, status, headers, config) {
                Snackbar.error(data.error);
            }

        }, true);
    }

    activate();

    vm.afterSlideLoad = function(){
        // select first field of the slide and adjust editor to it
        
    }

    vm.changeFontSize = function(){
        vm.slide.slideContent[vm.selectedField].cssStyle['font-size'] = vm.optionFontSize;
    }

    vm.changeColor = function(){
        vm.slide.slideContent[vm.selectedField].cssStyle['color'] = vm.optionColor;
    }

    vm.selectField = function(fieldName){
        vm.selectedField = fieldName;
        vm.optionFontSize = vm.slide.slideContent[vm.selectedField].cssStyle['font-size'];
        vm.optionColor = vm.slide.slideContent[vm.selectedField].cssStyle['color'];
    }

    vm.save = function(){

        if(vm.slide.id != undefined){
            console.log(vm.slide);
            Slides.update(vm.slide).then(succesFn, errorFn);
        }
        
        function succesFn(data, status, headers, config){
            console.log('saved');
        }

        function errorFn(data, status, headers, config){
            console.log(data);
            console.log(data.data);
        }
    }

  }
})();