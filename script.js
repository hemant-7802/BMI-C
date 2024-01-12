let output=document.getElementById("output")
let input1 = document.getElementById("frstinput")
let input2 = document.getElementById("secondinput")
let msg = document.querySelectorAll(".targetspan");
document.getElementById("btn").addEventListener('click',function(){
    let input1val =Number(input1.value)
    let input2val=Number(input2.value)
    if(input1val && input2val)
    {
        let valueinCM = input1val/100
        let BMICalc = input2val/(valueinCM**2)
        if(BMICalc<16)
        {
            output.innerHTML=`Your BMI is ${BMICalc.toFixed(2)} = Severe Thiness`
        }
        else if(BMICalc>=16 && BMICalc<17)
        {
            output.innerHTML=`Your BMI is ${BMICalc.toFixed(2)} = Moderate Thiness`
        }
        else if(BMICalc>=17 && BMICalc<18.5)
        {
            output.innerHTML=`Your BMI is ${BMICalc.toFixed(2)} = Mild Thiness`
        }
        else if(BMICalc>=18.5 && BMICalc<25)
        {
            output.innerHTML=`Your BMI is ${BMICalc.toFixed(2)} = Normal`
        }
        else if(BMICalc>=20 && BMICalc<30)
        {
            output.innerHTML=`Your BMI is ${BMICalc.toFixed(2)} = Overweight`
        }
        else if(BMICalc>=30 && BMICalc<35)
        {
            output.innerHTML=`Your BMI is ${BMICalc.toFixed(2)} = Obese Class I`
        }
        else if(BMICalc>=35 && BMICalc<=40)
        {
            output.innerHTML=`Your BMI is ${BMICalc.toFixed(2)} = Obese Class II`
        }
        else
        {
            output.innerHTML=`Your BMI is ${BMICalc.toFixed(2)} = Obese Class III`
        }
    }
    else
    {
        msg[0].innerHTML = "*Input field required (Numbers Only)."
        msg[1].innerHTML = "*Input field required (Numbers Only)."
    }
})
function check(){
    if(input1.value)
    {
        msg[0].innerHTML= ""
    }
    if(input2.value)
    {
        msg[1].innerHTML = "";
    }
}