import { useEffect } from "react";
import moleImage from '../mole.png'

const Mole = (prop) => {
    useEffect(() => {
        let randomSeconds = Math.ceil(Math.random() * 10000)
        let timer = setTimeout(() => {
            props.toggle(false)
        }, randomSeconds)
        return () => clearTimeout(timer)
    })
}