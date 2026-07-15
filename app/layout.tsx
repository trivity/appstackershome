import type {Metadata} from "next";
import {Geist,Geist_Mono} from "next/font/google";
import "./globals.css";
const sans=Geist({variable:"--sans",subsets:["latin"],display:"swap"});const mono=Geist_Mono({variable:"--mono",subsets:["latin"],display:"swap"});
export const metadata:Metadata={metadataBase:new URL("https://appstackers.com"),title:{default:"Appstackers | AI Products Built to Matter",template:"%s | Appstackers"},description:"AI product strategy, custom AI development, and product engineering for ambitious companies.",keywords:["AI development company","custom AI software","AI product development","AI agents"],openGraph:{title:"Appstackers | We ship the future",description:"AI strategy, design, and engineering from a team that builds its own successful software.",type:"website",url:"/",siteName:"Appstackers",images:[{url:"/og.png",width:1728,height:910,alt:"Appstackers — We ship the future"}]},twitter:{card:"summary_large_image",title:"Appstackers | We ship the future",description:"AI products built for the real world.",images:["/og.png"]},alternates:{canonical:"/"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body className={sans.variable+" "+mono.variable}>{children}</body></html>}

