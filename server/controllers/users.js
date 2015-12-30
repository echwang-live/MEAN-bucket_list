// Setup mongoose and the link the model
var mongoose = require('mongoose');
var User = mongoose.model('User');

// Setup list of functions to use as immeidate functions
module.exports = (function(){
	return {
		index: function(req, res){
			User.find({}, function(err, data){
				if (err){
					res.json(err);
				} else {
					res.json(data);
				}
			})
		},
		create: function(req, res){
			User.findOne({name:req.body.name}, function(err,user){
				if (err) { res.json(err);}
				else if (user) {res.json(user);}
				else if (!user){
					var user = new User(req.body);
					user.save(function(err){
						if (err) { res.json(err)}
						else {res.json(user)}
					});
				}
			});

		},
		show: function(req, res){
			User.findOne({_id:req.params.id}).populate('_bucketList').exec(function(err, user){
				if(err){
					res.json(err);
				} else {
					res.json(user);
				}
			})
		},

		showCompleted: function(req,res){
			// console.log('here');
		},
		update: function(req, res){
			console.log(req.params.id);
			console.log(req.body);
			res.json({type:'update'})
		},
		delete: function(req, res){
			res.json({type: 'delete'})
		}
	}
})();
