var t = require('./template.js').t;
var assert = require('assert');
var test = {};
exports.test = test;

test.templates_can_be_used_to_prepare_formatted_text = function(){
	var template = new t.Template('hello 0, how are you? My name is 1');
	var bag = ['Peter','Repeater'];
	assert.equal(template.apply(bag),'hello Peter, how are you? My name is Repeater');
	bag = ['Jane','Peter'];
	assert.equal(template.apply(bag),'hello Jane, how are you? My name is Peter');
};

test.templates_can_be_used_to_prepare_formatted_text_named_place_holder = function(){
	var template = new t.Template('hello second_person, how are you? My name is first_person');
	var bag = {first_person:'Repeater',second_person:'Peter'};
	assert.equal(template.apply(bag),'hello Peter, how are you? My name is Repeater');
	var bag = {first_person:'Peter',second_person:'Jane'};
	assert.equal(template.apply(bag),'hello Jane, how are you? My name is Peter');
};
