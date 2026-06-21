import ServicoDePagamento from '../src/ServicoDePagamento.js';
import assert from 'node:assert';

describe("Testes da classe realizarPagamento", function () {

  it("1) Validar que a categoria de um pagamento menor que R$100,00 é classificada como 'padrão'.", function () {
    //Arrange (Criar constantes com crendecias e mensagens esperadas)
    const servicoDePagamento = new ServicoDePagamento();

    //Act (Interagir com a aplicação fazendo o pagamento)
    servicoDePagamento.pagar('0123-4567-8910', 'RGE', 99.87);
    const resultado = servicoDePagamento.consultarUltimoPagamento();

    //Assert (Validar que o teste passou)
    assert.equal(resultado.categoria, "padrão");
  });

  it("2) Validar que a categoria de um pagamento maior que R$100,00 é classificada como 'cara'.", function () {
    //Arrange (Criar constantes com crendecias e mensagens esperadas)
    const servicoDePagamento = new ServicoDePagamento();

    //Act (Interagir com a aplicação fazendo o pagamento)
    servicoDePagamento.pagar('0123-4567-8910', 'CORSAN', 100.01);
    const resultado = servicoDePagamento.consultarUltimoPagamento();

    //Assert (Validar que o teste passou)
    assert.equal(resultado.categoria, "cara");
  });

  it("3) Validar que uma lista de pagamentos vazia retorna 'null'.", function () {
    //Arrange (Criar constantes com crendecias e mensagens esperadas)
    const servicoDePagamento = new ServicoDePagamento();

    //Act (Interagir com a aplicação fazendo o pagamento)
    const resultado = servicoDePagamento.consultarUltimoPagamento();

    //Assert (Validar que o teste passou)
    assert.strictEqual(resultado, null);
  });

  it("4) Validar que um pagamento é inserido por completo na lista de pagamentos corretamente.", function () {
    //Arrange (Criar constantes com crendecias e mensagens esperadas)
    const servicoDePagamento = new ServicoDePagamento();

    //Act (Interagir com a aplicação fazendo o pagamento)
    servicoDePagamento.pagar('0123-4567-8910', 'NETFLIX', 51);
    const resultado = servicoDePagamento.consultarUltimoPagamento();

    //Assert (Validar que o teste passou)
    assert.equal(resultado.codigoBarras, '0123-4567-8910');
    assert.equal(resultado.empresa, 'NETFLIX');
    assert.equal(resultado.valor, 51);
    assert.equal(resultado.categoria, 'padrão');
  });

  

});