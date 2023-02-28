import ThemeSwitcher from './components/ThemeSwitcher'
import ThemeColorSwitcher from './components/ThemeColorSwitcher'
import Calculator from './components/Calculator'
import FAQ from './components/FAQ'

function App() {
  return (
    <main className="bg-white dark:bg-black relative">
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-0">
          {/* //TODO: Theme Switcher */}
          <ThemeSwitcher />

          <div className="mx-auto max-w-2xl sm:text-center">
            {/* //TODO: Theme Color Switcher */}
            <ThemeColorSwitcher />

            <h2 className="text-3xl dont-bold tracking-tight text-brand sm:text-4xl text-center">
              Profit Margin Calculator
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-white text-center">
              Optimize your menu item prices to maximize profits by identifying
              the most effective selling prices.
            </p>
          </div>

          {/* //TODO: calculator */}
          <Calculator />
        </div>
      </div>

      <FAQ />
    </main>
  )
}

export default App
