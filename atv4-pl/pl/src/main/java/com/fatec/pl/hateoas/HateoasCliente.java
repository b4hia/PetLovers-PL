package com.fatec.pl.hateoas;

import java.util.List;

import org.springframework.hateoas.Link;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.stereotype.Component;

import com.fatec.pl.controle.ControleCliente;
import com.fatec.pl.modelo.Cliente;

@Component
public class HateoasCliente implements Hateoas<Cliente> {

	@Override
	public void adicionarLink(List<Cliente> lista) {
		for (Cliente cliente : lista) {
			long id = cliente.getId();
			Link linkProprio = WebMvcLinkBuilder
					.linkTo(WebMvcLinkBuilder.methodOn(ControleCliente.class).obterCliente(id)).withSelfRel();
			cliente.add(linkProprio);
		}
	}

	@Override
	public void adicionarLink(Cliente objeto) {
		Link linkProprio = WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(ControleCliente.class).obterClientes())
				.withRel("clientes");
		objeto.add(linkProprio);

	}
}