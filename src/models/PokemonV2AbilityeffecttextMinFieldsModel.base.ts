/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2AbilityeffecttextMinFieldsBase
 * auto generated base class for the model PokemonV2AbilityeffecttextMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2AbilityeffecttextMinFieldsModelBase = ModelBase
  .named('PokemonV2AbilityeffecttextMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_abilityeffecttext_min_fields"), "pokemon_v2_abilityeffecttext_min_fields"),
    ability_id: types.union(types.undefined, types.null, types.integer),
    effect: types.union(types.undefined, types.null, types.string),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    short_effect: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2AbilityeffecttextMinFieldsModelSelector extends QueryBuilder {
  get ability_id() { return this.__attr(`ability_id`) }
  get effect() { return this.__attr(`effect`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get short_effect() { return this.__attr(`short_effect`) }
}
export function selectFromPokemonV2AbilityeffecttextMinFields() {
  return new PokemonV2AbilityeffecttextMinFieldsModelSelector()
}

export const pokemonV2AbilityeffecttextMinFieldsModelPrimitives = selectFromPokemonV2AbilityeffecttextMinFields().ability_id.effect.language_id.short_effect
