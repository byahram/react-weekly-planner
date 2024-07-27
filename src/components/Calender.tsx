import Calendar from "react-calendar";
import styled from "styled-components";

export default function Calender() {
  return (
    <CalenderWrap id="calender">
      <Calendar />
    </CalenderWrap>
  );
}

const CalenderWrap = styled.aside`
  width: 40%;
`;
