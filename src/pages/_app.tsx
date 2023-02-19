import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
     <MantineProvider
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
          colors : {
            'secondary-ocean-blue' : ['#253653'],
            'off-white' : ['#eff4f6']
          }
        }}>
          <Component {...pageProps} />
      </MantineProvider>
  </>
  )
 
 
}
