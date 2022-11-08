import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import CodeIcon from '@mui/icons-material/Code';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FolderIcon from '@mui/icons-material/Folder';

export default function RegList(props) {

	return (
		<List style={{
			maxHeight: 'calc(100% - 112px)',
			overflow: 'auto',
			position:'absolute'
		}}>
			{props.elements.map(item => 
				<ListItem 
					key={item.id}
					onClick={() => {if (item.hasChildren) props.navTo(item.id)}}
					style={{'padding-top': '0px', 'padding-bottom': '0px' }}
				>
					<ListItemIcon>
						{item.hasChildren ? <FolderIcon /> : <CodeIcon />}
					</ListItemIcon>
					<ListItemText
						primary={item.text}
						secondary={item.secondaryText}
					/>
				</ListItem>
			)}
		</List>
	);

}