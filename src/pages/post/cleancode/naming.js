import * as React from "react";
import styled from "styled-components";

// components
import Layout from "../../../components/layout";

/** 클린 코드 네이밍 페이지 */
const NamingPage = () => {
  return (
    <Layout>
      <h2>CLEAN CODE CHAPTER 2</h2>
      <Figure>
        <Blockquote>
          <BlockquoteParagraph>
            대충 훑어봐도 이해할 코드 작성이 목표다.
          </BlockquoteParagraph>
        </Blockquote>
      </Figure>
      <br />
      <h3>의미있는 이름</h3>
      <p>
        의도를 분명하고 솔직하게 표현하라.
        <br />
        자신의 기억을 자랑하지 마라.
      </p>
      <br />
      <h3>네이밍 작성 방법</h3>
      <h4>클래스 이름</h4>
      <p>
        클래스 이름과 객체 이름은 명사나 명사구가 적합하다.
        <br />
        ex) Customer, WikiPage, Account, AddressParser...
      </p>
      <h4>메서드 이름</h4>
      <p>
        메서드 이름은 동사나 동사구가 적합하다.
        <br />
        ex) postPayment, deletePage, save...
      </p>
      <h4>
        접근자<sup>Accessor</sup>, 변경자<sup>Mutator</sup>,조건자
        <sup>Predicate</sup>
      </h4>
      <p>
        javabean표준에 따라 값 앞에 get, set, is를 붙인다.
        <br />
        ex) getName, setName, isPosted...
      </p>
      <br />
      <h4>Example</h4>
      <pre>
        <code>
          {`class User {
  constructor(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
  }
  getId() {
    return this.id;
  }
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
}

const member = new User('192589', 'json', '18');
const isJson = member.name === 'json';  // true

if(isJson) {
  console.log(member.id); // 192589
}
`}
        </code>
      </pre>
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

export default NamingPage;
