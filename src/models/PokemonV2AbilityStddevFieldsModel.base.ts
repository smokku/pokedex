/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2AbilityStddevFieldsBase
 * auto generated base class for the model PokemonV2AbilityStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const PokemonV2AbilityStddevFieldsModelBase = ModelBase
  .named('PokemonV2AbilityStddevFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_ability_stddev_fields"), "pokemon_v2_ability_stddev_fields"),
    generation_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2AbilityStddevFieldsModelSelector extends QueryBuilder {
  get generation_id() { return this.__attr(`generation_id`) }
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2AbilityStddevFields() {
  return new PokemonV2AbilityStddevFieldsModelSelector()
}

export const pokemonV2AbilityStddevFieldsModelPrimitives = selectFromPokemonV2AbilityStddevFields().generation_id
