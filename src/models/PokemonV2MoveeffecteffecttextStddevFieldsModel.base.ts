/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MoveeffecteffecttextStddevFieldsBase
 * auto generated base class for the model PokemonV2MoveeffecteffecttextStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const PokemonV2MoveeffecteffecttextStddevFieldsModelBase = ModelBase
  .named('PokemonV2MoveeffecteffecttextStddevFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_moveeffecteffecttext_stddev_fields"), "pokemon_v2_moveeffecteffecttext_stddev_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    move_effect_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MoveeffecteffecttextStddevFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_effect_id() { return this.__attr(`move_effect_id`) }
}
export function selectFromPokemonV2MoveeffecteffecttextStddevFields() {
  return new PokemonV2MoveeffecteffecttextStddevFieldsModelSelector()
}

export const pokemonV2MoveeffecteffecttextStddevFieldsModelPrimitives = selectFromPokemonV2MoveeffecteffecttextStddevFields().language_id.move_effect_id
