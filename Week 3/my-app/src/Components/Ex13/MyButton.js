import * as React from 'react'

const MyButton = ({ disabled, text }) => (
    <button disabled = {disabeld}>{text}</button>
);

MyButton.defaultProps = {
    text: 'My Button',
    disabled: false,
}

export default MyButton;