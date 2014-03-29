
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { 
    title: 'Expressa',
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
