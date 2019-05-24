//display the user input as it's entered
function store(val)
{
    document.getElementById("display").value += val;            //update the input field
}

//evaluate the stored values and operators
function answer()
{
    let x = document.getElementById("display").value;           //store the entirety of what has been entered and stored in "display" to x
    let y = eval(x);                                            //evaluate the string of input

    if(y == undefined)
    {
        document.getElementById("display").value = "";
    }
    else
    {
        document.getElementById("display").value = y;               //set the value to our input field
    }
}

//clear the display and stored values when clear is selected
function resetOutput()
{
    document.getElementById("display").value = "";              //set the input field to empty string
}