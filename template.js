var t = {};
exports.t = t;

var applyTemplate = function(sentence, bag){
	var keys = Object.keys(bag);

	return sentence.split("").map(function(word){
		return (keys.indexOf(word) > -1) ? bag[word] : word;
	}).join("");
}

t.Template = function(sentence){

	Object.defineProperty(this, "apply", {
		"value" : function(bag){
			return applyTemplate(sentence, bag)
		}
	})
}
