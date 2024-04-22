import OffcanvasExample from "./Navbar";

export default function Layout({children} : {children : React.ReactNode}) {
  return (
    <div>
        <header>
            <OffcanvasExample />
        </header>
        <main>{children}</main>
        <footer></footer>
    </div>
  )
}
