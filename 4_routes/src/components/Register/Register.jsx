// COMPONENTE 3. Formulario de registro de usuario

function Register() {
    return (
        <div>

            <form action=''>
                <label htmlFor='email'>Email</label>
                <input type="text" id='email' name='email' />
                <label htmlFor='pass'>Contraseña</label>
                <input type='password' name='pass' id='pass' />
                <button>Registrar</button>

            </form>
        </div>
    )
}

export default Register