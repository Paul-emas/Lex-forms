var UIcontroller = (function () {

    var DOMstrings = {
        svg: '.SVG',
        label: '.form__label',
        input: '.form__component--input',
        form1: 'firstname',
        form2: 'lastname',
        form3: 'email',
        form4: 'pass',
    };

    return {
        DOMelement: function () {
            return {
                svgIcons: document.querySelectorAll(DOMstrings.svg),
                label: document.querySelectorAll(DOMstrings.label),
                input: document.querySelectorAll(DOMstrings.input)
            }
        },

        getDOMstrings: function () {
            return DOMstrings;
        }
    }

})();

var controller = (function (UIctrl) {
    var DOM = UIctrl.getDOMstrings();
    var elements = UIctrl.DOMelement();
    var svg = elements.svgIcons;
    var label = elements.label;
    var input = elements.input;
    var form1 = document.getElementById(DOM.form1);
    var form2 = document.getElementById(DOM.form2);
    var form3 = document.getElementById(DOM.form3);
    var form4 = document.getElementById(DOM.form4);

    function add(index) {
        svg[index].style.display = 'block';
        label[index].style.display = 'block';
    }

    function remove(remove) {
        svg[remove].style.display = 'none';
        label[remove].style.display = 'none';
    }

    document.querySelector('.form__component--input-btn').addEventListener('click', function (event) {
        var tester = true;

        if (tester) {
            event.preventDefault();
            if (form1.value === "") {
                form1.focus();
                form1.style.border = '2px solid hsl(0, 100%, 74%)';
                add(0)

            } else {
                form1.style.border = '2px solid hsl(154, 59%, 51%)';
                remove(0);
                form2.focus();
                svg[1].classList.remove('active');
                tester = false;
            }


            if (form2.value === "") {
                form2.style.border = '2px solid hsl(0, 100%, 74%)';
                add(1);

            } else {
                form2.style.border = '2px solid hsl(154, 59%, 51%)';
                remove(1);
                form3.focus();
                svg[2].classList.remove('active');
            }


            if (form3.value === "") {
                form3.style.border = '2px solid hsl(0, 100%, 74%)';
                add(2);

            } else {
                form3.style.border = '2px solid hsl(154, 59%, 51%)';
                remove(2);
                form4.focus();
                svg[3].classList.remove('active');
            }


            if (form4.value === "") {
                form4.style.border = '2px solid hsl(0, 100%, 74%)';
                add(3)
            } else {
                form4.style.border = '2px solid hsl(154, 59%, 51%)';
                remove(3);
                location = 'http://electro2020.000webhostapp.com';
            }
        }
    });
})(UIcontroller);





// Passing arg into a function
function calculateAge(year) {
    return 2019 - year;
}

var age = calculateAge(1990);
console.log(age);


var x = document.querySelectorAll('.svg');