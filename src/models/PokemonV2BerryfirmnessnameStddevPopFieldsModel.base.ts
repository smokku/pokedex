/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2BerryfirmnessnameStddevPopFieldsBase
 * auto generated base class for the model PokemonV2BerryfirmnessnameStddevPopFieldsModel.
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2BerryfirmnessnameStddevPopFieldsModelBase = ModelBase
  .named('PokemonV2BerryfirmnessnameStddevPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_berryfirmnessname_stddev_pop_fields"), "pokemon_v2_berryfirmnessname_stddev_pop_fields"),
    berry_firmness_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2BerryfirmnessnameStddevPopFieldsModelSelector extends QueryBuilder {
  get berry_firmness_id() { return this.__attr(`berry_firmness_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2BerryfirmnessnameStddevPopFields() {
  return new PokemonV2BerryfirmnessnameStddevPopFieldsModelSelector()
}

export const pokemonV2BerryfirmnessnameStddevPopFieldsModelPrimitives = selectFromPokemonV2BerryfirmnessnameStddevPopFields().berry_firmness_id.language_id
