import { Title, Text, Space } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

export default function RandoDesc() {
  const navigate = useNavigate();
  return (
    <>
      <Title order={1} ta={'center'} fz={'10rem'}>
        404
      </Title>

      <Text ta={'center'} fz='2rem'>
        You know what that means! Go back to{' '}
        <Text component='a' c='blue' onClick={() => navigate('/')} sx={{ cursor: 'pointer' }}>
          home
        </Text>
        !
      </Text>
      <Text fz='0.4rem' sx={{ position: 'fixed', bottom: 0, left: 0 }}>
        Bonus points for knowing the Easter Egg
        <Text
          component='a'
          href='https://cdn.donmai.us/sample/19/38/__luxio_pokemon_drawn_by_twarda8__sample-19380dd0c1e09c03086109b72cf417b5.jpg'
          target='_blank'
          sx={{ cursor: 'pointer' }}
        >
          !
        </Text>
      </Text>
    </>
  );
}
