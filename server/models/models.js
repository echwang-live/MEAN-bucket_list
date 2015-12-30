// Setup the necessary variables
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define all schemas
var UserSchema = new Schema({
	name: { type: String, required:true, minlength: 2, maxlength: 20 },
	created_at: { type: Date, default: Date() },
	_bucketList: [{type: Schema.Types.ObjectId, ref: 'BucketItem'}]
});

var bucketSchema = new Schema({
	created_at: {type:Date, required: true},
	title: {type:String, required:true, minlength: 5},
	description: {type:String, required:true, minlength: 10},
	_users: [{type:Schema.Types.ObjectId, ref:'User'}],
	completed: {type:Boolean, default: false}
});


// Add the schema to model - use capital letter and singular
mongoose.model('User', UserSchema );
mongoose.model('BucketItem', bucketSchema);