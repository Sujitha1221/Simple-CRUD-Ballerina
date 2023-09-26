import ballerina/time;
import ballerinax/mysql;
import ballerinax/mysql.driver as _; // This bundles the driver to the project so that you don't need to bundle it via the `Ballerina.toml` file.
import ballerina/sql;


public type Student record {|
    int student_Id?;
    string student_name;
    time:Date birth_date;
|};

configurable string USER = ?;
configurable string PASSWORD = ?;
configurable string HOST = ?;
configurable int PORT = ?;
configurable string DATABASE = ?;

final mysql:Client dbClient = check new(
    host=HOST, user=USER, password=PASSWORD, port=PORT, database="Users"
);

isolated function addStudent(Student stu) returns int|error {
    sql:ExecutionResult result = check dbClient->execute(`
        INSERT INTO students (student_Id,student_name,birth_date)
        VALUES (${stu.student_Id}, ${stu.student_name}, ${stu.birth_date})
    `);
    int|string? lastInsertId = result.lastInsertId;
    if lastInsertId is int {
        return lastInsertId;
    } else {
        return error("Unable to obtain last insert ID");
    }
}

isolated function updateStudent(Student stu) returns int?|error {
    sql:ExecutionResult result = check dbClient->execute(`
        UPDATE students SET
            student_name = ${stu.student_name}, 
            birth_date = ${stu.birth_date}
        WHERE student_Id = ${stu.student_Id}  
    `);
    
    int? rowsAffected = result.affectedRowCount;
    if rowsAffected > 0 {
        return rowsAffected;
    } else {
        return error("No rows were updated");
    }
}

isolated function removeStudent(int student_Id) returns int|error {
    sql:ExecutionResult result = check dbClient->execute(`
        DELETE FROM students WHERE student_Id = ${student_Id}
    `);
    int? affectedRowCount = result.affectedRowCount;
    if affectedRowCount is int {
        return affectedRowCount;
    } else {
        return error("Unable to obtain the affected row count");
    }
}

isolated function getAllStudents() returns Student[]|error {
    Student[] students = [];
    stream<Student, error?> resultStream = dbClient->query(
        `SELECT * FROM students`
    );
    check from Student student in resultStream
        do {
            students.push(student);
        };
    check resultStream.close();
    return students;
}





