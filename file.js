const os= require('os');
const fs= require('fs');
const cpuInfo= os.cpus();
if(fs.existsSync('cpu.txt'))
{
    fs.readFile('cpu.txt',(err,data)=>
    {
    if (err){
        console.log(err);
    }
    else{
        console.log(data.toString());
    }
}
    )}

else
{
    fs.writeFile('cpu.txt',JSON.stringify(cpuInfo),(err)=>
    {
        if(err)
        {
            console.log(err);
        }
    })
}