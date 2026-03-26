import { useEffect } from "react";

// 3. 언마운트
const Even = () => {
    useEffect (()=> {
        // 클린 업, 정리 함수
        return () => {
            console.log("unmount");
        };
    }, []);
    return <div>짝수입니다.</div>
}

export default Even;