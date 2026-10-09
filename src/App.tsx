import { useState, type ChangeEvent, type FormEvent } from 'react'
import './App.css'

type SettingsFormData = {
  displayName: string
  email: string
  timezone: string
  language: string
  theme: string
  weeklyDigest: boolean
  productAlerts: boolean
  twoFactor: boolean
}

const initialFormData: SettingsFormData = {
  displayName: 'Ava Thompson',
  email: 'ava@flyrank.ai',
  timezone: 'UTC-05:00',
  language: 'English (US)',
  theme: 'Dark',
  weeklyDigest: true,
  productAlerts: true,
  twoFactor: false,
}

function App() {
  const [formData, setFormData] = useState<SettingsFormData>(initialFormData)
  const [savedAt, setSavedAt] = useState('')

  const handleFieldChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target
    const key = name as keyof SettingsFormData

    setFormData((previous) => ({
      ...previous,
      [key]: value,
    }))
  }

  const handleToggleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target
    const key = name as keyof SettingsFormData

    setFormData((previous) => ({
      ...previous,
      [key]: checked,
    }))
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    setSavedAt(new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }))
  }

  return (
    <div className="settings-shell">
      <aside className="settings-sidebar" aria-label="Settings sections">
        <div className="brand-block">
          <div className="brand-mark">F</div>
          <div>
            <p className="eyebrow">Workspace</p>
            <strong>FlyRank</strong>
          </div>
        </div>

        <nav className="side-nav">
          <button type="button" className="nav-item active">
            Profile
          </button>
          <button type="button" className="nav-item">
            Appearance
          </button>
          <button type="button" className="nav-item">
            Notifications
          </button>
          <button type="button" className="nav-item">
            Security
          </button>
        </nav>
      </aside>

      <main className="settings-panel">
        <header className="panel-header">
          <div>
            <p className="eyebrow">Account preferences</p>
            <h1>Settings</h1>
          </div>
          <div className="status-pill" aria-live="polite">
            {savedAt ? `Saved at ${savedAt}` : 'Unsaved changes'}
          </div>
        </header>

        <form className="settings-form" onSubmit={handleSubmit}>
          <section className="form-section">
            <div className="section-heading">
              <h2>Profile</h2>
              <p>Manage the details people see when they interact with your account.</p>
            </div>

            <div className="field-grid">
              <div className="field-group">
                <label htmlFor="displayName">Display name</label>
                <input
                  id="displayName"
                  name="displayName"
                  type="text"
                  value={formData.displayName}
                  onChange={handleFieldChange}
                />
              </div>

              <div className="field-group">
                <label htmlFor="email">Email address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleFieldChange}
                />
              </div>
            </div>
          </section>

          <section className="form-section">
            <div className="section-heading">
              <h2>Preferences</h2>
              <p>Customize the environment to fit your workflow and location.</p>
            </div>

            <div className="field-grid">
              <div className="field-group">
                <label htmlFor="timezone">Time zone</label>
                <select
                  id="timezone"
                  name="timezone"
                  value={formData.timezone}
                  onChange={handleFieldChange}
                >
                  <option value="UTC-08:00">Pacific Time (UTC-08:00)</option>
                  <option value="UTC-05:00">Eastern Time (UTC-05:00)</option>
                  <option value="UTC+00:00">Greenwich Mean Time (UTC+00:00)</option>
                  <option value="UTC+01:00">Central European Time (UTC+01:00)</option>
                </select>
              </div>

              <div className="field-group">
                <label htmlFor="language">Language</label>
                <select
                  id="language"
                  name="language"
                  value={formData.language}
                  onChange={handleFieldChange}
                >
                  <option value="English (US)">English (US)</option>
                  <option value="English (UK)">English (UK)</option>
                  <option value="Spanish">Spanish</option>
                  <option value="French">French</option>
                </select>
              </div>

              <div className="field-group">
                <label htmlFor="theme">Theme</label>
                <select
                  id="theme"
                  name="theme"
                  value={formData.theme}
                  onChange={handleFieldChange}
                >
                  <option value="Dark">Dark</option>
                  <option value="Light">Light</option>
                  <option value="System">System default</option>
                </select>
              </div>
            </div>
          </section>

          <section className="form-section">
            <div className="section-heading">
              <h2>Notifications</h2>
              <p>Choose which updates keep you informed without overwhelming your inbox.</p>
            </div>

            <div className="toggle-list">
              <label className="toggle-row" htmlFor="weeklyDigest">
                <div>
                  <strong>Weekly digest</strong>
                  <span>Receive a summary of key activity every Friday.</span>
                </div>
                <span className="switch">
                  <input
                    id="weeklyDigest"
                    name="weeklyDigest"
                    type="checkbox"
                    checked={formData.weeklyDigest}
                    onChange={handleToggleChange}
                  />
                  <span className="slider" aria-hidden="true" />
                </span>
              </label>

              <label className="toggle-row" htmlFor="productAlerts">
                <div>
                  <strong>Product alerts</strong>
                  <span>Get important updates about launches and feature changes.</span>
                </div>
                <span className="switch">
                  <input
                    id="productAlerts"
                    name="productAlerts"
                    type="checkbox"
                    checked={formData.productAlerts}
                    onChange={handleToggleChange}
                  />
                  <span className="slider" aria-hidden="true" />
                </span>
              </label>
            </div>
          </section>

          <section className="form-section">
            <div className="section-heading">
              <h2>Security</h2>
              <p>Keep your workspace protected with stronger sign-in controls.</p>
            </div>

            <label className="toggle-row" htmlFor="twoFactor">
              <div>
                <strong>Two-factor authentication</strong>
                <span>Require a second step when signing in from a new device.</span>
              </div>
              <span className="switch">
                <input
                  id="twoFactor"
                  name="twoFactor"
                  type="checkbox"
                  checked={formData.twoFactor}
                  onChange={handleToggleChange}
                />
                <span className="slider" aria-hidden="true" />
              </span>
            </label>
          </section>

          <div className="form-actions">
            <button type="button" className="secondary-button">
              Cancel
            </button>
            <button type="submit" className="primary-button">
              Save changes
            </button>
          </div>
        </form>
      </main>
    </div>
  )
}

export default App
