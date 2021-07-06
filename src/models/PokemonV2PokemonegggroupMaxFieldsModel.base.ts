/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonegggroupMaxFieldsBase
 * auto generated base class for the model PokemonV2PokemonegggroupMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2PokemonegggroupMaxFieldsModelBase = ModelBase
  .named('PokemonV2PokemonegggroupMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonegggroup_max_fields"), "pokemon_v2_pokemonegggroup_max_fields"),
    egg_group_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    pokemon_species_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonegggroupMaxFieldsModelSelector extends QueryBuilder {
  get egg_group_id() { return this.__attr(`egg_group_id`) }
  get id() { return this.__attr(`id`) }
  get pokemon_species_id() { return this.__attr(`pokemon_species_id`) }
}
export function selectFromPokemonV2PokemonegggroupMaxFields() {
  return new PokemonV2PokemonegggroupMaxFieldsModelSelector()
}

export const pokemonV2PokemonegggroupMaxFieldsModelPrimitives = selectFromPokemonV2PokemonegggroupMaxFields().egg_group_id.pokemon_species_id
