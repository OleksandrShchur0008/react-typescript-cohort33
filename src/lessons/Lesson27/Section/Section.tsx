import Content from "lessons/Lesson27/Content/Content";

import { SectionWrapper, SectionTitle } from "./styles";

function Section() {
  return (
    <SectionWrapper>
      <SectionTitle>Section component</SectionTitle>
      <Content />
    </SectionWrapper>
  );
}

export default Section;