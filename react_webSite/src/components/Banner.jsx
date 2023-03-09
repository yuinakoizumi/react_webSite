import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.png";

export const Banner = () => {
	const [loopNum, setLoopNum] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const [text, setText] = useState('');
	const [delta, setDelta] = useState(300 - Math.random() * 100);
	const [index, setIndex] = useState(1);
	const toRotate = ["Yuina", "Web Desinger", "Web Developer"];
	const period = 2000;

	useEffect(() => {
		let ticker = setInterval(() => {
			tick();
		}, delta);

		return () => {clearInterval(ticker)};
	},[text])

	const tick = () => {
		let i = loopNum % toRotate.length;
		let fullText = toRotate[i];
		let updateText = isDeleting ? fullText.substring(0, text.length - 1): fullText.substring(0, text.length + 1);
		setText(updateText);

		if(isDeleting){
			setDelta(prevDelta => prevDelta / 2)
		}

		if(!isDeleting && updateText === fullText){
			setIsDeleting(true);
			setIndex(prevIndex => updateText - 1);
			setDelta(period);
		} else if (isDeleting && updateText === '') {
			setIsDeleting(false);
			setLoopNum(loopNum + 1);
			setIndex(1);
			setDelta(500);
		} else {
			setIndex(prevIndex => prevIndex + 1);
		}
	}

	return (
		<section className = "banner" id = "home">
			<Container>
				<Row className = "align-items-center">
					<Col xs={12} md={6} xl={7}>
						<span className="tagline">Welcome my Portfolio!</span>
						<h1>{`Hi I'm Webdecoded`}<span className="wrap">{text}</span></h1>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex tenetur consectetur numquam exercitationem. Impedit iste ratione sed cupiditate accusamus, quos deleniti saepe omnis tempora adipisci dolores nam incidunt. Nulla, quam.</p>
						<button onClick={() => console.log('connect')}>Let's connect<ArrowRight size={25}></ArrowRight></button>
					</Col>
					<Col xs={12} md={6} xl={7}>
						<img src={headerImg} alt= "Hedder Img"></img>
					</Col>
				</Row>
			</Container>
		</section>
	)
}
