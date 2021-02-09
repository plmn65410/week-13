let gen = prompt("Please Enter value between 2444-2564: ");
if(gen >= 2540 && gen <= 2564)
{
    if(gen > 2553 && gen <= 2564)
    {
        alert(gen + " = Gen Alpha");
        console.log(gen + " = Gen Alpha");
        document.getElementById("hContent").innerHTML= gen + " = Gen Alpha";
    }
    else if(gen >= 2540 && gen <= 2553)
    {
        alert(gen + " = Gen Z");
        console.log(gen + " = Gen Z");
        document.getElementById("hContent").innerHTML= gen + " = Gen Z";
    }
}

else if(gen >= 2523 && gen <2540)
{
    alert(gen + " = Gen X");
    console.log(gen + " = Gen X");
    document.getElementById("hContent").innerHTML= gen + " = Gen x";
}

else if(gen >= 2508 && gen <2522)
{
    alert(gen + " = Gen Y");
    console.log(gen + " = Gen Y");
    document.getElementById("hContent").innerHTML= gen + " = Gen Y";
}

else if(gen >= 2489 && gen <2507)
{
    alert(gen + " = Baby Boomer");
    console.log(gen + " = Baby Boomer");
    document.getElementById("hContent").innerHTML= gen + " = Baby Boomer";
}

else if(gen >= 2468 && gen <2488)
{
    alert(gen + " = Silent Generation");
    console.log(gen + " = Silent Generation");
    document.getElementById("hContent").innerHTML= gen + " = Silent Generation";
}

else if(gen >= 2444 && gen <2467)
{
    alert(gen + " = Greatest Generation");
    console.log(gen + " = Greatest Generation");
    document.getElementById("hContent").innerHTML= gen + " = Greatest Generation";
}

else 
{
    console.log("ERROR")
}