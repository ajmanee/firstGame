var userChoice = prompt ("Do you choose rock , paper or scissors")
var computerChoice = Math.random()
{
    if (computerChoice <= 0.34) 
        {
        console.log ("Computer choose paper" );
        }
    else if (computerChoice >= 0.66)
        {
            console.log ("Computer choose rock");
        }
    else
        {
            console.log("Computer choose scissors");
        }


};