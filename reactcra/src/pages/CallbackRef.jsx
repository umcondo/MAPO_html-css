import React, { useCallback, useEffect, useRef, useState } from 'react';

export default function CallbackRef() {
	// const [height, setHeight] = useState(0);
	const [height2, setHeight2] = useState(0);

	// callback ref
	// const measuredRef = useCallback((node) => {
	// 	if (node !== null) {
	// 		console.log('set Height1');
	// 		setHeight(node.getBoundingClientRect().height);
	// 	}
	// }, []);

	const ref = useRef();

	// rendering될때마다 실행되게 하기
	useEffect(() => {
		console.log(height2);
		console.log('rendering');
	});

	// useEffect는 dom이 그려지고 실행된다.
	useEffect(() => {
		console.log('set Height2');
		setHeight2(ref.current.getBoundingClientRect().height);
	}, []);

	return (
		<>
			{/* <h1 ref={measuredRef}>hello, world</h1> */}
			<h4 ref={ref}>useRef</h4>
			{/* <h2>제목은 {Math.round(height)}px 이다.</h2> */}
			<h2>제목은 {Math.round(height2)}px 이다.</h2>
		</>
	);
}
