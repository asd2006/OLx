import React from 'react'
import "./header.scss"
import { FiMessageCircle, FiHeart, FiUser } from "react-icons/fi";
import { Button, Container } from '../../utils/components';

const Header = () => {
    return (
        <header className='header'>
            <Container >
                <div className='header__wrapper'>
                    <img className='header__logo' src='https://seeklogo.com/images/O/olx-logo-20F1656D13-seeklogo.com.png' alt='' />
                    <nav className='header__nav'>
                        <ul className='header__list'>
                            <li>
                                uz |
                            </li>
                            <li>
                                ru
                            </li>
                        </ul>
                        <button>
                            <FiMessageCircle />
                            Сообшения
                        </button>
                        <button>
                            <FiHeart />
                        </button>
                        <button>
                            <FiUser />
                            Ваш профил
                        </button>
                        <Button type={"light"} text="Подат Обявления" />
                    </nav>
                </div>
            </Container>
        </header>
    )
}

export default Header;

