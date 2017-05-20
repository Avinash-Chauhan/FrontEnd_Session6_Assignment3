//i have declared variables i,sum and assigned 0 to sum
var i,sum;
sum=0; 
//using for loop where i=0 starting conditon,i<=1000 is ending condition and i++ is to iterate or print upto 10000 numbers
for(i=0;i<=1000;i++)
{   
//assigning and adding i values to sum to get result 500500
	sum+=i;
}
    //print the result output into console
	console.log("sum upto 1000 using for loop is "+sum);
//using while condition where first end condition will be present I,e i<=1000 is assigned then starting condition I,e i=0; after comes adding of i values to sum then iterateing i values each time
while(i<=1000)
{
    i=0;
	sum+=i;
   i++;
}
//print the result output into console
console.log("sum upto 1000 using while loop is "+sum);	