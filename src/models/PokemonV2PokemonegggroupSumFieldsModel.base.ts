/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonegggroupSumFieldsBase
 * auto generated base class for the model PokemonV2PokemonegggroupSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2PokemonegggroupSumFieldsModelBase = ModelBase
  .named('PokemonV2PokemonegggroupSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonegggroup_sum_fields"), "pokemon_v2_pokemonegggroup_sum_fields"),
    egg_group_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    pokemon_species_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonegggroupSumFieldsModelSelector extends QueryBuilder {
  get egg_group_id() { return this.__attr(`egg_group_id`) }
  get id() { return this.__attr(`id`) }
  get pokemon_species_id() { return this.__attr(`pokemon_species_id`) }
}
export function selectFromPokemonV2PokemonegggroupSumFields() {
  return new PokemonV2PokemonegggroupSumFieldsModelSelector()
}

export const pokemonV2PokemonegggroupSumFieldsModelPrimitives = selectFromPokemonV2PokemonegggroupSumFields().egg_group_id.pokemon_species_id
