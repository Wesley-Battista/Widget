import React from 'react';
import { View} from 'react-native';
import Cabeçalho from './Cabeçalho';
import Corpo from './Corpo';
import Rodapé from './Rodapé';

const App = () => {
return (
<View style={{ flex: 1 }}>
<Cabeçalho />
<Corpo />
<Rodapé />
</View>
);
};
export default App;