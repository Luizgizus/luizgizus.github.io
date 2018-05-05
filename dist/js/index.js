require('../../node_modules/angular/index')
require('../../node_modules/echarts/dist/echarts.js')
require('../../node_modules/ng-dialog/js/ngDialog.min.js')
require('angular-input-masks')
require('../../node_modules/angular-toastr/index.js')
require('../../node_modules/angular-animate/index.js')

const app = angular.module('minhasFinancas', [
    'ngDialog',
    'ui.utils.masks',
    'ngAnimate',
    'toastr'
])

const services = require("./services/")
const controllers = require("./controllers/")