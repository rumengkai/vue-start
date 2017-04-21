var test = require('./test.json')
var module_list = require('./module_list.json')
var module_info = require('./module_info.json')

module.exports = function() {
	return {
		"test.json": test,
		"module_list.json":module_list,
		"module_info.json":module_info,
	}
}
