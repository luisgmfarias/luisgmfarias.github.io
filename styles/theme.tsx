export const COLORS = () => {
    gray: '#6E7E85';
    navyCian: '#0D1F2D';
    orangeYellow: '#F2BE22';
    white: '#ffffff';
    azureColor: '#EDF7F6';
}

export const GRADIENTS = (COLORS:any) =>{
    blueToGray: `linearGradient(135deg, ${COLORS.navyCian} 50%, ${COLORS.gray} 100%)`
    yellowToAzure:`linearGradient(135deg, ${COLORS.orangeYellow} 50%, ${COLORS.azureColor} 100%)`
}