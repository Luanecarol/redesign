// @mui
import { Stack, Button,  } from '@mui/material';
// hooks
import useAuth from '../../../hooks/useAuth';
// routes
import { PATH_DOCS } from '../../../routes/paths';

// ----------------------------------------------------------------------

export default function NavbarDocs() {
  

  return (
    <Stack
      spacing={3}
      sx={{ px: 5, pb: 5, mt: 2, width: 1, textAlign: 'center', display: 'block' }}
    >

<Button href={PATH_DOCS} target="_blank" rel="noopener">
        Seja vip
      </Button>
    </Stack>
  );
}
