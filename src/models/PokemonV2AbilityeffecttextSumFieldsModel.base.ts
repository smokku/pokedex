/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2AbilityeffecttextSumFieldsBase
 * auto generated base class for the model PokemonV2AbilityeffecttextSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2AbilityeffecttextSumFieldsModelBase = ModelBase
  .named('PokemonV2AbilityeffecttextSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_abilityeffecttext_sum_fields"), "pokemon_v2_abilityeffecttext_sum_fields"),
    ability_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2AbilityeffecttextSumFieldsModelSelector extends QueryBuilder {
  get ability_id() { return this.__attr(`ability_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2AbilityeffecttextSumFields() {
  return new PokemonV2AbilityeffecttextSumFieldsModelSelector()
}

export const pokemonV2AbilityeffecttextSumFieldsModelPrimitives = selectFromPokemonV2AbilityeffecttextSumFields().ability_id.language_id
