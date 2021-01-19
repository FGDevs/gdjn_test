/* Made index with this format so we can simply:
1. press Ctrl+Shift+Arrow(Up||Down) to duplicate
2. Block the duplicated component name & press 
	 Ctrl+D to block the directory name to and change
	 both of them
3. press Esc & edit component name only if you
	 decide to make component name !== directory name
*/

export {default as Button} from './buttons/button';
export {default as PagingButton} from './buttons/pagingbutton';
export {default as Card} from './card';
export {default as Inputbox} from './inputbox';
export {default as Sidebar} from './sidebar';
export {default as Paging} from './paging';