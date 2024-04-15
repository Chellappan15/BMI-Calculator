const calculate=()=>{
    var height=document.getElementById("Height").value;
    var weight=document.getElementById("Weight").value;
    height=Number(height);
    weight=Number(weight);
    var calculation=weight/(height*height);
    calculation=Math.round(calculation)
    var Ouput=document.getElementById("Ouput");

    if(calculation<18.5){
        Output.innerHTML=`Your Body Mass Index is ${calculation} and you are UnderWeight.<br>
        <h5>Here are some Tips To Gain Some Weight:</h5>
        <ol>
        <li>Have Nutrient Dense Foods.</li>
        <li>Frequently have some snacks & Have your meals on time.</li>
        <li>Strenght Training Exercise.</li>
        </ol>
        <h1>Thank You.</h1>`
        Output.style.fontFamily="'Poppins', sans-serif";
        Output.style.fontSize="30px";
        Output.style.fontWeight="300";
    }
    else if(calculation >18.5 && calculation <24.9)
    {
        Output.innerHTML=`Your Body Mass Index is ${calculation} and you are having a Normal BMI.<br>
        <h5>Here are some Tips To Maintain It:</h5>
        <ol>
        <li>Focus on Balanced Nutrition.</li>
        <li>Maintain Regular Meal Times.</li>
        <li>Incorporate Regular Physical Activity.</li>
        </ol>
        <h1>Thank You.</h1>`
        Output.style.fontFamily="'Poppins', sans-serif";
        Output.style.fontSize="30px";
        Output.style.fontWeight="300";
    }
    else if(calculation >24.9){
        Output.innerHTML=`Your Body Mass Index is ${calculation} and you are Overweight.<br>
        <h5>Here are some Tips To Lose Weight:</h5>
        <ol>
        <li>Focus on Portion Control.</li>
        <li>Incorporate More Fruits and Vegetables.</li>
        <li>Increase Physical Activity.</li>
        </ol>
        <h1>Thank You.</h1>`
        Output.style.fontFamily="'Poppins', sans-serif";
        Output.style.fontSize="30px";
        Output.style.fontWeight="300";
    }
    else{
        Output.innerHTML=`Your Body Mass Index is ${calculation} and you are Obese.<br>
        <h5>Here are some Tips To Lose Weight:</h5>
        <ol>
        <li>Consult with a Healthcare Professional.</li>
        <li>Focus on Portion Control and Mindful Eating.</li>
        <li>Incorporate More Whole Foods and Limit Processed Foods.</li>
        <li>Gradually Increase Physical Activity.</li>
        <li>Consider Seeking Support from a Registered Dietitian or Weight Management Program.</li>
        </ol>
        <h1>Thank You.</h1>`
        Output.style.fontFamily="'Poppins', sans-serif";
        Output.style.fontSize="30px";
        Output.style.fontWeight="300";
    }
}