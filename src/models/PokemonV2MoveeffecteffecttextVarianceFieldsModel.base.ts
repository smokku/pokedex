/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MoveeffecteffecttextVarianceFieldsBase
 * auto generated base class for the model PokemonV2MoveeffecteffecttextVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const PokemonV2MoveeffecteffecttextVarianceFieldsModelBase = ModelBase
  .named('PokemonV2MoveeffecteffecttextVarianceFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_moveeffecteffecttext_variance_fields"), "pokemon_v2_moveeffecteffecttext_variance_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    move_effect_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MoveeffecteffecttextVarianceFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_effect_id() { return this.__attr(`move_effect_id`) }
}
export function selectFromPokemonV2MoveeffecteffecttextVarianceFields() {
  return new PokemonV2MoveeffecteffecttextVarianceFieldsModelSelector()
}

export const pokemonV2MoveeffecteffecttextVarianceFieldsModelPrimitives = selectFromPokemonV2MoveeffecteffecttextVarianceFields().language_id.move_effect_id
