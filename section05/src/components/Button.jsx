// children으로 자식요소를 전달하는데 컴포넌트도 전달이 가능함
const Button = ({children, text, color = "black"}) => {   // props 기본값 할당
    return (
        <button style={{ color: color }}>
            {text} - {color.toUpperCase()}
            {children}
        </button>
    );
};




export default Button;