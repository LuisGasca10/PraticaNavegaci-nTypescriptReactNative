import { Ionicons } from '@expo/vector-icons';
import React, { useContext } from 'react'
import { colors } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native';
import { AuthContext } from '../context/AuthContext';



type IconName = keyof typeof Ionicons['glyphMap'];

interface Props {
    name: IconName;
}



const IconButton = ({ name }: Props) => {

    const { setFavoriteIcon, authState } = useContext(AuthContext);

    return (
        <TouchableOpacity
            onPress={() => { setFavoriteIcon(name); }}

        >
            <Ionicons
                name={name}
                size={80}
                color={colors.primary}
            />
        </TouchableOpacity>
    )
}

export default IconButton

