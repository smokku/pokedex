/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2BerryflavorMaxFieldsBase
 * auto generated base class for the model PokemonV2BerryflavorMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2BerryflavorMaxFieldsModelBase = ModelBase
  .named('PokemonV2BerryflavorMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_berryflavor_max_fields"), "pokemon_v2_berryflavor_max_fields"),
    contest_type_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2BerryflavorMaxFieldsModelSelector extends QueryBuilder {
  get contest_type_id() { return this.__attr(`contest_type_id`) }
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromPokemonV2BerryflavorMaxFields() {
  return new PokemonV2BerryflavorMaxFieldsModelSelector()
}

export const pokemonV2BerryflavorMaxFieldsModelPrimitives = selectFromPokemonV2BerryflavorMaxFields().contest_type_id.name
