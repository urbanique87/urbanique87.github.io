import * as React from "react";
import styled from "styled-components";
// components
import Layout from "../../../components/layout";

/** 클린 코드 인트로 페이지 */
const IntroPage = () => {
  return (
    <Layout>
      <h2>CLEAN CODE CHAPTER 1</h2>
      <Figure>
        <Blockquote>
          <BlockquoteParagraph>
            코드 품질을 측정하는 유일한 척도 = 분당 내지르는 WTF! 회수
          </BlockquoteParagraph>
        </Blockquote>
      </Figure>
      <br />
      <h3>우리는 왜 코드를 깨끗하게 작성해야 하는가?</h3>
      <p>
        당신이 프로그래머라면 최소 한 번 이상은 경험한 적이 있을 것이다.
        <br />
        본인, 또는 타인이 작성한 과거의 코드를 변경해야 하는 시점이 도래했을 때
        깊은 고민과 잦은 한숨을 내쉬며 코드 분석에 상당한 시간을 할애하던 경험을
        말이다.
        <br />
        <br />
        우리의 정신 건강을 위해, 그리고 어제보다 성장한 프로그래머가 되기 위해
        코드를 깨끗하게 작성해야 할 필요가 있다.
      </p>
      <br />
      <h3>프로그래머로서의 책임</h3>
      <p>
        프로그래머는 코드를 작성한다.
        <br />
        요리사가 맛있는 요리를 만들기 위해 싱싱하고 좋은 재료를 엄선하듯이,
        프로그래머도 고품질의 프로그램을 만들기 위해, 좋은 코드를 작성하도록
        노력해야한다.
        <br />
        일정에 맞춰 개발을 하는 것, 당연히 중요하다. 그러나, 프로그래머로서 좋은
        코드를 사수해야 하는 책임을 우선적으로 가질 필요가 있다.
      </p>
      <br />
      <h3>깨끗한 코드를 작성하는 방법</h3>
      <ul>
        <li>1. 중복을 피하라.</li>
        <li>2. 한 기능만 수행하라.</li>
        <li>3. 제대로 표현하라.</li>
        <li>4. 작게 추상화하라.</li>
      </ul>
      <p>
        객체가 여러 기능을 수행한다면 여러 객체로 나눈다.
        <br />
        메서드가 여러 기능을 수행한다면 기능을 명확히 기술하는 메서드 하나와
        기능을 실제로 수행하는 메서드 여러 개로 나눈다. (메서드 추출 리팩터링
        기법
        <sup>Extart Method</sup>)
      </p>
      <Figure>
        <Blockquote>
          <BlockquoteParagraph>
            논리가 간단해야 버그가 숨어들지 못한다.
            <br />
            의존성을 최대한 줄여야 유지보수가 쉬워진다.
            <br />
            깨끗한 코드는 한가지에 '집중'한다.
            <br />
          </BlockquoteParagraph>
        </Blockquote>
        <figcaption>—C++창시자, 비야네 스트롭스르툽</figcaption>
      </Figure>
      <Figure>
        <Blockquote>
          <BlockquoteParagraph>
            코드는 문학적으로 표현해야 마땅하다.
          </BlockquoteParagraph>
        </Blockquote>
        <figcaption>
          —OTI 창립자이자 이클립스 전략의 대부, 데이브 토마스
        </figcaption>
      </Figure>
    </Layout>
  );
};

const Figure = styled.figure`
  margin: 0;
`;

const Blockquote = styled.blockquote`
  margin: 0;
`;

const BlockquoteParagraph = styled.p`
  padding: 16px;
  background: #eee;
  border-radius: 4px;
`;

export default IntroPage;
