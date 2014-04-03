var assert = require('assert');
var index = require('../../routes/index.js');

describe('/Index', function() {
  var todo = {data:{}};
  var req = {body:{}};
  describe('#addTodo', function() {
    it('Should append to Todo list', function() {
        var req = {
          body: {
            description: 'Added via request',
            done:false
          }
        };
        var Todo = function(obj) {
          this.data = obj;
          this.save = function(callback) {
            assert.equal(obj, req.body);
            callback(null, this);
          }
        };
        var res = {
          json : function(result) {
            assert.equal(req.body, result.todo.data)
          }
        };
        var api = index.addTodo(Todo); 

        api(req, res);

    })
  })
});
