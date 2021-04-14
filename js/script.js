
const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");
const button4 = document.querySelector(".button4");
const button5 = document.querySelector(".button5");

const textarea = document.getElementById("maintext");
button1.addEventListener('click',click);
button2.addEventListener('click',click);
button3.addEventListener('click',click);
button4.addEventListener('click',click);
button5.addEventListener('click',click);

function click(e) {
    const item = e.target;
    var val = textarea.value;
    if(item.innerHTML == 'C')
    {
        textarea.value=" ";
    }
    if(item.innerHTML == '%')
    {
        textarea.value = val+item.innerHTML;
    }
    if(item.innerHTML == 'Del')
    {
        textarea.value= val.substring(0,val.length -1);
    }
    if(item.innerHTML == '/')
    {
        textarea.value = val+item.innerHTML;
    }
    if(item.innerHTML == '7')
    {
        textarea.value = val+item.innerHTML;
    }
    if(item.innerHTML == '8')
    {
        textarea.value = val+item.innerHTML;
    }
    if(item.innerHTML == '9')
    {
        textarea.value = val+item.innerHTML;
    }
    if(item.innerHTML == 'x')
    {
        textarea.value = val+'*';
    }
    if(item.innerHTML == '4')
    {
        textarea.value = val+item.innerHTML;
    }
    if(item.innerHTML == '5')
    {
        textarea.value = val+item.innerHTML;
    }
    if(item.innerHTML == '6')
    {
        textarea.value = val+item.innerHTML;
    }
    if(item.innerHTML == '-')
    {
        textarea.value = val+item.innerHTML;
    }
    if(item.innerHTML == '1')
    {
        textarea.value = val+item.innerHTML;
    }
    if(item.innerHTML == '2')
    {
        textarea.value = val+item.innerHTML;
    }
    if(item.innerHTML == '3')
    {
        textarea.value = val+item.innerHTML;
    }
    if(item.innerHTML == '+')
    {
        textarea.value = val+item.innerHTML;
    }
    if(item.innerHTML == '00')
    {
        textarea.value = val+item.innerHTML;
    }
    if(item.innerHTML == '0')
    {
        textarea.value = val+item.innerHTML;
    }
    if(item.innerHTML == '.')
    {
        textarea.value = val+item.innerHTML;
    }
    if(item.innerHTML == '=')
    {
        const calc = eval(textarea.value);
        textarea.value= calc;
    }
}