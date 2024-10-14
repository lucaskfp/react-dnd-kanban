import { IconCamper, IconParking, IconDragDrop, IconSend, IconHelp, IconSettings } from "@tabler/icons-react"

export function Sidebar() {

    return (
        <nav>
            <div className='flex flex-col gap-10 py-6 border-r h-full overflow-y-auto'>
                <SidebarItem>
                    <IconCamper />
                </SidebarItem>

                <SidebarItem>
                    <IconParking />
                </SidebarItem>

                <SidebarItem active>
                    <IconDragDrop />
                </SidebarItem>

                <SidebarItem>
                    <IconSend />
                </SidebarItem>

                <div className='mt-auto'>
                    <SidebarItem>
                        <IconHelp />
                    </SidebarItem>
                </div>
                <SidebarItem>
                    <IconSettings />
                </SidebarItem>
            </div>
        </nav>
    )
}

function SidebarItem(props: { children: React.ReactNode, active?: boolean }) {
    return (
        <div className={`px-4 cursor-pointer hover:text-primary transition-all ${props.active && 'border-l-4 border-primary text-primary'}`}>
            {props.children}
        </div>
    )
}