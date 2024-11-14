import UserRegistrForm from '../../components/UserRegistrForm/UserRegistrForm'
import css from './RegistrationPage.module.css'

const RegistrationPage = () => {
  return (
    <div className={css.registrationPageCont} >

     <UserRegistrForm/> 
      </div>
  )
}

export default RegistrationPage