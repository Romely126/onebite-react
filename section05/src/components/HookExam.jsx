import useInput from "../hooks/useInput";
// HOOK의 세 가지 TIP
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건부로 호출될 수는 없다
// 3. 커스텀 훅을 직접 만들 수 있다.



const HookExam = () => {

    const [input, onChange] = useInput();
    const [input1, onChange1] = useInput();

    return (
        <div>
            <input value={input} onChange={onChange} />
            <input value={input1} onChange={onChange1} />
        </div>
    )
};

export default HookExam;

// 반복된 훅 작업은 커스텀 훅으로 묶어서 관리가 가능
