/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2BerryfirmnessnameStddevFieldsBase
 * auto generated base class for the model PokemonV2BerryfirmnessnameStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const PokemonV2BerryfirmnessnameStddevFieldsModelBase = ModelBase
  .named('PokemonV2BerryfirmnessnameStddevFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_berryfirmnessname_stddev_fields"), "pokemon_v2_berryfirmnessname_stddev_fields"),
    berry_firmness_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2BerryfirmnessnameStddevFieldsModelSelector extends QueryBuilder {
  get berry_firmness_id() { return this.__attr(`berry_firmness_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2BerryfirmnessnameStddevFields() {
  return new PokemonV2BerryfirmnessnameStddevFieldsModelSelector()
}

export const pokemonV2BerryfirmnessnameStddevFieldsModelPrimitives = selectFromPokemonV2BerryfirmnessnameStddevFields().berry_firmness_id.language_id
