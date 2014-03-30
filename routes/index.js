
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { 
    title: 'Express',
    todos: [ 
      { description: "Buy eggs",
        done: false
      },
      { description: "Write next blog post",
        done: false
      },
      { description: "Write that todo app",
        done: true 
      }
    ]
  });
};

exports.addTodo = function(todos) {
  return function(req, res) {
    todos.push(req.body);
    res.json( {todos : todos} );
  }
};
