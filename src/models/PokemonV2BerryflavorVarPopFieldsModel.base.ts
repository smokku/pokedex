/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2BerryflavorVarPopFieldsBase
 * auto generated base class for the model PokemonV2BerryflavorVarPopFieldsModel.
 *
 * aggregate var_pop on columns
 */
export const PokemonV2BerryflavorVarPopFieldsModelBase = ModelBase
  .named('PokemonV2BerryflavorVarPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_berryflavor_var_pop_fields"), "pokemon_v2_berryflavor_var_pop_fields"),
    contest_type_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2BerryflavorVarPopFieldsModelSelector extends QueryBuilder {
  get contest_type_id() { return this.__attr(`contest_type_id`) }
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2BerryflavorVarPopFields() {
  return new PokemonV2BerryflavorVarPopFieldsModelSelector()
}

export const pokemonV2BerryflavorVarPopFieldsModelPrimitives = selectFromPokemonV2BerryflavorVarPopFields().contest_type_id
