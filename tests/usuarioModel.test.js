// Importando dos pacotes
const usuarioModel = require('../models/usuarioModel')

// Estrutura do teste da model
describe("usuarioModel", ()=>{

  // Escrevendo os testes

  //Testando a função criarUsuario()
  test('Deve criar um usuário', () => {
    // Constante com dados fictícios do usuário
    const usuario = usuarioModel.criarUsuario("João", "joao@email.com")
    
    // Funções para valores obtidos e esperados
    expect(usuario.nome).toBe("João")
    expect(usuario.email).toBe("joao@email.com")
  })

    // Testando a função listarUsuarios()
    // test("Deve listar usuários", ()=>{
    //   // Simular usuários já criados
    //   usuarioModel.criarUsuario("Maria", "maria@email.com")
    //   usuarioModel.criarUsuario("José", "jose@email.com")
    //   usuarioModel.criarUsuario("Antonio", "antonio@email.com")

    //   // Constante para listar os usuários criados
    //   const usuarios = usuarioModel.listarUsuarios()

    //   // Funções para valores obtidos e esperados
    //   // OBS: Nesse caso, será a quantidade de usuários
    //   expect(usuarios.length).toBe(19)
    // })

    // Testando a função listarUsuarioPeloId()
    test("Deve listar somente um usuário", ()=>{
      // Criar o usuário
      // const usuario = usuarioModel.criarUsuario("Bernardete", "dete@email.com")
      const usuarios = usuarioModel.listarUsuarios()

      // Listar só o usuário criado
      // acessando o id do usuário já criado
      // const listado = usuarioModel.listarUsuarioPeloId(usuario.id)
      const listado = usuarioModel.listarUsuarioPeloId(usuarios[0].id)

      // Funções para valores obtidos e esperados
      expect(listado).toBeDefined() // Verificar se o usuário foi criado
      expect(listado.nome).toBe("José") 
      expect(listado.email).toBe("jose@email.com") 
      
    })

    // Testando a função listarUsuarioPeloId()
    test("Deve listar somente um usuário", ()=>{
      // Criar o usuário
      // const usuario = usuarioModel.criarUsuario("Bernardete", "dete@email.com")
      const usuarios = usuarioModel.listarUsuarios()

      // Listar só o usuário criado
      // acessando o id do usuário já criado
      // const listado = usuarioModel.listarUsuarioPeloId(usuario.id)
      const listado = usuarioModel.listarUsuarioPeloId(usuarios[0].id)

      // Funções para valores obtidos e esperados
      expect(listado).toBeDefined() // Verificar se o usuário foi criado
      expect(listado.nome).toBe("Maria") 
      expect(listado.email).toBe("maria@email.com") 
      
    })

})


// it("Deve somar dois números", ()=>{
//   expect().toBe()
// })