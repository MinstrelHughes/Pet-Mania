'use strict';

const obj = {};
module.exports = obj;

// obj.list = require('./todo/list');
// obj.single = require('./todo/single');
// obj.add = require('./todo/add');
// obj.remove = require('./todo/remove');
// // console.log(obj.remove);
// obj.update = require('./todo/update');
// obj.pet = require('./todo/pet');

obj.search_from_all = require('./todo/search_from_all')

obj.get_user_following = require('./todo/get_user_following')
obj.get_user_likedPOID = require('./todo/get_user_likedPOID')
obj.update_following = require('./todo/update_following')
obj.update_likedPOID = require('./todo/update_likedPOID')
obj.update_user_info = require('./todo/update_user_info')

obj.login_get_password = require('./todo/login_get_password')
obj.login_check_username = require('./todo/login_get_password')
obj.signup_user = require('./todo/signup_user')
obj.create_post = require('./todo/create_post')
obj.count_follower = require('./todo/count_follower')
obj.count_followee = require('./todo/count_followee')
obj.fetch_profile_post = require('./todo/fetch_profile_post')
obj.fetch_following_post = require('./todo/fetch_following_post')
obj.get_user_info = require('./todo/get_user_info')
obj.search_exact_is = require('./todo/search_exact_is')