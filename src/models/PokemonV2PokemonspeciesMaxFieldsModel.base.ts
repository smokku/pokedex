/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonspeciesMaxFieldsBase
 * auto generated base class for the model PokemonV2PokemonspeciesMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2PokemonspeciesMaxFieldsModelBase = ModelBase
  .named('PokemonV2PokemonspeciesMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonspecies_max_fields"), "pokemon_v2_pokemonspecies_max_fields"),
    base_happiness: types.union(types.undefined, types.null, types.integer),
    capture_rate: types.union(types.undefined, types.null, types.integer),
    evolution_chain_id: types.union(types.undefined, types.null, types.integer),
    evolves_from_species_id: types.union(types.undefined, types.null, types.integer),
    gender_rate: types.union(types.undefined, types.null, types.integer),
    generation_id: types.union(types.undefined, types.null, types.integer),
    growth_rate_id: types.union(types.undefined, types.null, types.integer),
    hatch_counter: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
    order: types.union(types.undefined, types.null, types.integer),
    pokemon_color_id: types.union(types.undefined, types.null, types.integer),
    pokemon_habitat_id: types.union(types.undefined, types.null, types.integer),
    pokemon_shape_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonspeciesMaxFieldsModelSelector extends QueryBuilder {
  get base_happiness() { return this.__attr(`base_happiness`) }
  get capture_rate() { return this.__attr(`capture_rate`) }
  get evolution_chain_id() { return this.__attr(`evolution_chain_id`) }
  get evolves_from_species_id() { return this.__attr(`evolves_from_species_id`) }
  get gender_rate() { return this.__attr(`gender_rate`) }
  get generation_id() { return this.__attr(`generation_id`) }
  get growth_rate_id() { return this.__attr(`growth_rate_id`) }
  get hatch_counter() { return this.__attr(`hatch_counter`) }
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
  get order() { return this.__attr(`order`) }
  get pokemon_color_id() { return this.__attr(`pokemon_color_id`) }
  get pokemon_habitat_id() { return this.__attr(`pokemon_habitat_id`) }
  get pokemon_shape_id() { return this.__attr(`pokemon_shape_id`) }
}
export function selectFromPokemonV2PokemonspeciesMaxFields() {
  return new PokemonV2PokemonspeciesMaxFieldsModelSelector()
}

export const pokemonV2PokemonspeciesMaxFieldsModelPrimitives = selectFromPokemonV2PokemonspeciesMaxFields().base_happiness.capture_rate.evolution_chain_id.evolves_from_species_id.gender_rate.generation_id.growth_rate_id.hatch_counter.name.order.pokemon_color_id.pokemon_habitat_id.pokemon_shape_id
