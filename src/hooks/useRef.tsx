import React, { useState, useRef } from "react";

interface Inputs {
  이름: string;
  nickname: string;
}

export const InputSample: React.FC = () => {
  //input의 상태를 관리하는 객체
  const [inputs, setInputs] = useState<Inputs>({
    이름: "",
    nickname: "",
  });
  //dom요소에 접근하기 위한 ref객체
  const nameFocus = useRef<HTMLInputElement>(null);
  //구조분해 할당
  const { 이름, nickname } = inputs;
  //input값이 변경될 때 호출되는 함수
  //이벤트 객체에서 value와 name을 추출하고 ...input으로 기존 input상태를 복사한 후 변경된 필드만 업데이트함.
  const onChange = (e: { target: { value: any; name: any } }) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  //입력 필드를 초기화하고 useRef로 이름 입력 필드에 포커스함.
  const onReset = () => {
    setInputs({
      이름: "",
      nickname: "",
    });
    nameFocus.current!.focus();
  };
  return (
    <div>
      <input
        name="이름"
        placeholder="이름쓰세요"
        onChange={onChange}
        value={이름}
        ref={nameFocus}
      />
      <input
        name="nickname"
        placeholder="닉네임쓰세요"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값:</b>
        {이름}({nickname})
      </div>
    </div>
  );
};
