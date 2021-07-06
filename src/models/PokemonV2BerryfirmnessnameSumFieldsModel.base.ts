/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2BerryfirmnessnameSumFieldsBase
 * auto generated base class for the model PokemonV2BerryfirmnessnameSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2BerryfirmnessnameSumFieldsModelBase = ModelBase
  .named('PokemonV2BerryfirmnessnameSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_berryfirmnessname_sum_fields"), "pokemon_v2_berryfirmnessname_sum_fields"),
    berry_firmness_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2BerryfirmnessnameSumFieldsModelSelector extends QueryBuilder {
  get berry_firmness_id() { return this.__attr(`berry_firmness_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2BerryfirmnessnameSumFields() {
  return new PokemonV2BerryfirmnessnameSumFieldsModelSelector()
}

export const pokemonV2BerryfirmnessnameSumFieldsModelPrimitives = selectFromPokemonV2BerryfirmnessnameSumFields().berry_firmness_id.language_id
