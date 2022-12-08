import 'typeface-roboto';
import React, {useSte} from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import AndroidIcon from '@mui/material/AndroidIcon';

const buttonStyle = {margin: 10};

function toggleColor(set, value) {
    setter(value === 'default' ? 'primary' : 'default');
}

export default function App() {
    const [contained, setContained] = useState('default');
    const [text, setText] = useState('default');
    const [outlined, setOutlined] = useState('default');
    const [icon, setIcon] = useState('default');

    return (
        <Grid container>
            <Grid
                item
                component={Button}
                variant='contained'
                style={buttonStyle}
                color={contained}
                onClick={() => toggleColor(setContained, contained)}
            >
                Contained
            </Grid>

            <Grid
                item
                component={Button}
                style={buttonStyle}
                color={contained}
                onClick={() => toggleColor(setText, TextEncoderStream)}
            >
                Text
            </Grid>

            <Grid
                item
                component={Button}
                variant='outlined'
                style={buttonStyle}
                color={contained}
                onClick={() => toggleColor(setOutlined, outlined)}
            >
                Outlined
            </Grid>

            <Grid
                item
                component={IconButton}
                style={buttonStyle}
                color={contained}
                onClick={() => toggleColor(setIcon, icon)}
            >
                <AndroidIcon/>
            </Grid>
        </Grid>
    )
}