var m1=50, var m2=50, var m3=50;
var total=m1+m2+m3;
var avg=total/3;

consile.log ("Total:" +total);
consile.log ("average:" +avg);
if (m1>=35&&m2>=35&&m3>=35)
{
    consile.log("Result: Pass");
    if(avg>=90&&avg<=100)
    {
        consile.log("Gread : A ");
    }
    else if (avg>=80&&avg<=89)
    {
        consile.log("Gread : B ");
    }
    else
    {
       consile.log("Gread : C "); 
    }
}
else
{
    consile.log("Result : Fail"); 
    consile.log("Result : No Gread"); 
}