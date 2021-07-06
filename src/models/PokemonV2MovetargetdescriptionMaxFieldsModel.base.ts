/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovetargetdescriptionMaxFieldsBase
 * auto generated base class for the model PokemonV2MovetargetdescriptionMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2MovetargetdescriptionMaxFieldsModelBase = ModelBase
  .named('PokemonV2MovetargetdescriptionMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movetargetdescription_max_fields"), "pokemon_v2_movetargetdescription_max_fields"),
    description: types.union(types.undefined, types.null, types.string),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    move_target_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovetargetdescriptionMaxFieldsModelSelector extends QueryBuilder {
  get description() { return this.__attr(`description`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_target_id() { return this.__attr(`move_target_id`) }
}
export function selectFromPokemonV2MovetargetdescriptionMaxFields() {
  return new PokemonV2MovetargetdescriptionMaxFieldsModelSelector()
}

export const pokemonV2MovetargetdescriptionMaxFieldsModelPrimitives = selectFromPokemonV2MovetargetdescriptionMaxFields().description.language_id.move_target_id
