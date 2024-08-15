import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header>
      <div className="container">
        <h2>Where in the world?</h2>
        <ThemeToggle />
      </div>
    </header>
  )
}