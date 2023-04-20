import { useBreakpointValue } from "@chakra-ui/react";
import Desktop from "@/components/projects/Desktop";
import Mobile from "@/components/projects/Mobile";

export default function Profile(){
    const isDesktop = useBreakpointValue({ base: false, lg: true });
    return (
       <>
        {isDesktop ? <Desktop /> : <Mobile />}
       </>
    )
}   