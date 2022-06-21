/// <reference types="react" />
interface ButtonProps {
    text: string;
}
declare const Button: (props: ButtonProps) => JSX.Element;

interface TitleProps {
    text: string;
}
declare const Title: (props: TitleProps) => JSX.Element;

export { Button, Title };
