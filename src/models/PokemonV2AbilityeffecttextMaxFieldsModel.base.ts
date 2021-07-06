/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2AbilityeffecttextMaxFieldsBase
 * auto generated base class for the model PokemonV2AbilityeffecttextMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2AbilityeffecttextMaxFieldsModelBase = ModelBase
  .named('PokemonV2AbilityeffecttextMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_abilityeffecttext_max_fields"), "pokemon_v2_abilityeffecttext_max_fields"),
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

export class PokemonV2AbilityeffecttextMaxFieldsModelSelector extends QueryBuilder {
  get ability_id() { return this.__attr(`ability_id`) }
  get effect() { return this.__attr(`effect`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get short_effect() { return this.__attr(`short_effect`) }
}
export function selectFromPokemonV2AbilityeffecttextMaxFields() {
  return new PokemonV2AbilityeffecttextMaxFieldsModelSelector()
}

export const pokemonV2AbilityeffecttextMaxFieldsModelPrimitives = selectFromPokemonV2AbilityeffecttextMaxFields().ability_id.effect.language_id.short_effect
