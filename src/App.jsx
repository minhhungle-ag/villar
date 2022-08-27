import { createTheme, CssBaseline, responsiveFontSizes, ThemeProvider } from '@mui/material'
import { Navigate, Route, Routes } from 'react-router-dom'
import NotFound from './components/common/NotFound'
import MainLayout from './components/layout/MainLayout'
import About from './features/About/About'
import Contact from './features/Contact/Contact'
import Home from './features/Home/Home'
import Properties from './features/Properties/Properties'
let theme = createTheme({
  palette: {
    primary: {
      main: '#01654E',
      dark: '#01874E',
      light: '#01614a',
    },

    secondary: {
      main: '#ff6005',
    },
  },
})

theme = responsiveFontSizes(theme)

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Navigate to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="properties" element={<Properties />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </ThemeProvider>
  )
}

export default App
