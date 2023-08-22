import {React} from 'react';
import { DeskSetupModel } from '../models/DeskSetupModel';
import { Text3D } from '@react-three/drei';
import { useScreenSize } from '../context/ScreenSizeContext';

const ResponsiveText = ({ position, scale, children }) => {

  const font =
    'https://cdn.rawgit.com/mrdoob/three.js/r129/examples/fonts/helvetiker_regular.typeface.json';

  return (
    <Text3D font={font} position={position} scale={scale}>
      {children}
      <meshStandardMaterial attach='material' color='pink' />
    </Text3D>
  );
};

function Home () {  
 
  const dimensions=useScreenSize();
  var isMobile = dimensions.width < 769;
  return (
    <>

      <ambientLight intensity={.7} />
      <directionalLight intensity={2} position={[0,dimensions.height,1]}/>
      {!isMobile ?( 

      <> 
      
      <ResponsiveText  position={[-2.5, 2, 0]} scale={[0.01 * dimensions.width/25, 0.01 * dimensions.width/25, 0.01* dimensions.width/25]}>Hello,</ResponsiveText>
          <ResponsiveText  position={[-1.5, 0.5, 0]} scale={[0.01 * dimensions.width/25, 0.01 * dimensions.width/25, 0.01* dimensions.width/25]}>I'm</ResponsiveText>
          <DeskSetupModel position={[0.002*dimensions.width,1.5 , -5]} scale={[0.01 * dimensions.width/100, 0.01 * dimensions.width/100, 0.01* dimensions.width/100]} />
          <ResponsiveText  position={[-0.5, -1, 0]}scale={[0.01 * dimensions.width/25, 0.01 * dimensions.width/25, 0.01* dimensions.width/25]}>Hayden</ResponsiveText>
          <ResponsiveText  position={[0.5, -2.5, 0]} scale={[0.01 * dimensions.width/25, 0.01 * dimensions.width/25, 0.01* dimensions.width/25]}>Tinker</ResponsiveText>
        
       </> ):

          //Mobile design
          <>
          <ResponsiveText  position={[-.003*dimensions.width, .002*dimensions.height, 0]} scale={[0.01 * dimensions.width/15, 0.01 * dimensions.width/15, 0.01* dimensions.width/15]}>Hello,</ResponsiveText>
          <ResponsiveText  position={[-.002*dimensions.width, .001*dimensions.height, 0]} scale={[0.01 * dimensions.width/15, 0.01 * dimensions.width/15, 0.01* dimensions.width/15]}>I'm</ResponsiveText>
          <DeskSetupModel position={[0, 0, -5]} scale={[0.01 * dimensions.width/100, 0.01 * dimensions.width/100, 0.01* dimensions.width/100]} />
          <ResponsiveText  position={[.00008*dimensions.width, -.001*dimensions.height, 0]}scale={[0.01 * dimensions.width/15, 0.01 * dimensions.width/15, 0.01* dimensions.width/15]}>Hayden</ResponsiveText>
          <ResponsiveText  position={[0.0007*dimensions.width, -.002*dimensions.height, 0]} scale={[0.01 * dimensions.width/15, 0.01 * dimensions.width/15, 0.01* dimensions.width/15]}>Tinker</ResponsiveText>
          </>
          }
   </>
      
  );
};
export default Home;