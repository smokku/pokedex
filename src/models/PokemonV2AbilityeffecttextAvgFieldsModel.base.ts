/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2AbilityeffecttextAvgFieldsBase
 * auto generated base class for the model PokemonV2AbilityeffecttextAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2AbilityeffecttextAvgFieldsModelBase = ModelBase
  .named('PokemonV2AbilityeffecttextAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_abilityeffecttext_avg_fields"), "pokemon_v2_abilityeffecttext_avg_fields"),
    ability_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2AbilityeffecttextAvgFieldsModelSelector extends QueryBuilder {
  get ability_id() { return this.__attr(`ability_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2AbilityeffecttextAvgFields() {
  return new PokemonV2AbilityeffecttextAvgFieldsModelSelector()
}

export const pokemonV2AbilityeffecttextAvgFieldsModelPrimitives = selectFromPokemonV2AbilityeffecttextAvgFields().ability_id.language_id
