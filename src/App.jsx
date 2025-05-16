import { BottomNav } from "./navs/BottomNav";
import { MiddleNav } from "./navs/MiddleNav";
import { TopNav } from "./navs/TopNav";
import { Home } from "./components/Home";
import {AdmissionProcess} from './footer/AdmProcess'

export function App() {
  return(
    <>
     <TopNav />
     <MiddleNav />
     <BottomNav />
     <Home />
     <AdmissionProcess />
    </>
  )
}