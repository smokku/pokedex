/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2BerryflavorStddevFieldsBase
 * auto generated base class for the model PokemonV2BerryflavorStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const PokemonV2BerryflavorStddevFieldsModelBase = ModelBase
  .named('PokemonV2BerryflavorStddevFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_berryflavor_stddev_fields"), "pokemon_v2_berryflavor_stddev_fields"),
    contest_type_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2BerryflavorStddevFieldsModelSelector extends QueryBuilder {
  get contest_type_id() { return this.__attr(`contest_type_id`) }
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2BerryflavorStddevFields() {
  return new PokemonV2BerryflavorStddevFieldsModelSelector()
}

export const pokemonV2BerryflavorStddevFieldsModelPrimitives = selectFromPokemonV2BerryflavorStddevFields().contest_type_id
