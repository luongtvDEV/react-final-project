import * as React from 'react';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SnackBars({objectMsg}) {
    const [open, setOpen] = React.useState(false);



    React.useEffect(()=>{
        setOpen(objectMsg.open);
    }, [objectMsg]);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center'} }>
            <Alert onClose={handleClose} severity={objectMsg.statusAlert} sx={{ width: '100%' }}>
                {objectMsg.msg}
            </Alert>
        </Snackbar>
    );
}