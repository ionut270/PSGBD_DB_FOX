import React from "react";
import { Menu } from "semantic-ui-react";
import logo from "../../props/logo.png";

export default class Header extends React.Component {

	render() {
        const { activeItem } = this.props
		return (
			<div className='page__header--source'>
				<Menu inverted className='page__header__menu'>
					<Menu.Item>
						<img alt="App logo" src={logo} />
					</Menu.Item>
					<Menu.Item name='2' active={activeItem === "2"} onClick={this.props.handleItemClick}>
						Tema 2
					</Menu.Item>
                    <Menu.Item name='3' active={activeItem === "3"} onClick={this.props.handleItemClick}>
						Tema 3
					</Menu.Item>
                    <Menu.Item name='4' active={activeItem === "4"} onClick={this.props.handleItemClick}>
						Tema 4
					</Menu.Item>
				</Menu>
			</div>
		);
	}
}
