/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonegggroupAvgFieldsBase
 * auto generated base class for the model PokemonV2PokemonegggroupAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2PokemonegggroupAvgFieldsModelBase = ModelBase
  .named('PokemonV2PokemonegggroupAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonegggroup_avg_fields"), "pokemon_v2_pokemonegggroup_avg_fields"),
    egg_group_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    pokemon_species_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonegggroupAvgFieldsModelSelector extends QueryBuilder {
  get egg_group_id() { return this.__attr(`egg_group_id`) }
  get id() { return this.__attr(`id`) }
  get pokemon_species_id() { return this.__attr(`pokemon_species_id`) }
}
export function selectFromPokemonV2PokemonegggroupAvgFields() {
  return new PokemonV2PokemonegggroupAvgFieldsModelSelector()
}

export const pokemonV2PokemonegggroupAvgFieldsModelPrimitives = selectFromPokemonV2PokemonegggroupAvgFields().egg_group_id.pokemon_species_id
