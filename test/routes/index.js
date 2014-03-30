var assert = require('assert');
var index = require('../../routes/index.js');

describe('/Index', function() {
  var todos = [];
  describe('#addTodo', function() {
    beforeEach(function() {
      todos.push({
        description: 'First to-do',
        done: true
      });
    });

    it('Should append to Todo list', function() {
        var api = index.addTodo(todos); 
        var req = {
          body: {
            description: 'Added via request',
            done:false
          }
        };
        var res = {
          json : function(result) {
            assert.equal(2, result.todos.length);
            assert.equal(req.body.description, result.todos[1].description);
            assert.equal(result.todos[1].done, false);
          }
        };

        api(req, res);

    })
  })
});
