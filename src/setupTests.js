import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

// enzyme test setup
configure({ adapter: new Adapter() }); 