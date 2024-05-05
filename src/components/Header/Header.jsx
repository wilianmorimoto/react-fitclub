import "./Header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";
import { useState } from "react";
import Testimonials from "./../Testimonials/Testimonials";

const Header = () => {
	const mobile = window.innerWidth < 768 ? true : false;
	const [menuOpened, setMenuOpened] = useState(false);

	return (
		<div className="header">
			<img className="logo" src={Logo} alt="" />
			{!menuOpened && mobile ? (
				<div
					style={{
						backgroundColor: "var(--appColor)",
						padding: ".5rem",
						borderRadius: "5px",
						cursor: "pointer",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						color: "white",
					}}
					onClick={() => setMenuOpened(true)}
				>
					<img src={Bars} alt="" style={{ width: "1.5rem", height: "1rem" }} />
				</div>
			) : (
				<ul className="header-menu">
					<li>
						<Link
							onClick={() => setMenuOpened(false)}
							to="home"
							spy={true}
							activeClass="active"
						>
							Home
						</Link>
					</li>
					<li onClick={() => setMenuOpened(false)}>
						<Link onClick={() => setMenuOpened(false)} to="programs" spy={true}>
							Programs
						</Link>
					</li>
					<li onClick={() => setMenuOpened(false)}>
						<Link onClick={() => setMenuOpened(false)} to="reasons" spy={true}>
							Why us
						</Link>
					</li>
					<li onClick={() => setMenuOpened(false)}>
						<Link
							onClick={() => setMenuOpened(false)}
							to="plans-container"
							spy={true}
						>
							Plans
						</Link>
					</li>
					<li>
						<Link
							onClick={() => setMenuOpened(false)}
							to="testimonials"
							spy={true}
						>
							Testimonials
						</Link>
					</li>
				</ul>
			)}
		</div>
	);
};

export default Header;
