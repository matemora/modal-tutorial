import { ButtonHTMLAttributes, ReactNode } from "react"
import './styles.css';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children?: ReactNode;
    variation?: string;
}


export function Button(props: ButtonProps) {
    return (
        <button className={`button ${props.variation || ''}`} {...props}>
            {props.children}
        </button>
    )
}