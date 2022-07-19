useContext란 ?

보통 부모 컴포넌트에서 자식 컴포넌트로 props를 통해 데이터를 전달한다. 데이터를 이런식으로 전달하다가 컴포넌트들이 무수히 많으면, 루트 컴포넌트로부터 최하위 컴포넌트까지 순차적으로 데이터를 계속해서 전해주는 일이 발생한다.

하지만 Context를 사용한다면 전역적으로 데이터를 공유하기 때문에 루트에서 최하위 컴포넌트까지 데이터를 한 번에 전달할 수 있다.

- context의 현재 값은 트리 안에서 Hook을 호출하는 컴포넌트에서 가장 가까이에 있는 <MyContext.Provider>의 value prop에 의해 결정된다.

- useContext를 호출한 컴포넌트는 context 값이 변경되면 항상 리렌더링 된다. 즉, 상위 컴포넌트에서 React.memo 또는 shouldComponentUpdate를 사용하더라도 useContext를 사용하고 있는 컴포넌트 자체에서부터 다시 렌더링된다.

- Context를 사용하면 컴포넌트 재사용이 어렵다. Prop drilling을 피하기 위한 목적으로 Context를 사용한다면 Componet Composition(컴포넌트 합성)을 먼저 고려해야 한다.

useContext로 전달한 인자는 context 객체 그 자체이어야 함을 잊으면 안된다.

useContext(MyContext)
