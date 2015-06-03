var _ = require('underscore')
  , values = [1,1,2,3,4,,5,6,7,8,9,1];

  window.onload = function () {
  	document.body.innerHTML = _uniq(values);
  }