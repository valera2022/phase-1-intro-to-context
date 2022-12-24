// Your code here
function createEmployeeRecord([string,string2,string3,number]){
    //console.log(string)

    let employeeRecord = 
    
   {}
employeeRecord.firstName = string
employeeRecord.familyName = string2
employeeRecord.title = string3
employeeRecord.payPerHour = number
employeeRecord.timeInEvents =[]
employeeRecord.timeOutEvents =[]

return employeeRecord


}

function createEmployeeRecords(arrayNested){
    
    // Converts each nested `Array` into an employee record using
    // `createEmployeeRecord` and accumulates it to a new `Array`
if (Array.isArray(arrayNested)){
    for (const array of arrayNested){

        createEmployeeRecords(array)
        createEmployeeRecord(array)
        employeeRecords.push(createEmployeeRecord)
        let employeeRecords = {}

    }
}
    
}


