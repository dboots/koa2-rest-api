const User = require('../../models/user.model');

module.exports.put = function() {
    return async (ctx) => {
      const result = await new User({email: ctx.request.body.email}).save();
      ctx.body = {
        result: result
      };
    }
}

module.exports.create = function() {
    return async (ctx) => {
      const result = await new Bar({'title': 'bar'}).save();
      ctx.body = {
        'result': result
      };
    }
}