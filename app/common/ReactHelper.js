

module.exports = class ReactHelper {

	constructor() {
		this.safeStringify = function(obj) {
		  return JSON.stringify(obj).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--')
		}

	}
	

}


