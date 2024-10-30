//----otp function
function otp(a,b,c)
{
var a=Math.random()
var b=a*1000000
var c=Math.trunc(b)

    return c
}
console.log(otp())