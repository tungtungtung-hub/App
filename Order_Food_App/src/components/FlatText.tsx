import React from 'react';
import { Text } from 'react-native';
import { AppLoading } from "expo";
import { useFonts } from "expo-font";

interface FlatTextProps{ 

    text: string;
    font?: string;
    color?: string;
    sizeText?: number;
    textalign?: any;
    marginLeft?: any;

 }
export const FlatText: React.FC<FlatTextProps> = ({ text, font, color, sizeText, textalign, marginLeft }) => {

        let [fontsLoaded] = useFonts({
                medium: require("./../assets/fonts/raleway/Raleway-Medium.ttf"),
                bold: require("./../assets/fonts/raleway/Raleway-Bold.ttf"),
                black: require("./../assets/fonts/raleway/Raleway-Black.ttf"),
                extrabold: require("./../assets/fonts/raleway/Raleway-ExtraBold.ttf"),
                extralight: require("./../assets/fonts/raleway/Raleway-ExtraLight.ttf"),
                regular: require("./../assets/fonts/raleway/Raleway-Regular.ttf"),
                semibold: require("./../assets/fonts/raleway/Raleway-SemiBold.ttf"),
                q_bold: require("./../assets/fonts/quicksand/Quicksand-Bold.ttf"),
                q_light: require("./../assets/fonts/quicksand/Quicksand-Light.ttf"),
                q_medium: require("./../assets/fonts/quicksand/Quicksand-Medium.ttf"),
                q_regular: require("./../assets/fonts/quicksand/Quicksand-Regular.ttf"),
                q_semibold: require("./../assets/fonts/quicksand/Quicksand-SemiBold.ttf"),
              });

        if (!fontsLoaded) {
           return <AppLoading />;
              } else {
                return (
                  <Text
                    style={{ 
                        color: color,
                        fontFamily: font,
                        fontSize: sizeText,
                        textAlign: textalign,
                        marginLeft: marginLeft
                }}
                  >
                    {text}
                  </Text>
                );
              }

}