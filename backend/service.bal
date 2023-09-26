import ballerina/http;

@http:ServiceConfig {
    cors: {
        allowOrigins: ["http://localhost:3000"], // Allowed origins
        allowMethods: ["OPTIONS", "POST","PUT","DELETE","GET"], // Allowed methods
        allowHeaders: ["Origin", "Content-Type", "Accept"], // Allowed headers
        allowCredentials: false // Allow credentials (cookies, authorization headers), if needed
    }
}
service /users on new http:Listener(8080) {
    isolated resource function post .(@http:Payload Student stu) returns int|error? {
        return addStudent(stu);
    }

    isolated resource function put .(@http:Payload Student stu) returns int|error? {
        return updateStudent(stu);
    }

     isolated resource function delete [int student_Id]() returns int|error? {
        return removeStudent(student_Id);       
    }

     isolated resource function get .() returns Student[]|error? {
        return getAllStudents();
    }
}


