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

test.templates_can_apply_formatted_text_with_repeated_place_holders = function(){
	var template = new t.Template('0, 0, 0, Where are you?');
	var bag = ['Jimmy'];
	assert.equal(template.apply(bag),'Jimmy, Jimmy, Jimmy, Where are you?');
	bag = ['jam','bread','sweet'];
	template = new t.Template('1 is good to eat with 0. But, I would rather prefer 1 without 0 on it. 0 is too 2!');
	assert.equal(template.apply(bag),'bread is good to eat with jam. But, I would rather prefer bread without jam on it. jam is too sweet!');
};

test.templates_can_be_applied_on_objects = function(){
	var students = [{name:'Ramu',place:'Bangalore'},{name:'Mamu',place:'Andheri'},{name:'Hemu',place:'Aligarh'}];
	var template = new t.Template('Hello name, how is place?');
	var texts = students.map(template.apply);
	assert.deepEqual(texts,['Hello Ramu, how is Bangalore?','Hello Mamu, how is Andheri?','Hello Hemu, how is Aligarh?']);
};

test.templates_dont_have_any_fields = function(){
	var template = new t.Template('Hello name, how is place?');
	assert.equal(0,Object.keys(template).length);
};
