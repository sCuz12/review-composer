import React , {useState} from 'react'
import { AppShell, Button, Header, Navbar } from '@mantine/core'
import SideNavbar from '@/components/Layout/SideNavbar'
import Stepone from '@/components/Steps/Stepone'

type Props = {}

export default function generate({ }: Props) {

    const [activePage,setActive] = useState(1)

    const nextStep = () => setActive((current)=> (current < 3 ? current + 1 : current))
    const prevStep = () => setActive((current)=> (current > 0 ? current - 1 : current))

    return (
        <AppShell
            padding="md"
            navbar={<SideNavbar stepNo={activePage} />}
            header={<Header height={60} p="xs"><p>asa</p></Header>}
            styles={(theme) => ({
                main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
            })}
        >
            {/* Your application here */}
            <div className='h-full'>
                <div className='py-10 '>
                    <Stepone/>
                </div>
                <Button color="cyan" radius="md" onClick={nextStep}>Next Step</Button>
            </div>
        </AppShell>
    )
}