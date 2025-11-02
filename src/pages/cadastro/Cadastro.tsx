import Nav from '../../components/navbar/Nav'
import './Cadastro.css'
// implementar com react-hook-form
const Cadastro = () => {
    return (
        <>
            <div>
                <Nav />
                <div className='form-container'>
                    <form>
                        <div className='form-field'>
                            <label>Nome</label>
                            <input  
                                type='text'
                                required      
                            />
                        </div>
                        <div className='form-field'>
                            <label>E-mail</label>
                            <input  
                            type='email'
                            required      
                            />
                        </div>
                        
                        <div className='form-field'>
                            <label>Senha</label>
                            <input  
                            type='password'
                            required      
                            />
                        </div>

                        <button type='submit' className='button-submit'>Cadastrar</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Cadastro