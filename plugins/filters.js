import Vue from 'vue'
import moment from 'moment'

Vue.prototype.moment = moment

Vue.filter('two_digits', function (value) {
  if (value.toString().length <= 1) {
    return '0' + value.toString()
  }
  return value.toString()
})
