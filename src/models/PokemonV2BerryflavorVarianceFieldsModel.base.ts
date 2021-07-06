/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2BerryflavorVarianceFieldsBase
 * auto generated base class for the model PokemonV2BerryflavorVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const PokemonV2BerryflavorVarianceFieldsModelBase = ModelBase
  .named('PokemonV2BerryflavorVarianceFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_berryflavor_variance_fields"), "pokemon_v2_berryflavor_variance_fields"),
    contest_type_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2BerryflavorVarianceFieldsModelSelector extends QueryBuilder {
  get contest_type_id() { return this.__attr(`contest_type_id`) }
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2BerryflavorVarianceFields() {
  return new PokemonV2BerryflavorVarianceFieldsModelSelector()
}

export const pokemonV2BerryflavorVarianceFieldsModelPrimitives = selectFromPokemonV2BerryflavorVarianceFields().contest_type_id
