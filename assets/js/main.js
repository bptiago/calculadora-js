function criaCalculadora() {
    return {
        display: document.querySelector('.display'),


        begin() {
            this.buttonClick();
            this.backspaceKeyPress();
            this.enterKeyPress()
        },

        backspaceKeyPress() {
            document.addEventListener('keyup', evento => {
                if (evento.key == 'Backspace') {
                    evento.preventDefault();
                    this.clearDisplay();
                }

            });
        },

        enterKeyPress() {
            document.addEventListener('keydown', evento => {
                if (evento.key = 'Enter') {
                    evento.preventDefault();
                    this.doMath();
                }
            })
        },

        buttonClick() {
            document.addEventListener('click', function(evento) {
                const target = evento.target;
                
                if(target.classList.contains('button-num')) {
                    this.displayButtonValue(target.innerText);
                };

                if(target.classList.contains('button-text')) {
                    this.displayButtonValue(target.innerText);
                }

                if(target.classList.contains('button-point')) {
                    this.displayButtonValue(target.innerText);
                }

                if(target.classList.contains('button-clear')) {
                    this.clearDisplay();
                }

                if(target.classList.contains('button-backspace')) {
                    this.deleteOne();
                }

                if(target.classList.contains('button-eq')) {
                    this.doMath();
                }
                
            }.bind(this));
        },

        doMath() {
            expression = this.display.value;

            try {
                expression = eval(expression);

                if (!expression) {
                    alert('Conta inválida!')
                    return
                }

                this.display.value = String(expression);
            } catch(error) {
                alert('Conta inválida!')
                return
            }
        },


        displayButtonValue(value) {
            this.display.value += value; 
        },

        clearDisplay() {
            this.display.value = '';
        },

        deleteOne() {
            this.display.value = this.display.value.slice(0, -1);
        }
    }
}

const calculadora = criaCalculadora();
calculadora.begin();