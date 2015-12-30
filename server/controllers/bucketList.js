// Setup mongoose and the link the model
var mongoose = require('mongoose');
var BucketList = mongoose.model('BucketItem');
var User = mongoose.model('User');

// Setup list of functions to use as immeidate functions
module.exports = (function(){
	return {
		index: function(req, res){
			
		},

		create: function(req,res){
			console.log(req.body);


			var newBuck = BucketList();
			newBuck.title = req.body.title;
			newBuck.description = req.body.description;
			if (req.body.taggedUser){
				newBuck._users.push(req.body.taggedUser._id);	
			}
			
			newBuck._users.push(req.body.originalUser._id);
			newBuck.created_at = new Date();

			newBuck.save(function(err){
				if (err){
					console.log(err);
					res.json(err);
				} else {
					User.findOne({_id: req.body.originalUser._id}, function(err, user){
						user._bucketList.push(newBuck._id);
						user.save(function(err){
							if (err){
								res.json(err);
							} else if(!err && req.body.taggedUser){
								User.findOne({_id: req.body.taggedUser._id}, function(err, taggedUser){
									taggedUser._bucketList.push(newBuck._id);
									taggedUser.save(function(err){
										if (err){
											res.json(err);
										} else{
											res.json([]);
										}
									});
								});
							} else {
								res.json([]);
							}

						});
					})
					
				}
			});
		},
		show: function(req, res){
			res.json({type: 'show'})
		},
		update: function(req, res){

			BucketList.findOne({_id:req.params.id}, function(err, list){
				if (err) {
					res.json(err);
				} else {
					list.completed = req.body.checked;
					list.save(function(err){
						if (err) {
							res.json(err);
						} else{
							res.json([]);
							// console.log(list);
						}
					})
				}
			})
		},
		delete: function(req, res){
			res.json({type: 'delete'})
		}
	}
})();