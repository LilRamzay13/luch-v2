import Logo from './../../img/logo-solo.png'

const Navbar = () => {
    return (
        <nav>
            <div className="title">
                <img src={Logo} alt="" />
                <h1><span>ООО</span> <br />
                    ЛУЧ</h1>
            </div>


            <ul>

                <li id="current"><a href="index.html">О КОМПАНИИ </a></li>

                <li><a href="portfolio.html">Потребителям</a></li>

                <li><a href="partners.html">Партнерам</a></li>

                <li><a href="press.html">Пресс-центр</a></li>

            </ul>


            <div className="nav__contacts">
                <p>
                    Приморский край, <br />
                    Партизанский район, <br />
                    с. Владимиро–Александровское,  <br />
                    ул. Лазо 125<br /> <br />
                    8(42365) 22-7-39</p>
            </div>

        </nav>
    );
}

export default Navbar;