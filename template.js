var t = {};
exports.t = t;

var applyTemplate = function(sentence, bag){
	var keys = Object.keys(bag);

	keys.forEach(function(key){
		var regex = new RegExp(key, 'g');
		sentence = sentence.replace(regex, bag[key]);
	})

	return sentence;
}

t.Template = function(sentence){

	Object.defineProperty(this, "apply", {
		"value" : function(bag){
			return applyTemplate(sentence, bag)
		}
	})
}
