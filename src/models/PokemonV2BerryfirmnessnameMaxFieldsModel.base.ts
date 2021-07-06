/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2BerryfirmnessnameMaxFieldsBase
 * auto generated base class for the model PokemonV2BerryfirmnessnameMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2BerryfirmnessnameMaxFieldsModelBase = ModelBase
  .named('PokemonV2BerryfirmnessnameMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_berryfirmnessname_max_fields"), "pokemon_v2_berryfirmnessname_max_fields"),
    berry_firmness_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2BerryfirmnessnameMaxFieldsModelSelector extends QueryBuilder {
  get berry_firmness_id() { return this.__attr(`berry_firmness_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromPokemonV2BerryfirmnessnameMaxFields() {
  return new PokemonV2BerryfirmnessnameMaxFieldsModelSelector()
}

export const pokemonV2BerryfirmnessnameMaxFieldsModelPrimitives = selectFromPokemonV2BerryfirmnessnameMaxFields().berry_firmness_id.language_id.name
