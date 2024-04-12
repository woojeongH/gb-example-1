import Header from "@views/Organisms/Header"
import Footer from "@/Presentations/Organisms/Footer";
import Aside from "@views/Organisms/Aside";

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({children}: LayoutProps) => {
  return <div id="container" role="document">
      <Header />
      <main>{children}</main>
      <Aside />
      <Footer />
  </div>
}

export default Layout;