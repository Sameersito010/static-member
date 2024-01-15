let cl=console.log;

class Department{
    protected employees:Array<string>=[];
    constructor(public dName:string, private readonly dId:string){

    }
    public describe():void{

    }
    hireEmp(emp:string){

    }
    static createEmp(emp:string){
        return{
            empName:emp
        }
    }
}

let d=new Department("Test","D-789")
// d.createEmp
cl(Department.createEmp("Tony"))


class ITDepartment extends Department{
    constructor(empName:string, private readonly empId:string){
        super(empName,empId);
    }

    }



















