'use strict';

class API {
    static version () {
        return {ver: 3};
    }
    static urls () {
        return {
            groups: 'https://teacher-journal'+ API.version().ver + '.herokuapp.com/groups.json',
            students: 'https://teacher-journal' + 2 + '.herokuapp.com/students.json',
            subjects: 'https://teacher-journal' + API.version().ver + '.herokuapp.com/subjects.json',
            subject_groups: 'https://teacher-journal3.herokuapp.com/subject_groups.json'
        }
    };
}