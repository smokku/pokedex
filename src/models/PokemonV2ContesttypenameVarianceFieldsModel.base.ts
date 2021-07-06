/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ContesttypenameVarianceFieldsBase
 * auto generated base class for the model PokemonV2ContesttypenameVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const PokemonV2ContesttypenameVarianceFieldsModelBase = ModelBase
  .named('PokemonV2ContesttypenameVarianceFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_contesttypename_variance_fields"), "pokemon_v2_contesttypename_variance_fields"),
    contest_type_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ContesttypenameVarianceFieldsModelSelector extends QueryBuilder {
  get contest_type_id() { return this.__attr(`contest_type_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2ContesttypenameVarianceFields() {
  return new PokemonV2ContesttypenameVarianceFieldsModelSelector()
}

export const pokemonV2ContesttypenameVarianceFieldsModelPrimitives = selectFromPokemonV2ContesttypenameVarianceFields().contest_type_id.language_id
