import { RegistrationForm } from '@features/auth/RegistrationForm'
import './Registration.css';
export default function RegistrationPage() {
  return (
    <div className='registration'>
      <h1>Registration</h1>
      <RegistrationForm />
    </div>
  )
}