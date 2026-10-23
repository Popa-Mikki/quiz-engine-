
/* =====================================================
   STUDENTS COMPANION — QUIZ ACCESS RECORDS

   passcount:
      Positive number = remaining permitted uses
      0               = access exhausted
     -1               = unlimited access

   Replace the sample records and passcodes with your
   actual access records before restricting a quiz.
===================================================== */

var individualPermissions = [
    {
        name: "Learner Example",
        passcode: "change-this-code",
        passcount: 3
    },{
        name: "Michael Obeng",
        passcode: "ice-CREAM-02",
        passcount: -1
    }

    // Add more individual learner records here.
];

var groupPermissions = [
    {
        name: "Science Group",
        passcode: "change-this-group-code",
        passcount: 20
    }

    // Add more group records here.
];
