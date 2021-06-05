import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string, 
    colors: {
      primary: string,
      secondary: string,
      inputBackgroundColor: string,
      text: string,
      inputTextColor: string, 
      inputPlaceholderTextColor: string,
      headerTextColor: string,
      doneMarkerColor: string,
      doneText: string,
      markerBorder: string,
      taskText: string,
      doneButtonColor: string,
    }
  }
}