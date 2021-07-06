/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2AbilityeffecttextStddevPopFieldsBase
 * auto generated base class for the model PokemonV2AbilityeffecttextStddevPopFieldsModel.
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2AbilityeffecttextStddevPopFieldsModelBase = ModelBase
  .named('PokemonV2AbilityeffecttextStddevPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_abilityeffecttext_stddev_pop_fields"), "pokemon_v2_abilityeffecttext_stddev_pop_fields"),
    ability_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2AbilityeffecttextStddevPopFieldsModelSelector extends QueryBuilder {
  get ability_id() { return this.__attr(`ability_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2AbilityeffecttextStddevPopFields() {
  return new PokemonV2AbilityeffecttextStddevPopFieldsModelSelector()
}

export const pokemonV2AbilityeffecttextStddevPopFieldsModelPrimitives = selectFromPokemonV2AbilityeffecttextStddevPopFields().ability_id.language_id
