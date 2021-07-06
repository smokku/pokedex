/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ContesttypenameMaxFieldsBase
 * auto generated base class for the model PokemonV2ContesttypenameMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2ContesttypenameMaxFieldsModelBase = ModelBase
  .named('PokemonV2ContesttypenameMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_contesttypename_max_fields"), "pokemon_v2_contesttypename_max_fields"),
    color: types.union(types.undefined, types.null, types.string),
    contest_type_id: types.union(types.undefined, types.null, types.integer),
    flavor: types.union(types.undefined, types.null, types.string),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ContesttypenameMaxFieldsModelSelector extends QueryBuilder {
  get color() { return this.__attr(`color`) }
  get contest_type_id() { return this.__attr(`contest_type_id`) }
  get flavor() { return this.__attr(`flavor`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromPokemonV2ContesttypenameMaxFields() {
  return new PokemonV2ContesttypenameMaxFieldsModelSelector()
}

export const pokemonV2ContesttypenameMaxFieldsModelPrimitives = selectFromPokemonV2ContesttypenameMaxFields().color.contest_type_id.flavor.language_id.name
