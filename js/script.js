
    
    // // Creating required elements

    const root = document.createElement("root");
    document.body.append(root)

    const heading = document.createElement("heading");
    root.appendChild(heading);

    const h1 = document.createElement("h1");
    h1.innerHTML = "DOM Calculator";
    h1.setAttribute("id", "title");

    const p = document.createElement("p");
    p.setAttribute("id", "description");
    p.innerHTML = "DOM Calculator Created Using Javascript";
    heading.append(h1, p);
    
    const container = document.createElement("div");
    container.setAttribute("class", "container");
    root.appendChild(container);
    
    const calculator = document.createElement("div");
    calculator.setAttribute("class", "calculator");
    calculator.setAttribute("id", "calculator");
    container.appendChild(calculator);

    // result
    const result = document.createElement("input");
    result.setAttribute("id", "result");
    result.setAttribute("type", "text");
    result.setAttribute("placeholder", "0");
    calculator.appendChild(result);
    
    const buttonBox = document.createElement("div");
    buttonBox.setAttribute("id", "buttonBox");
    calculator.appendChild(buttonBox);
    
    // button Clear
    const buttonClear = document.createElement("button");
    buttonClear.innerHTML = "C";
    buttonClear.setAttribute("id", "clear");
    buttonClear.setAttribute("value", "C");
    buttonClear.setAttribute("calss", "btn");
    buttonBox.appendChild(buttonClear);
    
    // button Delete
    const buttonDelete = document.createElement("button");
    buttonDelete.innerHTML = "DEL";
    buttonDelete.setAttribute("id", "delete");
    buttonDelete.setAttribute("value", "DEL");
    buttonDelete.setAttribute("calss", "btn");
    buttonBox.appendChild(buttonDelete);

    // button empty
    const buttonPercentage = document.createElement("button");
    buttonPercentage.innerHTML = "";
    buttonPercentage.setAttribute("id", "EMPTY");
    buttonPercentage.setAttribute("value", "");
    buttonPercentage.setAttribute("calss", "btn");
    buttonBox.appendChild(buttonPercentage);

    // button Divide
    const buttonDivide = document.createElement("button");
    buttonDivide.innerHTML = "/";
    buttonDivide.setAttribute("id", "divide");
    buttonDivide.setAttribute("value", "/");
    buttonDivide.setAttribute("calss", "btn");
    buttonBox.appendChild(buttonDivide);

    // button 7
    const button7 = document.createElement("button");
    button7.innerHTML = "7";
    button7.setAttribute("id", "7");
    button7.setAttribute("value", "7");
    button7.setAttribute("calss", "btn");
    buttonBox.appendChild(button7);

    // button 8
    const button8 = document.createElement("button");
    button8.innerHTML = "8";
    button8.setAttribute("id", "8");
    button8.setAttribute("value", "8");
    button8.setAttribute("calss", "btn");
    buttonBox.appendChild(button8);
    
    // button 9
    const button9 = document.createElement("button");
    button9.innerHTML = "9";
    button9.setAttribute("id", "9");
    button9.setAttribute("value", "9");
    button9.setAttribute("calss", "btn");
    buttonBox.appendChild(button9);

    // button Multiply
    const buttonMultiply = document.createElement("button");
    buttonMultiply.innerHTML = "*";
    buttonMultiply.setAttribute("id", "multiply");
    buttonMultiply.setAttribute("value", "*");
    buttonMultiply.setAttribute("calss", "btn");
    buttonBox.appendChild(buttonMultiply);

     // button 4
     const button4 = document.createElement("button");
     button4.innerHTML = "4";
     button4.setAttribute("id", "4");
     button4.setAttribute("value", "4");
     button4.setAttribute("calss", "btn");
     buttonBox.appendChild(button4);
     
     // button 5
     const button5 = document.createElement("button");
     button5.innerHTML = "5";
     button5.setAttribute("id", "5");
     button5.setAttribute("value", "5");
     button5.setAttribute("calss", "btn");
     buttonBox.appendChild(button5);
     
     // button 6
     const button6 = document.createElement("button");
     button6.innerHTML = "6";
     button6.setAttribute("id", "6");
     button6.setAttribute("value", "6");
     button6.setAttribute("calss", "btn");
     buttonBox.appendChild(button6);

     // button Subtract
    const buttonSubtract = document.createElement("button");
    buttonSubtract.innerHTML = "-";
    buttonSubtract.setAttribute("id", "subtract");
    buttonSubtract.setAttribute("value", "-");
    buttonSubtract.setAttribute("calss", "btn");
    buttonBox.appendChild(buttonSubtract);

    // button 1
    const button1 = document.createElement("button");
    button1.innerHTML = "1";
    button1.setAttribute("id", "1");
    button1.setAttribute("value", "1");
    button1.setAttribute("calss", "btn");
    buttonBox.appendChild(button1);

    // button 2
    const button2 = document.createElement("button");
    button2.innerHTML = "2";
    button2.setAttribute("id", "2");
    button2.setAttribute("value", "2");
    button2.setAttribute("calss", "btn");
    buttonBox.appendChild(button2);

    // button 3
    const button3 = document.createElement("button");
    button3.innerHTML = "3";
    button3.setAttribute("id", "3");
    button3.setAttribute("value", "3");
    button3.setAttribute("calss", "btn");
    buttonBox.appendChild(button3);

    // button  Add
    const buttonAdd = document.createElement("button");
    buttonAdd.innerHTML = "+";
    buttonAdd.setAttribute("id", "add");
    buttonAdd.setAttribute("value", "+");
    buttonAdd.setAttribute("class", "btn");
    buttonBox.appendChild(buttonAdd); 
    
    // button 00
    const button00 = document.createElement("button");
    button00.innerHTML = "00";
    button00.setAttribute("id", "00");
    button00.setAttribute("value", "00");
    button00.setAttribute("calss", "btn");
    buttonBox.appendChild(button00);

    // button 0
    const button0 = document.createElement("button");
    button0.innerHTML = "0";
    button0.setAttribute("id", "0");
    button0.setAttribute("value", "0");
    button0.setAttribute("calss", "btn");
    buttonBox.appendChild(button0);
    
    // button Dot
    const buttonDot = document.createElement("button");
    buttonDot.innerHTML = ".";
    buttonDot.setAttribute("id", "dot");
    buttonDot.setAttribute("value", ".");
    buttonDot.setAttribute("calss", "btn");
    buttonBox.appendChild(buttonDot);

    // button Equal
    const buttonEqual = document.createElement("button");
    buttonEqual.innerHTML = "=";
    buttonEqual.setAttribute("id", "equal");
    buttonEqual.setAttribute("value", "=");
    buttonEqual.setAttribute("calss", "btn");
    buttonBox.appendChild(buttonEqual); 
    
    
     

    // function

        const display = document.getElementById("result");
        const special = ["*", "/", "+", "-"];

        calculator.addEventListener("click", (e) => {
            if (e.target.tagName === "BUTTON") {
              const buttonVal = e.target.value;
              if (buttonVal === "C") {
                display.value = "";
              } else if (buttonVal === "DEL") {
                display.value = display.value.slice(0, -1);
              } else if (buttonVal === "=" && display.value !== "") {
                display.value = eval(display.value);
              } else {
                display.value += buttonVal;
                if (display.value === "=" || special.includes(display.value))
                  display.value = "";
              }
            }
          });
