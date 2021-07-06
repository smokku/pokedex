/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2AbilitychangeeffecttextStddevSampFieldsBase
 * auto generated base class for the model PokemonV2AbilitychangeeffecttextStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2AbilitychangeeffecttextStddevSampFieldsModelBase = ModelBase
  .named('PokemonV2AbilitychangeeffecttextStddevSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_abilitychangeeffecttext_stddev_samp_fields"), "pokemon_v2_abilitychangeeffecttext_stddev_samp_fields"),
    ability_change_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2AbilitychangeeffecttextStddevSampFieldsModelSelector extends QueryBuilder {
  get ability_change_id() { return this.__attr(`ability_change_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2AbilitychangeeffecttextStddevSampFields() {
  return new PokemonV2AbilitychangeeffecttextStddevSampFieldsModelSelector()
}

export const pokemonV2AbilitychangeeffecttextStddevSampFieldsModelPrimitives = selectFromPokemonV2AbilitychangeeffecttextStddevSampFields().ability_change_id.language_id
