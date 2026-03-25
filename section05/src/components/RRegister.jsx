import { useState, useRef } from "react";

const RRegister = () => {
    const [input, setInput] = useState({
        name : "",
        mail : "",
        bio : "",
    });
    const inputRef = useRef();

    const onChange = (e) => {
        setInput({
            ...input,
            [e.target.name] : e.target.value,
        });
    }

    const resetAll = (e) => {
        setInput({
            name: "",
            mail : "",
            bio : "",
        });
        inputRef.current.focus();
    }

    return (
        <div>
            <div>
                <input
                    ref={inputRef}
                    name="name"
                    value={input.name}
                    onChange={onChange}
                    placeholder="이름"

                />
            </div>
            <div>
                <input
                    name="mail"
                    value={input.mail}
                    onChange={onChange}
                    placeholder="메일"
                />
            </div>
            <div>
                <textarea
                    name="bio"
                    value={input.bio}
                    onChange={onChange}
                    placeholder="자기소개"
                />
            </div>
            <button type="reset" onClick={resetAll}>초기화</button>
        </div>
    )
}

export default RRegister;