import { validate } from "validate.js"

const constraintsExample = {
    attribute1: {
        presence: true, // true = atributo obrigatório. false = atributo opcional
        type: 'string', // tipo do atributo
        format: {
            pattern: /.*/, // regex com um padrão a ser seguido (caso exista)
        }
    },

    attribute2: {
        type: 'object',
        presence: false
    },

    attribute3: {
        type: 'number',
        presence: true,
    }
}

class ValidateExample {
    private objectReceivedValidExample = {
        attribute1: 'value',
        attribute2: {},
        attribute3: 10
    }

    private objectReceivedInvalidExample = {
        attribute1: 'value',
        attribute2: {},
    }

    runValidate(){
        const validate1 = validate(this.objectReceivedValidExample, constraintsExample); // válido (retorna undefined)
        const validate2 = validate(this.objectReceivedInvalidExample, constraintsExample); // inválido (retorna erro de validação)

        console.log('RESULTADO DA PRIMEIRA VALIDAÇÃO: ', validate1); // undefined
        console.log('RESULTADO DA SEGUNDA VALIDAÇÃO: ', validate2); // { attribute3: [ "Attribute3 can't be blank" ] }
    }
}

const exampleInstance = new ValidateExample();

exampleInstance.runValidate();
