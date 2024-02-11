import { useState } from "react"
import confetti from 'canvas-confetti'

export const useChangeElements = () => {
    const [index, setIndex] = useState(0)
    const [textP, setTextP] = useState('dale amor, no seas odiosa ')
    const [image, setImage] = useState('https://i.pinimg.com/originals/f6/a5/f7/f6a5f7ddff1f05cbcc560256b9f98c2e.gif')

    const options = ['Segura?', 'Segurisima?', 'Ah ya, como ya le dijiste que sí al otro u otra', 'Tas segura de que no?', 'Todas iguales', 'DALE AMOOOR QUE TE CUESTA MARRR', 'No me hables, de pana', 'No que me amabas?', 'Ultima oportunidad para darle que sí', 'me voy a ir a llorar', 'ya sé que hacer para que le de si', 'Si le das que no, eres swiftie', 'Te voy a acusar con Kanye']

    const handleButtonNo = () => {
        setIndex(index + 1)
        setImage('https://media.tenor.com/ivKWdfdbV3EAAAAi/goma-goma-cat.gif')
        setTextP(options.at(index))
        
        if(index === options.length - 1) setIndex(0)
    }

    const handleButtonYes = () => {
        setImage("https://i.pinimg.com/originals/e4/9d/7b/e49d7b7e965f09e31b498314b02e3662.gif")
        setTextP('Yo sabía que ibas a aceptar, te amo mucho mi pedacito c:')
        confetti()
    }

    return { handleButtonNo, handleButtonYes, textP, image }
}
