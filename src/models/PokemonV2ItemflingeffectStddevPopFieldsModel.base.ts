/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemflingeffectStddevPopFieldsBase
 * auto generated base class for the model PokemonV2ItemflingeffectStddevPopFieldsModel.
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2ItemflingeffectStddevPopFieldsModelBase = ModelBase
  .named('PokemonV2ItemflingeffectStddevPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemflingeffect_stddev_pop_fields"), "pokemon_v2_itemflingeffect_stddev_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemflingeffectStddevPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2ItemflingeffectStddevPopFields() {
  return new PokemonV2ItemflingeffectStddevPopFieldsModelSelector()
}

export const pokemonV2ItemflingeffectStddevPopFieldsModelPrimitives = selectFromPokemonV2ItemflingeffectStddevPopFields()
