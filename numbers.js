function test100(x, y)
{
        return ((x === 100 || y === 100) || (x + y === 100));
}
console.log(test100(100+0))
console.log(test100(50+50))
console.log(test100(90+10))
console.log(test100(80+10))
console.log(test100(100+10))



