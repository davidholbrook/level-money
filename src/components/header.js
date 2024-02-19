import Gear from '../icons/gear'

const Header = props => (
	<div className="bg-dark border-b-2 border-[#fff] w-full px-10 py-2 flex justify-between items-center">
	<h1 className="uppercase text-[36px] text-[#ffffff] "><span className="font-bold">Live Like a Teacher</span> Tracker</h1>
	<Gear />
	</div>
);

export default Header;