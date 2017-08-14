const Bar = require('../../models/bar.model');

module.exports.read = function() {
    return async (ctx) => {
      const result = await Bar.find({});
      ctx.body = {
        'result': result
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