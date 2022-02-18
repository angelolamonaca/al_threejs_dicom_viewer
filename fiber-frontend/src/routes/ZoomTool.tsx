/**
 * @created 16/02/2022 - 17:01
 * @project al_threejs_dicom_viewer
 * @author Angelo Lamonaca
 * @date 16/02/2022
 */
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import ToolBox from '../components/ToolBox';

const ZoomTool = (): JSX.Element => (
  // eslint-disable-next-line react/react-in-jsx-scope
  <Box>
    {/* eslint-disable-next-line react/react-in-jsx-scope */}
    <Typography>ZoomTool!</Typography>
    {/* eslint-disable-next-line react/react-in-jsx-scope */}
    <ToolBox />
  </Box>
);

export default ZoomTool;
