import React from 'react';
import './css/sidebar.css';
import { Logo } from '../../assets';
import { FaHome, FaRegCalendarAlt } from 'react-icons/fa';
import { TiGroup } from 'react-icons/ti';
import { GiHamburgerMenu } from 'react-icons/gi';

const Sidebar = () => {
  return (
		<div className="sidebar">
			<div className="menu">
				<GiHamburgerMenu />
			</div>
			<div className="logoBx">
				<img src={Logo} alt="logo Gadjian" />
			</div>
			<div className="navigationBx">
				<div className="beranda">
					<span><FaHome /></span>
					Beranda
				</div>
				<div className="personlist active">
				<span><TiGroup /></span>
					Personal List
				</div>
				<div className="dailyattend">
				<span><FaRegCalendarAlt /></span>
					Daily Attendance
				</div>
			</div>
		</div>
	);
};

export default Sidebar;