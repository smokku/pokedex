/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2AbilitynameAvgFieldsBase
 * auto generated base class for the model PokemonV2AbilitynameAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2AbilitynameAvgFieldsModelBase = ModelBase
  .named('PokemonV2AbilitynameAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_abilityname_avg_fields"), "pokemon_v2_abilityname_avg_fields"),
    ability_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2AbilitynameAvgFieldsModelSelector extends QueryBuilder {
  get ability_id() { return this.__attr(`ability_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2AbilitynameAvgFields() {
  return new PokemonV2AbilitynameAvgFieldsModelSelector()
}

export const pokemonV2AbilitynameAvgFieldsModelPrimitives = selectFromPokemonV2AbilitynameAvgFields().ability_id.language_id
