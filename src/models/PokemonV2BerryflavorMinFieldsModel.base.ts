/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2BerryflavorMinFieldsBase
 * auto generated base class for the model PokemonV2BerryflavorMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2BerryflavorMinFieldsModelBase = ModelBase
  .named('PokemonV2BerryflavorMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_berryflavor_min_fields"), "pokemon_v2_berryflavor_min_fields"),
    contest_type_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2BerryflavorMinFieldsModelSelector extends QueryBuilder {
  get contest_type_id() { return this.__attr(`contest_type_id`) }
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromPokemonV2BerryflavorMinFields() {
  return new PokemonV2BerryflavorMinFieldsModelSelector()
}

export const pokemonV2BerryflavorMinFieldsModelPrimitives = selectFromPokemonV2BerryflavorMinFields().contest_type_id.name
