/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2BerryfirmnessnameAvgFieldsBase
 * auto generated base class for the model PokemonV2BerryfirmnessnameAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2BerryfirmnessnameAvgFieldsModelBase = ModelBase
  .named('PokemonV2BerryfirmnessnameAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_berryfirmnessname_avg_fields"), "pokemon_v2_berryfirmnessname_avg_fields"),
    berry_firmness_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2BerryfirmnessnameAvgFieldsModelSelector extends QueryBuilder {
  get berry_firmness_id() { return this.__attr(`berry_firmness_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2BerryfirmnessnameAvgFields() {
  return new PokemonV2BerryfirmnessnameAvgFieldsModelSelector()
}

export const pokemonV2BerryfirmnessnameAvgFieldsModelPrimitives = selectFromPokemonV2BerryfirmnessnameAvgFields().berry_firmness_id.language_id
