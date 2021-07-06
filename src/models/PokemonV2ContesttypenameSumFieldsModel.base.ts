/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ContesttypenameSumFieldsBase
 * auto generated base class for the model PokemonV2ContesttypenameSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2ContesttypenameSumFieldsModelBase = ModelBase
  .named('PokemonV2ContesttypenameSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_contesttypename_sum_fields"), "pokemon_v2_contesttypename_sum_fields"),
    contest_type_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ContesttypenameSumFieldsModelSelector extends QueryBuilder {
  get contest_type_id() { return this.__attr(`contest_type_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2ContesttypenameSumFields() {
  return new PokemonV2ContesttypenameSumFieldsModelSelector()
}

export const pokemonV2ContesttypenameSumFieldsModelPrimitives = selectFromPokemonV2ContesttypenameSumFields().contest_type_id.language_id
