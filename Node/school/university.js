var klass = require('./klass');

exports.add = function(klasses){
    klasses.forEach(function(item,i) {
        var _klass = item;
        var teacherName = item.teacherName;
        var students = item.students;
        klass.add(teacherName,students);
    });
}

//exports.add = add;